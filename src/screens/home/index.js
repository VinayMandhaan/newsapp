import { useEffect } from "react"
import { View, Text, SafeAreaView, StyleSheet, FlatList } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import { getNews } from "../../actions/news"
import { Colors } from "../../constants/styles"
import NewsCard from "../../components/card"



const Home = () => {
    const dispatch = useDispatch()
    const news = useSelector(state => state.news.news)
    useEffect(() => {
        dispatch(getNews('bitcoin', 'en'))
    }, [])

    const renderCard = ({ item }) => {
        return (
            <NewsCard title={item?.title} content={item?.content} source={item?.source?.name} image={item?.urlToImage} url={item?.url} />
        )
    }


    return (
        <SafeAreaView style={styles.container}>
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
    }
})

export default Home