import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import React, {useState, ReactNode} from 'react';
import ExchangeCurrency from '../../components/ExchangeCurrency';
import CurrentRates from '../../components/CurrentRates';
import {x} from '../../assets/icons';
import {s} from 'react-native-size-matters';

type TabItem = {
  title: string;
  content: ReactNode;
};

const tabItems: TabItem[] = [
  {
    title: 'Exchange Currency',
    content: <ExchangeCurrency />,
  },
  {
    title: 'Current Rates',
    content: <CurrentRates />,
  },
];

const ExchangeScreen = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.select({ios: 60, android: 80})}>
      <View style={styles.header}>
        <Image source={x} style={styles.icon} />
        <Text style={styles.welcomeText}>Welcome Back</Text>
      </View>
      <View style={styles.tabContainer}>
        {tabItems.map((tab, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.tab, activeTab === index && styles.activeTab]}
            onPress={() => setActiveTab(index)}>
            <Text
              style={[
                styles.tabText,
                activeTab === index && styles.activeTabText,
              ]}>
              {tab.title}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      {tabItems[activeTab].content}
    </KeyboardAvoidingView>
  );
};

export default ExchangeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F6F8',
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
    justifyContent: 'center',
  },
  welcomeText: {
    fontSize: 18,
    fontFamily: 'Trap-Bold',
    color: '#333',
    marginLeft: 10,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  tab: {
    paddingVertical: 10,
    borderBottomWidth: 3,
    borderBottomColor: 'transparent',
  },
  activeTab: {
    borderBottomColor: '#858ae3',
  },
  tabText: {
    color: '#858ae3',
    fontSize: 16,
    fontFamily: 'Trap-Regular',
  },
  activeTabText: {
    color: '#858ae3',
    fontFamily: 'Trap-Bold',
    fontSize: 16,
  },
  icon: {
    width: s(20),
    height: s(20),
  },
});
