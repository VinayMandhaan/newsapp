import { useEffect } from "react"
import { View, Text, SafeAreaView, StyleSheet } from "react-native"
import { useDispatch } from "react-redux"
import { getNews } from "../../actions/news"
import { Colors } from "../../constants/styles"
import NewsCard from "../../components/card"



const Home = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getNews('bitcoin', 'en'))
    },[])


    return (
        <SafeAreaView style={styles.container}>
            <NewsCard/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:Colors.primaryColor
    }
})

export default Home