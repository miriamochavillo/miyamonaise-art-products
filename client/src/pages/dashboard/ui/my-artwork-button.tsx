import { Card, CardBody, CardFooter, Image, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

type Props = {
  cardImage: string;
  cardTitle: string;
  path: string;
};

export const MyArtworkButton = ({ cardImage, cardTitle, path }: Props) => {
  const navigate = useNavigate();
  return (
    <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
      <Card cursor="pointer" onClick={() => navigate(path)}>
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
