import styled from "styled-components";
import { Container, Row } from "@src/components/Base/StyledComponent";
import { useState } from "react";

interface TabProp {
  tabs: string[],
  onClick?: Function
}

export default ({ tabs }: TabProp) => {

  let [ active, setActive ] = useState<string>(tabs[0])
  
  return (
    <Tab crossAxis="flex-end">
      {
        tabs.map(tab => <TabItem onClick={() => setActive(tab)} active={active === tab} key={tab}>{tab}</TabItem>)
      }
    </Tab>
  )
};

const Tab = styled(Row)`
  position: absolute;
  transform: translateY(-100%);
  right: -2px;
`

const TabItem = styled(Row)<{ active: boolean }>`
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border: 2px solid #233333;
  border-bottom: none;
  padding: 4px;
  margin-left: 4px;
  cursor: pointer;
  ${props => {
    if(props.active) {
      return `
        background-color: #4d4d4d;
        padding: 8px 4px;
        color: white;
      `
    }
  }}
`
