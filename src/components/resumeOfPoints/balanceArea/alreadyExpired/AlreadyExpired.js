import React from 'react';
import {Text, View} from 'react-native';
import BalanceAreaStyle from '../BalanceAreaStyle';
import AlreadyExpiredStyle from './AlreadyExpiredStyle';

export default () => {
  return (
    <View style={AlreadyExpiredStyle.BoxAlreadyExpired}>
      <Text>
        <Text style={BalanceAreaStyle.TittleBalane}> Expirados</Text>
        <Text style={{fontWeight: 'bold'}}> {'>'}</Text>
      </Text>
      <Text>
        <Text style={{fontWeight: 'bold'}}> 0</Text>
        <Text style={BalanceAreaStyle.TittleBalance}> pts</Text>
      </Text>
    </View>
  );
};
