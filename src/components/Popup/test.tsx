import { shallow } from "enzyme";
import Popup from "./index";

describe('Popup', () => {
  it('初始化展示和点击按钮展开 popup 的逻辑', () => {
    let visible = false
    let wrapper = shallow(
      <Popup
        popContent={<div>hello</div>}
        visiable={visible}
        onToggle={() => visible = true}
      >
        open
      </Popup>
    )
    expect((() => {
      let popupContent = wrapper.find('Popup__PopupContent')
      let button = wrapper.find('div').at(0)

      let popupContentInner = popupContent.children().html()
      let initVisible = popupContent.prop('show')
      let buttonContent = button.children().text()
      button.simulate('click')
      let afterOpen = visible

      return [initVisible, afterOpen, buttonContent, popupContentInner]
    })()).toEqual([false, true, 'open', '<div>hello</div>'])
  })
})
