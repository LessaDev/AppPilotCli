import React from 'react';
import {Alert, Text, TouchableOpacity, View} from 'react-native';
import ExtractOptionsStyle from './ExtractOptionsStyle';

export default () => {
  const executar = () => {
    Alert.alert('Ainda não fui configurado');
  };
  return (
    <View style={ExtractOptionsStyle.BoxExtractOptions}>
      <TouchableOpacity onPress={executar}>
        <View style={ExtractOptionsStyle.ButtonsExtractOptions}>
          <Text style={ExtractOptionsStyle.buttonText}>{'Todos'}</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={executar}>
        <View style={ExtractOptionsStyle.ButtonsExtractOptions}>
          <Text style={ExtractOptionsStyle.buttonText}>{'Acúmulos'}</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={executar}>
        <View style={ExtractOptionsStyle.ButtonsExtractOptions}>
          <Text style={ExtractOptionsStyle.buttonText}>{'Trocas'}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
