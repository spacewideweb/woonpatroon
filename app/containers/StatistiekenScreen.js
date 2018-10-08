import React, { Component } from 'react';
import { View, StyleSheet, Dimensions, TouchableOpacity, Text } from 'react-native';

const WIDTH = Dimensions.get('window').width;
const chartConfig = {
    backgroundColor: '#FFF',
    backgroundGradientFrom: '#FFF',
    backgroundGradientTo: '#FFF',
    color: (opacity = 1) => `rgba(0,0,0, ${opacity})`
}

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
                    <View style={styles.labelContainer1}>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: WIDTH/3, height: '50%'}}>
                            <View style={{width: 50, height: 25, backgroundColor: '#4285F4', marginRight: 4}}/>
                            <Text>Gemiddelde leads</Text>
                        </View>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: WIDTH/3, height: '50%'}}>
                            <View style={{width: 50, height: 25, backgroundColor: '#0B4B5C', marginRight: 4}}/>
                            <Text>Mijn leads</Text>
                        </View>
                    </View>
                    <View style={styles.graphContainer1}>

                    </View>
                </View>
            )
        } else {
            return (
                <View style={styles.contentContainer2}>
                    <View style={styles.labelContainer2}>
                    </View>
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
        flex: 7,
        justifyContent: 'center',
        alignItems: 'center'
    },
    labelContainer1: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    graphContainer1: {
        flex: 5,

    },
    contentContainer2: {
        flex: 9,
        justifyContent: 'center',
        alignItems: 'center'
    },
    labelContainer2: {
        flex: 1
    },
    graphContainer2: {
        flex: 6,
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
});
