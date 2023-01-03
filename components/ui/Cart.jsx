import React from 'react'
import { View, StyleSheet } from 'react-native'

import Colors from '../../utils/colors'

function Cart(props) {
  return <View style={styles.inputContainer}>{props.children}</View>
}

export default Cart

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 36,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    // Android shadow
    elevation: 4,
    // iOS shadow
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
})
