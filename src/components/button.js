import { TouchableOpacity, Text, StyleSheet } from "react-native"
import { Colors, darkTheme, lightTheme } from "../constants/styles"
import { useSelector } from "react-redux"


const Button = ({ item, onSelectBtn }) => {
    const theme = useSelector(state => state.news.currentTheme)
    const currentTheme = theme == 'light' ? lightTheme : darkTheme

    return (
        <TouchableOpacity onPress={() => {
            onSelectBtn(item?.id)
        }} style={[item?.selected ? styles.selectedBtn : styles.btnContainer, {
            backgroundColor: item?.selected ? currentTheme.selectedColor : currentTheme.btnColor
        }]}>
            <Text style={[item?.selected ? styles.selectedLabel : styles.btnLabel, {
                color: currentTheme.btnTxt
            }]}>{item?.label}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btnContainer: {
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        borderRadius: 20
    },
    btnLabel: {
        color: Colors.primaryColor
    },
    selectedBtn: {
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        borderRadius: 20
    },
    selectedLabel: {
        color: Colors.primaryColor,
        fontWeight: 'bold'
    }
})

export default Button