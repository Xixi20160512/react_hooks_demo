import { shallow } from "enzyme";
import { Text } from "./StyledComponent";
import Theme from "./Theme";

describe('Text', () => {
  it('correct render color', () => {
    const wrapper = shallow(
      <Theme>
        <Text color="#233333">test</Text>
      </Theme>
    )
    expect(wrapper.render().prop('color')).toEqual('#233333')
  })
})