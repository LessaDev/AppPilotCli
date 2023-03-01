/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import Auth from './src/screens/auth/Auth';
import Balance from './src/screens/balance/Balance';

AppRegistry.registerComponent(appName, () => Balance);
