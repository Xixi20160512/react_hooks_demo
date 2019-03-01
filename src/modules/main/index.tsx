import Task from "@src/components/Task";
import { Column, Container, Row } from "@src/components/Base/StyledComponent";
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
        <Logo>Cruise</Logo>
        <Tab tabs={['DASHBOARD', 'MY CRUISE', "AGENT", 'HELP']}/>
        <Title height="40px">
          <Row height="100%" pd="0 20px" mainAxis="flex-start">
            <span>Agents</span>
            <button>All</button>
            <button>Physical</button>
            <button>Virtual</button>
          </Row>
        </Title>
        <Row crossAxis="stretch" height="660px">
          <TaskContainer width="70%" crossAxis="stretch" mainAxis="flex-start" pd="10px">
            <Container mg="4px 0">
              <Task />
            </Container>
            <Container mg="4px 0">
              <Task />
            </Container>
            <Container mg="4px 0">
              <Task />
            </Container>
            <Container mg="4px 0">
              <Task />
            </Container>
            <Container mg="4px 0">
              <Task />
            </Container>
          </TaskContainer>
          <Column width="30%" pd="8px" crossAxis="stretch" mainAxis="flex-start">
            <TitleCard title="Summary">
              <Column crossAxis="stretch">
                <Row mainAxis="space-between">
                  <span>building</span>
                  <Container width="50%">2</Container>
                </Row>
                <Row mainAxis="space-between">
                  <span>idle</span>
                  <Container width="50%">2</Container>
                </Row>
              </Column>
            </TitleCard>
            <TitleCard title="History">
              <Column crossAxis="flex-start">
                <span>bjstdmngbgr02/Acceptance_test</span>
                <span>bjstdmngbgr02/Acceptance_test</span>
                <span>bjstdmngbgr02/Acceptance_test</span>
                <span>bjstdmngbgr02/Acceptance_test</span>
                <span>bjstdmngbgr02/Acceptance_test</span>
                <span>bjstdmngbgr02/Acceptance_test</span>
                <span>bjstdmngbgr02/Acceptance_test</span>
                <span>bjstdmngbgr02/Acceptance_test</span>
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
  top: -30px;
  left: 20px
`