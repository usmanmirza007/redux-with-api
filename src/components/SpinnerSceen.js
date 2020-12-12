import React from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';

import colors from './../constants/colors';

const SpinnerScreen = ({size})=> {
    return(
        <View style= {styles.spinnerStyle}>
            <ActivityIndicator size={size || 'large'} color = {colors.green} />
        </View>
    );
};

const styles = StyleSheet.create({
    spinnerStyle:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default SpinnerScreen;