import Task from "@src/components/Task";
import { Column, Container, Row, Text } from "@src/components/Base/StyledComponent";
import styled from "styled-components";
import TitleCard from "./TitleCard";
import Tab from "./Tab";
import Head from 'next/head';
import 'normalize.css'

export default () => {


  return (
    <Wrapper>
      <Head>

      </Head>
      <Row mainAxis="flex-end">
        <Container mg="0 24px">
          <span>Signed in as &nbsp;</span>
          <a href="">Member</a>
        </Container>
        <a href="">Sign out</a>
      </Row>
      <Box height="700px" mg="40px 0">
        <Logo>
          <Text size="giant">Cruise</Text>
        </Logo>
        <Tab tabs={['DASHBOARD', 'MY CRUISE', "AGENT", 'HELP']}/>
        <Title height="40px">
          <Row height="100%" pd="0 20px" mainAxis="flex-start">
            <Container mg="0 8px">
              <Text color="white" size="large">Agents</Text>
            </Container>
            <Container mg="0 4px">
              <button>All</button>
            </Container>
            <Container mg="0 4px">
              <button>Physical</button>
            </Container>
            <Container mg="0 4px">
              <button>Virtual</button>
            </Container>
          </Row>
        </Title>
        <Row crossAxis="stretch" height="660px">
          <TaskContainer width="70%" crossAxis="stretch" mainAxis="flex-start" pd="10px">
            <Container mg="4px 0">
              <Task deny/>
            </Container>
            <Container mg="4px 0">
              <Task />
            </Container>
            <Container mg="4px 0">
              <Task />
            </Container>
            <Container mg="4px 0">
              <Task deny/>
            </Container>
          </TaskContainer>
          <Column width="30%" pd="8px" crossAxis="stretch" mainAxis="flex-start">
            <TitleCard title="Summary">
              <Column crossAxis="stretch">
                <Row mainAxis="space-between">
                  <Text color="dark66" size="middle">building</Text>
                  <Container width="50%">
                    <Text color="dark44" size="large">2</Text>
                  </Container>
                </Row>
                <Row mainAxis="space-between">
                  <Text color="dark66" size="middle">idle</Text>
                  <Container width="50%">
                    <Text color="dark44" size="large">2</Text>
                  </Container>
                </Row>
              </Column>
            </TitleCard>
            <TitleCard title="History">
              <Column crossAxis="flex-start">
                <Text color="dark88" size="small">bjstdmngbgr02/Acceptance_test</Text>
                <Text color="dark88" size="small">bjstdmngbgr02/Acceptance_test</Text>
                <Text color="dark88" size="small">bjstdmngbgr02/Acceptance_test</Text>
                <Text color="dark88" size="small">bjstdmngbgr02/Acceptance_test</Text>
                <Text color="dark88" size="small">bjstdmngbgr02/Acceptance_test</Text>
                <Text color="dark88" size="small">bjstdmngbgr02/Acceptance_test</Text>
                <Text color="dark88" size="small">bjstdmngbgr02/Acceptance_test</Text>
                <Text color="dark88" size="small">bjstdmngbgr02/Acceptance_test</Text>
              </Column>
            </TitleCard>
          </Column>
        </Row>
      </Box>
    </Wrapper>
  )
}

const Wrapper = styled(Container)`
  max-width: 1024px;
  margin: 0 auto;
  width: 90%;
`

const Box = styled(Container)`
  border: 2px solid #233333;
  position:relative;
`
const Title = styled(Container)`
  background-color: #4d4d4d;
`

const TaskContainer = styled(Column)`
  border-right: 1px solid #233333;
`

const Logo = styled(Container)`
  position: absolute;
  top: -40px;
  left: 20px
`