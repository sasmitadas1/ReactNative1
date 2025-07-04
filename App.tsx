import { useState } from 'react';
import {
  Button,
  FlatList,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';
import AddgoalItem from './components/AddgoalItem';
import GoalInput from './components/GoalInput';

function App() {
  const [goalList, setGoalList] = useState<{ id: string; text: string }[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  function addGoalHandler(enteredGoalText: string) {
    setGoalList(prevGoals => [
      ...prevGoals,
      { id: Math.random().toString(), text: enteredGoalText },
    ]);
    endAddGoalHandler();
  }
  function removeGoalHandler(id: string) {
    setGoalList(currentGoals => {
      return currentGoals.filter(item => item.id != id);
    });
  }
  function startAddGoalHandler() {
    setModalVisible(true);
  }
  function endAddGoalHandler() {
    setModalVisible(false);
  }
  return (
    <View style={styles.appContainer}>
      <Button
        title="Add new Goal"
        color="#673AB7"
        onPress={startAddGoalHandler}
      />
      {modalVisible && (
        <GoalInput
          modalVisible={modalVisible}
          onAddGoal={addGoalHandler}
          onCancel={endAddGoalHandler}
        />
      )}
      <View style={styles.goalsContainer}>
        <FlatList
          data={goalList}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <AddgoalItem
              data={item.text}
              id={item.id}
              onDeleteItem={removeGoalHandler}
            />
          )}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 80,
    paddingHorizontal: 16,
    backgroundColor: '#1e085a',
  },
  goalsContainer: {
    flex: 5,    
  },
});
export default App;
