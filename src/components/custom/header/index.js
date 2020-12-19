import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, TextInput} from 'react-native';

import styles from './styles';

const Header = ({amount, selected, onChange, value}) => (
  <View style={styles.container}>
    <View style={styles.currencyContainer}>
      <Text style={styles.ngaLabel}> NGA </Text>
      <TextInput
        style={styles.ngaInput}
        onChangeText={(text) => onChange(text)}
        value={value}
        keyboardType="numeric"
      />
    </View>
    
      <View style={styles.selectedContainer}>
        <Text style={styles.selectedLabel}> {selected} </Text>
       {amount ? (<Text style={styles.selectedAmount}> {amount} </Text> ) : null} 
      </View>
    
  </View>
);

Header.propTypes = {
  amount: PropTypes.string,
  selected: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.string,
};

export default Header;
