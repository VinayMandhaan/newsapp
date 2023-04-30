import { useEffect, useState } from "react"
import { View, Text, SafeAreaView, StyleSheet, FlatList, Platform } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import { changeTheme, getNews, selectCategory, selectLanguage } from "../../actions/news"
import { Colors, darkTheme, lightTheme } from "../../constants/styles"
import NewsCard from "../../components/card"
import CustomDropDown from "../../components/dropdown"
import { categoriesData, languageData, themeData } from "../../constants/data"
import Loader from "../../components/loader"
import Button from "../../components/button"
import { Switch } from "native-base"



const Home = () => {
    const dispatch = useDispatch()
    const news = useSelector(state => state.news.news)
    const category = useSelector(state => state.news.selectedCategory)
    const language = useSelector(state => state.news.selectedLanguage)
    const loading = useSelector(state => state.news.loading)
    const theme = useSelector(state => state.news.currentTheme)
    const [categoryData, setCategoryData] = useState(categoriesData)
    const currentTheme = theme == 'light' ? lightTheme : darkTheme




    useEffect(() => {
        dispatch(getNews(category, language))
    }, [])

    const onPressBtn = (id) => {
        var catData = [...categoryData]
        catData.map(val => {
            if (val.id == id) {
                val.selected = !val.selected
            }
        })
        setCategoryData(catData)
        const selectedData = catData.filter(item => item.selected).map(item => item.value).join(" AND ");
        dispatch(selectCategory(selectedData))
    }

    const renderCard = ({ item }) => {
        return (
            <NewsCard title={item?.title} content={item?.content} source={item?.source?.name} image={item?.urlToImage} url={item?.url} />
        )
    }

    const renderButton = ({ item }) => {
        return (
            <View style={styles.btnContainer}>
                <Button item={item} onSelectBtn={(id) => onPressBtn(id)} />
            </View>
        )
    }


    if (loading) {
        return (
            <Loader />
        )
    }
    return (
        <SafeAreaView style={[styles.container, {
            backgroundColor: currentTheme.backgroundColor
        }]}>
            <FlatList
                data={categoryData}
                horizontal
                renderItem={renderButton}
                style={{ marginBottom: 10 }}
            />
            <View style={styles.dropDownContainer}>
                <CustomDropDown data={languageData} action={selectLanguage} placeholder={'Select Language'} selectedValue={language} />
                <CustomDropDown data={themeData} action={changeTheme} placeholder={'Select Language'} selectedValue={theme} />
            </View>
            <FlatList
                data={news?.articles}
                renderItem={renderCard}
                ListEmptyComponent={() => (
                    <View>
                        <Text>No Data Available</Text>
                    </View>
                )}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Platform.OS == 'android' ? 40 : 0
    },
    dropDownContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        margin: 10,
        zIndex: 1
    },
    btnContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        margin: 4,
        flexWrap: 'wrap',
        marginBottom: 10
    }
})

export default Home