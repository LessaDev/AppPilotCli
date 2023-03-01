import {StyleSheet} from 'react-native';

export default () =>
  StyleSheet.create({
    container: {},
    background: {
      flex: 1,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    tittle: {
      fontFamily: 'LEMONMILK-Bold',
      color: 'white',
      fontSize: 70,
      marginBottom: -30,
      marginTop: -40,
    },
    tittle2: {
      fontFamily: 'LEMONMILK-Light',
      color: 'white',
      fontSize: 55,
      marginBottom: 10,
    },
    subTitle: {
      color: 'white',
      fontSize: 15,
      textAlign: 'center',
      marginBottom: 10,
    },
    input: {
      marginTop: 10,
      backgroundColor: '#FFF',
    },
    formContainer: {
      backgroundColor: 'rgba(0,0,0,0.6)',
      borderRadius: 20,
      padding: 20,
      width: '90%',
    },
    button: {
      backgroundColor: '#800',
      borderRadius: 20,
      marginTop: 10,
      padding: 10,
      alignItems: 'center',
    },
    buttonText: {
      color: '#FFF',
    },
  });
