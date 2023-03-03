import React, {Component} from 'react';
import {FlatList, StatusBar, View} from 'react-native';
import BalancedArea from '../../components/resumeOfPoints/balanceArea/BalancedArea';
import ExtractOptions from '../../components/resumeOfPoints/extractPtsArea/extractOptions/ExtractOptions';
import ExtractDetail from '../../components/resumeOfPoints/extractPtsArea/extractDetail/ExtractDetail';
import BalanceStyle from './BalanceStyle';

export default class Balance extends Component {
  state = {
    extractList: [
      {
        id: Math.random(),
        date: '02 Janeiro',
        partner: 'Bolinho de Bacalhau',
        score: '35',
      },
      {
        id: Math.random(),
        date: '02 Janeiro',
        partner: 'Bolinho de Bacalhau',
        score: '35',
      },
      {
        id: Math.random(),
        date: '02 Janeiro',
        partner: 'Bolinho de Bacalhau',
        score: '35',
      },
      {
        id: Math.random(),
        date: '02 Janeiro',
        partner: 'Bolinho de Bacalhau',
        score: '35',
      },
      {
        id: Math.random(),
        date: '02 Janeiro',
        partner: 'Bolinho de Bacalhau',
        score: '35',
      },
      {
        id: Math.random(),
        date: '02 Janeiro',
        partner: 'Bolinho de Bacalhau',
        score: '35',
      },
      {
        id: Math.random(),
        date: '02 Janeiro',
        partner: 'Bolinho de Bacalhau',
        score: '35',
      },
      {
        id: Math.random(),
        date: '02 Janeiro',
        partner: 'Bolinho de Bacalhau',
        score: '35',
      },
    ],
  };
  render() {
    return (
      <View style={BalanceStyle().container}>
        <BalancedArea />
        <ExtractOptions />
        <FlatList
          style={BalanceStyle().extractlistItens}
          data={this.state.extractList}
          keyExtractor={item => `${item.id}`}
          renderItem={({item}) => <ExtractDetail key={item.id} {...item} />}
        />
      </View>
    );
  }
}
