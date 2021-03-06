import React, { Component } from 'react';
import { View, StyleSheet, Dimensions, TouchableOpacity, Text, ScrollView, processColor, Animated, Image } from 'react-native';

import { BarChart, PieChart } from 'react-native-charts-wrapper';

const WIDTH = Dimensions.get('window').width;
const chartConfig = {
    backgroundColor: '#FFF',
    backgroundGradientFrom: '#FFF',
    backgroundGradientTo: '#FFF',
    color: (opacity = 1) => `rgba(0,0,0, ${opacity})`
}

export default class StatistiekenScreen extends Component {

    static navigationOptions = ({navigation}) => {
        const { state } = navigation;
        return {
            title: `${state.params.title}`,
            headerRight: (<View/>)
        };
    };

    constructor(props) {
        super(props);
        this.state = {
            page: 0,
            bar : {
                detail: {
                    time_value_list: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                    legend_list: ['gemiddelde', 'mijn'],
                    dataset: {
                        gemiddelde: {
                            'Jan': 38,
                            'Feb': 65,
                            'Mar': 54,
                            'Apr': 60,
                            'May': 70,
                            'Jun': 78,
                            'Jul': 86,
                            'Aug': 80,
                            'Sep': 98,
                            'Nov': 92,
                            'Dec': 83
                        },
                        mijn: {
                            'Jan': 38,
                            'Feb': 45,
                            'Mar': 54,
                            'Apr': 60,
                            'May': 70,
                            'Jun': 78,
                            'Jul': 86,
                            'Aug': 80,
                            'Sep': 98,
                            'Nov': 92,
                            'Dec': 83
                        }
                    }
                }
            },
            pie: {
                detail: {
                    time_value_list: [2017],
                    legend_list: ['Group1', 'Group2', 'Group3', 'Group4', 'Group5'],
                    dataset: {
                        Group1: {'2017': 9},
                        Group2: {'2017': 17},
                        Group3: {'2017': 29},
                        Group4: {'2017': 32},
                        Group5: {'2017': 45}
                    }
                }
            },
        }

    }

    changeTitle = (text) => {
        const { setParams } = this.props.navigation;
        setParams({title: text});
    }

    clickPage1 = () => {
        this.setState({
            page: 0
        })

        this.snapScroll.scrollTo({x: 0, y:0, animated: true})
        this.changeTitle('Leads per maand');
    }

    clickPage2 = () => {
        this.setState({
            page : 1
        })
        this.snapScroll.scrollTo({x: Dimensions.get('window').width, y:0, animated: true})

        this.changeTitle('Leads per woningtype');
    }

    clickPage3 = () => {
        this.setState({
            page : 2
        })
        this.snapScroll.scrollTo({x: Dimensions.get('window').width * 2, y:0, animated: true})
        this.changeTitle('Leads naar motivatie');
    }

    clickPage4 = () => {
        this.setState({
            page: 3
        })
        this.snapScroll.scrollTo({x: Dimensions.get('window').width * 3, y:0, animated: true})
        this.changeTitle('Leads naar plannen');
    }

    getRandomColor() {
        var letters = '0123456789ABCDEF'
        var color = '#'
        for (var i=0;i<6;i++) {
            color += letters[Math.floor(Math.random() * 16)]
        }
        return color
    }

    clicked30degree = () => {
        this.clickPage2();
    }

    click90degree = () => {
        this.clickPage3();
    }

    clickAllTime = () => {
        this.clickPage4();
    }

    renderContent1 = () => {
        const style1 = {
            barWidth: 0.1,
            groupSpace: 0.2,
        }
        const style2 = {
            barWidth: 0.2,
            groupSpace: 0.1,
        }
        const style3 = {
            barWidth: 0.1,
            groupSpace: 0.2,
        }

        const time = this.state.bar.detail.time_value_list;
        const legend = this.state.bar.detail.legend_list;
        const dataset = this.state.bar.detail.dataset;

        var dataSetsValue = []
        var dataStyle = {}
        var legendStyle = {}
        var descStyle = {}
        var xAxisStyle = {}
        var chooseStyle = {}
        var valueLegend = []
        var colorLegend = []

        if (legend.length === 4) {
            chooseStyle = style1
        } else if (legend.length === 3) {
            chooseStyle = style2
        } else if (legend.length === 2) {
            chooseStyle = style3
        }

        legend.map((legendValue) => {
            var valueLegend = []
            time.map((timeValue) => {
                const datasetValue = dataset[legendValue]
                const datasetTimeValue = datasetValue[timeValue]
                valueLegend.push(parseInt(datasetTimeValue))
            })
            const datasetObject = {
                values: valueLegend,
                label: legendValue,
                config: {
                    drawValues: false,
                    colors: [processColor('#0B485C'), processColor('#4285F4')]
                }
            }
            dataSetsValue.push(datasetObject)
        })

        legendStyle = {
            enabled: false,
        }

        dataStyle = {
            dataSets: dataSetsValue,
            config: {
                barWidth: chooseStyle.barWidth,
                group: {
                    fromX: 0,
                    groupSpace: chooseStyle.groupSpace,
                    barSpace: 0.1
                }
            }
        }

        xAxisStyle = {
            valueFormatter: time,
            granularityEnabled: false,
            granularity: 1,
            axisMaximum: 5,
            axisMinimum: 0,
            centerAxisLabels: true,
            drawLabels: true,
            position: 'BOTTOM',
            avoidFirstLastClipping: false,
        }

        yAxisStyle = {
            inverted: false,
            gridLineWidth: 0,
            drawGridLines: false,
            drawAxisLine: false,
            enabled: false,
            zeroLine: {
                enabled: false,
            }
        }

        return (
            <View style={{width: Dimensions.get('window').width, height: 400, justifyContent: 'center'}}>
                <View style={{alignItems: 'center', width: '100%', height: 100}}>
                    <View style={{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', width: Dimensions.get('window').width/2, marginTop: 20}}>
                        <View style={{width: 50, height: 25, backgroundColor: '#4285F4'}}/>
                        <Text style={{marginLeft: 15}}>Gemiddelde leads</Text>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', width: Dimensions.get('window').width/2, marginTop: 10}}>
                        <View style={{width: 50, height: 25, backgroundColor: '#0B485C'}}/>
                        <Text style={{marginLeft: 15}}>Mijn leads</Text>
                    </View>
                </View>
                <BarChart
                    style={{padding: 10, height: 300}}
                    xAxis={xAxisStyle}
                    yAxis={{right: yAxisStyle}}
                    data={dataStyle}
                    legend={legendStyle}
                    drawGridBackground={false}
                    drawBorders={false}
                    chartDescription={{text: ''}}
                    scaleEnabled={false}
                    drawValueAboveBar={false}/>
            </View>
        )
    }

    renderContent2 = () => {
        const time = this.state.pie.detail.time_value_list
        const legend = this.state.pie.detail.legend_list
        const dataset = this.state.pie.detail.dataset

        var dataSetsValue = []
        var dataStyle = {}
        var legendStyle = {}
        var descStyle = {}
        var xAxisStyle = {}
        var chooseStyle = {}
        var valueLegend = []
        var colorLegend = [processColor('#4285F4'), processColor('#080808'), processColor('#6C919D'), processColor('#A7ECF9'), processColor('#DBF7FC')]

        legend.map((legendValue) => {
            time.map((timeValue) => {
                const datasetValue = dataset[legendValue]
                const datasetTimeValue = datasetValue[timeValue]
                valueLegend.push({value: parseInt(datasetTimeValue), label: legendValue})
            })
        })

        const datasetObject = {
            values: valueLegend,
            label: '',
            enabled: false,
            config: {
                enabled: false,
                colors: colorLegend,
                valueTextSize: 0,
                sliceSpace: 0,
            }
        }

        dataSetsValue.push(datasetObject)

        legendStyle = {
            enabled: false,
        }

        dataStyle = {
            dataSets: dataSetsValue
        }

        descStyle = {
            text: ''
        }

        return (
            <View style={{width: Dimensions.get('window').width, height: 600}}>
                <View style={{alignItems: 'center', width: '100%', height: 100}}>
                    <View style={{flex: 1, flexDirection: 'row',justifyContent: 'center', alignItems: 'center'}}>
                        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                            <View style={{backgroundColor: '#4285F4', width: 50, height: 25}}/>
                            <Text style={{marginLeft: 10}}>Group 1</Text>
                        </View>
                        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                            <View style={{backgroundColor: '#0B485C', width: 50, height: 25}}/>
                            <Text style={{marginLeft: 10}}>Group 2</Text>
                        </View>
                        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                            <View style={{backgroundColor: '#6C919D', width: 50, height: 25}}/>
                            <Text style={{marginLeft: 10}}>Group 3</Text>
                        </View>
                    </View>
                    <View style={{flex: 1, width: '60%', flexDirection: 'row',justifyContent: 'center', alignItems: 'center'}}>
                        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                            <View style={{backgroundColor: '#A7ECF9', width: 50, height: 25}}/>
                            <Text style={{marginLeft: 10}}>Group 4</Text>
                        </View>
                        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                            <View style={{backgroundColor: '#DBF7FC', width: 50, height: 25}}/>
                            <Text style={{marginLeft: 10}}>Group 5</Text>
                        </View>
                    </View>
                </View>
                <View style={{width: '100%', height: 250}}>
                    <PieChart
                        style={{width: Dimensions.get('window').width, height: 250}}
                        chartDescription={descStyle}
                        data={dataStyle}
                        legend={legendStyle}
                        rotationEnabled={false}
                        highlightPerTapEnabled={false}
                        holeRadius={70}
                        drawEntryLabels={false}
                        touchEnabled={false}/>
                </View>
                <View 
                    style={{width: Dimensions.get('window').width, height: Dimensions.get('window').height/4, justifyContent: 'center', alignItems:'center', marginTop: -30}}>
                    <Image source={require('../res/images/Rectangle.png')} style={{flex: 1, width: '100%', height: '100%', top: 0, left: 0, position: 'absolute', resizeMode: 'stretch'}}/>
                    <View style={{flexDirection: 'row', width: Dimensions.get('window').width * 0.8, justifyContent: 'center', alignItems: 'center', marginHorizontal: 10}}>
                        <TouchableOpacity 
                            style={{justifyContent: 'center', alignItems: 'center', marginRight: 3, width: Dimensions.get('window').width * 0.35, height: 45, borderRadius: 6, backgroundColor: '#4285F4'}}
                            onPress={this.clicked30degree}>
                            <Text style={{fontSize: 15, fontWeight: '500', color: '#FFF'}}>30 dagen</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={{justifyContent: 'center', alignItems: 'center', marginLeft: 3, width: Dimensions.get('window').width * 0.35,  height: 45, borderRadius: 6, backgroundColor: '#FFF', borderColor: '#CCCCCC', borderWidth: 0.5}}
                            onPress={this.click90degree}>
                            <Text style={{fontSize: 15, fontWeight: '500', color: '#000'}}>90 dagen</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{marginTop: 5, flexDirection: 'row',width: Dimensions.get('window').width * 0.8, justifyContent: 'center', alignItems: 'center'}}>
                        <TouchableOpacity 
                            style={{justifyContent: 'center', alignItems: 'center', width: Dimensions.get('window').width * 0.35, height: 45, borderRadius: 6, backgroundColor: '#FFF', borderColor: '#CCCCCC', borderWidth: 0.5}}
                            onPress={this.clickAllTime}>
                            <Text style={{fontSize: 15, fontWeight: '500', color: '#000'}}>All-time</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }

    renderContent3 = () => {
        const time = this.state.pie.detail.time_value_list
        const legend = this.state.pie.detail.legend_list
        const dataset = this.state.pie.detail.dataset

        var dataSetsValue = []
        var dataStyle = {}
        var legendStyle = {}
        var descStyle = {}
        var xAxisStyle = {}
        var chooseStyle = {}
        var valueLegend = []
        var colorLegend = [processColor('#4285F4'), processColor('#080808'), processColor('#6C919D'), processColor('#A7ECF9'), processColor('#DBF7FC')]

        legend.map((legendValue) => {
            time.map((timeValue) => {
                const datasetValue = dataset[legendValue]
                const datasetTimeValue = datasetValue[timeValue]
                valueLegend.push({value: parseInt(datasetTimeValue), label: legendValue})
            })
        })

        const datasetObject = {
            values: valueLegend,
            label: '',
            enabled: false,
            config: {
                enabled: false,
                colors: colorLegend,
                valueTextSize: 0,
                sliceSpace: 0,
            }
        }

        dataSetsValue.push(datasetObject)

        legendStyle = {
            enabled: false,
        }

        dataStyle = {
            dataSets: dataSetsValue
        }

        descStyle = {
            text: ''
        }
        return (
            <View style={{width: Dimensions.get('window').width, height: 600}}>
                <View style={{alignItems: 'center', width: '100%', height: 100}}>
                    <View style={{flex: 1, flexDirection: 'row',justifyContent: 'center', alignItems: 'center'}}>
                        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                            <View style={{backgroundColor: '#4285F4', width: 50, height: 25}}/>
                            <Text style={{marginLeft: 10}}>Group 1</Text>
                        </View>
                        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                            <View style={{backgroundColor: '#0B485C', width: 50, height: 25}}/>
                            <Text style={{marginLeft: 10}}>Group 2</Text>
                        </View>
                        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                            <View style={{backgroundColor: '#6C919D', width: 50, height: 25}}/>
                            <Text style={{marginLeft: 10}}>Group 3</Text>
                        </View>
                    </View>
                    <View style={{flex: 1, width: '60%', flexDirection: 'row',justifyContent: 'center', alignItems: 'center'}}>
                        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                            <View style={{backgroundColor: '#A7ECF9', width: 50, height: 25}}/>
                            <Text style={{marginLeft: 10}}>Group 4</Text>
                        </View>
                        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                            <View style={{backgroundColor: '#DBF7FC', width: 50, height: 25}}/>
                            <Text style={{marginLeft: 10}}>Group 5</Text>
                        </View>
                    </View>
                </View>
                <View style={{width: '100%', height: 250}}>
                    <PieChart
                        style={{width: Dimensions.get('window').width, height: 250}}
                        chartDescription={descStyle}
                        data={dataStyle}
                        legend={legendStyle}
                        rotationEnabled={false}
                        highlightPerTapEnabled={false}
                        holeRadius={70}
                        drawEntryLabels={false}
                        touchEnabled={false}/>
                </View>
                <View 
                    style={{width: Dimensions.get('window').width, height: Dimensions.get('window').height/4, justifyContent: 'center', alignItems:'center', marginTop: -30}}>
                    <Image source={require('../res/images/Rectangle.png')} style={{flex: 1, width: '100%', height: '100%', top: 0, left: 0, position: 'absolute', resizeMode: 'stretch'}}/>
                    <View style={{flexDirection: 'row', width: Dimensions.get('window').width * 0.8, justifyContent: 'center', alignItems: 'center', marginHorizontal: 10}}>
                        <TouchableOpacity 
                            style={{justifyContent: 'center', alignItems: 'center', marginRight: 3, width: Dimensions.get('window').width * 0.35,  height: 45, borderRadius: 6, backgroundColor: '#FFF', borderColor: '#CCCCCC', borderWidth: 0.5}}
                            onPress={this.clicked30degree}>
                            <Text style={{fontSize: 15, fontWeight: '500', color: '#000'}}>30 dagen</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={{justifyContent: 'center', alignItems: 'center', marginLeft: 3, width: Dimensions.get('window').width * 0.35, height: 45, borderRadius: 6, backgroundColor: '#4285F4'}}
                            onPress={this.click90degree}>
                            <Text style={{fontSize: 15, fontWeight: '500', color: '#FFF'}}>90 dagen</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{marginTop: 5, flexDirection: 'row',width: Dimensions.get('window').width * 0.8, justifyContent: 'center', alignItems: 'center'}}>
                        <TouchableOpacity 
                            style={{justifyContent: 'center', alignItems: 'center', width: Dimensions.get('window').width * 0.35, height: 45, borderRadius: 6, backgroundColor: '#FFF', borderColor: '#CCCCCC', borderWidth: 0.5}}
                            onPress={this.clickAllTime}>
                            <Text style={{fontSize: 15, fontWeight: '500', color: '#000'}}>All-time</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }

    renderContent4 = () => {
        const time = this.state.pie.detail.time_value_list
        const legend = this.state.pie.detail.legend_list
        const dataset = this.state.pie.detail.dataset

        var dataSetsValue = []
        var dataStyle = {}
        var legendStyle = {}
        var descStyle = {}
        var xAxisStyle = {}
        var chooseStyle = {}
        var valueLegend = []
        var colorLegend = [processColor('#4285F4'), processColor('#080808'), processColor('#6C919D'), processColor('#A7ECF9'), processColor('#DBF7FC')]

        legend.map((legendValue) => {
            time.map((timeValue) => {
                const datasetValue = dataset[legendValue]
                const datasetTimeValue = datasetValue[timeValue]
                valueLegend.push({value: parseInt(datasetTimeValue), label: legendValue})
            })
        })

        const datasetObject = {
            values: valueLegend,
            label: '',
            enabled: false,
            config: {
                enabled: false,
                colors: colorLegend,
                valueTextSize: 0,
                sliceSpace: 0,
            }
        }

        dataSetsValue.push(datasetObject)

        legendStyle = {
            enabled: false,
        }

        dataStyle = {
            dataSets: dataSetsValue
        }

        descStyle = {
            text: ''
        }
        return (
            <View style={{width: Dimensions.get('window').width, height: 600}}>
                <View style={{alignItems: 'center', width: '100%', height: 100}}>
                    <View style={{flex: 1, flexDirection: 'row',justifyContent: 'center', alignItems: 'center'}}>
                        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                            <View style={{backgroundColor: '#4285F4', width: 50, height: 25}}/>
                            <Text style={{marginLeft: 10}}>Group 1</Text>
                        </View>
                        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                            <View style={{backgroundColor: '#0B485C', width: 50, height: 25}}/>
                            <Text style={{marginLeft: 10}}>Group 2</Text>
                        </View>
                        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                            <View style={{backgroundColor: '#6C919D', width: 50, height: 25}}/>
                            <Text style={{marginLeft: 10}}>Group 3</Text>
                        </View>
                    </View>
                    <View style={{flex: 1, width: '60%', flexDirection: 'row',justifyContent: 'center', alignItems: 'center'}}>
                        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                            <View style={{backgroundColor: '#A7ECF9', width: 50, height: 25}}/>
                            <Text style={{marginLeft: 10}}>Group 4</Text>
                        </View>
                        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                            <View style={{backgroundColor: '#DBF7FC', width: 50, height: 25}}/>
                            <Text style={{marginLeft: 10}}>Group 5</Text>
                        </View>
                    </View>
                </View>
                <View style={{width: '100%', height: 250}}>
                    <PieChart
                        style={{width: Dimensions.get('window').width, height: 250}}
                        chartDescription={descStyle}
                        data={dataStyle}
                        legend={legendStyle}
                        rotationEnabled={false}
                        highlightPerTapEnabled={false}
                        holeRadius={70}
                        drawEntryLabels={false}
                        touchEnabled={false}/>
                </View>
                <View 
                    style={{width: Dimensions.get('window').width, height: Dimensions.get('window').height/4, justifyContent: 'center', alignItems:'center', marginTop: -30}}>
                    <Image source={require('../res/images/Rectangle.png')} style={{flex: 1, width: '100%', height: '100%', top: 0, left: 0, position: 'absolute', resizeMode: 'stretch'}}/>
                    <View style={{flexDirection: 'row', width: Dimensions.get('window').width * 0.8, justifyContent: 'center', alignItems: 'center', marginHorizontal: 10}}>
                        <TouchableOpacity 
                            style={{justifyContent: 'center', alignItems: 'center', marginRight: 3, width: Dimensions.get('window').width * 0.35,  height: 45, borderRadius: 6, backgroundColor: '#FFF', borderColor: '#CCCCCC', borderWidth: 0.5}}
                            onPress={this.clicked30degree}>
                            <Text style={{fontSize: 15, fontWeight: '500', color: '#000'}}>30 dagen</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={{justifyContent: 'center', alignItems: 'center', marginLeft: 3, width: Dimensions.get('window').width * 0.35,  height: 45, borderRadius: 6, backgroundColor: '#FFF', borderColor: '#CCCCCC', borderWidth: 0.5}}
                            onPress={this.click90degree}>
                            <Text style={{fontSize: 15, fontWeight: '500', color: '#000'}}>90 dagen</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{marginTop: 5, flexDirection: 'row',width: Dimensions.get('window').width * 0.8, justifyContent: 'center', alignItems: 'center'}}>
                        <TouchableOpacity 
                            style={{justifyContent: 'center', alignItems: 'center', marginRight: 3, width: Dimensions.get('window').width * 0.35, height: 45, borderRadius: 6, backgroundColor: '#4285F4'}}
                            onPress={this.clickAllTime}>
                            <Text style={{fontSize: 15, fontWeight: '500', color: '#FFF'}}>All-time</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }

    renderPagination = () => {
        return (
            <View style={this.state.page === 0 ? {width: Dimensions.get('window').width, height: 80, justifyContent: 'center', flexDirection: 'row'} : {width: Dimensions.get('window').width, height: 20, justifyContent: 'center', flexDirection: 'row'}}>
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

    render() {
        return (
            <View style={styles.container}>
                <ScrollView
                    ref={(snapScroll) => {this.snapScroll = snapScroll;}}
                    horizontal={true}
                    pagingEnabled={true}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    onMomentumScrollBegin={() => {
                        console.log('Begin scrolling')
                    }}
                    onMomentumScrollEnd={() => {
            
                        var interval = Dimensions.get('window').width;
                        var pageIndex = Math.ceil(this.lastx / interval) === 4 ? Math.floor(this.lastx/interval) : Math.ceil(this.lastx/interval)
                        this.setState({
                            page: pageIndex
                        })
                    }}
                    onScroll={(event) => {
                        var nextx = event.nativeEvent.contentOffset.x;
                        this.scrollingRight = (nextx > this.lastx);
                        this.lastx = nextx;
                    }}
    
                    scrollEventThrottle={32}
                    style={{width: Dimensions.get('window').width, marginBottom: 10}}>
                    {this.renderContent1()}
                    {this.renderContent2()}
                    {this.renderContent3()}
                    {this.renderContent4()}
                </ScrollView>
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
    scrollContainer: {
        padding: 10,
        backgroundColor: '#F00'
    },
    paginationContainer1: {
        flex: 3,
        backgroundColor: '#F0F',
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
