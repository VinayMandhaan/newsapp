import { VStack, Box, Divider, Image, Link, Text } from 'native-base';
import { TouchableOpacity } from 'react-native';
import { Colors, darkTheme, lightTheme } from '../constants/styles';
import { useSelector } from 'react-redux';


const NewsCard = ({ title, content, source, image, url }) => {
    const theme = useSelector(state => state.news.currentTheme)
    const currentTheme = theme == 'light' ? lightTheme : darkTheme

    return (
        <Box border="1" borderRadius="md">
            <VStack space="4" divider={<Divider />}>
                <Box px="4" pt="4">
                    <Text color={currentTheme.color} fontWeight={'bold'} textAlign={'center'}>{title}</Text>
                </Box>
                {
                    image && (
                        <Box px="4">
                            <Image alignSelf={'center'} resizeMode='contain' borderRadius={20} style={{ height: 250, width: 250 }} alt='' source={{ uri: image }} />
                        </Box>
                    )
                }
                <Box px="4">
                    <Text color={currentTheme.color}>{`${content?.slice(0,200)}...`}</Text>
                </Box>
                <Box px="4" pb="4" borderBottomWidth={1}>
                    <Text color={currentTheme.color}>{source}</Text>
                    <Link href={url} alignSelf={'center'} mt="2"><Text color={currentTheme.color} fontWeight={'bold'} >Visit Full Article</Text></Link>
                </Box>
            </VStack>
        </Box>
    )
}


export default NewsCard