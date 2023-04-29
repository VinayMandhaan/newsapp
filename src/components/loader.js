import { ActivityIndicator, View, StyleSheet } from "react-native"
import { Colors } from "../constants/styles"



const Loader = () => {
    return (
        <View style={styles.container}>
            <ActivityIndicator color={Colors.goldColor} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Loader
