import React, {Component} from 'react';
import {Text, View} from 'react-native';
import CommentsStyle from './CommentsStyle';

export class Comments extends Component {
  render() {
    let view = null;
    if (this.props.comments) {
      view = this.props.comments.map((item, index) => {
        return (
          <View style={CommentsStyle().commentContainer} key={index}>
            <Text style={CommentsStyle().nickname}>{item.nickname}: </Text>
            <Text style={CommentsStyle().comment}>{item.comment}</Text>
          </View>
        );
      });
      return <View style={CommentsStyle().container}>{view}</View>;
    }
  }
}
