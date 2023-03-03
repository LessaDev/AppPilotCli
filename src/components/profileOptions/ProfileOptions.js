import React, {Component} from 'react';
import {Alert, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import ProfileOptionsStyle from './ProfileOptionsStyle';
import Auth from '../../screens/auth/Auth';

const executar = () => {
  Alert.alert('Ainda não fui configurado');
};
export class ProfileOptions extends Component {
  render() {
    return (
      <>
        <TouchableOpacity
          style={ProfileOptionsStyle().container}
          onPress={executar}>
          <Icon name="user" size={25} color="#555" />
          <Text style={ProfileOptionsStyle().tittle}>Atualizar cadastro</Text>
          <Icon name="chevron-right" size={25} color="#555" />
        </TouchableOpacity>
        <TouchableOpacity
          style={ProfileOptionsStyle().container}
          onPress={executar}>
          <Icon name="sliders" size={25} color="#555" />
          <Text style={ProfileOptionsStyle().tittle}>Configurações</Text>
          <Icon name="chevron-right" size={25} color="#555" />
        </TouchableOpacity>
        <TouchableOpacity
          style={ProfileOptionsStyle().container}
          onPress={executar}>
          <Icon name="log-out" size={25} color="#555" />
          <Text style={ProfileOptionsStyle().tittle}>Sair</Text>
          <Icon name="chevron-right" size={25} color="#555" />
        </TouchableOpacity>
      </>
    );
  }
}
