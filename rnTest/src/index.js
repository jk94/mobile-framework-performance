/**
 * Created by AW14353 on 27.03.2017.
 */
import React, {Component} from 'react';
import {
    View,
    TextInput,
    Text,
    ScrollView,
    Dimensions
} from 'react-native';

const size = Dimensions.get('window');

export class List extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '0'
        }
    }

    render() {
        let items = [];
        for (let index = 0; index < this.state.value; index++) {
            items.push(<View key={index}><Text>Some Text {index}</Text></View>);
        }

        return (
            <View style={{height: size.height, width: size.width}}>
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(text) => this.setState({value: text})}
                    value={this.state.value}
                    defaultValue=""
                />
                <ScrollView style={{flex: 1}}>
                    {items}
                </ScrollView>
            </View>
        )

    }
}