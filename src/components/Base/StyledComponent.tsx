import styled from 'styled-components';
type mainAxisFlex = 'space-between' | 'flex-start' | 'flex-end' | 'center'
type crossAxisFlex = 'space-between' | 'flex-start' | 'flex-end' | 'center' | 'stretch'

interface FlexProp {
  /**
   * means the main Axis of flex-box
   *
   * @type {string}
   * @memberof FlexProp
   */
  'mainAxis'?: mainAxisFlex,
  /**
   * means the cross Axis of flex-box
   *
   * @type {string}
   * @memberof FlexProp
   */
  'crossAxis'?: crossAxisFlex
}

interface TextProp {
  /**
   * font-size prop
   *
   * @type {string}
   * @memberof TextProp
   */
  size?: string,

  /**
   * font color
   *
   * @type {string}
   * @memberof TextProp
   */
  color?: string
}

export const Container = styled.div<{ bg?: string, ab?: boolean, pd?: string, mg?: string, height?: string, width?: string }>`

  padding: ${({ pd }) => pd ||  0};
  margin: ${({ mg }) => mg || 0};

  ${({ height, width, ab, bg }) => {
    let style = ''
    if(height) style += `height: ${height};`
    if(width) style += `width: ${width};`
    if(ab) style += `position: absolute;`
    if(bg) style += `background: ${bg}`

    return style
  }}
`

export const Row = styled(Container).attrs({
  className: 'display_flex'
})<FlexProp>`
  flex-direction: row;
  justify-content: ${props => props['mainAxis'] || 'center'};
  align-items: ${props => props['crossAxis'] || 'center'};
`

export const Column = styled(Container).attrs({
  className: 'display_flex'
})<FlexProp>`
  flex-direction: column;
  justify-content: ${props => props['mainAxis'] || 'center'};
  align-items: ${props => props['crossAxis'] || 'center'};
`

export const Text = styled.span<TextProp>`
  font-size: ${props => props.theme.fontSize[props['size']] || props['size'] || 'inherit'};
  color: ${props => props.theme.fontColor[props['color']] || props['color'] || 'inherit'};
`
