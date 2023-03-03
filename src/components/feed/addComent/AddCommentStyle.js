import {StyleSheet} from 'react-native';

export default () =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 10,
      marginLeft: 5,
    },
    input: {
      width: '90%',
    },
    caption: {
      marginLeft: 10,
      fontSize: 12,
      color: '#ccc',
    },
  });
