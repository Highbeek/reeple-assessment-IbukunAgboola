// WelcomeScreen.tsx
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import LottieView from 'lottie-react-native';
import logo from '../../assets/animations/logo.json';
import CustomButton from '../../components/CustomButton';

const WelcomeScreen = ({navigation}: any) => {
  return (
    <View style={styles.container}>
      <LottieView source={logo} autoPlay loop style={styles.logo} />
      <Text style={styles.title}>XchangePro</Text>
      <Text style={styles.title}>Welcome to Your Currency Exchange App</Text>
      <Text style={styles.description}>
        Exchange currencies quickly and securely with our platform. Enjoy the
        best rates and seamless transactions!
      </Text>
      <View style={styles.btn}>
        <CustomButton
          title="Continue"
          onPress={() => {
            navigation.navigate('TabScreens');
          }}
        />
      </View>
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
    alignSelf: 'center',
    marginTop: 200,
  },
  title: {
    fontSize: 24,
    color: '#061237',
    marginBottom: 10,
    fontFamily: 'Trap-Bold',
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#555',
    fontFamily: 'Trap-Regular',
    marginBottom: 20,
    lineHeight: 21,
  },
  btn: {
    width: '100%',
    marginTop: 'auto',
    marginBottom: 20,
  },
});
