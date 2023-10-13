import { Box, Button, Center, Flex, Image, Text } from "@chakra-ui/react"
import ArtistImage from "../../assets/Artist-bg-image.png"
import { FormInput, IconButton } from "@/components";
import { RiFilter3Line, RiSearch2Line } from "react-icons/ri";
const ArtistScreen = () => {

    return (
        <Box bg='white' >
            <Box position={'relative'}>

                <Image src={ArtistImage} />
                <Center>

                    <Flex gap={'5'} alignItems={'center'} flexDirection='column' color={'white'} textAlign={'center'} position={'absolute'} bottom={'20'}>
                        <Text fontWeight={'bold'} fontSize={'4xl'}>Artists</Text>
                        <Button w='40' fontSize={'sm'}>Create my song</Button>
                        <Text fontSize={'sm'}>Create a song to celebrate that special occasion, person or event</Text>
                    </Flex>
                </Center>
            </Box>
            <Box p='10'>
                <Flex w={'full'} justifyContent={'center'} alignItems={'center'}>
                    <IconButton display={['none', 'block']} icon={<RiFilter3Line />} />
                    <FormInput w='xl' bgColor='#fff' />
                    <IconButton w='fit-content' icon={<RiSearch2Line />}>Search</IconButton>
                </Flex>
            </Box>
<Box >
<Text textAlign={'center'} fontWeight={'bold'} pb='5'>HOW WE WORK</Text>

            <Flex justifyContent={'center'}  gap='5'>
                <Flex gap='5' p='5' flexDirection={'column'} bg='#E1EEF3'>
                    <Text bg='#00B0F3' color='white' w='fit-content' py='3' px='5' borderRadius={'full'}>1</Text>
                    <Text w='xs' fontSize={'sm'}>Customize your song
                        Select your favorite artist, genre, desired length, mood, and share your unique story.</Text>
                </Flex>
                <Flex  gap='5' p='5' flexDirection={'column'} bg='#E1EEF3'>
                    <Text bg='#00B0F3' color='white' w='fit-content' py='3' px='5' borderRadius={'full'}>2</Text>
                    <Text w='xs' fontSize={'sm'}>Customize your song
                        Select your favorite artist, genre, desired length, mood, and share your unique story.</Text>
                </Flex>
                <Flex  gap='5' p='5' flexDirection={'column'} bg='#E1EEF3'>
                    <Text bg='#00B0F3' color='white' w='fit-content' py='3' px='5' borderRadius={'full'}>3</Text>
                    <Text w='xs' fontSize={'sm'}>Customize your song
                        Select your favorite artist, genre, desired length, mood, and share your unique story.</Text>
                </Flex>
            </Flex>
            </Box>
        </Box>
    )
}

export default ArtistScreen;