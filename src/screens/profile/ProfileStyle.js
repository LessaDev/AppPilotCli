import {StyleSheet} from 'react-native';

export default () =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    boxAvatar: {
      paddingTop: 35,
      alignItems: 'center',
      justifyContent: 'center',
    },
    avatarIcon: {
      size: 90,
    },
    name: {
      fontSize: 30,
      marginTop: 5,
      fontFamily: 'LEMONMILK-Regular',
    },
    buttonBox: {
      alignItems: 'center',
    },
    button: {
      marginTop: 40,
      borderWidth: 1,
      borderColor: '#800',
      borderRadius: 8,
      width: '90%',
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonText: {
      fontFamily: 'LEMONMILK-Medium',
      fontSize: 15,
      color: '#800',
    },
    profileOptions: {
      flex: 1,
      width: '90%',
      height: 50,
      alignItems: 'center',
      marginLeft: 20,
      marginTop: 40,
    },
  });
