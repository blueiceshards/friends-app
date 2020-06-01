import React, { useState, useCallback } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, useNavigation } from 'react-native';
import FrontCard from './FrontCard';
import BackCard from './BackCard';

const RenderedCard = props => {

    const [isFlipped, setIsFlipped] = useState(false);

    const onFlipHandler = () => {
        setIsFlipped(prevState => !prevState)
    }

/*     const onForwardHandler = () => {
        setIsFlipped(prevState => !prevState);
        props.onSelect.navigation.navigate({
            routeName: 'ActivityDetails', params: {
                activityId: itemData.item.id,
                activityTitle: itemData.item.title
            }
        }); 
    } */
       
    if (!isFlipped) {
        return <FrontCard
            title={props.title}
            imageUrl={props.imageUrl}
            description={props.description}
            onSelect={onFlipHandler}
        />
    }

    else {
        return <BackCard
            title={props.title}
            imageUrl={props.imageUrl}
            description={props.description}
            onSelect={onFlipHandler}
            onButtonPress={props.onSelect}
        />
    }

}

export default RenderedCard;