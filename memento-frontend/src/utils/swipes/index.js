import { StyleSheet, View, Text } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

export const rightSwipeActions = () => {
  return (
    <View style={[styles.swipe, styles.rightSwipe]}>
      <FontAwesome
        name="trash"
        size={20}
        color="#fff"
      />
    </View>
  )
}
export const swipeFromRightOpen = (id, handleDeleteTask) => {
  handleDeleteTask(id)
}

// export const leftSwipeActions = () => {
//   return (
//     <View style={[styles.swipe, styles.leftSwipe]}>
//       <FontAwesome5
//         name="edit"
//         size={18}
//         color="#fff"
//       />
//     </View>
//   )
// }

// export const swipeFromLeftOpen = async (item) => {
// }

const styles = StyleSheet.create({
  swipe: {
    flex: 1,
    justifyContent: 'center',
    height: "100%"
  },
  // leftSwipe: {
  //   backgroundColor: '#c9ac04',
  //   alignItems: 'flex-start',
  //   paddingLeft: 15
  // },
  rightSwipe: {
    backgroundColor: '#c33333',
    alignItems: 'flex-end',
    paddingRight: 15
  }
})