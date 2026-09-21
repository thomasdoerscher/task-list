import { Container, Flex, Section } from "@radix-ui/themes";

import * as styles from "./styles";

export const App = () => {
  return (
    <Section css={styles.section} minHeight="100vh" px="3" size="2">
      <Flex height="100vh" dir="row" wrap="wrap" gap="2">
        <Container
          css={styles.body}
          height="100%"
          minWidth={{ sm: "100%", md: "400px" }}
          flexGrow="1"
        />
        <Container
          css={styles.sidebar}
          height="100%"
          minWidth={{ sm: "100%", md: "200px" }}
          flexShrink="1"
        />
      </Flex>
    </Section>
  );
};
