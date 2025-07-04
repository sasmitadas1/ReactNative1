import { Alert, Pressable, StyleSheet, Text, View } from 'react-native';
type Props = {
  data: string;
  id: string;
  onDeleteItem: (id: string) => void;
};
function AddgoalItem({ data, id, onDeleteItem }: Props) {
  function handlePress() {
    Alert.alert('Confirm Delete!', 'Are you sure to delete this ?', [
      { text: 'Cancel', style: 'cancel' }, // Button 1
      {
        text: 'Delete', // Button 2
        style: 'destructive',
        onPress: () => onDeleteItem(id), // Delete on confirm
      },
    ]);
  }

  return (
    <View style={styles.goalList}>
      <Pressable  onPress={handlePress}>
        <Text style={styles.goalText}>{data}</Text>
      </Pressable>
    </View>
  );
}
export default AddgoalItem;

const styles = StyleSheet.create({
  goalList: {
    marginVertical: 6,
    marginHorizontal: 10,
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: '#501cbf',
    borderRadius: 8,
    elevation: 2, 
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  goalText: {
    color: 'white',
  },
});
