import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

const Home = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/logo.jpg')} style={styles.logo}/>
      <Text>Seu app de apoio na estrada</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
  },
  logo: {
    width: 100,
    height: 100
  }
})

export default Home