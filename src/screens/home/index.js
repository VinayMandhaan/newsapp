import { useEffect, useState } from "react"
import { View, Text, SafeAreaView, StyleSheet, FlatList, Platform } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import { getNews, selectCategory, selectLanguage } from "../../actions/news"
import { Colors } from "../../constants/styles"
import NewsCard from "../../components/card"
import CustomDropDown from "../../components/dropdown"
import { categoriesData, languageData } from "../../constants/data"
import Loader from "../../components/loader"
import Button from "../../components/button"



const Home = () => {
    const dispatch = useDispatch()
    const news = useSelector(state => state.news.news)
    const category = useSelector(state => state.news.selectedCategory)
    const language = useSelector(state => state.news.selectedLanguage)
    const loading = useSelector(state => state.news.loading)
    const [categoryData, setCategoryData] = useState(categoriesData)

    useEffect(() => {
        dispatch(getNews(category, language))
    }, [])

    const renderCard = ({ item }) => {
        return (
            <NewsCard title={item?.title} content={item?.content} source={item?.source?.name} image={item?.urlToImage} url={item?.url} />
        )
    }

    const renderButton = ({ item }) => {
        return (
            <View style={styles.btnContainer}>
                <Button item={item} onSelectBtn={(id) => {
                    var catData = [...categoryData]
                    catData.map(val => {
                        if(val.id == id){
                            val.selected = !val.selected
                        }
                    })
                    setCategoryData(catData)
                }} />
            </View>
        )
    }


    if (loading) {
        return (
            <Loader />
        )
    }
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={categoriesData}
                horizontal
                renderItem={renderButton}
                style={{ marginBottom: 10 }}
            />
            <View style={styles.dropDownContainer}>
                <CustomDropDown data={languageData} action={selectLanguage} placeholder={'Select Language'} selectedValue={language} />
            </View>
            <FlatList
                data={news?.articles}
                renderItem={renderCard}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.primaryColor,
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