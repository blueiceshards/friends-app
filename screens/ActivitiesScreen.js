import React from 'react';
import { Text, StyleSheet, View, FlatList } from 'react-native';

import { ACTIVITYTYPES, ACTIVITIES } from '../data/dummy-data';

import FrontCard from '../components/FrontCard';
import BackCard from '../components/BackCard';
import RenderedCard from '../components/RenderedCard'

const ActivitiesScreen = props => {

    const catId = props.navigation.getParam('categoryId');
    const availableActivities = ACTIVITIES;
    const displayedActivities = availableActivities.filter(activity => activity.categoryIds.indexOf(catId) >= 0);


    const renderGridItem = (itemData) => {
        return (
            <RenderedCard
                title={itemData.item.title}
                imageUrl={itemData.item.imageUrl}
                description={itemData.item.description}
                onSelect={() => {
                     props.navigation.navigate({
                        routeName: 'ActivityDetails', params: {
                            activityId: itemData.item.id,
                            activityTitle: itemData.item.title
                        }
                    }); 
                }}
            />
        );
    }

    return (
        <View style={styles.container}>
            <FlatList
                keyExtractor={(item, index) => item.id}
                data={displayedActivities}
                renderItem={renderGridItem}
                numColumns={2}
            />
        </View>
    );
}

ActivitiesScreen.navigationOptions = (navigationData) => {
    const catId = navigationData.navigation.getParam('categoryId');
    const selectedCategory = ACTIVITYTYPES.find(activitytype => activitytype.id === catId);
    return {
        headerTitle: selectedCategory.title,
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default ActivitiesScreen;