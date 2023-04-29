import { VStack, Box, Divider, Image } from 'native-base';


const NewsCard = ({ title, content, source, image }) => {
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
                    {content}
                </Box>
                <Box px="4" pb="4">
                    {source}
                </Box>
            </VStack>
        </Box>
    )
}


export default NewsCard