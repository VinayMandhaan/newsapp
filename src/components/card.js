import { VStack, Box, Divider, Image, Link } from 'native-base';
import { TouchableOpacity } from 'react-native';
import { Colors } from '../constants/styles';


const NewsCard = ({ title, content, source, image, url }) => {
    return (
        <Box border="1" borderRadius="md">
            <VStack space="4" divider={<Divider />}>
                <Box px="4" pt="4">
                    {title}
                </Box>
                {
                    image && (
                        <Box px="4">
                            <Image alignSelf={'center'} resizeMode='contain' borderRadius={20} style={{ height: 250, width: 250 }} alt='' source={{ uri: image }} />
                        </Box>
                    )
                }
                <Box px="4">
                    {`${content?.slice(0,200)}...`}
                </Box>
                <Box px="4" pb="4" borderBottomWidth={1}>
                    {source}
                    <Link href={url} alignSelf={'center'} mt="2">Visit Full Article</Link>
                </Box>
            </VStack>
        </Box>
    )
}


export default NewsCard