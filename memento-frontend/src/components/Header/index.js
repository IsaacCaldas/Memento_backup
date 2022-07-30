import { useState, useContext, useEffect } from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'

import { Context } from '../../context/context'

import Ionicons from 'react-native-vector-icons/Ionicons';

// Styles
import { Container, Label, Button, ButtonLabel  } from '../../styles/global_styles'
import { Display } from './style'

export default function Header() {

  const { theme, setTheme, datePeriod, 
    isVisible, setVisibility,
    hiddenTasks, setHiddenTasks, bg_theme
  } = useContext(Context);

  return (
    <Container bold={true}>
      <Display bg_theme={bg_theme}>
        <View style={styles.box}>
          <Label color="#efefef" size={30} weight='bold' bottom={10}>{datePeriod}</Label>
          <Label color="#efefef" size={15} weight={500}>Qui, 7 de julho</Label>
        </View>
        <View style={[styles.box, { alignItems: 'flex-end' }]}>
          <View style={{
            flexDirection: 'row', justifyContent: 'flex-end'
          }}>
            <TouchableOpacity onPress={() => setHiddenTasks(!hiddenTasks)}>
              <Ionicons name={hiddenTasks ? 'eye' : 'eye-off'} 
                size={30} color="#efefef" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setTheme(!theme)}>
              <Ionicons style={{marginLeft: 15}}
                name={`ios-${theme ? 'sunny' : 'moon'}`} 
                size={30} color={theme ? '#f5da11'  : '#ffff00'}
              />
            </TouchableOpacity>
          </View>
          <Button margin={'10px 0'}
            bg_color={!theme && '#bbb4'}
            onPress={() => setVisibility(!isVisible)}>
            <ButtonLabel bold>{isVisible ? 'Cancelar' : 'Nova tarefa'}</ButtonLabel>
          </Button>
        
        </View>
      </Display>
    </Container>
  )
}

const styles = StyleSheet.create({
  box: {
    flex: 1,
    height: '100%',
    width: '100%',
    justifyContent: 'flex-end'
  }
})
