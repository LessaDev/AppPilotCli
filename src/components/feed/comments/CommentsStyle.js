import {StyleSheet} from 'react-native';

export default () =>
  StyleSheet.create({
    container: {
      flex: 1,
      marginLeft: 2,
    },
    commentContainer: {
      flexDirection: 'row',
      marginTop: 2,
      width: '92%',
    },
    nickname: {
      marginLeft: 5,
      fontWeight: 'bold',
      color: '#444',
    },
    comment: {
      color: '#555',
    },
  });
