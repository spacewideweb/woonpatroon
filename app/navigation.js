import { createSwitchNavigator, createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import SignInScreen from './containers/SignInScree';
import LeadsMainScreen from './containers/LeadsMainScreen';
import OverzichtScreen from './containers/OverzichtScreen';
import StatistiekenScreen from './containers/StatistiekenScreen';
import RapportenMainScreen from './containers/RapportenMainScreen';
import RapportenDetailScreen from './containers/RapportenDetailScreen';
import AanvragenScreen from './containers/AanvragenScreen';
import AuthLoadingScreen from './containers/AuthLoadingScreen';

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
    }
});

const RapportenStack = createStackNavigator({
    Main: {
        screen: RapportenMainScreen
    },
    Detail: {
        screen: RapportenDetailScreen
    }
});

const AanvragenStack = createStackNavigator({
    Main: {
        screen: AanvragenScreen
    }
});

const AppStack = createBottomTabNavigator({
    Lead: LeadsStack,
    Rapporten: RapportenStack,
    Aanvragen: AanvragenStack
})

export default createSwitchNavigator({
    AuthLoading: AuthLoadingScreen, 
    App: AppStack,
    Auth: SignInScreen,
}, {
    initialRouteName: 'AuthLoading'
});





