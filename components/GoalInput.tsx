import { useState } from 'react';
import {
  Alert,
  Button,
  Image,
  Modal,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
type GoalInputProps = {
  onAddGoal: (goalText: string) => void;
  modalVisible: true;
  onCancel: () => void;
};
function GoalInput({ onAddGoal, modalVisible, onCancel }: GoalInputProps) {
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
    <Modal animationType="slide" visible={modalVisible}>
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require('../assets/image/goal.webp')}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal..."
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" onPress={onCancel} color="#f31282" />
          </View>
          <View style={styles.button}>
            <Button title="Add goal" onPress={addGoalHandler} color="#b180f0" />
          </View>
        </View>
      </View>
    </Modal>
  );
}
export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#1e085a',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    width: '100%',
    padding: 16,
    borderRadius: 6,
    color: '#120438',
    marginVertical: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 16,
  },
  button: {
    width: 90,
    marginHorizontal: 8,
  },
  image: {
    width: 120,
    height: 100,
    tintColor: 'white',
    margin: 10,
  },
});
