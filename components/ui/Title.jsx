import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

import Colors from '../../utils/colors'

function Title(props) {
  return <Text style={styles.title}>{props.children}</Text>
}

export default Title

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    borderWidth: 2,
    borderColor: 'white',
    padding: 12,
  },
})
