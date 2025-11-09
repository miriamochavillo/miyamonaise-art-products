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
      bg={appColors.background.primary}
      h="70px"
    >
      <Flex alignItems="center" justifyContent="center">
        <Text fontSize="24px" fontStyle="italic" letterSpacing={2}>
          miyamonaise
        </Text>
      </Flex>
    </Box>
  );
};
