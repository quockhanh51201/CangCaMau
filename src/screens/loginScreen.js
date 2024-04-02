import {View, Text, ImageBackground, Image, TouchableOpacity, ScrollView, } from "react-native"
import { IMAGES } from "../assets/images/images"
import TextInputComponent from "../components/textInputComponent"
import TouchableOpacityComponents from "../components/touchableOpacityComponents"
import CheckBoxComponent from "../components/checkBoxComponent"
import { useState } from "react"

const LoginScreen = ({navigation}) => {

    const [selectedUse, setSelectedUse] = useState('')
    
    const handleCheckboxChange = (label) => {
        setSelectedUse(label);
    };
    const [selectedSavePass, setSelectedSavePass] = useState(false)

    return(
        <ImageBackground source={IMAGES.background2} style={{flex:1}} resizeMode="stretch">
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
                    }}>đăng nhập</Text>
                </View>
                <View style = {{
                    justifyContent: 'space-evenly',
                    flexDirection: 'row'
                }}>
                    <CheckBoxComponent 
                        label={'Chủ tàu'}
                        onPress={() => handleCheckboxChange('Chủ tàu')}
                        isChecked={selectedUse === 'Chủ tàu'}
                    />
                    <CheckBoxComponent
                        label={'Cán bộ'}
                        onPress={() => handleCheckboxChange('Cán bộ')}
                        isChecked={selectedUse === 'Cán bộ'}
                    />
                </View>
                <View 
                    style={{
                        justifyContent: 'space-evenly',
                        alignItems: "center"
                    }}
                >
                    <TextInputComponent placeholder={'Số điện thoại'} keyboardType={'numeric'}/>
                    <TextInputComponent placeholder={'Mật khẩu'} secureTextEntry={true}/>
                </View>
                <View
                    style={{
                        marginTop: 15,
                        justifyContent:"center",
                        alignItems: 'flex-end',
                        right: 35
                    }}
                >
                    <CheckBoxComponent 
                        label={'Lưu mật khẩu'}
                        onPress={() => setSelectedSavePass(!selectedSavePass)}
                        isChecked={selectedSavePass}
                    />
                </View>
                <View
                    style = {{
                        margin: 48,
                        justifyContent: "center",
                        alignItems: 'center'
                    }}
                >
                    <TouchableOpacityComponents content={'Đăng Nhập'} onPress={ () => {
                        navigation.navigate('TabBar')
                        navigation.reset({
                            index: 0,
                            routes: [{ name: 'TabBar' }]
                          })
                    }}/>
                </View>
                <View
                    style = {{
                        justifyContent: "center",
                        alignItems: 'center'
                    }}
                >
                    <TouchableOpacity
                        onPress={() => navigation.navigate('ForgotPass')}
                    >
                        <Text 
                            style={{
                                fontFamily: 'Inter-Regular',
                                fontSize: 14,
                                color: '#005F94'
                            }}
                        >Quên mật khẩu?</Text>
                    </TouchableOpacity>

                </View>
                <View
                    style = {{
                        margin: 48,
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
                    >Chủ tàu chưa có tài khoản?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                    <Text
                        style={{
                            fontFamily: 'Inter-Bold',
                            fontSize: 14,
                            color: '#005F94',
                            textTransform: 'uppercase',
                            marginLeft: 5
                        }}
                    >đăng ký ngay</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>
        </ImageBackground>
    )
}

export default LoginScreen