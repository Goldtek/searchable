import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    height: 100,
    padding: 5,
    width: '100%',
  },
  currencyContainer: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    marginBottom: 5,
  },
  ngaLabel: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  ngaInput: {
    height: 35,
    borderColor: 'gray',
    borderWidth: 1,
    width: 200,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  selectedContainer: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
  },
  selectedLabel: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  selectedAmount: {
    height: 30,
    borderColor: 'gray',
    borderWidth: 1,
    width: 200,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    justifyContent: 'center',
  },
});

export default styles;
