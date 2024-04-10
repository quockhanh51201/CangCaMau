import React, { useState } from 'react'
import { FlatList, Image, Modal, ScrollView, StatusBar, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { ICONS } from '../assets/icons/icons'
import TouchableOpacityComponent3 from '../components/touchableOpacityComponent3'

const HeaderComponentCustom = ({navigation}) => {
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
                paddingRight: 12
            }}>
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
            </View>
        </View>
    )
}
const Member = ({data, navigation}) => {
    return (
        <View>
            <FlatList
                data={data}
                renderItem={({item,index}) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('')}>
                            <View style = {{
                                borderRadius: 6,
                                height: 103,
                                backgroundColor: '#FFF',
                                flexDirection: 'row',
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
                                        <Text style = {{
                                            fontFamily: 'Roboto-Regular',
                                            fontSize: 14,
                                            marginBottom: 5,
                                            color: '#333'
                                        }}>
                                            {item.cccd}
                                        </Text>
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
const Member2 = ({data, navigation}) => {
    const [isChecked, setIsChecked] = useState(false)
    return (
        <View>
            <FlatList
                data={data}
                renderItem={({item,index}) => {
                    return (
                        <View style = {{flexDirection: 'row'}}>
                            <View style = {{flex: 0.4, marginTop: 27}}>
                                <TouchableOpacity onPress={() => setIsChecked(!isChecked)}>
                                    <View
                                    style={{
                                        width: 16,
                                        height: 16,
                                        borderRadius: 4,
                                        borderWidth: 1,
                                        borderColor: isChecked ? '#005F94' : '#79AECA',
                                        marginRight: 8,
                                    }}
                                    >
                                    {isChecked && <Text style = {{fontSize: 10, fontWeight: 900, color: '#005F94'}}>✔</Text>}
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style = {{flex: 9, borderBottomWidth: 0.8,borderTopWidth: 0.8, borderColor: '#D6D6D6'}}>
                                <TouchableOpacity onPress={() => navigation.navigate('')}>
                                    <View style = {{
                                        borderRadius: 6,
                                        height: 103,
                                        backgroundColor: '#FFF',
                                        flexDirection: 'row',
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
                                                <Text style = {{
                                                    fontFamily: 'Roboto-Regular',
                                                    fontSize: 14,
                                                    marginBottom: 5,
                                                    color: '#333'
                                                }}>
                                                    {item.cccd}
                                                </Text>
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
                            </View>
                        </View>
                        )
                }}
            />
        </View>
    )
}
const AddMemberScreen = ({navigation}) => {
    const [member, setMember] = useState([
        {
            name: 'Phan Văn Anh',
            position: 'Thuyền trưởng',
            cccd: '003040506070809',
            location: 'Sào Lưới, Xã Khánh Bình Tây Bắc, Huyện Trần Văn Thời, Tỉnh Cà Mau'
        },
        {
            name: 'Phan Văn Em',
            position: 'Thuyền phó',
            cccd: '003040506070809',
            location: 'Sào Lưới, Xã Khánh Bình Tây Bắc, Huyện Trần Văn Thời, Tỉnh Cà Mau'
        },
        {
            name: 'Phan Văn Đức',
            position: 'Thuyền nhỏ',
            cccd: '003040506070809',
            location: 'Sào Lưới, Xã Khánh Bình Tây Bắc, Huyện Trần Văn Thời, Tỉnh Cà Mau'
        },
        {
            name: 'Phan Văn Báo',
            position: 'Thuyền to',
            cccd: '003040506070809',
            location: 'Sào Lưới, Xã Khánh Bình Tây Bắc, Huyện Trần Văn Thời, Tỉnh Cà Mau'
        },
    ])
    const [modalVisible, setModalVisible] = useState(false)
    const PopUp = () => {
        return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                setModalVisible(!modalVisible);
            }
        }
        >
            <View style = {{
                backgroundColor: '#626262',
                flex: 1,
            }}>
                <View style = {{
                    borderTopLeftRadius: 15,
                    borderTopRightRadius: 15,
                    backgroundColor: '#FFF',
                    position: 'absolute',
                    bottom: 0,
                    width: '100%',
                }}>
                    <View style = {{alignItems: 'center'}}>
                        <View style = {{marginTop: 7, height: 3, width: 60, backgroundColor: '#BDBDBD', borderRadius: 2}}/>
                    </View>
                    <View style = {{flex: 1}}>
                        <View style={{flexDirection: 'row'}}>
                            <TouchableOpacity
                                onPress={() => setModalVisible(!modalVisible)}
                            >
                                <View style ={{
                                    paddingBottom: 2,
                                    paddingTop: 2,
                                    paddingRight: 5,
                                    paddingLeft: 5,
                                    marginLeft: 12,
                                    marginTop: 12,
                                    marginBottom: 12,
                                    width: 20,
                                    height: 25,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    
                                }}>
                                    <Image source={ICONS.Back} resizeMode="contain" style={{tintColor: '#333'}}/>
                                </View>
                            </TouchableOpacity>

                            <View style = {{
                                flex: 1,
                                paddingTop: 2,
                                marginTop: 12,
                                marginRight: 32,
                                height: 25,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                                <Text
                                    style={{
                                        alignContent: 'center',
                                        fontFamily: 'Roboto-Bold',
                                        fontSize: 16,
                                        color: '#333333'
                                    }}
                                >Thông tin thyền viên</Text>
                            </View>
                        </View>
                        <View style = {{
                            marginLeft: 12,
                            marginRight: 12,
                            paddingLeft: 10.23,
                            paddingRight: 10.23,
                            flexDirection: 'row',
                            borderRadius: 6,
                            backgroundColor: '#FAFAFA',
                            alignItems: 'center'
                        }}>
                            <Image source={ICONS.Search} resizeMode='contain' style ={{width: 20, height: 20}}/>
                            <TextInput
                                placeholder='Nhập nội dung tìm kiếm'
                            />
                        </View>
                        <ScrollView>
                            <View style = {{marginLeft: 12, marginRight: 12}}>
                                <Member2 data={member} navigation={navigation}/>
                            </View>

                        </ScrollView>
                    </View>
                    <View style = {{alignItems: 'center'}}>
                        <View style ={{marginTop: 50, marginRight: 12, marginLeft: 12, marginBottom: 35, width: 178}}>
                            <TouchableOpacityComponent3 content={'Thêm thuyền viên'} color={'#FFF'} backgroundColor={'#005F94'}/>
                        </View>
                    </View>
                </View>
            </View>
        </Modal>
        )
    }
    return (
        <View style = {{flex: 1}}>
            <StatusBar backgroundColor={'#459AC9'}/>
            <HeaderComponentCustom navigation={navigation}/>
            <View style = {{marginTop: 20, paddingLeft: 12, paddingRight: 12, paddingBottom: 35}}>
                <TouchableOpacityComponent3 content={'Thêm thuyền viên'} color={'#FFF'} backgroundColor={'#459AC9'} onPress={() => setModalVisible(!modalVisible)}/>
                <ScrollView>
                    <View style = {{ marginTop: 10}}>
                        <Member navigation={navigation} data={member}/>
                    </View>
                    <PopUp/>
                </ScrollView>
            </View>
        </View>
    )
}

export default AddMemberScreen