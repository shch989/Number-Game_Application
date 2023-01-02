import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

import Colors from '../utils/colors'

function Title(props) {
  return (
    <View>
      <Text style={styles.title}>{props.children}</Text>
    </View>
  )
}

export default Title

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.accent500,
    textAlign: 'center',
    borderWidth: 2,
    borderColor: Colors.accent500,
    padding: 12
  }
})

