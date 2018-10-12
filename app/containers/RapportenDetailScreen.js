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
                    <View style={{width: WIDTH - 120, height: '50%', justifyContent: 'center', alignItems:'center', marginTop: -10,}}>
                        <View style={styles.propertySub}>
                            <View style={{flex: 1, height: '100%', borderColor: '#CCCCCC', borderWidth: 0.5, borderRadius: 4, justifyContent: 'center', alignItems:'center', marginRight: 3}}>
                                <Text style={{fontWeight: '500'}}>Appartement</Text>
                            </View>
                            <View style={{flex: 1, height: '100%', borderColor: '#CCCCCC', borderWidth: 0.5, borderRadius: 4, justifyContent: 'center', alignItems:'center', marginLeft: 3}}>
                                <Text style={{fontWeight: '500'}}>Hoekwoning</Text>
                            </View>
                        </View>
                        <View style={styles.propertySub}>
                            <View style={{flex: 1, height: '100%', borderColor: '#CCCCCC', borderWidth: 0.5, borderRadius: 4, justifyContent: 'center', alignItems:'center', marginRight: 3,}}>
                                <Text style={{fontWeight: '500'}}>Tussenwoning</Text>
                            </View>
                            <View style={{flex: 1, height: '100%', borderColor: '#CCCCCC', borderWidth: 0.5, borderRadius: 4, justifyContent: 'center', alignItems:'center', marginLeft: 3}}>
                                <Text style={{fontWeight: '500'}}>2-onder-1-kap</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.propertyContainer}>
                    <Image style={styles.containerBackground} source={require('../res/images/Rectangle.png')}/>
                    <View style={styles.propertyWrapper}>
                        <View style={styles.propertyItemContainer}>
                            <Text style={styles.mutateText}>Schatting</Text>
                            <Text style={{fontWeight: '500'}}>${this.state.item.price}</Text>
                        </View>
                        <View style={styles.propertyItemContainer}>
                            <Text style={styles.mutateText}>Gebied</Text>
                            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems:'center'}}>
                                <Text style={{fontWeight: '500', marginRight: 5}}>{this.state.item.height}</Text>
                                <Text>{this.state.item.gebied}</Text>
                            </View>
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
        flex: 1.4,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
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
        marginTop: -35,
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
        marginLeft: 50, 
        marginRight: 50
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
    },
    propertySub:{
        flex: 1,
        width: WIDTH - 120,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 4,
        marginTop: 4,
    }
})