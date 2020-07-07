import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default GoalItem = (props) => {
    const onDelete = () => {
        props.onDelete(props.id);
    }

    return (
        <TouchableOpacity onPress={onDelete}>
            <View style={styles.GoalView}>
                <Text>{props.goal}</Text>
            </View>
        </TouchableOpacity>
       );
}

const styles = StyleSheet.create({
    GoalView: {
        height: 50,
        marginVertical: 5,
        backgroundColor: 'gainsboro',
        alignItems: 'center',
        justifyContent: 'center'
    }
});