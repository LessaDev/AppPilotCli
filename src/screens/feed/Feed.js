import React, {Component} from 'react';
import {FlatList, View} from 'react-native';
import FeedStyle from './FeedStyle';
import {Post} from '../../components/feed/post/Post';
import HeaderComponet from '../../components/hearder/Header';
export class Feed extends Component {
  state = {
    posts: [
      {
        id: Math.random(),
        nickname: 'Kelvin',
        email: 'kelvin@mail',
        image: require('../../assets/img/fachada-mane-ipanema.jpeg'),
        comments: [
          {
            nickname: 'Jota',
            comment: 'good',
          },
          {
            nickname: 'Giza',
            comment: 'chique de mais',
          },
        ],
      },
      {
        id: Math.random(),
        nickname: 'Isa',
        email: 'isa@mail',
        image: require('../../assets/img/mane-rio-flamengo.jpg'),
        comments: [],
      },
      {
        id: Math.random(),
        nickname: 'Isa',
        email: 'isa@mail',
        image: require('../../assets/img/mane-jacare.jpg'),
        comments: [
          {
            nickname: 'Jota',
            comment: 'good',
          },
          {
            nickname: 'Giza',
            comment: `muito aconchegante e com comida e bebidas extramente bem servidas`,
          },
        ],
      },
    ],
  };

  render() {
    return (
      <View style={FeedStyle().container}>
        <HeaderComponet text={'APP'} text2={'PILOT'} />
        <FlatList
          data={this.state.posts}
          keyExtractor={item => `${item.id}`}
          renderItem={({item}) => <Post key={item.id} {...item} />}
        />
      </View>
    );
  }
}
