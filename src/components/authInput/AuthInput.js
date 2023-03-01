import React from 'react';
import {TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AuthInputStyle from './AuthInputStyle';

export default props => {
  return (
    <View style={[AuthInputStyle().container, props.style]}>
      <Icon name={props.icon} size={20} style={AuthInputStyle().icon} />
      <TextInput {...props} style={AuthInputStyle().input} />
    </View>
  );
};
