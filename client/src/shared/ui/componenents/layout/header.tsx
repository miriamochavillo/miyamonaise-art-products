import { Box, Flex, Text } from '@chakra-ui/react';
import { appColors } from '@shared/ui';

export const Header = () => {
  return (
    <Box
      as="header"
      position="sticky"
      top={0}
      zIndex={1000}
      borderBottom={`1px solid ${appColors.background.gray}`}
      px={6}
      py={4}
    >
      <Flex>
        <Text fontSize="24px" fontWeight="bold">
          Miyamonaise
        </Text>
      </Flex>
    </Box>
  );
};
