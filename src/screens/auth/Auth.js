import React, {Component} from 'react';
import {
  Alert,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import AuthInput from '../../components/authInput/AuthInput';
import AuthStyles from './AuthStyles';
import imgBackground from '../../assets/background-auth.jpg';

const initialState = {
  name: '',
  email: 'root@mail',
  password: '123456',
  confirmPassword: '',
  stageNew: false,
};
export default class Auth extends Component {
  state = {
    ...initialState,
  };

  signinOrSignup = () => {
    if (this.state.stageNew) {
      this.signup();
    } else {
      this.signin();
    }
  };

  signup = async () => {
    Alert.alert('Cadastrado, Usuario Cadastrado');
    this.setState({stageNew: false});
  };
  signin = async () => {
    Alert.alert('Logado, Usuario logado');
  };

  render() {
    const validations = [];
    validations.push(this.state.email && this.state.email.includes('@'));
    validations.push(this.state.password && this.state.password.length >= 6);
    if (this.state.stageNew) {
      validations.push(this.state.name && this.state.name.trim().length >= 3);
      validations.push(this.state.password === this.state.confirmPassword);
    }
    const validForm = validations.reduce((t, a) => t && a);

    return (
      <ImageBackground source={imgBackground} style={AuthStyles().background}>
        <Text style={AuthStyles().tittle}>App</Text>
        <Text style={AuthStyles().tittle2}>pilot</Text>
        <View style={AuthStyles().formContainer}>
          <Text style={AuthStyles().subTitle}>
            {this.state.stageNew ? 'Cadastra-se' : 'Informe Seus Dados'}
          </Text>
          {this.state.stageNew && (
            <AuthInput
              icon="user"
              style={AuthStyles().input}
              placeholder={'Nome'}
              placeholderTextColor="#A0A0A0"
              onChangeText={name => this.setState({name})}
            />
          )}
          <AuthInput
            icon="at"
            style={AuthStyles().input}
            placeholder={'E-mail'}
            keyboardType={'email-address'}
            placeholderTextColor="#A0A0A0"
            onChangeText={email => this.setState({email})}
          />
          <AuthInput
            icon="lock"
            style={AuthStyles().input}
            secureTextEntry={true}
            placeholder={'Senha'}
            placeholderTextColor="#A0A0A0"
            onChangeText={password => this.setState({password})}
          />
          {this.state.stageNew && (
            <AuthInput
              icon="lock"
              style={AuthStyles().input}
              secureTextEntry={true}
              placeholder={'Confirmação de senha'}
              placeholderTextColor="#A0A0A0"
              onChangeText={confirmPassword => this.setState({confirmPassword})}
            />
          )}
          <TouchableOpacity onPress={this.signinOrSignup} disabled={!validForm}>
            <View
              style={[
                AuthStyles().button,
                validForm ? {} : {backgroundColor: '#AAA'},
              ]}>
              <Text style={AuthStyles().buttonText}>
                {this.state.stageNew ? 'Registrar' : 'Entrar'}
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{padding: 5, marginTop: 10, alignItems: 'center'}}
            onPress={() => this.setState({stageNew: !this.state.stageNew})}>
            <Text style={AuthStyles().buttonText}>
              {this.state.stageNew
                ? 'Já possui conta?'
                : 'Ainda não possui conta?'}
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}
