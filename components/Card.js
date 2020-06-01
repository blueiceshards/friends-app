import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import Colors from '../constants/Colors';

const Card = props => {
    return (
        <View style={styles.item}>
            <TouchableOpacity onPress={props.onSelect}>
                <View>
                    <View style={{ ...styles.itemRow, ...styles.itemHeader }}>
                        <ImageBackground source={{ uri: props.imageUrl }} style={styles.backgroundImage}>
                            <View style={styles.titleContainer}>
                                <Text style={styles.title} numberOfLines={1}>{props.title}</Text>
                            </View>
                        </ImageBackground>
                    </View>
                    <View style={{ ...styles.itemRow, ...styles.itemDetails }}>
                        <View style={styles.descriptionContainer}><Text style={styles.description}>{props.description}</Text></View>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    item: {
        height: 300,
        width: '100%',
        backgroundColor: '#f5f5f5',
        overflow: 'hidden',
        borderRadius: 25,
    },
    itemRow: {
        flexDirection: 'row'
    },
    itemHeader: {
        height: '85%'
    },
    itemDetails: {
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '15%',
        backgroundColor: Colors.darkBrown,
    },
    backgroundImage: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end'
    },
    titleContainer: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        paddingVertical: 5,
        paddingHorizontal: 12,
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 20,
        color: 'white',
        textAlign: 'center'
    },
    descriptionContainer: {
        flex: 1
    },
    description: {
        color: 'white',
        fontFamily: 'open-sans',
        textAlign: 'center',
        fontSize: 15
    }
});

// use ImageBackground to wrap around component that you want to add the ImageBackground to, ensuring the component is visible. 

export default Card;