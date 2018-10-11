import React, { Component } from 'react';
import { View, TouchableOpacity, Text ,StyleSheet, Image, Dimensions } from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';

const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;

export default class LeadsMainScreen extends Component {

    static navigationOptions = {
        title: 'Mijn leads'
        
    }

    constructor(props) {
        super(props);
    }

    _onClickStatistieken = () => {
        this.props.navigation.navigate('Statistieken');
    }

    _onClickOverzicht = () => {
        this.props.navigation.navigate('Overzicht');
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity 
                    style={styles.itemContainer}
                    onPress={this._onClickStatistieken}>
                    <Image source={require('../res/images/Rectangle.png')} style={styles.itemBackground}/>
                    <View style={styles.itemWrapper}>
                        <Text style={styles.itemText}>Statistieken</Text>
                        <Icon name="piechart" size={36} color="#4285F4"/>
                        {/* <Image source={require('../res/images/chart-bar.png')} style={styles.itemIcon}/> */}
                    </View>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.itemContainer}
                    onPress={this._onClickOverzicht}>
                    <Image source={require('../res/images/Rectangle.png')} style={styles.itemBackground}/>
                    <View style={styles.itemWrapper}>
                        <Text style={styles.itemText}>Overzicht</Text>
                        <Icon name="idcard" size={36} color="#4285F4"/>
                        {/* <Image source={require('../res/images/address-card.png')} style={styles.itemIcon}/> */}
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center'
    },
    itemContainer: {
        width: WIDTH,
        height: HEIGHT / 4,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -30,
    },
    itemBackground: {
        flex: 1,
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        resizeMode: 'stretch'
    },
    itemWrapper: {
        width: WIDTH - 140,
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    itemText: {
        fontSize: 24,
        color: '#666666'
    },
    itemIcon: {
        width: 36,
        height: 28,
        resizeMode: 'cover'
    },
})