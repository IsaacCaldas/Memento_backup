import { StyleSheet, View } from 'react-native'

import Header from '../components/Header'
import TaskList from '../components/TaskList'

export default function Home() {
  return (
    <View style={styles.container}>
      <Header/>
      <TaskList/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333'
  }
})
