import React, { Component } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { WheelPicker } from 'react-native-wheel-picker-android';

const BOUWJAAR = [
    1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019
]

const WOONOPPERVLAKTE = [
    127, 128, 129, 130, 131, 132, 133, 134
]

const WONINGTYPE = [
    'Tussenwoning', '2-onder-kapwoning', 'Vrijstaande woning', 'Hoekwoning', 'Appartement'
]

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
        this.state = {
            type: this.props.navigation.state.params.type
        }
    }

    renderPicker() {
        if (this.state.type === 0) {
            return <WheelPicker
                        style={{width: '80%', height: '80%'}}
                        isCurved={true}
                        isAtmospheric={true}
                        isCyclic
                        selectedItemTextColor="black"
                        data={BOUWJAAR}
                        onItemSelected={(event) => {
                            this.props.navigation.goBack()
                        }}/>
        } else if (this.state.type === 1) {
            return <WheelPicker
                        style={{width: '80%', height: '80%'}}
                        isCurved={true}
                        isAtmospheric={true}
                        isCyclic
                        selectedItemTextColor="black"
                        data={WOONOPPERVLAKTE}
                        onItemSelected={(event) => {
                            this.props.navigation.goBack()
                        }}/>
        } else {
            return <WheelPicker
                        style={{width: '80%', height: '80%'}}
                        isCurved={true}
                        isAtmospheric={true}
                        isCyclic
                        selectedItemTextColor="black"
                        data={WONINGTYPE}
                        onItemSelected={(event) => {
                            this.props.navigation.goBack()
                        }}/>
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.wrapper}>
                    {this.renderPicker()}
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
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height / 3,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#F4F5F6',
        borderTopWidth: 1,
        borderTopColor: '#F4F5F6'
    },

})
