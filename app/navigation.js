import React from 'react';
import { Image } from 'react-native';

import { createSwitchNavigator, createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import SignInScreen from './containers/SignInScree';
import LeadsMainScreen from './containers/LeadsMainScreen';
import OverzichtScreen from './containers/OverzichtScreen';
import StatistiekenScreen from './containers/StatistiekenScreen';
import RapportenMainScreen from './containers/RapportenMainScreen';
import RapportenDetailScreen from './containers/RapportenDetailScreen';
import AanvragenScreen from './containers/AanvragenScreen';
import AuthLoadingScreen from './containers/AuthLoadingScreen';
import PersonDetailScreen from './containers/PersonDetailScreen';

const AuthStack = createStackNavigator({ SignIn: SignInScreen });

const LeadsStack = createStackNavigator({
    Leads: {
        screen: LeadsMainScreen
    },
    Statistieken: {
        screen: StatistiekenScreen
    },
    Overzicht: {
        screen: OverzichtScreen
    },
    Detail: {
        screen: PersonDetailScreen
    }
},{
    navigationOptions: ({ navigation }) => ({
        headerStyle: {height: 120},
        headerTitleStyle: {position:'absolute', width: 200, height: 50, textAlign: 'center', bottom: 10, left: '50%', marginLeft: -100, fontSize: 32, color: '#666666', fontWeight: '800'},
    })
});

const RapportenStack = createStackNavigator({
    Main: {
        screen: RapportenMainScreen
    },
    Detail: {
        screen: RapportenDetailScreen
    }
}, {
    navigationOptions: ({ navigation }) => ({
        headerStyle: {height: 120},
        headerTitleStyle: {position:'absolute', width: 200, height: 50, textAlign: 'center', bottom: 10, left: '50%', marginLeft: -100, fontSize: 32, color: '#666666', fontWeight: '800'},
    })
});

const AanvragenStack = createStackNavigator({
    Main: {
        screen: AanvragenScreen
    }
},{
    navigationOptions: ({ navigation }) => ({
        headerStyle: {height: 120},
        headerTitleStyle: {position:'absolute', width: 280, height: 50, textAlign: 'center', bottom: 10, left: '50%', marginLeft: -140, fontSize: 32, color: '#666666', fontWeight: '800'},
    })
});

const AppStack = createBottomTabNavigator({
    Leads: LeadsStack,
    Rapporten: RapportenStack,
    Aanvragen: AanvragenStack,
}, {
    navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
            const { routeName } = navigation.state;
            if (routeName === 'Leads') {
                return <Image source={focused ? require('./res/images/check-square-selected.png') : require('./res/images/check-square.png')} size={horizontal ? 20 : 25} color={tintColor}/>
            } else if (routeName === 'Rapporten') {
                return <Image source={focused ? require('./res/images/chart-line-selected.png') : require('./res/images/chart-line.png')} size={horizontal ? 20 : 25} color={tintColor}/>
            } else {
                return <Image source={focused ? require('./res/images/calculator-selected.png') : require('./res/images/calculator.png')} size={horizontal ? 20 : 25} color={tintColor}/>
            }
        }
    }),
    tabBarOptions: {
        activeTintColor: '#4285F4',
        inactiveTintColor: '#898B9B'
    }
})

export default createSwitchNavigator({
    AuthLoading: AuthLoadingScreen, 
    App: AppStack,
    Auth: SignInScreen,
}, {
    initialRouteName: 'AuthLoading'
});





