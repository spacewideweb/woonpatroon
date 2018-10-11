import React, { Component } from 'react';
import { View,  Image, StyleSheet, Dimensions } from 'react-native';

import { ZTextInput } from '../components/ZTextInput';
import { ZPasswordInput } from '../components/ZPasswordInput';
import { ZSubmitButton } from '../components/ZSubmitButton';

const WIDTH = Dimensions.get('window').width;

export default class SignInScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showPassword: true,
        }
    }

    _onSubmitLogin = () => {
        this.props.navigation.navigate('App');
    }


    onShowPassword = () => {
        this.setState({
            showPassword: !this.state.showPassword
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image source={require('../res/images/wp-logo-2.png')} style={styles.logo}/>
                </View>
                <View style={styles.mainContainer}>
                    <View style={styles.main}>
                        <Image source={require('../res/images/BG.png')} style={styles.inputBackground}/>
                        <ZTextInput 
                            style={styles.itemContainer}
                            placeholder="Enter emailadres"
                            password={false}
                            label="Emailadres"/>
                        <ZPasswordInput 
                            style={styles.itemContainer}
                            placeholder="Enter watchwoord"
                            password={this.state.showPassword}
                            onShowPassword={this.onShowPassword}
                            label="Watchtwoord"/>
                        <ZSubmitButton
                            label="Log In"
                            height={60}
                            style={styles.buttonContainer}
                            onPress={this._onSubmitLogin}/>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF'
    },
    header: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    mainContainer: {
        flex: 3,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    logo: {
        width: WIDTH - 100,
        height: (WIDTH - 100)/7,
    },
    main: {
        width: WIDTH,
        height: 400,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputBackground: {
        flex: 1,
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    },

    itemContainer: {
        width: WIDTH - 100,
        height: 90,
        marginBottom: 20,
    },
    buttonContainer: {
        width: WIDTH - 100, 
        height: 60,
    }
})