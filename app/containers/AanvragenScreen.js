import React, { Component } from 'react';
import { View, StyleSheet, Dimensions, Image, Text } from 'react-native';
import { ZSubmitButton } from '../components/ZSubmitButton';
const WIDTH = Dimensions.get('window').width;

export default class AanvragenScreen extends Component {

    static navigationOptions = {
        title: 'Aanvragen Rapport'
    }

    constructor(props) {
        super(props);
    }

    _onSubmit = () => {
        this.props.navigation.navigate('Adresgegevens', {title: 'Adresgegevens'});
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.wrapper}>
                    <Image source={require('../res/images/BG.png')} style={styles.background}/>
                    <View style={styles.mainWrapper}>
                        <Text style={styles.description}>
                            In twee stappen stellen we een uitgebreid waarderapport op, geheel in jouw huisstijl.
                        </Text>
                        <ZSubmitButton
                            label="Starten"
                            height={60}
                            style={styles.buttonWrapper}
                            onPress={this._onSubmit}/>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center'
    },
    wrapper: {
        width: WIDTH,
        height: 250,
        justifyContent: 'center',
        alignItems: 'center'
    },
    mainWrapper: {
        width: WIDTH - 120,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    background: {
        flex: 1,
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        resizeMode: 'stretch'
    },
    description: {
        fontSize: 16,
        marginLeft: 8,
        marginRight: 8,
        textAlign: 'center'
    },
    buttonWrapper: {
        width: '100%',
        height: 60,
        marginTop: 20,
    }
})