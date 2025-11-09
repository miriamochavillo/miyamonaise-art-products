import coverDigital from '@app/assets/cover-digital.jpg';
import coverWatercolor from '@app/assets/cover-watercolor.jpg';
import mountainPoppies from '@app/assets/mountain-poppies.png';
import pond from '@app/assets/pond.png';
import sunset from '@app/assets/sunset.png';
import { Box, Flex, Image, SimpleGrid, Text } from '@chakra-ui/react';
import { MyArtworkButton } from './my-artwork-button';

export const Dashboard = () => {
  const myArtworks = [
    {
      image: pond,
      title: 'Canvas',
    },
    {
      image: sunset,
      title: 'Tote Bags',
    },
    {
      image: coverWatercolor,
      title: 'Watercolor',
    },
    {
      image: coverDigital,
      title: 'Digital',
    },
    {
      image: mountainPoppies,
      title: 'Merch',
    },
  ];

  return (
    <Flex direction="column" pb={4} gap={10}>
      <Image
        src={mountainPoppies}
        alt="hero"
        objectFit="cover"
        h="calc(100dvh - 70px)"
        w="100%"
      />

      <Flex direction="column" alignSelf="center" w="100%" gap={4}>
        <Box>
          <Text fontSize="2xl" fontStyle="italic" textAlign="center">
            my artworks
          </Text>
          <Text fontStyle="italic" textAlign="center">
            click the cards to view more
          </Text>
        </Box>

        <SimpleGrid columns={[1, 2, 3, 4, 5]} spacing={6} w="100%">
          {myArtworks.map(artwork => (
            <MyArtworkButton
              key={artwork.title}
              cardImage={artwork.image}
              cardTitle={artwork.title}
            />
          ))}
        </SimpleGrid>
      </Flex>
    </Flex>
  );
};
