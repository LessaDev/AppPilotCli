import React, {Component} from 'react';
import {
  Alert,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import AddCommentStyle from './AddCommentStyle';
import Icon from 'react-native-vector-icons/FontAwesome';

export class AddComment extends Component {
  state = {
    comment: '',
    editMode: false,
  };

  handleAddComment = () => {
    Alert.alert('Adicionando!', this.state.comment);
  };

  render() {
    let commentArea = null;
    if (this.state.editMode) {
      commentArea = (
        <View style={AddCommentStyle().container}>
          <TextInput
            placeholder="Pode comentar..."
            style={AddCommentStyle().input}
            value={this.state.comment}
            onChangeText={comment => this.setState({comment})}
            onSubmitEditing={this.handleAddComment}
          />
          <TouchableWithoutFeedback
            onPress={() => this.setState({editMode: false})}>
            <Icon name="close" size={15} color="#555" />
          </TouchableWithoutFeedback>
        </View>
      );
    } else {
      commentArea = (
        <TouchableWithoutFeedback
          onPress={() => this.setState({editMode: true})}>
          <View style={AddCommentStyle().container}>
            <Icon name="comment-o" size={25} color="#555" />
            <Text style={AddCommentStyle().caption}>
              Adicione um comentário...
            </Text>
          </View>
        </TouchableWithoutFeedback>
      );
    }
    return <View>{commentArea}</View>;
  }
}
