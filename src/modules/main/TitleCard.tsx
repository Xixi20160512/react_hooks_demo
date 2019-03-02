import { Container, Row, Text } from "@src/components/Base/StyledComponent";
import styled from "styled-components";

export default ({ title, children }) => {

  return (
    <>
      <Title mainAxis="flex-start" pd="8px 2px">
        <Text size="large" color="dark44">{title}</Text>
      </Title>

      <Container pd="8px 2px">
        {children}
      </Container>
    </>
  )
}

const Title = styled(Row)`
  border-bottom: 1px solid #eeeeee;
`