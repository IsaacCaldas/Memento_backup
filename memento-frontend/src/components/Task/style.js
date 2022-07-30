import styled from 'styled-components/native'

export const Task = styled.View`
  background-color: ${({theme_context}) => theme_context ? '#ececec' : '#222 '};
  width: 100%;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding: 10px 15px;
  border-bottom-width: 1px;
  border-bottom-color: ${({theme_context}) => theme_context ? '#ddd' : '#1c1c1c'};
`

export const CheckBall = styled.View`
  background-color: ${({isDone, theme_context}) => isDone ? '#468a6a' : theme_context ? '#ddd ': '#2a2a2a' }
  width: 30px;
  height: 30px;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  border: ${({isDone}) => isDone ? '0px' : '1px solid'} ${({theme_context}) => theme_context ? '#efe' : '#2d2d2d'};
  margin-right: 15px;
`