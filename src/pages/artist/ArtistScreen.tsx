import { Box, Button, Center, Flex, Image, Link, SimpleGrid, Text } from "@chakra-ui/react"
import ArtistImage from "../../assets/Artist-bg-image.png"
import { FormInput, IconButton } from "@/components";
import { RiFilter3Line, RiSearch2Line } from "react-icons/ri";
import MusicPlayer from "./components/MusicPlayer";
const ArtistScreen = () => {
    interface EventLink {
        link: string;
        name: string;
    }

    const eventLinks: EventLink[] = [
        { name: 'ONLINE EVENTS', link: '/Online_Events' },
        { name: 'FREE EVENTS', link: '/free_events' },
        { name: 'PAID EVENTS', link: '/paid_events' },
        { name: 'UPCOMING EVENTS', link: '/upcoming_events' },
        { name: 'EVENTS NEAR YOU', link: '/events_near' },
        { name: 'TRAINING', link: '/training' },
        { name: 'TRAINING', link: '/training' },


    ];

    return (
        <Box bg='#F1F5F9' >
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
                <Center w={'full'}>
                    <Flex gap='3' w='fit-content' justifyContent={'center'} alignItems={'center'}>
                        <IconButton display={['none', 'block']} icon={<RiFilter3Line />} />
                        <FormInput w='xl' bgColor='#fff' />

                        <IconButton px='3 ' w='fit-content' icon={<RiSearch2Line />}>Search</IconButton>
                    </Flex>
                </Center>
                <Box py='10'>
                    <Text textAlign={'center'} fontWeight={'bold'} pb='5'>HOW WE WORK</Text>

                    <Flex justifyContent={'center'} gap='5'>
                        <Flex gap='5' p='5' flexDirection={'column'} bg='#E1EEF3'>
                            <Text bg='#00B0F3' color='white' w='fit-content' py='3' px='5' borderRadius={'full'}>1</Text>
                            <Text w='xs' fontSize={'sm'}>Customize your song
                                Select your favorite artist, genre, desired length, mood, and share your unique story.</Text>
                        </Flex>
                        <Flex gap='5' p='5' flexDirection={'column'} bg='#E1EEF3'>
                            <Text bg='#00B0F3' color='white' w='fit-content' py='3' px='5' borderRadius={'full'}>2</Text>
                            <Text w='xs' fontSize={'sm'}>Customize your song
                                Select your favorite artist, genre, desired length, mood, and share your unique story.</Text>
                        </Flex>
                        <Flex gap='5' p='5' flexDirection={'column'} bg='#E1EEF3'>
                            <Text bg='#00B0F3' color='white' w='fit-content' py='3' px='5' borderRadius={'full'}>3</Text>
                            <Text w='xs' fontSize={'sm'}>Customize your song
                                Select your favorite artist, genre, desired length, mood, and share your unique story.</Text>
                        </Flex>
                    </Flex>
                </Box>
                <Flex justifyContent={'center'}>
                    <Box>
                        <Text fontWeight={'bold'} px='4'>Trending Genre</Text>
                        <Box>
                            {eventLinks.map((eventLink, i) => (
                                <Link href={eventLink.link} key={`eventlink_${i}`} justifyContent='space-around'>
                                    <Box
                                        m='4'
                                        p='4'
                                        bg='#E1EEF3'
                                        display='inline-flex'
                                        borderRadius='4px'
                                        alignItems='center'
                                        color='#00B0F3'
                                        fontWeight='600'
                                        fontSize='15px'
                                        lineHeight='34.5px'
                                    >
                                        {eventLink.name}
                                    </Box>
                                </Link>
                            ))}
                        </Box>
                    </Box>
                </Flex>
                <Flex justifyContent={'center'}>
                    <SimpleGrid spacing={'10'} columns={[1,4]}>

                    <MusicPlayer />
                    <MusicPlayer />
                    <MusicPlayer />
                    <MusicPlayer />
                    <MusicPlayer />
                    <MusicPlayer />
                    </SimpleGrid>
                </Flex>
            </Box>
        </Box>
    )
}

export default ArtistScreen;