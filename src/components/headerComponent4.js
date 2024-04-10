import { Image, Text, TouchableOpacity, View } from "react-native"
import { ICONS } from "../assets/icons/icons"
import { cloneElement } from "react"

const HeaderComponent4 = ({label ,navigation}) => {
    return(
        <View style={{flexDirection: 'row', backgroundColor: '#459AC9'}}>
            <TouchableOpacity
                onPress={() => navigation.goBack()}
            >
                    <View style ={{
                        marginTop: 4,
                        marginLeft: 12,
                        marginBottom: 17
                    }}>
                        <Image source={ICONS.Back} resizeMode="contain" style={{tintColor: '#FFF', width: 20, height: 20}}/>
                    </View>
            </TouchableOpacity>

            <View style = {{
                flex: 1,
                marginTop: 5,
                marginRight: 32,
                alignItems: 'center',
            }}>
                <Text
                    style={{
                        alignContent: 'center',
                        fontFamily: 'Roboto-Bold',
                        fontSize: 16,
                        color: '#FFF'
                    }}
                >{label}</Text>
            </View>
        </View>
    )
}
export default HeaderComponent4