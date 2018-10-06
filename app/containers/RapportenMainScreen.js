import React, { Component } from 'react';
import { View, FlatList, Dimensions, StyleSheet } from 'react-native';
import { ZLeadDetailItem } from '../components/ZLeadDetailItem';

export default class RapportenMainScreen extends Component {

    static navigationOptions = {
        title: 'Rapporten'
    }

    constructor(props) {
        super(props);
    }

    _renderItem = (item) => {
        return (
            <ZLeadDetailItem
                text={item.text}
                onPress={() => this._onClickItem(item)}/>
        )
    }

    _onClickItem = (item) => {
        this.props.navigation.setParams({title: item.label});
        this.props.navigation.navigate('Detail', {item});
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    style={styles.wrapper}
                    data={DATA}
                    renderItem={({ item }) => this._renderItem(item)}
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
});

const DATA = [
    {
        id: 0,
        label: '4706KG - 131',
        address: 'Koraaldijk 131, 4706KG',
        text: '4706KG - 131 - 01/10/2018'
    },
    {
        id: 1,
        label: '4706ES - 21',
        address: 'Koraaldijk 131, 4706KG',
        text: '4706ES - 21 - 29/09/2018'
    }
]