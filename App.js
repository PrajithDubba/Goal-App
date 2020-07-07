import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Modal } from 'react-native';
import GoalList from './src/components/GoalList';

export default function App() {

    const [inputGoal, setGoalInput] = useState('');
    const [goals, setGoal] = useState([]);
    const [displayModal, setModalDisplay] = useState('false');

    const onInputChange = (text) => {
        setGoalInput(text);
    }

    const onDelete = (key) => { 
        setGoal([...goals.filter(item => item.key !== key)]);
    };

    const onAddGoal = () => {
        if (inputGoal !== '') {
            setGoal([...goals, { key: Math.random().toString(), goal: inputGoal }]);
            setGoalInput('');
            setModalDisplay('false');
        }
    }

    const onCancel = () => {
        setModalDisplay('false');
    }

  return (
      <View style={styles.container}>
          <Button title="Add Goal" onPress={() => { setModalDisplay(true); }} />
          <Modal visible={displayModal} animationType="slide">
              <View style={styles.addGoalView}>
                  <TextInput style={styles.courseInput} placeholder={"Enter Goal"} value={inputGoal} onChangeText={onInputChange} />
                  <View style={styles.buttonsView}>
                      <Button style={styles.button} title={"Add Goal"} onPress={onAddGoal} />
                      <Button style={styles.button} title={"Cancel"} onPress={onCancel} color="red" />
                  </View>
              </View>
          </Modal>
          {goals.length > 0 && <GoalList list={goals} onDelete={onDelete} />}
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      padding: 50
    },
    addGoalView: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1
    },
    courseInput: {
        borderBottomColor: "black",
        borderBottomWidth: 1,
        width: '60%',
        marginBottom: 10
    },
    buttonsView: {
        flexDirection: "row",
        justifyContent: "space-between", 
        width: '50%'
    },
    button: {
        marginHorizontal: 5
    }
});
