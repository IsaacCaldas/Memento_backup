import { useState, useContext } from 'react'
import { StyleSheet, View, TouchableWithoutFeedback } from 'react-native'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import moment from 'moment';
import 'moment/locale/pt-br'

import { Context } from '../../context/context'

// Style
import IconFA from 'react-native-vector-icons/FontAwesome';
import { Label } from '../../styles/global_styles'
import { Task, CheckBall } from './style'

// Functions
import { 
  rightSwipeActions, 
  swipeFromRightOpen,
  // leftSwipeActions,
  // swipeFromLeftOpen
} from '../../utils/swipes'

export default function TaskItem({
  id, description, done, 
  updated_at, handleTask, estimated_at,
  handleDeleteTask
}) {

  const { theme } = useContext(Context)

  const date = done ? updated_at : estimated_at
  const done_date = moment(date).locale('pt-br').format('ddd, D [de] MMMM [de] YYYY')

  return (
    <Swipeable
      renderRightActions={rightSwipeActions}
      onSwipeableRightOpen={() => swipeFromRightOpen(id, handleDeleteTask)}
      // renderLeftActions={leftSwipeActions}
      // onSwipeableLeftOpen={() => swipeFromLeftOpen(id)}
    >  
      <TouchableWithoutFeedback onPress={() => handleTask(id)}>
        <Task theme_context={theme}> 
          <CheckBall isDone={done} theme_context={theme}> 
            {done && <IconFA name="check" size={20} color="#fff" />}
          </CheckBall>
          <View style={styles.labelArea}>
            <Label tick={done} size={16} theme_context={theme}>{description}</Label>
            <Label weight='bold' size={12} theme_context={theme} 
            color={theme ? '#222a' : '#efefefaa'}>
              {done ? 'Finalizado em ' : 'Finalizar até '}{`${done_date}`}
            </Label>
          </View>
        </Task>
      </TouchableWithoutFeedback>
    </Swipeable>
  )
}

const styles = StyleSheet.create({
  labelArea: {
    flex: 1,
    justifyContent: 'space-between'
  }
})

