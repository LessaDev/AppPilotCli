import {StyleSheet} from 'react-native';

export default () =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 10,
      marginLeft: 5,
      width: '100%',
      height: 50,
    },
    tittle: {
      fontSize: 20,
      fontFamily: 'coolvetica',
      justifyContent: 'space-between',
    },
  });
