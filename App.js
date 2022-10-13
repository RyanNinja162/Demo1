/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import RestaurantList from './src/Screens/RestaurantList';

const App = () => {

  const [data, setData] = useState([]);
  const [limit, setLimit] = useState(20);
  const [loading, setLoading] = useState(false);

  const loadData = async () => {
    setLoading(true);
    await fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => {
        setData(json);
        console.log('data', json.length);
      })
    setLoading(false)
  }

  useEffect(() => {
    loadData()
  }, [])

  return (
    <SafeAreaView >
      {loading ? <View style={styles.loadingContainer}>
        <Text>Loading</Text>
      </View> : <RestaurantList data={data} />}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  loadingContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
