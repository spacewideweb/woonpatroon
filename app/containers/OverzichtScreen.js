import React, { Component } from 'react';
import { View, StyleSheet, Dimensions, FlatList, Platform, TouchableOpacity, Image } from 'react-native';

import { ZLeadDetailItem } from '../components/ZLeadDetailItem';

const WIDTH = Dimensions.get('window').width;

export default class OverzichtScreen extends Component {

    static navigationOptions = {
        title: 'Lead details',
        headerRight: (<View/>)
    }

    constructor(props) {
        super(props);
    }

    _onDetailItem = (item) => {
        return (
            <ZLeadDetailItem
                text={item.text}
                onPress={() => this._onClickItem(item)}/>
        )
    }

    _onClickItem = (item) => {

    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    style={styles.wrapper}
                    data={DATA}
                    renderItem={({ item }) => this._onDetailItem(item)}
                    keyExtractor={(item, index) => index.toString()}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF'
    },
    wrapper: {
        flex: 1,
    }
})

const DATA = [
    {
        id: 0,
        text: 'Paul van Loon - 23 - 09 - 2018',
    },
    {
        id: 1,
        text: 'Werner - 23 - 09 - 2018'
    },
    {
        id: 2,
        text: 'Emiel van Doorn - 23 - 09 - 2018'
    },
    {
        id: 3,
        text: 'Geert Jacob - 23 - 09 - 2018'
    },
    {
        id: 4,
        text: 'Emma van Dam - 23 - 09 - 2018'
    },
    {
        id: 5,
        text: 'Heleen de Bruin - 23 - 09 - 2018'
    },
    {
        id: 6,
        text: 'Annelies van den Brink - 23 - 08 - 2018'
    },
    {
        id: 7,
        text: 'Sander van Dorn - 23 - 09 - 2018'
    },
    {
        id: 8,
        text: 'Eefke van Vliet - 23 - 09 - 2018'
    },
    {
        id: 9,
        text: 'Eva van Dongen - 23 - 09 - 2018'
    }
]

