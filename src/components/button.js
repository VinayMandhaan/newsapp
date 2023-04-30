import { TouchableOpacity, Text, StyleSheet } from "react-native"
import { Colors } from "../constants/styles"


const Button = ({item, onSelectBtn}) => {
    return (
        <TouchableOpacity onPress={() => {
            onSelectBtn(item?.id)
        }} style={item?.selected ? styles.selectedBtn : styles.btnContainer}>
            <Text style={item?.selected ? styles.selectedLabel : styles.btnLabel}>{item?.label}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btnContainer: {
        backgroundColor:Colors.blackColor, 
        height:40, 
        alignItems:'center', 
        justifyContent:'center', 
        padding:10, 
        borderRadius:20
    },
    btnLabel: {
        color:Colors.primaryColor
    },
    selectedBtn: {
        backgroundColor:Colors.goldColor, 
        height:40, 
        alignItems:'center', 
        justifyContent:'center', 
        padding:10, 
        borderRadius:20
    },
    selectedLabel: {
        color:Colors.primaryColor,
        fontWeight:'bold'
    }
})

export default Button