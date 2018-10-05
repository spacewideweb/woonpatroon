import React from 'react';
import PropTypes from 'prop-types';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';


const propTypes = {
    label: PropTypes.string,
    placeholder: PropTypes.string,
    password: PropTypes.bool,
    style: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.array,
        PropTypes.shape()
    ])
};

const ZTextInput = (props) => {
    const { label, placeholder, password, style } = props;
    const { 
        container, 
        labelContainer, 
        inputContainer, 
        inputBoxContainer,
        showBtnContainer,
        showText } = styles;
    return (
        <View style={[style, container]}>
            <Text style={labelContainer}>{label}</Text>
            <View style={inputContainer}>
                <TextInput 
                    style={inputBoxContainer}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder={placeholder}/>
                { password ? <TouchableOpacity style={showBtnContainer}>
                    <Text style={showText}>Show</Text>
                </TouchableOpacity>: null}
            </View>
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
        fontSize: 12,
    }
}

ZTextInput.propTypes = propTypes;
export { ZTextInput };

