import {View, Text, ImageBackground, Image, TouchableOpacity, ScrollView, } from "react-native"
import { IMAGES } from "../assets/images/images"
import TextInputComponent from "../components/textInputComponent"
import TouchableOpacityComponents from "../components/touchableOpacityComponents"
import { useState } from "react"
import HeaderComponents from "../components/headerComponents"

const ForgotPassScreen = ({navigation}) => {
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
                    }}>quên mật khẩu</Text>
                </View>
                <View 
                    style={{
                        alignItems: "center"
                    }}
                >
                    <TextInputComponent placeholder={'Số điện thoại đăng ký'} keyboardType={'numeric'}/>
                </View>
                <View
                    style = {{
                        margin: 48,
                        justifyContent: "center",
                        alignItems: 'center'
                    }}
                >
                    <TouchableOpacityComponents content={'Xác nhận'} onPress={() => navigation.navigate('ForgotPassOTP')}/>
                </View>

            </ScrollView>
        </ImageBackground>
    )
}

export default ForgotPassScreen