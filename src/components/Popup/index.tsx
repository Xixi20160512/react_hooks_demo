import styled from "styled-components";
import { Container } from "../Base/StyledComponent";
import React, { useEffect } from "react";


const Popup = styled(Container)`
  position: relative;
  cursor: pointer;
`

const angleSize = 12

const PopupContent = styled(Container)<{ show?: boolean }>`
  background-color: #e2ecd6;
  position: absolute;
  top: calc(100% + ${angleSize}px);
  left: 0;
  display: ${props => props.show ? 'block' : 'none'};
  z-index: 999;

  ::after {
    display: block;
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border: ${angleSize}px solid transparent;
    border-bottom-color: #e2ecd6;
    top: -${angleSize * 2}px;
    left: 12px;
  }

`

export default ({ children, popContent, visiable, onToggle }) => {

  useEffect(() => {
    let clickHandle = () => {
      onToggle(false)
    }
    document.addEventListener('click', clickHandle)
    return () => {
      document.removeEventListener('click', clickHandle)
    }
  })

  function openPopup(e: React.MouseEvent) {
    e.stopPropagation()
    e.nativeEvent.stopImmediatePropagation()
  }

  return (
    <Popup onClick={openPopup}>
      <div onClick={() => onToggle(!visiable)}>
        {children}
      </div>
      <PopupContent show={visiable} pd="0 4px">
        {popContent}
      </PopupContent>
    </Popup>
  )
}