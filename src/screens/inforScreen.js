import { Image, Text, TouchableOpacity, View } from "react-native"
import HeaderComponents from "../components/headerComponents"
import { ICONS } from "../assets/icons/icons"
import { IMAGES } from "../assets/images/images"

const InforScreen = () => {

    const TextInputCusTom = () => {
        return(
            <View
                style ={{
                    height: 55,
                    backgroundColor: '#FFF'
                }}
            >

            </View>
        )
    }
    return(
        <View style = {{
            flex: 1
        }}>
            <HeaderComponents label={'Thông tin cá nhân'} colorIcon={'#333'}/>
            <View style = {{
                borderRadius: 50,
                height: 120,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Image source={ICONS.Profile} resizeMode="contain" style ={{width: 80,
                height: 80}}/>
            </View>
                <TouchableOpacity
                    onPress={ () => navigation.navigate('ScanQR')}                        
                >
                    <View
                        style = {{
                            justifyContent: "center",
                            alignItems: 'center',
                            flexDirection: 'row'
                        }}
                    >
                        <Image source={IMAGES.scan} style={{height: 16, width: 16}}/>
                        <Text
                            style={{
                                fontFamily: 'Roboto-Regular',
                                fontSize: 12,
                                color: '#005F94',
                                marginLeft: 5,
                                textDecorationLine: 'underline'
                            }}
                        >Đăng kí bằng CCCD gắn chip</Text>
                    </View>
                </TouchableOpacity>
                
        </View>
    )
}

export default InforScreen