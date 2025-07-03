import { useState } from 'react';
import { Alert, Button, StyleSheet, TextInput, View } from 'react-native';
type GoalInputProps = {
  onAddGoal: (goalText: string) => void;
};
function GoalInput({ onAddGoal }: GoalInputProps) {
  const [enteredGoalText, setEnteredGoalText] = useState<string>('');

  function goalInputHandler(enteredText: string) {
    setEnteredGoalText(enteredText);
  }
  function addGoalHandler() {
    if (enteredGoalText.trim().length === 0) {
      Alert.alert('Input Error', 'Please enter a valid goal.');
      return;
    }
    onAddGoal(enteredGoalText);

    setEnteredGoalText('');
  }
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Your course goal..."
        onChangeText={goalInputHandler}
        value={enteredGoalText}
      />
      <Button title="Add goal" onPress={addGoalHandler} />
    </View>
  );
}
export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8,
  },
});
