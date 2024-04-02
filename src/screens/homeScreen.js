import { Image, ScrollView, Text, TextInput, View } from "react-native"
import { ICONS } from "../assets/icons/icons"
import { useEffect, useLayoutEffect, useState } from "react"
import ItemHomeComponent from "../components/itemHomeComponent"
import NavMenuComponent from "../components/navMenuComponent"

const HomeScreen = ({navigation}) => {

    const [itemHome, setItemHome] = useState([
        {
            label: 'Xuất/Nhập bến',
            image: ICONS.NhapBen
        },
        {
            label: 'Tàu cá',
            image: ICONS.XuatBen
        },
        {
            label: 'Thuyền viên',
            image: ICONS.ThuyenVien
        },
        {
            label: 'Lịch sử vi phạm',
            image: ICONS.LichSuVP
        },
        {
            label: 'Lịch sử tai nạn',
            image: ICONS.LichSuTN
        },
        {
            label: 'Cảnh báo',
            image: ICONS.CanhBao
        },                        
    ])
    return (
       <View style ={{flex: 1}}>
            <View 
            style={{
                flexDirection: 'row',
                height:46,
                borderBottomColor: '#F5F5F5',
                borderBottomWidth: 1,
                marginTop: 5, 
            }}
            >
                <View
                    style={{
                        width: 40,
                        height:40,
                        marginLeft: 15,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Image source={ICONS.Profile} resizeMode="stretch" style = {{height: 36, width: 36}}/>
                </View>
                <View 
                    style={{
                        marginLeft: 5,
                    }}
                >
                    <Text 
                        style = {{
                            fontFamily: 'Inter-Bold',
                            fontSize: 16,
                            color: '#333333'
                        }}
                    >
                        Phan Quốc Khánh
                    </Text>
                    <Text
                        style = {{
                            fontSize: 15,
                            fontFamily: 'Roboto-Regular',
                            color: '#005F94',
                        }}
                    >
                        Thuyền trưởng
                    </Text>
                </View>
            </View>
            <View
            style = {{
                marginLeft: 15,
                marginTop: 15,
                marginBottom: 20
            }}
            >
                <Text
                    style= {{
                        fontFamily: 'Inter-Regular',
                        fontSize: 18,
                        letterSpacing: 1.8,
                        textTransform: 'uppercase',
                        color: '#005F94'
                    }}
                >
                    Quản lý
                </Text>
                <Text
                    style= {{
                        fontFamily: 'Inter-Bold',
                        fontSize: 28,
                        textTransform: 'uppercase',
                        color: '#005F94'

                    }}
                >
                    tàu cá cà mau
                </Text>                
            </View>
            <View style = {{alignItems: 'center'}}>
                <ItemHomeComponent navigation={navigation} items={itemHome}/>
            </View>
        </View>
    )
}

export default HomeScreen