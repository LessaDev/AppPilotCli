/**
 * @format
 */

import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import Navigator from './src/Navigator';
import Auth from './src/screens/auth/Auth';
AppRegistry.registerComponent(appName, () => Navigator);
