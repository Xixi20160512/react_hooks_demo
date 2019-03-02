import { Row, Container, Column, Text } from '@src/components/Base/StyledComponent';
import styled from 'styled-components';
import TaskManger from './taskManger';
import Resource from './resource';

export default ({ deny }: {deny?: boolean}) => {
  return (
    <TaskManger>
      <Wrapper mainAxis="flex-start" deny={deny}>
        <Avatar mg="0 12px"/>
        <Column crossAxis="flex-start" mainAxis="space-between">
            <Row mg="4px 0">
              <Text size="large">www.baidunotgood.com</Text>
              <Container mg='0 7px'> | </Container>
              <Text color="dark88">idle</Text>
              <Container mg='0 7px'> | </Container>
              <Text color="dark88">192.168.1.2</Text>
              <Container mg='0 7px'> | </Container>
              <Text color="dark88">/var/lib/</Text>
            </Row>
            <Resource />
        </Column>
        {
          deny
          ? <Deny>Deny</Deny>
          : null
        }

      </Wrapper>
    </TaskManger>
  )
}

const Wrapper = styled(Row)<{deny: boolean}>`
  border: 1px solid #233333;
  border-radius: 5px;
  height: 90px;
  position: relative;
  width: 100%;
  background: #fffba8;
  ${({ deny }) => {
    if(deny) {
      return `
        background: #c4e4a4;
      `
    }
  }}
`

const Avatar = styled(Container)`
  height: 50px;
  width: 50px;
  display: block;
  border-radius: 100%;
  background-color: gray;

`

const Deny = styled.button`
  position: absolute;
  right: 14px;
  bottom: 14px;
`