/* eslint-disable no-catch-shadow */
import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, ActivityIndicator, TextInput} from 'react-native';
import axios from 'axios';
import {SearchBar, Header} from 'react-native-elements';

import {ListItem, Separator, ConvertComponent} from '../../custom';
import {countryFilter} from '../../lib';
import styles from './style';

const Countries = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [value, setValue] = useState('');
  const [searchArray, setHolder] = useState([]);
  const [amount, setAmount] = useState('');
  const [selected, setSelected] = useState(null);
  const [convertAmount, setConvertAmount] = useState(null);

  useEffect(() => {
    fetchCountries();
  }, []);

  const fetchCountries = async () => {
    try {
      const url = 'https://restcountries.eu/rest/v2/all';
      setLoading(true);
      const {data: response} = await axios.get(url);
      setData(response);
      setLoading(false);
      setHolder(response);
    } catch (err) {
      setError(err);
    }
  };

  const fetchRate = async (alpha3Code: string) => {
    setSelected(alpha3Code);
    const amt = Number(amount);
    if (amt <= 0) {
      return;
    }
    try {
      const url = `http://data.fixer.io/api/convert?access_key=28f862745bd7554bae0de981a60cdf93&from=NGA&to=${alpha3Code}&amount=${amt}`;
      const {data: response} = await axios.get(url);
      setConvertAmount(response.results);
    } catch (err) {
      setError(err);
    }
  };

  const searchFilterFunction = (text: string) => {
    setValue(text);
    const stopFiltFunc = countryFilter(text);
    const filtered = searchArray.filter((country) => stopFiltFunc(country));
    setData(filtered);
  };

  const renderHeader = () => {
    return (
      <View>
        <SearchBar
          placeholder="Type Here..."
          lightTheme
          round
          onChangeText={(text) => searchFilterFunction(text)}
          autoCorrect={false}
          value={value}
        />
        <ConvertComponent value={amount} onChange={(value) => setAmount(value)} selected={selected} />
      </View>
    );
  };

  return (
    <View style={{flex: 1}}>
      <Header
        centerComponent={{  style: { color: '#fff' } }}
      />
      {loading ? (
        <View style={styles.indicator}>
          <ActivityIndicator />
        </View>
      ) : (
        <View style={{flex: 1}}>
          <FlatList
            data={data}
            renderItem={({item}) => (
              <ListItem
                title={item.name}
                code={item.alpha3Code}
                onPress={() => fetchRate(item.alpha3Code)}
              />
            )}
            keyExtractor={(item) => item.name}
            ItemSeparatorComponent={Separator}
            ListHeaderComponent={renderHeader}
          />
        </View>
      )}
    </View>
  );
};

export default Countries;
