import { Box, Text, Flex, Image, Button, Stack } from '@chakra-ui/react';
import DashboardHeader from '../Header/DashboardHeader';

import serviceIcon from '../../../../assets/service.svg';
import handMoney from '../../../../assets/money.svg';
import ticket from '../../../../assets/ticket-2 (2).svg';
import DonationWallet from './DonationWallet';
import { useEffect, useState } from 'react';

const VendorDonationPage = () => {
  const [catergories, setCatergory] = useState<Array<string>>([]);
  useEffect(() => {
    const headers = { 'Authorization': "81|bvMXD0AEGCYnNzEnUIkA3xBr4TikGd9U73iAvZY9eaeaec5f" };
    fetch('https://api.cleaques.com/api/donation/category', { headers })
            .then(response => response.json())
            .then(data => setCatergory(data));
        
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

  return (
    <>
      <DashboardHeader />
      <Box bg='#E1EEF3' flex='1'>
        <Box mx='auto' maxW='960px' p='10px'>
          <Flex
            alignItems='center'
            flexDirection={{ base: 'column', md: 'row' }}
            justifyContent='space-between'
            mb='5'
          >
            <Text fontSize={{ base: '16px', md: 'inherit' }}>Wallet Balance: $256.50</Text>
            <Box display='flex' gap='3'>
              <Button fontSize={{ base: '12px', md: '14px' }}>Withdraw to bank</Button>
              <Button bg='#E9634B' fontSize={{ base: '12px', md: '14px' }}>
                Export tax filings/ returns
              </Button>
            </Box>
          </Flex>

          <Stack
            spacing={5}
            direction={{ base: 'column', md: 'row' }}
            alignItems={{ base: 'center', md: 'stretch' }}
          >
            <Box
              w={{ base: '100%', md: '300px' }}
              h={{ base: '100px', md: '150px' }}
              display={{ base: 'none', md: 'block' }}
              borderRadius='10'
            >
              <Flex
                alignItems='center'
                justifyContent='space-between'
                flexDirection='row'
                marginX='5'
                borderRadius='10'
                paddingX='10px'
                h='100%'
                bg='#FFFFFF'
              >
                <Flex flexDirection='column'>
                  <Text fontFamily='Lato' fontWeight='600' fontSize={{ base: '12px', md: '14px' }}>
                    Services Balance
                  </Text>
                  <Text
                    fontFamily='Lato'
                    fontWeight='600'
                    color='#00B0F3'
                    fontSize={{ base: '12px', md: '14px' }}
                  >
                    $1,234.45
                  </Text>
                </Flex>
                <Image src={serviceIcon} alt='ticket' w={{ base: '8', md: '12' }} />
              </Flex>
            </Box>

            <Box
              w={{ base: '100%', md: '300px' }}
              h={{ base: '100px', md: '150px' }}
              borderRadius='10'
            >
              <Flex
                alignItems='center'
                justifyContent='space-between'
                flexDirection='row'
                marginX='5'
                borderRadius='10'
                paddingX='10px'
                h='100%'
                bg='#FFFFFF'
              >
                <Flex flexDirection='column'>
                  <Text fontFamily='Lato' fontWeight='600' fontSize={{ base: '12px', md: '14px' }}>
                    Donation Balance
                  </Text>
                  <Text
                    fontFamily='Lato'
                    fontWeight='600'
                    color='#00B0F3'
                    fontSize={{ base: '12px', md: '14px' }}
                  >
                    $1,234.45
                  </Text>
                </Flex>
                <Image src={handMoney} alt='ticket' w={{ base: '8', md: '12' }} />
              </Flex>
            </Box>

            <Box
              display={{ base: 'none', md: 'block' }}
              w={{ base: '100%', md: '300px' }}
              h={{ base: '100px', md: '150px' }}
              borderRadius='10'
            >
              <Flex
                alignItems='center'
                justifyContent='space-between'
                flexDirection='row'
                marginX='5'
                borderRadius='10'
                paddingX='10px'
                h='100%'
                bg='#FFFFFF'
              >
                <Flex flexDirection='column'>
                  <Text fontFamily='Lato' fontWeight='600' fontSize={{ base: '12px', md: '14px' }}>
                    Event Balance
                  </Text>
                  <Text
                    fontFamily='Lato'
                    fontWeight='600'
                    color='#00B0F3'
                    fontSize={{ base: '12px', md: '14px' }}
                  >
                    $1,234.45
                  </Text>
                </Flex>
                <Image src={ticket} alt='ticket' w={{ base: '8', md: '12' }} />
              </Flex>
            </Box>
          </Stack>

          <DonationWallet />
        </Box>
      </Box>
    </>
  );
};

export default VendorDonationPage;
