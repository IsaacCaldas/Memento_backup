import { StatusBar } from 'expo-status-bar'
import { StyleSheet, SafeAreaView, View } from 'react-native'

import { ThemeContext } from './src/context/context'

// import Home from './src/pages/Home'
// import Auth from './src/pages/Auth'

import { NavigationContainer } from '@react-navigation/native'
import StackRoutes from './src/routes'

console.disableYellowBox = true;

export default function App() {
  return (
    <NavigationContainer>
      <ThemeContext> 
        <View style={styles.container}>
          <StackRoutes/>
        </View>
      </ThemeContext>
    </NavigationContainer>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#333'
  }
});