import styled from 'styled-components';

type mainAxisFlex = 'space-between' | 'flex-start' | 'flex-end' | 'center'

type crossAxisFlex = 'space-between' | 'flex-start' | 'flex-end' | 'center' | 'stretch'

// interface ContainerProp { 
//   pd?: String, 
//   mg?: String
// }

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

export const Container = styled.div<{ ab?: boolean, pd?: string, mg?: string, height?: string, width?: string }>`

  padding: ${({ pd }) => pd ||  0};
  margin: ${({ mg }) => mg || 0};

  ${({ height, width, ab }) => {
    let style = ''
    if(height) style += `height: ${height};`
    if(width) style += `width: ${width};`
    if(ab) style += `position: absolute;`

    return style
  }}
`


export const Row = styled(Container)<FlexProp>`
  display: flex;
  flex-direction: row;
  justify-content: ${props => props['mainAxis'] || 'center'};
  align-items: ${props => props['crossAxis'] || 'center'};
`

export const Column = styled(Container)<FlexProp>`
  display: flex;
  flex-direction: column;
  justify-content: ${props => props['mainAxis'] || 'center'};
  align-items: ${props => props['crossAxis'] || 'center'};
`

