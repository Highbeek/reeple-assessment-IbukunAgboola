import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import LottieView from 'lottie-react-native';
import logo from '../../assets/animations/logo.json';

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <LottieView source={logo} autoPlay loop style={styles.logo} />
      <Text style={styles.title}>Welcome to Our Currency Exchange</Text>
      <Text style={styles.description}>
        Exchange currencies quickly and securely with our platform. Enjoy the
        best rates and seamless transactions!
      </Text>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#555',
  },
});
