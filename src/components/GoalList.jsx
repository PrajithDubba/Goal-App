import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import GoalItem from './GoalItem';

export default GoalList = (props) => {
    return (<FlatList style={styles.listView}
        data={props.list}
        renderItem={item => {
            return (<GoalItem goal={item.item.goal} />);
        }}
        keyExtractor={item => item.key} 
    />)
};

const styles = StyleSheet.create({
    listView: {
        paddingVertical: 5
    }
})