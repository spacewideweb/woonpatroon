import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Dimensions, Text, Image, View } from 'react-native';
import { ZSubmitButton } from './ZSubmitButton';

const WIDTH = Dimensions.get('window').width;

const propTypes = {
    text: PropTypes.string,
    onPress: PropTypes.func
};

const ZLeadDetailItem = (props) => {

    const { text, onPress } = props;
    const { container, labelContainer, indicatorContainer, separator } = styles;
    
    return (
        <TouchableOpacity 
            style={container}
            onPress={onPress}>
            <Text style={labelContainer}>{text}</Text>
            <Image source={require('../res/images/Chevron.png')} style={indicatorContainer}/>
            <View style={separator}/>
        </TouchableOpacity>
    )
}

const styles = {
    container: {
        width: WIDTH,
        height: 60,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    labelContainer: {
        marginLeft: 25,
        color: '#666666',
        fontSize: 16,
    },
    indicatorContainer: {
        marginRight: 15, 
        width: 12,
        height: 15,
    },
    separator: {
        position:'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: 0.4,
        backgroundColor: '#F2F3F4'
    }
}

ZLeadDetailItem.propTypes = propTypes;
export { ZLeadDetailItem };

