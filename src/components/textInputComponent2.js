import {StyleSheet, Text, TextInput, View} from 'react-native';

const TextInputComponent2 = ({placeholder, secureTextEntry, keyboardType}) => {
  return (
    <View>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="#8D84DF"
        style={styles.TextInput}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}></TextInput>
    </View>
  );
};
const styles = StyleSheet.create({
  TextInput: {
    height: 38,
    width: 345,
    backgroundColor: '#FFFFFF',
    textAlign: 'center',
    borderRadius: 6,
    color: '#8D84DF',
    fontFamily: 'Roboto-Bold',
    fontSize: 16,
    marginTop: 16,
  },
});
export default TextInputComponent2;
