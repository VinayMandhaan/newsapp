import { TouchableOpacity, Text } from "react-native"
import { Colors } from "../constants/styles"


const Button = ({item, onSelectBtn}) => {
    return (
        <TouchableOpacity onPress={() => {
            onSelectBtn(item?.id)
        }} style={{backgroundColor:Colors.blackColor, height:40, alignItems:'center', justifyContent:'center', padding:10, borderRadius:20}}>
            <Text style={{color:Colors.primaryColor}}>{item?.label}</Text>
        </TouchableOpacity>
    )
}

export default Button