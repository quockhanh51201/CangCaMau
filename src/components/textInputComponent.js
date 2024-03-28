import { StyleSheet, Text, TextInput, View } from "react-native"

const TextInputComponent = ({placeholder, secureTextEntry, keyboardType}) => {

    return (
        <View>
            <TextInput
                placeholder = {placeholder}
                placeholderTextColor = 'rgb(153,191,212)'
                style = {styles.TextInput}
                secureTextEntry={secureTextEntry}
                keyboardType = {keyboardType}
            ></TextInput>
        </View>
    )

}
const styles = StyleSheet.create({
    TextInput:{
        height: 38,
        width:345,
        backgroundColor: '#FFFFFF',
        textAlign: 'center',
        borderRadius: 6,
        color: 'rgb(0,95,148)',
        fontFamily: 'Roboto-Bold',
        fontSize: 16,
        marginTop: 16
    }
})
export default TextInputComponent