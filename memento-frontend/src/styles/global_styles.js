import styled from 'styled-components/native'

export const Label = styled.Text`
  color: ${({color, theme_context}) => color ? color : theme_context ? '#222' : '#efefef'};
  font-size: ${({size}) => size ? size : '20'}px;
  font-weight: ${({weight}) => weight ? weight : 'normal'};
  margin-top: ${({top}) => top ? top : 0}px;
  margin-bottom: ${({bottom}) => bottom ? bottom : 0}px;
  text-decoration: ${({tick}) => tick ? 'line-through' : 'none'};
  text-decoration-color: ${({theme_context}) => theme_context ? '#222' : '#efefef'};
`
export const Container = styled.View`
  background-color: ${({bg_color}) => bg_color};
  flex: 1;
  width: ${({width}) => width}
  align-items: center;
  justify-content: center;
`
export const Button = styled.TouchableOpacity`
  background-color: ${({bg_color}) => bg_color || '#3334'};
  align-items: center;
  justify-content: center;
  width: 80%;
  height: 40px;
  border-radius: 5px;
  margin: ${({margin}) => margin || '0'};
`
export const ButtonLabel = styled.Text`
  color: ${({dark}) => dark ? '#111' : '#efefef'};
  font-weight: ${({bold}) => bold ? 'bold' : 'normal'};
`
export const Input = styled.TextInput`
  width: ${({width}) => width ? width : '100%'};
  height: ${({height}) => height ? height : 50}px;
  padding: ${({padding}) => padding ? padding : 10}px;
  margin: ${({margin}) => margin ? margin : '10px 0'};
  background-color: ${({bg_color, theme_context}) => bg_color ? bg_color : theme_context ? '#dfdfdf' : '#2c2c2c'};
  border: ${({border}) => border ? border : 'none'};
  border-radius: ${({border_radius}) => border_radius ? border_radius : '5'}px;
  font-size: ${({txt_size}) => txt_size ? txt_size : '18px'};
  color: ${({color}) => color && color};
`
export const Form = styled.View`
  background-color: ${({bg_color}) => bg_color ? bg_color : '#00000088'};
  width: 90%;
  height: ${({height}) => height ? height : 500}px;
  padding: ${({padding}) => padding ? padding : 10}px;
  border: none;
  border-radius: 5px;
`