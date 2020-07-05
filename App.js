import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import GoalList from './src/components/GoalList';

export default function App() {

    const [inputGoal, setGoalInput] = useState('');
    const [goals, setGoal] = useState([]);

    const onInputChange = (text) => {
        setGoalInput(text);
    }

    const onAddGoal = () => {
        if (inputGoal !== '') {
            setGoal([...goals, { key: Math.random().toString(), goal: inputGoal }]);
            setGoalInput('');
        }
    }

  return (
      <View style={styles.container}>
          <View style={styles.addGoalView}>
              <TextInput style={styles.courseInput} placeholder={"Enter Goal"} value={inputGoal} onChangeText={onInputChange} />
              <Button style={styles.button} title={"Add Goal"} onPress={onAddGoal} />
          </View>
          <GoalList list={goals} />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      padding: 50
    },
    addGoalView: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    courseInput: {
        flex: 1,
        borderBottomColor: "black",
        borderBottomWidth: 1,
        marginRight: 5
    },
    button: {
        flex: 1
    }
});
