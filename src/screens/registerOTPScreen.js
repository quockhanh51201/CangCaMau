import {View, Text, ImageBackground, Image, TouchableOpacity, ScrollView, } from "react-native"
import { IMAGES } from "../assets/images/images"
import TextInputComponent from "../components/textInputComponent"
import TouchableOpacityComponents from "../components/touchableOpacityComponents"
import CheckBoxComponent from "../components/checkBoxComponent"
import { useEffect, useState } from "react"
import HeaderComponents from "../components/headerComponents"

const RegisterOTPScreen = ({navigation}) => {
    const [countdown, setCountdown] = useState(60)

    useEffect( () => {
        if (countdown > 0)
        {
            var timeId = setTimeout(() => {
                setCountdown(countdown - 1)
            }, 1000);
        }
        return () => clearTimeout(timeId)
    },[countdown])


    return(
        <ImageBackground source={IMAGES.background2} style={{flex:1}} resizeMode="stretch">
            <HeaderComponents navigation={navigation}/>
            <ScrollView style={{flex: 1}}>
                <View style ={{
                    margin: 50,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Text style={{
                        textTransform: 'uppercase',
                        fontFamily: 'Roboto-Bold',
                        fontSize: 24,
                        color: '#005F94'
                    }}>OTP xác nhận</Text>
                </View>
                <View 
                    style={{
                        alignItems: "center"
                    }}
                >
                    <TextInputComponent placeholder={'OTP xác nhận'} keyboardType={'numeric'}/>
                </View>
                <View
                    style={{
                        margin: 15,
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'row',

                    }}
                >
                    <TouchableOpacity
                        onPress={
                            () => setCountdown(60)
                        }
                        disabled = {countdown === 0 ? false: true}
                    >
                        <Text
                            style = {{
                                marginRight: 5,
                                textDecorationLine: 'underline',
                                fontFamily: 'Inter-Regular',
                                color: '#005F94',
                                fontSize: 14
                            }}
                        >
                            Gửi lại OTP
                        </Text>
                    </TouchableOpacity>
                    <Text
                        style = {{
                            marginRight: 5,
                            fontFamily: 'Inter-Bold',
                            color: '#005F94',
                            fontSize: 14
                        }}               
                    >{countdown}s</Text>
                </View>
                <View
                    style = {{
                        margin: 48,
                        justifyContent: "center",
                        alignItems: 'center'
                    }}
                >
                    <TouchableOpacityComponents content={'Xác nhận'} onPress={() => navigation.navigate('Login')}/>
                </View>

            </ScrollView>
        </ImageBackground>
    )
}

export default RegisterOTPScreen