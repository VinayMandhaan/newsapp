import { Box, View } from 'native-base';
import { useEffect, useRef, useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import { useDispatch, useSelector } from 'react-redux';
import { getNews } from '../actions/news';


const CustomDropDown = ({ data, action, placeholder }) => {
    const dispatch = useDispatch()
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState(data);

    return (
        <View>
            <Box>
                <DropDownPicker
                    style={{width: 120, zIndex:99999}}
                    placeholder={placeholder}
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    onSelectItem={(item) => {
                        dispatch(action(item?.value))
                    }}
                    setValue={setValue}
                    setItems={setItems}
                />
            </Box>
        </View>
    )
}


export default CustomDropDown