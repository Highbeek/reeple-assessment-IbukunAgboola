import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {useFetchExchangeRates} from '../data/fetchRate';
import {currencyFlags} from '../assets/constants';
import {s} from 'react-native-size-matters';

interface RateInfo {
  rate: number;
}

const CurrentRates = () => {
  const {data, isLoading, error} = useFetchExchangeRates();

  if (isLoading) {
    return (
      <View style={styles.activityIndicatorContainer}>
        <ActivityIndicator size="large" color="#061237" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text>Error fetching exchange rates. Please try again later.</Text>
      </View>
    );
  }

  const conversionRates = data || {};

  const rateEntries = Object.entries(conversionRates);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Current Rates</Text>
      <FlatList
        data={rateEntries}
        keyExtractor={([currency]) => currency}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.flatListContent}
        renderItem={({item}) => {
          const [currency, rateInfo] = item as [string, RateInfo];

          const flagSource = currencyFlags[currency];

          const rate = typeof rateInfo === 'number' ? rateInfo : null;

          const rateValue = rate !== null ? rate?.toFixed(2) : 'N/A';

          return (
            <View style={styles.row}>
              {flagSource ? (
                <Image source={flagSource} style={styles.flag} />
              ) : (
                <View style={styles.flag} />
              )}
              <Text style={styles.currencyCode}>{currency}</Text>
              <Text style={styles.rate}>{rateValue}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default CurrentRates;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 20,
    fontFamily: 'Trap-Bold',
    marginBottom: 16,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    backgroundColor: '#fff',
    paddingVertical: s(20),
    paddingHorizontal: s(8),
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    borderRadius: s(8),
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    zIndex: 50,
  },
  flag: {
    width: s(30),
    height: s(30),
    resizeMode: 'cover',
    marginRight: 10,
    borderRadius: s(15),
    borderWidth: 1,
    borderColor: 'transparent',
  },
  currencyCode: {
    fontSize: 16,
    flex: 1,
    fontFamily: 'Trap-Bold',
    color: '#061237',
  },
  activityIndicatorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rate: {
    fontSize: 16,
    fontFamily: 'Trap-Bold',
    color: '#061237',
  },
  flatListContent: {
    paddingBottom: s(16),
  },
});
