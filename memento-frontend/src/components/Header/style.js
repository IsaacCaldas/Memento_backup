import styled from 'styled-components/native'

export const Display = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding: 25px 30px;
  background-color: ${({bg_theme}) => bg_theme || '#468a6a'};
`
