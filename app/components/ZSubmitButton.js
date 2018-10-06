import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text } from 'react-native';

const propTypes = {
    label: PropTypes.string,
    height: PropTypes.number,
    onPress: PropTypes.func,
    style: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.array,
        PropTypes.shape()
    ])
}

const ZSubmitButton = (props) => {
    const { label, height, style, onPress } = props;
    const { container, labelContainer } = styles;
    
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[style, container, {borderRadius: height/2}]}>
            <Text style={labelContainer}>{label}</Text>
        </TouchableOpacity>
    )
}

const styles = {
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#4285F4'
    },
    labelContainer: {
        color: '#FFF',
        fontSize: 18,
    }
}

ZSubmitButton.propTypes = propTypes;
export { ZSubmitButton };