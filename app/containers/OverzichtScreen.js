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
        this.props.navigation.navigate('Detail', { item });
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
        name: 'Paul Van Loon',
        email: 'paulvanloon88@hotmail.com',
        phone: '+31(06) 658 849 55',
        address: 'Koraaldijk 131, 4706KG',
        gebied: 'woonoppervlakte',
        height: '125m2',
        bouw: 'Gebouwd in',
        year: 1980,
        schatting: 'Waardeschatting van',
        price: '210.000',
        type: 'Tussenwoning',
        text: 'Paul van Loon - 23 - 09 - 2018',
    },
    {
        id: 1,
        name: 'Werner',
        email: 'paulvanloon88@hotmail.com',
        phone: '+31(06) 658 849 55',
        address: 'Koraaldijk 131, 4706KG',
        gebied: 'woonoppervlakte',
        height: '125m2',
        bouw: 'Gebouwd in',
        year: 1980,
        schatting: 'Waardeschatting van',
        price: '210.000',
        type: 'Tussenwoning',
        text: 'Werner - 23 - 09 - 2018'
    },
    {
        id: 2,
        name: 'Emiel Van Doorn',
        email: 'paulvanloon88@hotmail.com',
        phone: '+31(06) 658 849 55',
        address: 'Koraaldijk 131, 4706KG',
        gebied: 'woonoppervlakte',
        height: '125m2',
        bouw: 'Gebouwd in',
        year: 1980,
        schatting: 'Waardeschatting van',
        price: '210.000',
        type: 'Tussenwoning',
        text: 'Emiel van Doorn - 23 - 09 - 2018'
    },
    {
        id: 3,
        name: 'Geert Jacob',
        email: 'paulvanloon88@hotmail.com',
        phone: '+31(06) 658 849 55',
        address: 'Koraaldijk 131, 4706KG',
        gebied: 'woonoppervlakte',
        height: '125m2',
        bouw: 'Gebouwd in',
        year: 1980,
        schatting: 'Waardeschatting van',
        price: '210.000',
        type: 'Tussenwoning',
        text: 'Geert Jacob - 23 - 09 - 2018'
    },
    {
        id: 4,
        name: 'Emma Van Dam',
        email: 'paulvanloon88@hotmail.com',
        phone: '+31(06) 658 849 55',
        address: 'Koraaldijk 131, 4706KG',
        gebied: 'woonoppervlakte',
        height: '125m2',
        bouw: 'Gebouwd in',
        year: 1980,
        schatting: 'Waardeschatting van',
        price: '210.000',
        type: 'Tussenwoning',
        text: 'Emma van Dam - 23 - 09 - 2018'
    },
    {
        id: 5,
        name: 'Heleen de Bruin',
        email: 'heleendebruin23@hotmail.com',
        phone: '+31(06) 658 849 25',
        address: 'Koraaldijk 131, 4706KG',
        gebied: 'woonoppervlakte',
        height: '125m2',
        bouw: 'Gebouwd in',
        year: 1980,
        schatting: 'Waardeschatting van',
        price: '210.000',
        type: 'Tussenwoning',
        text: 'Heleen de Bruin - 23 - 09 - 2018'
    },
    {
        id: 6,
        name: 'Annelies Van Den Brink',
        email: 'anneliesvandenbrink@hotmail.com',
        phone: '+31(06) 658 829 55',
        address: 'Koraaldijk 131, 4706KG',
        gebied: 'woonoppervlakte',
        height: '125m2',
        bouw: 'Gebouwd in',
        year: 1980,
        schatting: 'Waardeschatting van',
        price: '210.000',
        type: 'Tussenwoning',
        text: 'Annelies van den Brink - 23 - 08 - 2018'
    },
    {
        id: 7,
        name: 'Sander Van Dorn',
        email: 'sandervandorn88@hotmail.com',
        phone: '+31(06) 654 849 55',
        address: 'Koraaldijk 131, 4706KG',
        gebied: 'woonoppervlakte',
        height: '125m2',
        bouw: 'Gebouwd in',
        year: 1980,
        schatting: 'Waardeschatting van',
        price: '210.000',
        type: 'Tussenwoning',
        text: 'Sander van Dorn - 23 - 09 - 2018'
    },
    {
        id: 8,
        name: 'Eefke Van Vliet',
        email: 'efkevanvliet23@hotmail.com',
        phone: '+31(06) 658 849 52',
        address: 'Koraaldijk 131, 4706KG',
        gebied: 'woonoppervlakte',
        height: '125m2',
        bouw: 'Gebouwd in',
        year: 1980,
        schatting: 'Waardeschatting van',
        price: '210.000',
        type: 'Tussenwoning',
        text: 'Eefke van Vliet - 23 - 09 - 2018'
    },
    {
        id: 9,
        name: 'Eva Van Dongen',
        email: 'evavandongen88@hotmail.com',
        phone: '+31(06) 658 849 51',
        address: 'Koraaldijk 131, 4706KG',
        gebied: 'woonoppervlakte',
        height: '125m2',
        bouw: 'Gebouwd in',
        year: 1980,
        schatting: 'Waardeschatting van',
        price: '210.000',
        type: 'Tussenwoning',
        text: 'Eva van Dongen - 23 - 09 - 2018'
    }
]

