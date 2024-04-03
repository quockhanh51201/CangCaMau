import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native"
import HeaderComponents from "../components/headerComponents"
import { ICONS } from "../assets/icons/icons"
import { useState } from "react"

const TextInputCusTom = ({lable, text, setText, keyboardType, right}) => {
    return(
        <View
            style ={{
                height: 55,
                backgroundColor: '#FFF',
                borderBottomWidth: 1,
                borderColor: '#D6D6D6',
                marginTop: 15
            }}
        >
            <Text style = {{
                color: '#ADADAD',
                fontSize: 12,
                fontFamily: 'Roboto-Regular',
            }}>{text}{lable}</Text>
            <View style = {{
                flexDirection: "row",
                justifyContent: 'space-between'
            }}>
                <TextInput
                    placeholder="--"
                    placeholderTextColor={'#333'}
                    keyboardType= {keyboardType}
                    style ={{
                        color: '#333',
                        fontFamily: 'Roboto-Regular',
                        fontSize: 16,
                    }}
                    onChangeText={setText}
                    value = {text}
                >
                </TextInput>
                <View style = {{}}>
                    {
                        right == 'Clear' ? <ClearComponent setText={setText}/> : ''
                    }
                </View>
            </View>
        </View>
    )
}
const ClearComponent = ({setText}) => {
    const Clear = () => (setText(''))
    return (
        <TouchableOpacity onPress={Clear}>
            <View style = {{
                padding: 1.6,
                marginRight: 11.64
            }}>
                <Image source={ICONS.Clear} resizeMode='contain' style = {{width: 6.36, height: 6.36}}/>
            </View>
        </TouchableOpacity>
    )
}
const ChangePassScreen = ({navigation}) => {
    const [oldPass, setOldPass] = useState('')
    const [newPass, setNewPass] = useState('')
    const [reNewPass, setReNewPass] = useState('')
    return(
        <View style = {{flex: 1}}>
            <View>
                <HeaderComponents label={'Đổi mật khẩu'} colorIcon={'#333'} navigation={navigation}/>   
            </View>
            <ScrollView style = {{marginTop: 11}}>
                <View
                    style = {{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        margin: 12,

                    }}
                >
                    <View
                        style = {{
                            backgroundColor: '#FFF',
                            borderRadius: 6,
                            padding: 12,
                            width: '100%'
                        }}
                    >
                        <TextInputCusTom lable={'Nhập mật khẩu cũ'} setText={setOldPass}right={'Clear'}/>
                        <TextInputCusTom lable={'Nhập mật khẩu mới'} setText={setNewPass}right={'Clear'}/>
                        <TextInputCusTom lable={'Nhập lại mật khẩu'} setText={setReNewPass}right={'Clear'}/>

                    </View>
                        <View
                        style = {{
                            height: 95,
                            justifyContent: 'center'
                        }}
                    >
                        <TouchableOpacity>
                            <View style = {{
                                width: 173,
                                height: 38,
                                borderRadius: 6,
                                backgroundColor: '#005F94',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <Text style = {
                                    {
                                        fontFamily: 'Roboto-Bold',
                                        fontSize: 14,
                                        color: '#FFF'
                                    }
                                }>
                                    Đổi mật khẩu
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default ChangePassScreen