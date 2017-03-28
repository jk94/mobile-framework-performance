/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
} from 'react-native';
const List = require('./src/index').List;

export default class rnTest extends Component {
    render() {
        return (
            <List/>
        );
    }
}

AppRegistry.registerComponent('rnTest', () => rnTest);
