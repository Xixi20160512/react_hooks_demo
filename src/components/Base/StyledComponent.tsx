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
  'main-axis'?: mainAxisFlex,
  /**
   * means the cross Axis of flex-box
   *
   * @type {string}
   * @memberof FlexProp
   */
  'cross-axis'?: crossAxisFlex
}

export const Container = styled.div<{ pd?: string, mg?: string, height?: string, width?: string }>`

  padding: ${({ pd }) => pd ||  0};
  margin: ${({ mg }) => mg || 0};
  ${({ height, width }) => {
    return `
      height: ${height};
      width: ${width}
    `
  }}
`


export const Row = styled(Container)<FlexProp>`
  display: flex;
  flex-direction: row;
  justify-content: ${props => props['main-axis'] || 'center'};
  align-items: ${props => props['cross-axis'] || 'center'};
`

export const Column = styled(Container)<FlexProp>`
  display: flex;
  flex-direction: column;
  justify-content: ${props => props['main-axis'] || 'center'};
  align-items: ${props => props['cross-axis'] || 'center'};
`

