import { useEffect } from "react"
import { View, Text } from "react-native"
import { useDispatch } from "react-redux"
import { getNews } from "../../actions/news"



const Home = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getNews('bitcoin', 'en'))
    },[])


    return (
        <View>
            <Text>Home</Text>
        </View>
    )
}

export default Home