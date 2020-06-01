import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { ACTIVITYTYPES } from '../data/dummy-data';
import Card from '../components/Card';

const CategoriesScreen = props => {

    const renderGridItem = (itemData) => {
        return (
            <Card
                title={itemData.item.title}
                imageUrl={itemData.item.imageUrl}
                description={itemData.item.description}
                onSelect={() => {
                    props.navigation.navigate({
                        routeName: 'Activities', params: {
                            categoryId: itemData.item.id
                        }
                    });
                }} />
        );
    }

    return (
        <View style={styles.container}>
            <FlatList
                keyExtractor={(item, index) => item.id}
                data={ACTIVITYTYPES}
                renderItem={renderGridItem}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
    }
})

export default CategoriesScreen;