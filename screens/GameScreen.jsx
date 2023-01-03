import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Alert } from 'react-native'

import Title from '../components/ui/Title'
import NumberContainer from '../components/game/NumberContainer'
import PrimaryButton from '../components/ui/PrimaryButton'
import Cart from '../components/ui/Cart'
import InstructionText from '../components/ui/InstructionText'

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude)
  } else {
    return rndNum
  }
}

let minBoundary = 1
let maxBoundary = 100

function GameScreen(props) {
  const initialGuess = generateRandomBetween(1, 100, props.userNumber)
  const [currentGuess, setCurrentGuess] = useState(initialGuess)

  useEffect(() => {
    if (currentGuess === props.userNumber) {
      props.onGameOver()
    }
  }, [currentGuess, props.userNumber, props.onGameOver])

  function nextGuessHandler(direction) {
    if (
      (direction === 'lower' && currentGuess < props.userNumber) ||
      (direction === 'greate' && currentGuess > props.userNumber)
    ) {
      Alert.alert("Don't lie!", 'You know that this is wrong...', [
        { text: 'Sorry', style: 'cancel' },
      ])
      return
    }
    if (direction === 'lower') {
      maxBoundary = currentGuess
    } else {
      minBoundary = currentGuess + 1
    }
    console.log(minBoundary, maxBoundary)
    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    )
    setCurrentGuess(newRndNumber)
  }

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Cart>
        <InstructionText style={styles.InstructionText}>Higher or lower?</InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
              -
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
              +
            </PrimaryButton>
          </View>
        </View>
      </Cart>
      {/* <View>LOG ROUNDS</View> */}
    </View>
  )
}

export default GameScreen

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    paddingTop: 44,
  },
  InstructionText: {
    marginBottom: 12
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1,
  },
})
