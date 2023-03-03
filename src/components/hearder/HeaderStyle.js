import {Platform, StyleSheet} from 'react-native';

export default () =>
  StyleSheet.create({
    container: {
      marginTop: Platform.OS === 'ios' ? 20 : 0,
      padding: 10,
      borderBottomWidth: 1,
      borderColor: '#BBB',
      width: '100%',
    },
    rowContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    // image: {
    //   height: 30,
    //   width: 30,
    //   resizeMode: 'contain',
    // },
    title: {
      color: '#800',
      fontFamily: 'LEMONMILK-Bold',
      height: 30,
      fontSize: 25,
    },
    title2: {
      color: '#900',
      fontFamily: 'LEMONMILK-Ligth',
      height: 30,
      fontSize: 25,
    },
  });
