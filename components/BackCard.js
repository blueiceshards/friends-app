import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Button } from 'react-native';
import Colors from '../constants/Colors';

const FrontCard = props => {
    return (
        <View style={styles.item}>
            <TouchableOpacity onPress={props.onSelect}>
                <View>
                    <View style={{ ...styles.itemRow, ...styles.itemHeader }}>
                        <ImageBackground source={{ uri: props.imageUrl }} style={styles.backgroundImage}>
                            <View style={styles.titleContainer}>
                                <Text style={styles.title} numberOfLines={2}>{props.title}</Text>
                                <Text style={styles.description} numberOfLines={3}>{props.description}</Text>
                                <Button title='More details' color={Colors.medBrown} onPress={props.onButtonPress} />
                            </View>
                        </ImageBackground>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    item: {
        height: 220,
        width: '50%',
        backgroundColor: '#f5f5f5',
        overflow: 'hidden',
        borderRadius: 25,
    },
    itemRow: {
        flexDirection: 'row'
    },
    itemHeader: {
        height: '100%'
    },
    itemDetails: {
        paddingHorizontal: 10,
        paddingVertical: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '20%',
        backgroundColor: Colors.darkBrown,
    },
    backgroundImage: {
        width: '100%',
        height: '100%',
    },
    titleContainer: {
        backgroundColor: 'rgba(54,13,8,0.9)',
        flex: 1,
        paddingVertical: 5,
        paddingHorizontal: 12,
        justifyContent: 'space-around'
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 20,
        color: 'white',
        textAlign: 'center'
    },
    description: {
        color: 'white',
        fontFamily: 'open-sans',
        textAlign: 'center',
        fontSize: 15
    }
});

export default FrontCard;