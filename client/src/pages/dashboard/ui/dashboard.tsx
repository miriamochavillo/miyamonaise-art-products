import coverDigital from '@app/assets/cover-digital.jpg';
import coverWatercolor from '@app/assets/cover-watercolor.jpg';
import mountainPoppies from '@app/assets/mountain-poppies.png';
import pond from '@app/assets/pond.png';
import sunset from '@app/assets/sunset.png';
import {
  Box,
  Card,
  CardBody,
  CardFooter,
  Flex,
  Image,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

export const Dashboard = () => {
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
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Card cursor="pointer">
              <CardBody>
                <Image
                  src={pond}
                  alt="artwork"
                  objectFit="cover"
                  w="100%"
                  borderRadius="md"
                />
              </CardBody>
              <CardFooter alignItems="center" justifyContent="center" pt={0}>
                <Text fontStyle="italic">Canvas</Text>
              </CardFooter>
            </Card>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Card cursor="pointer">
              <CardBody>
                <Image
                  src={sunset}
                  alt="artwork"
                  objectFit="cover"
                  w="100%"
                  borderRadius="md"
                />
              </CardBody>
              <CardFooter alignItems="center" justifyContent="center" pt={0}>
                <Text fontStyle="italic">Tote Bags</Text>
              </CardFooter>
            </Card>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Card cursor="pointer">
              <CardBody>
                <Image
                  src={coverWatercolor}
                  alt="artwork"
                  objectFit="cover"
                  w="100%"
                  borderRadius="md"
                />
              </CardBody>
              <CardFooter alignItems="center" justifyContent="center" pt={0}>
                <Text fontStyle="italic">Watercolor</Text>
              </CardFooter>
            </Card>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Card cursor="pointer">
              <CardBody>
                <Image
                  src={coverDigital}
                  alt="artwork"
                  objectFit="cover"
                  w="100%"
                  borderRadius="md"
                />
              </CardBody>
              <CardFooter alignItems="center" justifyContent="center" pt={0}>
                <Text fontStyle="italic">Digital</Text>
              </CardFooter>
            </Card>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Card cursor="pointer">
              <CardBody>
                <Image
                  src={mountainPoppies}
                  alt="artwork"
                  objectFit="cover"
                  w="100%"
                  borderRadius="md"
                />
              </CardBody>
              <CardFooter alignItems="center" justifyContent="center" pt={0}>
                <Text fontStyle="italic">Merch</Text>
              </CardFooter>
            </Card>
          </motion.div>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
};
