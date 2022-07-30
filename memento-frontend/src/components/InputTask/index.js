import { useState, useEffect, useContext } from 'react'
import { View, StyleSheet, Platform } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker'
import moment from 'moment';
import 'moment/locale/pt-br'

import { Context } from '../../context/context'
import { Input, Label, Button, ButtonLabel  } from '../../styles/global_styles'

export default function InputTask({handleSaveTask}) {

  const { theme, isVisible, datePeriod } = useContext(Context);

  const [description, setDescription] = useState('')
  const [dateTime, setDateTime] = useState(new Date())
  const [showDatePicker, setShowDatePicker] = useState(false)
  const [bgTheme, setBgTheme] = useState('#468a6a')
  const display_colors = ['#468a6a', '#4e69ed', '#bf0a4c']

  const addTask = () => {
    
    let new_task = {
      description,
      done: false,
      estimated_at: dateTime,
      created_at: new Date(),
      updated_at: new Date(),
      user_id: 0
    }

    handleSaveTask && handleSaveTask(new_task)

    setDescription('')
    setDateTime(new Date())
    setShowDatePicker(false)
  }

  useEffect(() => {
    switch (datePeriod) {  
      case 'Esta semana':
        setBgTheme(display_colors[1])
        break
      case 'Este mês':
        setBgTheme(display_colors[2])
        break
      case 'Hoje':
      default:
        setBgTheme(display_colors[0])
        break
    }
  }, [datePeriod])

  datePicker = () => {
    let datePicker = <DateTimePicker 
      mode='date'
      value={dateTime} 
      minimumDate={new Date()}
      onChange={(_, date) => {
        setDateTime(date), setShowDatePicker(false)
      }}
      textColor={theme ? '#444' : '#efefef'}
    />

    const dateString = moment(dateTime).format('ddd, D [de] MMMM [de] YYYY')
    
    if(Platform.OS === 'android') {
      datePicker = (
        <View>
          <Button bg_color={bgTheme} onPress={() => setShowDatePicker(true)}>
            <ButtonLabel bold>{dateString}</ButtonLabel>
          </Button>
          {showDatePicker && datePicker}
        </View>
      )
    }

    return datePicker
  }
  
  return (
    <View style={styles.inputArea}>
      <Label color={theme ? "#333" : "#efefef"} size={30} weight='bold' bottom={10}>Nova tarefa</Label>
      <Input
        theme_context={theme}
        onChangeText={(text) => setDescription(text)}
        value={description}
        placeholder="Descrição da tarefa"          
        placeholderTextColor="#555"
      />

      <Label color={theme ? "#333" : "#efefef"} size={18} weight='bold' top={10} bottom={10}>Data estimada para término</Label>
      {datePicker()}
      {/* <Input
        theme_context={theme}
        onChangeText={(text) => setDateTime(text)}
        value={dateTime}
        placeholder="Data limite para término"          
        placeholderTextColor="#555"
      /> */}
      <Button bg_color={bgTheme} onPress={() => addTask()} 
      style={{marginVertical: 10, width: '100%'}}>
        <ButtonLabel bold>Salvar</ButtonLabel>
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  inputArea: {
    width: '100%',
    height: 'auto',
    padding: 10
  }
})