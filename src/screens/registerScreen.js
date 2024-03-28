import {View, Text, ImageBackground, Image, TouchableOpacity, ScrollView, } from "react-native"
import { IMAGES } from "../assets/images/images"
import TextInputComponent from "../components/textInputComponent"
import TouchableOpacityComponents from "../components/touchableOpacityComponents"
import CheckBoxComponent from "../components/checkBoxComponent"
import { useState } from "react"

const Register = ({navigation}) => {

    return(
        <ImageBackground source={IMAGES.background2} style={{flex:1}} resizeMode="stretch">
            <ScrollView style={{flex: 1}}>
                <View>
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
                        }}>đăng ký</Text>
                        <Text style={{
                            textTransform: 'uppercase',
                            fontFamily: 'Roboto-Bold',
                            fontSize: 24,
                            color: '#005F94'
                        }}>tài khoản chủ tàu</Text>
                    </View>
                    <View
                        style = {{
                            justifyContent: "center",
                            alignItems: 'center',
                        }}
                    >
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
                    <View 
                        style={{
                            justifyContent: 'space-evenly',
                            alignItems: "center"
                        }}
                    >
                        <TextInputComponent placeholder={'Họ tên'}/>
                        <TextInputComponent placeholder={'CMND/CCCD'} keyboardType={'numeric'}/>
                        <TextInputComponent placeholder={'Ngày sinh'}/>
                        <TextInputComponent placeholder={'Địa chỉ'} keyboardType={'email-address'}/>
                    </View>
                    <View 
                        style={{
                            flex: 0.2,
                            justifyContent: 'space-evenly',
                            alignItems: "center"
                        }}
                    >
                        <TextInputComponent placeholder={'Số điện thoại'} keyboardType={'numeric'}/>
                        <TextInputComponent placeholder={'Mật khẩu'} secureTextEntry={true}/>            
                        <TextInputComponent placeholder={'Nhập lại mật khẩu'} secureTextEntry={true}/>
                    </View>
                    <View
                        style = {{
                            margin: 48,
                            justifyContent: "center",
                            alignItems: 'center'
                        }}
                    >
                        <TouchableOpacityComponents content={'Đăng ký'}
                            onPress={
                                () => navigation.navigate('RegisterOTP')
                            }
                        />
                    </View>
                    <View
                        style = {{
                            justifyContent: "center",
                            alignItems: 'center',
                            flexDirection: 'row'
                        }}
                    >
                        <Text
                            style={{
                                fontFamily: 'Inter-Regular',
                                fontSize: 14,
                                color: '#459AC9'
                            }}
                        >Chủ tàu đã có tài khoản?</Text>
                        <TouchableOpacity
                            onPress={
                                () => navigation.navigate('Login')
                            }
                        >
                        <Text
                            style={{
                                fontFamily: 'Inter-Bold',
                                fontSize: 14,
                                color: '#005F94',
                                textTransform: 'uppercase',
                                marginLeft: 5
                            }}
                        >Đăng nhập</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </ScrollView>
        </ImageBackground>
    )
}

export default Register