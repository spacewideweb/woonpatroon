import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

export default class BouwkenmerkenSelectScreen extends Component {

    static navigationOptions = ({navigation}) => {
        const { state } = navigation;
        return {
            title: `${state.params.title}`,
            headerRight: (<View/>),
            headerLeft: (<View/>)
        };
    };
    
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={Styles.container}>
            </View>
        )
    }
}


const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF'
    }
})
