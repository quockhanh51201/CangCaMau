import React, { useState } from 'react'
import { FlatList, Image, ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native'
import HeaderComponent2 from '../components/headerComponent2'
import { ICONS } from '../assets/icons/icons'

const Member = ({data, navigation}) => {
    return (
        <View>
            <FlatList
                data={data}
                renderItem={({item,index}) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('DetailCrewScreen')}>
                            <View style = {{
                                borderRadius: 6,
                                height: 103,
                                backgroundColor: '#FFF',
                                flexDirection: 'row',
                                borderBottomWidth: 1,
                                borderBottomColor: '#D6D6D6'
                            }}>
                                <View style = {{
                                    marginTop: 15,
                                    marginLeft: 12,
                                    marginBottom: 32,
                                    marginRight: 10
                                }}>
                                    <Image source={ICONS.Profile} resizeMode="contain" style = {{height: 40, width: 40}}/>
                                </View>
                                <View style = {{flex: 1}}>
                                    <View style = {{
                                        flexDirection: 'row',
                                        marginTop: 15,
                                        justifyContent: 'space-between',
                                        flex: 1
                                    }}>
                                        <View style ={{flex: 10, flexDirection: 'row'}}>
                                            <Text style = {{
                                                fontFamily: 'Roboto-Bold',
                                                fontSize: 16,
                                                color: '#333',
                                                flex: 5
                                            }}>{item.name}</Text>
                                            <View style = {{flex: 5, marginTop: 3}}>
                                                <Text style ={{color:'#005F94', fontFamily: 'Roboto-Regular', fontSize: 12 }}>{item.position}</Text>
                                            </View>
                                        </View>
                                        <View style = {{ marginTop: 5, flex: 1}}>
                                            <Image source={ICONS.Next} resizeMode="contain" style = {{height: 12, width: 12}} />
                                        </View>
                                    </View>
                                    <View style = {{flex: 2}}>
                                        <View style = {{flexDirection: 'row', justifyContent: 'flex-start'}}>
                                            <View style ={{width: 66, height: 16, borderRadius: 2, backgroundColor: '#4DBFFF', alignItems: 'center', marginRight: 8}}>
                                                <Text style = {{fontFamily: 'Inter-Regular', fontSize: 10, color: '#FFF'}}>{item.ship}</Text>
                                            </View>
                                            <Text style = {{
                                                fontFamily: 'Roboto-Regular',
                                                fontSize: 14,
                                                marginBottom: 5,
                                                color: '#333'
                                            }}>
                                                {item.cccd}
                                            </Text>
                                        </View>
                                        <Text style = {{
                                            fontFamily: 'Roboto-Regular',
                                            fontSize: 12,
                                            color: '#ADADAD',
                                            paddingRight: 12
                                        }}>
                                            {item.location}
                                        </Text> 
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                        )
                }}
            />
        </View>
    )
}
const ListOfCrewScreen = ({navigation}) => {
    const [member, setMember] = useState([
        {
            name: 'Phan Văn Anh',
            position: 'Thuyền trưởng',
            cccd: '003040506070809',
            location: 'Sào Lưới, Xã Khánh Bình Tây Bắc, Huyện Trần Văn Thời, Tỉnh Cà Mau',
            ship: 'Rạng đông 1'
        },
        {
            name: 'Phan Văn Em',
            position: 'Thuyền phó',
            cccd: '003040506070809',
            location: 'Sào Lưới, Xã Khánh Bình Tây Bắc, Huyện Trần Văn Thời, Tỉnh Cà Mau',
            ship: 'Rạng đông 1'

        },
        {
            name: 'Phan Văn Đức',
            position: 'Thuyền nhỏ',
            cccd: '003040506070809',
            location: 'Sào Lưới, Xã Khánh Bình Tây Bắc, Huyện Trần Văn Thời, Tỉnh Cà Mau',
            ship: 'Rạng đông 1'

        },
        {
            name: 'Phan Văn Báo',
            position: 'Thuyền to',
            cccd: '003040506070809',
            location: 'Sào Lưới, Xã Khánh Bình Tây Bắc, Huyện Trần Văn Thời, Tỉnh Cà Mau',
            ship: 'Rạng đông 1'
        },
    ])
    const [filter, setFilter] = useState(false)
    return (
        <View style = {{flex: 1, paddingBottom: 5}}>
            <StatusBar backgroundColor={'#459AC9'}/>
            <HeaderComponent2 label={'Thông tin thuyền viên'} right={'search'} navigation={navigation} setFilter={setFilter}/>
            {
                filter ? (
                    <>
                        <View style = {{
                            flexDirection: 'row',
                            alignItems: 'center',
                            backgroundColor: '#FFF',
                            borderBottomWidth: 0.8,
                            borderBottomColor: '#ADADAD'
                        }}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('FilterCrewScreen')}
                            >
                                <View style = {{
                                    flexDirection: 'row',
                                    borderWidth: 0.6,
                                    borderColor: '#D6D6D6',
                                    borderRadius: 4,
                                    marginLeft: 5,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginTop: 10,
                                    marginBottom: 10

                                }}>
                                    <Image source={ICONS.Filter} resizeMode="contain" style = {{
                                        width: 14,
                                        height: 14,
                                        marginTop: 6,
                                        marginLeft: 5,
                                        marginBottom: 5,
                                        marginRight: 3
                                    }}/>
                                    <Text style = {{
                                        marginTop: 5,
                                        marginBottom: 5,
                                        marginRight: 5,
                                        fontFamily: 'Inter-Regular',
                                        fontSize: 12,
                                        color: '#333'
                                    }}>Lọc</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style = {{
                                    flexDirection: 'row',
                                    borderWidth: 0.6,
                                    borderColor: '#D6D6D6',
                                    borderRadius: 4,
                                    marginLeft: 5,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginTop: 10,
                                    marginBottom: 10                                    

                                }}>
                                    <Text style = {{
                                        marginTop: 5,
                                        marginBottom: 5,
                                        marginRight: 3,
                                        marginLeft: 5,
                                        fontFamily: 'Inter-Regular',
                                        fontSize: 12,
                                        color: '#333'
                                    }}>
                                        Tất cả thuyền viên
                                    </Text>
                                    <Image source={ICONS.Drop} resizeMode="contain" style = {{
                                        width: 10,
                                        height: 6,
                                        marginTop: 11,
                                        marginBottom: 8,
                                        marginRight: 5
                                    }}/>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </>
                ): ''
            }
            <View style = {{flex: 1}}>
                <ScrollView>
                    <Member data={member} navigation={navigation}/>
                    <Member data={member} navigation={navigation}/>
                    <Member data={member} navigation={navigation}/>
                </ScrollView>
                <View style ={{position: 'absolute', right: 12, bottom: 35}}>
                        <TouchableOpacity>
                            <Image source={ICONS.Add} resizeMode='contain' style = {{width: 56, height: 56}}/>
                        </TouchableOpacity>
                    </View> 
            </View>
        </View>
    )
}

export default ListOfCrewScreen