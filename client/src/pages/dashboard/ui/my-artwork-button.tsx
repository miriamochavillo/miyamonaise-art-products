import { Card, CardBody, CardFooter, Image, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';

type Props = {
  cardImage: string;
  cardTitle: string;
};

export const MyArtworkButton = ({ cardImage, cardTitle }: Props) => {
  return (
    <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
      <Card cursor="pointer">
        <CardBody>
          <Image
            src={cardImage}
            alt="artwork"
            objectFit="cover"
            w="100%"
            borderRadius="md"
          />
        </CardBody>
        <CardFooter alignItems="center" justifyContent="center" pt={0}>
          <Text fontStyle="italic">{cardTitle}</Text>
        </CardFooter>
      </Card>
    </motion.div>
  );
};
