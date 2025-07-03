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

  function addGoalHandler(enteredGoalText: string) {
    setGoalList(prevGoals => [
      ...prevGoals,
      { id: Math.random().toString(), text: enteredGoalText },
    ]);
  }
  function removeGoalHandler(id: string) {
    setGoalList(currentGoals => {
      return currentGoals.filter(item => item.id != id);
    });
  }
  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={goalList}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <AddgoalItem data={item.text} id={item.id} onDeleteItem={removeGoalHandler} />
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
  },
  goalsContainer: {
    flex: 5,
  },
});
export default App;
