import React, { useState, useRef, useEffect } from 'react';
import { Box, IconButton, Text, Slider, SliderTrack, SliderFilledTrack, SliderThumb, Flex, Image, Button } from '@chakra-ui/react';
import { FaPlay, FaPause, FaForward } from 'react-icons/fa';
import DummyBanner from "../../../assets/dummy-banner.png"
import { Link } from 'react-router-dom';
const MusicPlayer: React.FC = ({ background }: any) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [currentTime, setCurrentTime] = useState(0);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.addEventListener('timeupdate', () => {
                setCurrentTime(audioRef.current!.currentTime);
            });
        }
    }, []);

    const handlePlayPause = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
        }
        setIsPlaying((prevIsPlaying) => !prevIsPlaying);
    };

    const handleSkip = () => {
        // Add logic to skip to the next track here
    };

    const handleSeek = (value: number) => {
        if (audioRef.current) {
            audioRef.current.currentTime = value;
        }
    };

    return (
        <Box textAlign="center" w={'72'} bg={background || 'white'} px='5' py='5'>
            <Image
                borderRadius={'full'}
                w='20'
                h='20'
                src={DummyBanner}
            />
            <Text fontWeight={'bold'} textAlign={'left'} fontSize="md">Sarah Matthew P.K.A Sarah </Text>

            <Flex gap='3' py='5'>
                <Text bg='#F1F5F9' px='3' borderRadius={'xl'} color='#00B0F3'>RnB</Text>
                <Text bg='#F1F5F9' px='3' borderRadius={'xl'} color='#00B0F3'>Hip Hop</Text>
            </Flex>
            <audio ref={audioRef}>
                <source src="your-audio-file.mp3" />
            </audio>

            <Flex >
                <IconButton
                    icon={isPlaying ? <FaPause color='#00B0F3' size='20' /> : <FaPlay color='#00B0F3' size='20' />}
                    onClick={handlePlayPause}
                    bg='none'

                    aria-label={isPlaying ? 'Pause' : 'Play'}
                />
                <Box w='xs'>
                    <Text textAlign={'left'} fontSize="lg">Song Title</Text>
                    <Slider
                        value={currentTime}
                        min={0}
                        max={audioRef.current ? audioRef.current.duration : 0}
                        onChange={(value) => handleSeek(value)}
                    >
                        <SliderTrack>
                            <SliderFilledTrack />
                        </SliderTrack>
                        <SliderThumb />
                    </Slider>
                </Box>
            </Flex>
            <Flex pl='14' justifyContent={'space-between'}>
                <Text fontSize="sm">
                    {Math.floor(currentTime)}

                </Text>
                <Text fontSize="sm">

                    {audioRef.current ? Math.floor(audioRef.current.duration) : '0'}
                </Text>
            </Flex>
            <Link to='/artist-profile'>
                <Button mt='5' px='10' fontSize={'sm'} h='fit-content'>View Profile</Button>
            </Link>
        </Box >
    );
};

export default MusicPlayer;
