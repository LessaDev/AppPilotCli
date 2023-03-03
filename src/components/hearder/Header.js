import React from 'react';
import {Text, View} from 'react-native';

import HeaderStyle from './HeaderStyle';

export default props => {
  return (
    <View style={HeaderStyle().container}>
      <View style={HeaderStyle().rowContainer}>
        <Text style={HeaderStyle().title}>{props.text}</Text>
        <Text style={HeaderStyle().title2}>{props.text2}</Text>
      </View>
    </View>
  );
};
