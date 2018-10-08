import React, { Component } from 'react';
import { View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

const WIDTH = Dimensions.get('window').width;

export default class StatistiekenScreen extends Component {

    static navigationOptions = {
        title : 'Leads per maand',
        headerRight: (<View/>)
    }

    constructor(props) {
        super(props);
        this.state = {
            page: 0,
        }

    }

    clickPage1 = () => {
        this.setState({
            page: 0
        })
    }

    clickPage2 = () => {
        this.setState({
            page : 1
        })
    }

    clickPage3 = () => {
        this.setState({
            page : 2
        })
    }

    clickPage4 = () => {
        this.setState({
            page: 3
        })
    }

    renderContent = () => {
        if (this.state.page === 0) {
            return (
                <View style={styles.contentContainer1}>

                </View>
            )
        } else {
            return (
                <View style={styles.contentContainer2}>
                </View>
            )
        }
    }

    renderPagination = () => {
        if (this.state.page === 0) {
            return (
                <View style={styles.paginationContainer1}>
                    <TouchableOpacity style={[styles.paginationItem, this.state.page === 0 ? styles.paginationSelect : styles.paginationUnSelect]} onPress={this.clickPage1}>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.paginationItem, this.state.page === 1 ? styles.paginationSelect : styles.paginationUnSelect]} onPress={this.clickPage2}>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.paginationItem, this.state.page === 2 ? styles.paginationSelect : styles.paginationUnSelect]} onPress={this.clickPage3}>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.paginationItem, this.state.page === 3 ? styles.paginationSelect : styles.paginationUnSelect]} onPress={this.clickPage4}>
                    </TouchableOpacity>
                </View>
            )
        } else {
            return (
                <View style={styles.paginationContainer2}>
                    <TouchableOpacity style={[styles.paginationItem, this.state.page === 0 ? styles.paginationSelect : styles.paginationUnSelect]} onPress={this.clickPage1}>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.paginationItem, this.state.page === 1 ? styles.paginationSelect : styles.paginationUnSelect]} onPress={this.clickPage2}>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.paginationItem, this.state.page === 2 ? styles.paginationSelect : styles.paginationUnSelect]} onPress={this.clickPage3}>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.paginationItem, this.state.page === 3 ? styles.paginationSelect : styles.paginationUnSelect]} onPress={this.clickPage4}>
                    </TouchableOpacity>
                </View>
            )
        }
    }

    render() {
        return (
            <View style={styles.container}>
                {this.renderContent()}
                {this.renderPagination()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF'
    },
    paginationContainer1: {
        flex: 3,
        flexDirection: 'row',
        width: WIDTH,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    paginationContainer2: {
        flex: 1,
        flexDirection: 'row',
        width: WIDTH,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    contentContainer1: {
        flex: 7
    },
    contentContainer2: {
        flex: 9
    },
    paginationItem: {
        width: 15,
        height: 15,
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 15
    },
    paginationSelect: {
        backgroundColor: '#4285F4'
    },
    paginationUnSelect: {
        backgroundColor:'#CCCCCC'
    }
})