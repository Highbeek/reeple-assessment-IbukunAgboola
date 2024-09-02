import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import Toast from 'react-native-toast-message';
import {xchnageIcon} from '../assets/icons';
import {s} from 'react-native-size-matters';
import CustomButton from './CustomButton';
import {useFetchExchangeRates} from '../data/fetchRate';

const ExchangeCurrency = () => {
  const [from, setFrom] = useState('0');
  const [to, setTo] = useState('0');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('NGN');
  const [hasConverted, setHasConverted] = useState(false);
  const {data: exchangeRates, isLoading, error} = useFetchExchangeRates();

  const currencyOptions = exchangeRates
    ? Object.keys(exchangeRates).map(currency => ({
        label: currency,
        value: currency,
      }))
    : [];

  const handleConversion = () => {
    if (!from || !exchangeRates) {
      Toast.show({
        type: 'error',
        position: 'top',
        text1: 'Conversion Error',
        text2: 'Please enter a value to convert.',
      });
      return;
    }

    const fromRate = exchangeRates[fromCurrency] || 1;
    const toRate = exchangeRates[toCurrency] || 1;
    const convertedValue = (parseFloat(from) * (toRate / fromRate)).toFixed(2);
    setTo(convertedValue.toString());
    setHasConverted(true);

    Toast.show({
      type: 'success',
      position: 'top',
      text1: 'Conversion Successful',
      text2: `Converted value: ${convertedValue}`,
    });
  };

  const formattedTo = parseFloat(to).toLocaleString();

  useEffect(() => {
    if (!from) {
      setTo('0');
    }
  }, [from]);

  useEffect(() => {
    if (from) {
      setHasConverted(false);
    }
  }, [from]);

  if (isLoading) {
    return (
      <View style={styles.activityIndicatorContainer}>
        <ActivityIndicator size="large" color="#061237" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.activityIndicatorContainer}>
        <Text>Error fetching exchange rates. Please try again later.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.currencyContainer}>
        <Text style={styles.country}>{fromCurrency}</Text>
        <RNPickerSelect
          onValueChange={value => setFromCurrency(value)}
          items={currencyOptions}
          value={fromCurrency}
          style={pickerSelectStyles}
          placeholder={{}}
        />

        <View style={styles.inputContainer}>
          <TextInput
            value={from}
            onChangeText={setFrom}
            style={styles.input}
            keyboardType="numeric"
          />
        </View>
      </View>

      <TouchableOpacity
        style={styles.xchangeContainer}
        onPress={handleConversion}>
        <Image source={xchnageIcon} style={styles.icon} />
      </TouchableOpacity>

      <View style={[styles.currencyContainer, {backgroundColor: '#ccc'}]}>
        <Text style={styles.country}>{toCurrency}</Text>
        <RNPickerSelect
          onValueChange={value => setToCurrency(value)}
          items={currencyOptions}
          value={toCurrency}
          style={pickerSelectStyles}
          placeholder={{}}
        />

        <View style={styles.inputContainer}>
          <TextInput
            value={formattedTo}
            style={styles.boldInput}
            keyboardType="numeric"
            editable={false}
          />
        </View>
      </View>

      <View style={styles.btn}>
        <CustomButton
          title="Convert"
          onPress={handleConversion}
          disabled={hasConverted}
        />
      </View>

      <Toast />
    </View>
  );
};

export default ExchangeCurrency;

const styles = StyleSheet.create({
  container: {
    borderRadius: s(20),
    padding: s(10),
    backgroundColor: '#f5f5f5',
  },
  currencyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e5e5e5',
    paddingVertical: s(30),
    paddingHorizontal: s(10),
    borderRadius: s(10),
    marginBottom: s(10),
    width: '100%',
  },
  xchangeContainer: {
    position: 'absolute',
    top: '30%',
    alignSelf: 'center',
    width: s(50),
    height: s(50),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: s(25),
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    zIndex: 50,
  },
  country: {
    fontFamily: 'Trap-Bold',
    fontSize: s(20),
    color: '#061237',
    marginRight: s(10),
  },
  input: {
    borderBottomWidth: 1,
    borderColor: '#ddd',
    paddingHorizontal: s(5),
    fontSize: s(24),
    fontFamily: 'Trap-Regular',
  },
  boldInput: {
    borderBottomWidth: 1,
    color: '#FF6347',
    paddingHorizontal: s(5),
    fontSize: s(24),
    fontFamily: 'Trap-Bold',
  },
  btn: {
    marginTop: s(20),
  },
  inputContainer: {
    marginLeft: 'auto',
    flexDirection: 'row',
    alignItems: 'center',
  },
  activityIndicatorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: s(30),
    height: s(30),
    resizeMode: 'contain',
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: s(16),
    paddingVertical: s(12),
    paddingHorizontal: s(10),
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: s(4),
    color: '#000',
    paddingRight: s(30),
    flex: 1,
    textAlign: 'center',
  },
  inputAndroid: {
    fontSize: s(16),
    paddingHorizontal: s(10),
    paddingVertical: s(8),
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: s(4),
    color: '#000',
    paddingRight: s(30),
    flex: 1,
    textAlign: 'center',
  },
});
