import { Alert, Pressable, StyleSheet, Text, View } from 'react-native';
type Props = {
  data: string;
  id: string;
  onDeleteItem: (id: string) => void;
};
function AddgoalItem({ data, id, onDeleteItem }: Props) {
  // function handlePress() {
  //   Alert.alert('Confirm Delete!', 'Are you sure to delete this ?', [
  //     { text: 'Cancel', style: 'cancel' }, // Button 1
  //     {
  //       text: 'Delete', // Button 2
  //       style: 'destructive',
  //       onPress: () => onDeleteItem(id), // Delete on confirm
  //     },
  //   ]);
  // }

  return (
    <View style={styles.goalList}>
      <Pressable android_ripple={{ color: '#E1BEE7' }} onPress={() => onDeleteItem(id)}>
        <Text style={styles.goalText}>{data}</Text>
      </Pressable>
    </View>
  );
}
export default AddgoalItem;

const styles = StyleSheet.create({
  goalList: {
    margin: 8,
    padding: 8,
    backgroundColor: '#673AB7',
    borderRadius: 5,
    width: '100%',
  },
  goalText: {
    color: 'white',
  },
});
