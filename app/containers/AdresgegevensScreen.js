import React, { Component } from 'react';
import { View, StyleSheet, Dimensions, Image, Text } from 'react-native';
import { ZTextInput } from '../components/ZTextInput';
import { ZSubmitButton } from '../components/ZSubmitButton';
import { ZSelectInput } from '../components/ZSelectInput';

const WIDTH = Dimensions.get('window').width;

const PAGINATIONS = [
    require('../res/images/Pagination1.png'),
    require('../res/images/Pagination2.png'),
    require('../res/images/Pagination3.png')
]

export default class AdresgegevensScreen extends Component {

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
        this.state = {
            page: 0,
            pagination: PAGINATIONS[0],
        }
    }

    changeTitle = (text) => {
        const { setParams } = this.props.navigation;
        setParams({title: text});
    }

    _clickedVolgende = () => {
        this.setState({
            page: 1,
            pagination: PAGINATIONS[1],
        });

        this.changeTitle('Bouwkenmerken');
    }

    _clickedAfronden = () => {
        this.setState({
            page: 2,
            pagination: PAGINATIONS[2]
        });

        this.changeTitle('Aanvraag klaar!');
    }

    clickPropertyType = () => {
        this.props.navigation.navigate('Bouwkenmerken', {title: 'Woningtype', type: 2});
    }

    clickWoonoppervlakte = () => {
        this.props.navigation.navigate('Bouwkenmerken', {title: 'Woonoppervlakte', type: 1});
    }

    clickBouwjaar = () => {
        this.props.navigation.navigate('Bouwkenmerken', {title: 'Bouwjaar', type:0});
    }

    renderPages = (page) => {
        if (page === 0) {
            return (
                <View style={styles.firstContainer}>
                    <Image source={require('../res/images/BG.png')} style={styles.background}/>
                    <ZTextInput
                        style={styles.itemInputContainer}
                        placeholder="Enter postcode"
                        password={false}
                        label="Postcode"/>
                    <ZTextInput
                        style={styles.itemInputContainer}
                        placeholder="Enter huisnummer"
                        password={false}
                        label="Huisnummer"/>
                    <ZSubmitButton
                        label="Volgende"
                        height={60}
                        style={styles.buttonContainer}
                        onPress={this._clickedVolgende}/>
                </View>
            )
        } else if (page === 1) {
            return (
                <View style={styles.secondContainer}>
                    <Image source={require('../res/images/BG.png')} style={styles.background}/>
                    <ZSelectInput
                        style={styles.itemInputContainer1}
                        m2={false}
                        text=""
                        label="Bouwjaar"
                        onPress={this.clickBouwjaar}/>
                    <ZSelectInput
                        style={styles.itemInputContainer1}
                        m2={true}
                        text=""
                        label="Woonoppervlakte"
                        onPress={this.clickWoonoppervlakte}/>
                    <ZSelectInput
                        style={styles.itemInputContainer1}
                        m2={false}
                        text=""
                        label="Property Type"
                        onPress={this.clickPropertyType}/>
                    <ZSubmitButton
                        label="Afronden"
                        height={60}
                        style={styles.buttonContainer}
                        onPress={this._clickedAfronden}/>
                </View>
            )
        } else {
            return (
                <View style={styles.thirdContainer}>
                    <Image source={require('../res/images/BG.png')} style={styles.background}/>
                    <Text style={{textAlign:'center', fontSize: 17, width: WIDTH - 160,}}>
                        We hebben je aanvraag voor een uitgebreid rapport ontvangen.
                    </Text>
                    <Text style={{textAlign:'center', marginTop: 15, fontSize: 17,width: WIDTH - 160,}}>
                        Over enkele momenten kun je de resultaten terugvinden in de 'Rapporen' omgeving van de app.
                    </Text>
                    <Text style={{textAlign:'center', fontWeight: '500', color: '#4CD964', marginTop: 20, fontSize: 19}}>Veel success!</Text>
                </View>
            )
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.wrapper}>
                    {this.renderPages(this.state.page)}
                    <View style={styles.paginationContainer}>
                        <Image source={this.state.pagination} style={{position:'absolute', top: 0, left: 0, width: '100%', height: '100%', resizeMode:'cover'}}/>
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
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    paginationContainer: {
        width: '100%',
        height: 120,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -50,
    },
    firstContainer: {
        width: WIDTH,
        height: 380,
        justifyContent: 'center',
        alignItems: 'center',
    },
    secondContainer: {
        width: WIDTH, 
        height: 460,
        justifyContent: 'center',
        alignItems: 'center'
    },
    thirdContainer: {
        width: WIDTH,
        height: 300,
        justifyContent: 'center',
        alignItems: 'center',
    },

    background: {
        width: '100%',
        height: '100%',
        flex: 1,
        position: 'absolute',
        top: 0,
        left: 0,
        resizeMode: 'stretch'
    },
    itemInputContainer: {
        width: WIDTH * 0.7, 
        height: '23%',
        marginBottom: 10,
    },
    itemInputContainer1: {
        width: WIDTH  * 0.7, 
        height: '17.5%',
        marginBottom: 10,
    },
    buttonContainer: {
        width: WIDTH * 0.7, 
        height: 60,
    }
})