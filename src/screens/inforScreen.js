import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native"
import HeaderComponents from "../components/headerComponents"
import { ICONS } from "../assets/icons/icons"
import { IMAGES } from "../assets/images/images"
import { useState } from "react"


const TextInputCusTom = ({lable, text, setText, keyboardType}) => {
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
            <TextInput
                placeholder="--"
                placeholderTextColor={'#333'}
                keyboardType= {keyboardType}
                style ={{
                    color: '#333',
                    fontFamily: 'Roboto-Regular',
                    fontSize: 16
                }}
                onChangeText={setText}
                value = {text}
                editable = {false}
            >
            </TextInput>
        </View>
    )
}

const InforScreen = ({navigation}) => {

    const [name, setName] = useState('Phan Quốc Khánh')
    const [cmnd, setCmnd] = useState('')
    const [birthDay, setBirthDay] = useState('')
    const [address, setAddress] = useState('')
    const [ward, setWard] = useState('')
    const [city, setCity] = useState('')
    const [district, setDistric] = useState('')
    const [phone, setPhone] = useState('')
    const [type, setType] = useState('')
    const [catificate, setCatificate] = useState('')
    const [catificateBy, setCatificateBy] = useState('')
    const [date, setdate] = useState('')

    return(
        <View style = {{
            flex: 1
        }}>
            <HeaderComponents label={'Thông tin cá nhân'} colorIcon={'#333'} navigation={navigation}/>
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
                        <TextInputCusTom text={name} setText={setName}/>
                        <TextInputCusTom lable={'CMND/CCCD'} setText={setCmnd}/>
                        <TextInputCusTom lable={'Ngày sinh'} setText={setBirthDay}/>
                        <TextInputCusTom lable={'Địa chỉ'} setText={setAddress}/>
                        <TextInputCusTom lable={'Phường/Xã'} setText={setWard}/>
                        <TextInputCusTom lable={'Quận/Huyện'} setText={setDistric}/>
                        <TextInputCusTom lable={'Tỉnh/Thành phố'} setText={setCity}/>
                        <TextInputCusTom lable={'Số điện thoại'} setText={setPhone}/>
                        <TextInputCusTom lable={'Loại thuyền viên'} setText={setType}/>
                    </View>
                </View>
                <View
                    style = {{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 10,
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
                        <TextInputCusTom lable={'Giấy chứng nhận chuyên môn'} setText={setCatificate}/>
                        <TextInputCusTom lable={'Cơ quan cấp'} setText={setCatificateBy}/>
                        <TextInputCusTom lable={'Ngày cấp'} setText={setdate}/>
                    </View>
                </View>
                <View
                    style = {{
                        height: 95,
                        flexDirection: 'row',
                        justifyContent: 'space-around'
                    }}
                >
                    <TouchableOpacity>
                        <View style ={{
                            width: 173,
                            height: 38,
                            borderRadius: 6,
                            backgroundColor: '#F62825',
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
                                Xóa tài khoản
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('UpdateInforScreen')}
                    >
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
                                Cập nhật
                            </Text>
                        </View>
                    </TouchableOpacity>

                </View>
            </ScrollView>
        </View>
    )  
}

export default InforScreen