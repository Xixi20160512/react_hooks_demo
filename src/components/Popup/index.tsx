import styled from "styled-components";
import { Container } from "@src/components/Base/StyledComponent";
import { useTaskContext } from "../Task/taskManger";
import { useEffect } from "react";


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
  padding: 10px;
  opacity: 0;
  height: 0;

  transition: opacity .2s 0s,transform .2s 0s, height 0s 0s ease-in;

  ${props => {
    if(props.show) {
      return `
        transform: translateY(10px);
        opacity: 1;
        height: auto;
      `
    }
  }}

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

export default ({ children, popContent }) => {

  let { popup, setPopup } = useTaskContext()

  useEffect(() => {
    let clickHandle = () => {
      setPopup(false)
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
      <div onClick={() => setPopup(!popup)}>
        {children}
      </div>
      <PopupContent show={popup}>
        {popContent}
      </PopupContent>
    </Popup>
  )
}