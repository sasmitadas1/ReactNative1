import { StyleSheet, Text, View } from 'react-native';
type Props = {
  data: string;
};
function AddgoalItem({ data }: Props) {
  return (
    <View style={styles.goalList}>
      <Text style={styles.goalText}>{data}</Text>
    </View>
  );
}
export default AddgoalItem;

const styles = StyleSheet.create({
  goalList: {
    margin: 8,
    padding: 8,
    backgroundColor: '#2196F3',
    borderRadius: 5,
    width: '100%',
  },
  goalText: {
    color: 'white',
  },
});
