import React from 'react'
import { View, Text, Image, StyleSheet, ImageBackground } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'

const Home = () => {
  return (
    <ImageBackground
      source={require('../../assets/background.png')}
      style={styles.container}
    >

      <View style={styles.main}>
        <Image source={require('../../assets/logo.jpg')} style={styles.logo} />

        <View style={styles.boxText}>
          <Text style={styles.title}>Seu APP de apoio e ajuda na estrada !</Text>
          <Text style={styles.description}>Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente.</Text>
        </View>
      </View>

      <RectButton style={styles.button} onPress={() => {}}>
        <Text style={styles.buttonText}>
          Entrar
        </Text>
      </RectButton>
    </ImageBackground >
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
  },
  logo: {
    width: 150,
    height: 150,
    borderRadius: 10,
    alignSelf: 'center',
  },
  main: {
    flex: 1,
    justifyContent: 'flex-start',
  },

  boxText: {
    flex: 1,
    maxWidth: 280,
    maxHeight: 350,
    borderRadius: 10,
    top: 40,
    left: 20,
    padding: 24
  },
  title: {
    color: 'white',
    fontSize: 34,
    maxWidth: 260,
    marginTop: 64,
    opacity: 1,
    fontFamily: 'Roboto',
    fontWeight: 'bold'
  },
  description: {
    color: 'white',
    fontSize: 24,
    marginTop: 16,
    maxWidth: 260,
    lineHeight: 24
  },
  button: {
    backgroundColor: '#34CB79',
    height: 60,
    flexDirection: 'row',
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    marginTop: 8
  },
  buttonText: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    color: '#fff',
    fontSize: 24
  }
})

export default Home