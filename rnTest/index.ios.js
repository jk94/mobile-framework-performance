/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import List from './src/index';

export default class rnTest extends Component {
    render() {
        return (
            <List/>
        );
    }
}

AppRegistry.registerComponent('rnTest', () => rnTest);
