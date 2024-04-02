import { Text, View } from "react-native"
import SearchComponent from "../components/searchComponent"
import { ICONS } from "../assets/icons/icons"
import ItemNocationComponent from "../components/itemNocationComponent"
import { useState } from "react"

const NotificationScreen = ({navigation}) =>
{
    const [nocations, setNocations] = useState([
        {
            icon: ICONS.Warning,
            lable: 'Cảnh báo',
            content: 'Cảnh báo thời hạn hết hạn đăng kiểm của tàu/thuyền hết hạn ngày 10 tháng 10 2022',
            time: '02/02/2022',
            status: 'new'
        },
        {
            icon: ICONS.Warning,
            lable: 'Cảnh báo',
            content: 'Cảnh báo thời hạn hết hạn đăng kiểm của tàu/thuyền hết hạn ngày 10 tháng 10 2022',
            time: '02/02/2022',
            status: 'old'
        },
        {
            icon: ICONS.Warning,
            lable: 'Cảnh báo',
            content: 'Cảnh báo thời hạn hết hạn đăng kiểm của tàu/thuyền hết hạn ngày 10 tháng 10 2022',
            time: '02/02/2022',
            status: 'new'
        },
        {
            icon: ICONS.Warning,
            lable: 'Cảnh báo',
            content: 'Cảnh báo thời hạn hết hạn đăng kiểm của tàu/thuyền hết hạn ngày 10 tháng 10 2022',
            time: '02/02/2022',
            status: 'old'
        },
        {
            icon: ICONS.Warning,
            lable: 'Cảnh báo',
            content: 'Cảnh báo thời hạn hết hạn đăng kiểm của tàu/thuyền hết hạn ngày 10 tháng 10 2022',
            time: '02/02/2022',
            status: 'new'
        },
        {
            icon: ICONS.Warning,
            lable: 'Cảnh báo',
            content: 'Cảnh báo thời hạn hết hạn đăng kiểm của tàu/thuyền hết hạn ngày 10 tháng 10 2022',
            time: '02/02/2022',
            status: 'new'
        },
        {
            icon: ICONS.Warning,
            lable: 'Cảnh báo',
            content: 'Cảnh báo thời hạn hết hạn đăng kiểm của tàu/thuyền hết hạn ngày 10 tháng 10 2022',
            time: '02/02/2022',
            status: 'new'
        },
        {
            icon: ICONS.Warning,
            lable: 'Cảnh báo',
            content: 'Cảnh báo thời hạn hết hạn đăng kiểm của tàu/thuyền hết hạn ngày 10 tháng 10 2022',
            time: '02/02/2022',
            status: 'new'
        },
        {
            icon: ICONS.Warning,
            lable: 'Cảnh báo',
            content: 'Cảnh báo thời hạn hết hạn đăng kiểm của tàu/thuyền hết hạn ngày 10 tháng 10 2022',
            time: '02/02/2022',
            status: 'new'
        },
        {
            icon: ICONS.Warning,
            lable: 'Cảnh báo',
            content: 'Cảnh báo thời hạn hết hạn đăng kiểm của tàu/thuyền hết hạn ngày 10 tháng 10 2022',
            time: '02/02/2022',
            status: 'new'
        },
    ])
    return(
        <View style = {{flex: 1}}>
            <View style = {{
                justifyContent: 'center',
                alignItems: 'center',
                height: 30,
            }}>
                <Text style = {{
                    fontFamily: 'Roboto-Bold',
                    fontSize: 16,
                    color: '#333'
                }}> Thông báo</Text>
            </View>
            <View
                style = {{
                    marginTop: 7,
                    alignItems: 'center',
                }}
            >
                <SearchComponent placeholder={'Nhập nội dung tìm kiếm '}/> 
            </View>
            <View style = {{
                marginTop: 10,
                flex: 1
            }}>
                <ItemNocationComponent navigation={navigation} items = {nocations}/>
            </View>
        </View>
    )
}

export default NotificationScreen