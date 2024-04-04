import { Image, Text, TextInput, TouchableOpacity, View } from "react-native"
import { ICONS } from "../assets/icons/icons"
import { useState } from "react"


const HeaderComponent2 = ({label ,navigation, right, setFilter}) => {
    const [search,setSearch] = useState('open')
    return(
        <View style={{flexDirection: 'row', backgroundColor: '#459AC9', alignItems: 'center', justifyContent: 'center',paddingLeft: 7,paddingBottom: 17}}>
            <TouchableOpacity
                onPress={() => navigation.goBack()}
                style = {{
                    flex: 1
                }}
            >
                    <View style ={{
                        height: 25,
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingTop: 2,
                        paddingBottom: 2,
                        paddingRight: 6,
                        paddingLeft: 5
                    }}>
                        <Image source={ICONS.Back} resizeMode="contain" style={{tintColor: '#FFF'}}/>
                    </View>
            </TouchableOpacity>

            <View style = {{
                flex: 8,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                {search === 'open' ?
                    <Text
                    style={{
                        alignContent: 'center',
                        fontFamily: 'Roboto-Bold',
                        fontSize: 16,
                        color: '#FFF',
                    }}
                    >{label}</Text>:
                    <View
                    style = {{
                        borderRadius: 17,
                        alignItems: 'center',
                        opacity: 0.2,
                        backgroundColor: '#333',
                        height: 34,
                        width: '100%',
                        justifyContent: 'flex-start',
                        flexDirection: 'row',
                        padding: 13
                    }}
                >
                    <Image source={ICONS.Search} resizeMode="stretch" style = {{tintColor: '#FFF', height: 18, width: 18}}/>
                    <TextInput placeholder = 'Nhập số đăng ký tàu, CMND/CCCD...' placeholderTextColor= '#FFF' style = {{
                        height: 38,
                        fontSize: 14,
                        fontFamily: 'Roboto-Regular'
                    }}/>
                </View>
                }
                
            </View>

            <View style = {{
                flex: 1,
                width: 34,
                height: 34,
                paddingRight: 10,
                paddingTop: 5,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            {right === 'search' && (
                <>
                {search === 'open' ? (
                    <TouchableOpacity onPress={() => {
                        setSearch('close')
                        setFilter(true)
                    }}>
                        <Image resizeMode="contain" source={ICONS.Search} style={{ width: 18, height: 18, tintColor: '#FFF', marginLeft: 0.2, marginRight: 0.2 }} />
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity onPress={() => {
                        setSearch('open')
                        setFilter(false)
                    }
                    }>
                        <Text style={{ color: '#FFF', fontFamily: 'Roboto-Regular', fontSize: 14, paddingBottom: 5 }}>
                            Đóng
                        </Text>
                    </TouchableOpacity>
                )}
                </>
            )}
            </View>
        </View>
    )
}
export default HeaderComponent2