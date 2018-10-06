import React, { Component } from 'react';
import { View, StyleSheet, Image, Dimensions, Text, TouchableOpacity } from 'react-native';


const WIDTH = Dimensions.get('window').width;

export default class RapportenDetailScreen extends Component {

    static navigationOptions = ({ navigation }) => {
        const { state } = navigation;
        return {
            title: `${state.params.title}`,
            headerRight: (<View/>)
        };
    };

    constructor(props) {
        super(props);
        this.state = {
            item: this.props.navigation.state.params.item
        }
    }

    _download = () => {

    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.addressContainer}>
                    <Image style={styles.containerBackground} source={require('../res/images/Rectangle.png')}/>
                    <View style={styles.addressWrapper}>
                        <Text style={styles.mutateText}>Address</Text>
                        <Text>{this.state.item.address}</Text>
                    </View>
                </View>
                <View style={styles.selectionContainer}>
                    <Image style={styles.containerBackground} source={require('../res/images/Rectangle.png')}/>
                </View>
                <View style={styles.propertyContainer}>
                    <Image style={styles.containerBackground} source={require('../res/images/Rectangle.png')}/>
                    <View style={styles.propertyWrapper}>
                        <View style={styles.propertyItemContainer}>
                            <Text style={styles.mutateText}>Schatting</Text>
                            <Text>${this.state.item.price}</Text>
                        </View>
                        <View style={styles.propertyItemContainer}>
                            <Text style={styles.mutateText}>Gebied</Text>
                            <Text>{this.state.item.gebied}</Text>
                        </View>
                        <View style={styles.propertyItemContainer}>
                            <Text style={styles.mutateText}>Bouw</Text>
                            <Text>{this.state.item.bouw}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.pdfContainer}>
                    <Text style={styles.labelText}>
                        Het volledige rapport gaat dieper in op de waarde vergelijkbare objecten.
                    </Text>
                    <TouchableOpacity 
                        style={styles.downloadButton}
                        onPress={this._download}>
                        <Text style={styles.downloadButtonText}>Download PDF</Text>
                    </TouchableOpacity>
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
    },
    addressContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    selectionContainer: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -30,
    },
    propertyContainer: {
        flex: 1.8,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -30,
    },
    pdfContainer: {
        flex: 2,
        marginTop: -30,
    },
    containerBackground: {
        flex: 1,
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        resizeMode: 'stretch'
    },
    addressWrapper: {
        flex: 1,
        width: WIDTH - 120,
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    mutateText: {
        color: '#CCCCCC'
    },
    labelText: {
        textAlign: 'center',
        marginTop: 30,
    },
    downloadButton: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 35,
    },
    downloadButtonText: {
        color: '#4285F4',
        fontSize: 20
    },
    propertyWrapper: {
        width: WIDTH - 120,
    },
    propertyItemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 4,
        marginBottom: 4,
    }
})