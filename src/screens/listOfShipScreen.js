import React, { useState } from 'react'
import { FlatList, Image, ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native'
import HeaderComponent4 from '../components/headerComponent4'
import { ICONS } from '../assets/icons/icons'
import { In, Out } from '../components/statusComponent'
import TouchableOpacityComponent3 from '../components/touchableOpacityComponent3'

const RenderListShip = ({data, navigation}) => {
    return (
        <View>
            <FlatList
                data={data}
                renderItem={({item,index}) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('ShipInformationScreen')}>
                            <View style = {{flexDirection: 'row', paddingTop: 15, paddingBottom: 15, paddingRight: 12, borderBottomWidth: 0.6, borderBottomColor: '#D6D6D6'}}>
                                <View style = {{flex: 1, marginRight: 10}}>
                                    <Image source={ICONS.Tau} resizeMode='contain' style = {{width: 40, height: 40}}/>
                                </View>
                                <View style = {{flex: 8}}>
                                    <View style = {{flexDirection: 'row'}}>
                                        <View style = {{flex: 4}}>
                                            <Text style = {{fontFamily: 'Roboto-Bold', fontSize: 16, color: '#333'}}>{item.name}</Text>
                                        </View>
                                        <View style = {{flex: 4, marginTop: 3}}>
                                            {
                                                item.status === 'Trong bờ' ? <In/> : <Out/>
                                            }
                                        </View>
                                        <View style = {{flex: 0.3, width: 12, height: 12 , paddingTop: 1.2, paddingRight: 3.6, paddingBottom: 1.2, paddingLeft: 3}}>
                                            <Image source={ICONS.Next} resizeMode='contain' style = {{width: 15, height: 15}}/>
                                        </View>
                                    </View>
                                    <Text style = {{fontFamily: 'Roboto-Regular', fontSize: 12, color: '#ADADAD'}}>{item.type}</Text>
                                    <Text style = {{fontFamily: 'Roboto-Regular ', fontSize: 12, color: '#ADADAD'}}>{item.exp}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}

const ListOfShipScreen = ({navigation}) => {
    const [listShip, setListShip] = useState([
        {
            name: '00750 - Thái học 1',
            type: 'Khai thác thủy sản',
            exp: '11/11/2001',
            status: 'Trong bờ'
        },
        {
            name: '0075 - Thái học 2',
            type: 'Khai thác thủy sản',
            exp: '11/11/2001',
            status: 'Ngoài biển'
        },
        {
            name: '0075 - Thái học 3',
            type: 'Khai thác thủy sản',
            exp: '11/11/2001',
            status: 'Trong bờ'
        },
        {
            name: '0075 - Thái học 4',
            type: 'Khai thác thủy sản',
            exp: '11/11/2001',
            status: 'Ngoài biển'
        }
    ])
  return (
    <View style = {{flex: 1}}>
        <StatusBar backgroundColor={'#459AC9'}/>
        <HeaderComponent4 label={'Tàu cá sở hữu'} navigation={navigation}/>
        <ScrollView>
            <View style = {{marginLeft: 12}}>
                <RenderListShip navigation={navigation} data={listShip}/>
            </View>
        </ScrollView>
        <View style = {{marginLeft: 12, marginRight: 12, marginBottom: 12}}>
            <TouchableOpacityComponent3 content={'Thêm phương tiện'} color={'#FFF'} backgroundColor={'#459AC9'}/>
        </View>
    </View>
  )
}

export default ListOfShipScreen