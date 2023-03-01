import React from 'react';
import {Text, View} from 'react-native';
import BalanceAreaStyle from './BalanceAreaStyle';
import AnExpire from './ anExpire/AnExpire';
import AlreadyExpired from './alreadyExpired/AlreadyExpired';

export default () => {
  return (
    <View style={BalanceAreaStyle.Box}>
      <Text style={BalanceAreaStyle.TittleBalance}> Saldo de pontos</Text>
      <View style={BalanceAreaStyle.BoxBalancePts}>
        <Text style={BalanceAreaStyle.NumberBalance}> 27.338</Text>
        <Text style={BalanceAreaStyle.ptsBalance}> pts</Text>
      </View>
      <Text style={BalanceAreaStyle.DetailBalance}> Detalhar Saldo {'>'}</Text>
      <View style={BalanceAreaStyle.BoxBalancePts}>
        <AnExpire />
        <AlreadyExpired />
      </View>
    </View>
  );
};
