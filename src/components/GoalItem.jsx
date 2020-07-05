import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default GoalItem = (props) => {
    return <View style={styles.GoalView}>
        <Text>{props.goal}</Text>
    </View>
}

const styles = StyleSheet.create({
    GoalView: {
        height: 50,
        marginVertical: 5,
        backgroundColor: 'grey',
        alignItems: 'center',
        justifyContent: 'center'
    }
});