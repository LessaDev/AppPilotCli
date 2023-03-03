import React, {Component} from 'react';
import avatar from '../../assets/img/avatarEX/avatarEx.jpg';
import {Alert, Text, TouchableOpacity, View} from 'react-native';

import {Avatar} from 'react-native-elements';
import ProfileStyle from './ProfileStyle';
import HeaderComponet from '../../components/hearder/Header';
import {ProfileOptions} from '../../components/profileOptions/ProfileOptions';

const executar = () => {
  Alert.alert('Ainda não fui configurado');
};
export class Profile extends Component {
  state = {
    name: 'Lessa',
    nameUser: 'Lessa#0407',
    avatar: avatar,
  };
  render() {
    return (
      <View style={ProfileStyle().container}>
        <HeaderComponet text={'MEUS'} text2={'DADOS'} />
        <View style={ProfileStyle().boxAvatar}>
          <Avatar size={120} rounded source={avatar}>
            <Avatar.Accessory
              size={24}
              name="edit"
              color="#800"
              style={{backgroundColor: '#F2AAAA', borderRadius: 12, padding: 3}}
              overlayContainerStyle={{backgroundColor: 'transparent'}}
            />
          </Avatar>
          <Text style={ProfileStyle().name}>{this.state.name}</Text>
          <Text style={ProfileStyle().nameUser}>{this.state.nameUser}</Text>
        </View>
        <TouchableOpacity style={ProfileStyle().buttonBox} onPress={executar}>
          <View style={ProfileStyle().button}>
            <Text style={ProfileStyle().buttonText}>{'Ver mais detalhes'}</Text>
          </View>
        </TouchableOpacity>

        <View style={ProfileStyle().profileOptions}>
          <ProfileOptions />
        </View>
      </View>
    );
  }
}
