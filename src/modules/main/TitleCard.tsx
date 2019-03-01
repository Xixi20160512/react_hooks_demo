import { Container, Row } from "@src/components/Base/StyledComponent";
import styled from "styled-components";

export default ({ title, children }) => {

  return (
    <>
      <Title mainAxis="flex-start" pd="8px 2px">
        <span>{title}</span>
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