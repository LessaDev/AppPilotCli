import {Gravatar} from 'react-native-gravatar';
import {Text, View} from 'react-native';
import AuthorStyle from './AuthorStyle';

export default props => {
  return (
    <View style={AuthorStyle().container}>
      <Gravatar
        options={{email: props.email, secure: true}}
        style={AuthorStyle().avatar}
      />
      <Text style={AuthorStyle().nickname}>{props.nickname}</Text>
    </View>
  );
};
