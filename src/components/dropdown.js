import { Box, View } from 'native-base';
import { useEffect, useRef, useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import { useDispatch } from 'react-redux';


const CustomDropDown = ({ data, action }) => {
    const dispatch = useDispatch()
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState(data);

    return (
        <View>
            <Box>
                <DropDownPicker
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