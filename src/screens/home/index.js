import { useEffect } from "react"
import { View, Text, SafeAreaView, StyleSheet, FlatList } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import { getNews, selectCategory, selectLanguage } from "../../actions/news"
import { Colors } from "../../constants/styles"
import NewsCard from "../../components/card"
import CustomDropDown from "../../components/dropdown"
import { categoriesData, languageData } from "../../constants/data"



const Home = () => {
    const dispatch = useDispatch()
    const news = useSelector(state => state.news.news)
    const category = useSelector(state => state.news.selectedCategory)
    const language = useSelector(state => state.news.selectedLanguage)

    useEffect(() => {
        dispatch(getNews(category, language))
    }, [])

    const renderCard = ({ item }) => {
        return (
            <NewsCard title={item?.title} content={item?.content} source={item?.source?.name} image={item?.urlToImage} url={item?.url} />
        )
    }


    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.dropDownContainer}>
                <CustomDropDown data={categoriesData} action={selectCategory} placeholder={'Select Category'} />
                <CustomDropDown data={languageData} action={selectLanguage} placeholder={'Select Language'} />
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
        backgroundColor: Colors.primaryColor
    },
    dropDownContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        margin: 10,
        zIndex: 1
    }
})

export default Home