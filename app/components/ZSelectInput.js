import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';

const propTypes = {
    label: PropTypes.string,
    text: PropTypes.string,
    m2: PropTypes.bool,
    onPress: PropTypes.func,
    style: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.array,
        PropTypes.shape()
    ])
}

const ZSelectInput = (props) => {
    const { label, text, m2, onPress, style } = props;
    const { 
        container, 
        labelContainer, 
        inputContainer, 
        inputBoxContainer,
        showBtnContainer,
        inputTextContainer,
        showText } = styles;

    return (
        <View style={[style, container]}>
            <Text style={labelContainer}>{label}</Text>
            <TouchableOpacity 
                style={inputContainer}
                onPress={onPress}>
                <Text style={inputTextContainer}>{text}</Text>
                {m2 ? <View style={showBtnContainer}>
                    <Text style={showText}>m2</Text>
                </View>: null}
            </TouchableOpacity>
        </View>
    )
}

const styles = {
    container: {
        justifyContent: 'center'
    },
    labelContainer: {
        color: '#898B9B'
    },
    inputContainer: {
        width: '100%',
        height: '70%',
        marginTop: 10,
        backgroundColor: 'transparent',
        borderRadius: 7,
        borderWidth: 1,
        borderColor: '#F2F2F2',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        alignItems: 'center'
    },
    inputTextContainer: {
        flex: 8
    },
    inputBoxContainer: {
        flex: 8,
        fontSize: 17,
    },
    showBtnContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    showText: {
        color: '#F00',
        fontSize: 10,
    }
}

ZSelectInput.propTypes = propTypes;
export { ZSelectInput };