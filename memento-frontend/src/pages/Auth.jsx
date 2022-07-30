import { useState, useEffect, useContext } from 'react'
import { View, StyleSheet, ImageBackground } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import axios from 'axios'

import { Container, Form, Label, Input, Button, ButtonLabel } from '../styles/global_styles'
import { server, showError, showSuccess } from '../utils/common.js'

import bg_image from '../../assets/background.jpg'

export default function Auth() {

  const navigation = useNavigation()  

  const [new_user, setSessionStatus] = useState(false)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [password_confirmation, setPasswordConfirmation] = useState('')

  useEffect(() => {
    setName('')
    setEmail('')
    setPassword('')
    setPasswordConfirmation('')
  }, [new_user])

  async function handleSign() {

    if (new_user) {
      if (name == '' || email == '' || password == '' || password_confirmation == '') {
        alert('Preencha todos os dados')
        return
      }
    } else {
      if (email == '' || password == '') {
        alert('Preencha todos os dados')
        return
      }
    } 

    if (new_user && name.trim().length < 3) {
      alert('Digite um nome válido.')
      return
    }

    if (!email.includes('@')) {
      alert('Digite um email válido!')
      return
    }

    if (password.length < 6) {
      alert('A senha precisa ser de no mínimo 6 dígitos.')
      return
    }

    if (new_user && password != password_confirmation) {
      alert('Senhas diferentes.')
      return
    } 

    sign_route = new_user ? 'signup' : 'signin'

    let data = {
      email,
      password
    }

    if (new_user) {
      data.name = name
    }

    await axios.post(`${server}/${sign_route}`, { data }).then(res => {
      if (new_user) {
        setSessionStatus(false)
        return
      } 

      axios.defaults.headers.common['Authorization'] = `bearer ${res .data.token}`

      navigation.navigate('Home')

    }).catch(err => showError())
  }

  return (
    <ImageBackground source={bg_image} style={styles.background}>
      <Container filter="blur(2px)" bg_color='#00000055' width='100%'>
        <Label color="#efefef" size={45} weight='bold' bottom={20}>
          Memento
        </Label>
        <Form height={} padding={15} bg_color='#000000aa'>
          <Label color="#efefef" size={35} weight='bold' bottom={20}>
            Entrar
          </Label>
          {new_user && <Input
              onChangeText={(text) => setName(text)}
              value={name}
              placeholder="Digite seu nome"          
              placeholderTextColor="#ddd"
              bg_color='#0005'
              height={60}
              txt_size='20px'
              color='#ddd'
              margin='15px 0'
            />
          }
          <Input
            onChangeText={(text) => setEmail(text)}
            value={email}
            placeholder="Digite seu email"          
            placeholderTextColor="#ddd"
            bg_color='#0005'
            height={60}
            txt_size='20px'
            color='#ddd'
            margin='15px 0'
          />
          <Input
            onChangeText={(text) => setPassword(text)}
            value={password}
            placeholder="Digite sua senha"          
            placeholderTextColor="#ddd"
            bg_color='#0005'
            height={60}
            txt_size='20px'
            color='#ddd'
            margin='10px 0'
          />
           {new_user && <Input
              onChangeText={(text) => setPasswordConfirmation(text)}
              value={password_confirmation}
              placeholder="Confirme sua senha"          
              placeholderTextColor="#ddd"
              bg_color='#0005'
              height={60}
              txt_size='20px'
              color='#ddd'
              margin='15px 0'
            />
          }
          <Button onPress={() => handleSign()} 
          style={{marginVertical: 10, width: '100%'}}>
            <ButtonLabel bold>ENTRAR</ButtonLabel>
          </Button>
          { new_user ? 
            <Label color="#efefef" size={16} bottom={5}>
              Já possui uma conta? <Label color="#468a6a" size={16} weight='bold' onPress={() => setSessionStatus(false)}>Entre aqui.</Label>
            </Label>
          :
            <Label color="#efefef" size={16} bottom={5}>
              Não tem cadastro? <Label color="#468a6a" size={16} weight='bold' onPress={() => setSessionStatus(true)}}>Cadastre-se aqui.</Label>
            </Label>
          }
         
        </Form>
      </Container>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  }
})