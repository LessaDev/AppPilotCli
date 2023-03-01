import React from 'react';
import {Text, View} from 'react-native';
import BalanceAreaStyle from '../BalanceAreaStyle';
import AnExpireStyle from './AnExpireStyle';

export default () => {
  return (
    <View style={AnExpireStyle.BoxAnExpire}>
      <Text>
        <Text style={BalanceAreaStyle.TittleBalance}> A expirar</Text>
        <Text style={{fontWeight: 'bold'}}> {'>'}</Text>
      </Text>
      <Text>
        <Text style={{fontWeight: 'bold'}}> 0</Text>
        <Text style={BalanceAreaStyle.TittleBalance}> pts</Text>
      </Text>
    </View>
  );
};
