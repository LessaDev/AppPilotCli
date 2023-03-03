import {Component} from 'react';
import {Image, View} from 'react-native';
import PostStyle from './PostStyle';
import Author from '../author/Author';
import {Comments} from '../comments/Comments';
import {AddComment} from '../addComent/AddComment';

export class Post extends Component {
  render() {
    return (
      <View style={PostStyle().container}>
        <Image source={this.props.image} style={PostStyle().image} />
        <Author email="lessa@mail" nickname="Lessa" />
        <Comments comments={this.props.comments} />
        <AddComment />
      </View>
    );
  }
}
