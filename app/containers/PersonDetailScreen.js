import React, { Component } from 'react';
import { 
    View, 
    Dimensions, 
    StyleSheet, 
    Image, 
    Text, 
    TouchableOpacity,
    Modal } from 'react-native';

const WIDTH = Dimensions.get('window').width;

export default class PersonDetailScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
            selectedItemName: '',
            selectedItemValue: '',
            item: this.props.navigation.state.params.item
        }
    }

    _clickedEmail = () => {
        this.setState({
            modalVisible: true,
            selectedItemName: 'email',
            selectedItemValue: this.state.item.email,
        })
    }

    _clickedPhoneNumber = () => {
        this.setState({
            modalVisible: true,
            selectedItemName: 'phone',
            selectedItemValue: this.state.item.phone,
        })
    }

    _onCloseModal = () => {
        this.setState({
            modalVisible: false,
        })
    }

    _onProgress = () => {
        this.setState({
            modalVisible: false
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.contactContainer}>
                    <Image source={require('../res/images/BG.png')} style={styles.background}/>
                    <View style={styles.contactWrapper}>
                        <TouchableOpacity 
                            style={styles.itemWrapper}
                            onPress={this._clickedEmail}>
                            <Text style={styles.mutateText}>Emailadres</Text>
                            <Text>{this.state.item.email}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={styles.itemWrapper}
                            onPress={this._clickedPhoneNumber}>
                            <Text style={styles.mutateText}>Telefoonnummer</Text>
                            <Text>{this.state.item.phone}</Text>
                        </TouchableOpacity>
                        <View style={styles.itemWrapper}>
                            <Text style={styles.mutateText}>Adres</Text>
                            <Text>{this.state.item.address}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.infoContainer}>
                    <Image source={require('../res/images/BG.png')} style={styles.background}/>
                    <View style={styles.infoWrapper}>
                        <View style={styles.itemWrapper}>
                            <Text style={styles.mutateText}>Gebied</Text>
                            <Text>{this.state.item.gebied}</Text>
                        </View>
                        <View style={styles.itemWrapper}>
                            <Text style={styles.mutateText}>Bouw</Text>
                            <Text>{this.state.item.bouw}</Text>
                        </View>
                        <View style={styles.itemWrapper}>
                            <Text style={styles.mutateText}>Type</Text>
                            <Text>{this.state.item.type}</Text>
                        </View>
                        <View style={styles.itemWrapper}>
                            <Text style={styles.mutateText}>Schatting</Text>
                            <Text>{this.state.item.schatting}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.propertyContainer}>
                    <Image source={require('../res/images/BG.png')} style={styles.background}/>
                </View>
                <Modal 
                    animationType="fade"
                    transparent={true}
                    onRequestClose={() => {}}
                    visible={this.state.modalVisible}>
                    <View style={styles.modalContainer}>
                        <View style={styles.modalWrapper}>
                            <View style={styles.modalContent}>
                                <Text style={[styles.mutateText, {marginBottom: 10}]}>{this.selectedItemName === 'email' ? 'Emailadres': 'Telefoonnummer'}</Text>
                                <Text>{this.state.selectedItemValue}</Text>
                            </View>
                            <View style={styles.modalButtons}>
                                <View style={{backgroundColor: '#ccc', width: '100%', height: 0.4, position: 'absolute', top: 0, left: 0}}/>
                                <View style={{backgroundColor: '#ccc', width: 0.3, height: '100%', position: 'absolute', top: 0, left: '50%', marginLeft: -0.2}}/> 
                                <TouchableOpacity 
                                    style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
                                    onPress={this._onCloseModal}>
                                    <Text style={styles.mutateText}>Annuleren</Text>
                                </TouchableOpacity>
                                <TouchableOpacity 
                                    style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
                                    onPress={this._onProgress}>
                                    <Text>{this.state.selectedItemName === 'email'? 'Email': 'Bellen'}</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF'
    },
    contactContainer: {
        flex: 0.8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    infoContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    infoWrapper: {
        width: WIDTH - 120,
    },
    propertyContainer: {
        flex: 1,
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
    contactWrapper: {
        width: WIDTH - 120,
    },
    itemWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 4,
        marginBottom: 4,
    },
    mutateText: {
        color: '#CCCCCC'
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.6)'
    },
    modalWrapper: {
        width: WIDTH - 140,
        height: 160,
        backgroundColor: '#FFF',
        borderRadius: 5,
        justifyContent: 'center'
    },
    modalContent: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalButtons: {
        flex: 1,
        flexDirection: 'row',
    }
})

