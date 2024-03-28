import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"

const TouchableOpacityComponents = ({content, onPress}) => {

    return (
        <View style = {styles.Touch}>
            <TouchableOpacity onPress={onPress}>
                <Text style ={styles.Text}>{content}</Text>
            </TouchableOpacity>
        </View>
    )

}
const styles = StyleSheet.create({
    Text:{
        color: '#FFFFFF',
        textAlign: 'center',
        fontSize: 14,
        fontFamily: 'Inter-Bold',
    },
    Touch:{
        backgroundColor: 'rgb(0,95,148)',
        width: 173,
        height: 38,
        borderRadius: 6,
        justifyContent: 'center'
    }
})
export default TouchableOpacityComponents