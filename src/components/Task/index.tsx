import { Row, Container, Column } from '@src/components/Base/StyledComponent';
import styled from 'styled-components';
import TaskManger from './taskManger';
import Resource from './resource';

export default () => {
  return (
    <TaskManger>
      <Wrapper mainAxis="flex-start">
        <Avatar mg="0 12px"/>
        <Column crossAxis="flex-start" mainAxis="space-between">
            <Row>
              <span>www.baidunotgood.com</span>
              <span>| idle</span>
              <span>| 192.168.1.2</span>
              <span>| /var/lib/</span>
            </Row>
            <Resource />
        </Column>
        <Deny>Deny</Deny>
      </Wrapper>
    </TaskManger>
  )
}

const Wrapper = styled(Row)`
  border: 1px solid #233333;
  border-radius: 5px;
  height: 90px;
  position: relative;
  width: 100%;
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