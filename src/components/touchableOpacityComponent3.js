import { Text,TouchableOpacity, View } from "react-native"

const TouchableOpacityComponent3 = ({content,color, backgroundColor, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style = {{
                width: 'auto',
                height: 38,
                borderRadius: 8,
                justifyContent: 'center',
                backgroundColor: backgroundColor
            }}>
                <Text style ={{
                    textAlign: 'center',
                    fontSize: 14,
                    fontFamily: 'Inter-Bold',
                    color: color
                }}>{content}</Text>
            </View>
        </TouchableOpacity>
    )
}
export default TouchableOpacityComponent3