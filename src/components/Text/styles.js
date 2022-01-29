import styled, { css } from 'styled-components';

export const Title = styled.p`
  ${({ as }) => css`
    ${as === "h1" && css `//se a tag for h1 && css faça...
      font-size:  42px;
      color: black;
    `}
  `}
`