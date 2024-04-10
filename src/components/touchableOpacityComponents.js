import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const TouchableOpacityComponents = ({content, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.Touch}>
        <Text style={styles.Text}>{content}</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  Text: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 14,
    fontFamily: 'Inter-Bold',
  },
  Touch: {
    backgroundColor: 'rgb(0,95,148)',
    width: 173,
    height: 38,
    borderRadius: 6,
    justifyContent: 'center',
  },
});
export default TouchableOpacityComponents;
