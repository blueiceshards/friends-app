import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { Platform, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';

import Colors from '../constants/Colors';
import CategoriesScreen from '../screens/CategoriesScreen';
import ActivitiesScreen from '../screens/ActivitiesScreen';
import ActivityDetailsScreen from '../screens/ActivityDetailsScreen';


const defaultStackNavOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
        height: 60
    },
    headerTitleStyle: {
        fontFamily: 'mj-al-ghifari',
        textAlign: 'center',
        flex: 1
    },
    headerBackTitleStyle: {
        fontFamily: 'open-sans'
    } ,
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
}

const FriendsNavigator = createStackNavigator(
    {
        Categories: {
            screen: CategoriesScreen,
            navigationOptions: {
                headerTitle: 'Let us Date'
            }
        },
        Activities: {
            screen: ActivitiesScreen,
            navigationOptions: {
                headerRight: () => <View />
            }
        },
        ActivityDetails: {
            screen: ActivityDetailsScreen, 
            navigationOptions: {
                headerTitle: 'Details of Selected Activity',
                headerRight: () => <View />
            }
        }
    },
    {
        defaultNavigationOptions: defaultStackNavOptions
    }
)

export default createAppContainer(FriendsNavigator);