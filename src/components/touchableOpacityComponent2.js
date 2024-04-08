import { Text,TouchableOpacity, View } from "react-native"

const TouchableOpacityComponent2 = ({content,color, backgroundColor, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style = {{
                width: 173,
                height: 38,
                borderRadius: 6,
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
export default TouchableOpacityComponent2