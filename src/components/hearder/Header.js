import React, {Component} from 'react';
import {Image, Text, View} from 'react-native';

import HeaderStyle from './HeaderStyle';

export class HeaderComponet extends Component {
  render() {
    return (
      <View style={HeaderStyle().container}>
        <View style={HeaderStyle().rowContainer}>
          <Text style={HeaderStyle().title}>App</Text>
          <Text style={HeaderStyle().title2}>PILOT</Text>
        </View>
      </View>
    );
  }
}

export default HeaderComponet;
