import { Image, Modal, ScrollView, Text, TouchableOpacity, View } from "react-native"
import { In, Out } from "../components/statusComponent"
import HeaderComponents from "../components/headerComponents"
import { ICONS } from "../assets/icons/icons"
import TouchableOpacityComponent3 from "../components/touchableOpacityComponent3"
import TouchableOpacityComponent2 from "../components/touchableOpacityComponent2"
import { useState } from "react"

const RequestCheckInScreen = ({navigation}) => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View style ={{flex: 1}}>
            <HeaderComponents label={'Yêu cầu nhập bến'} colorIcon={'#333'} navigation={navigation}/>
            <ScrollView>
                <TouchableOpacity>
                    <View style = {{
                        borderRadius: 6,
                        height: 87,
                        backgroundColor: '#FFF',
                        flexDirection: 'row',
                        marginRight: 12,
                        marginLeft: 12,
                        marginTop: 17
                    }}>
                        <View style = {{
                            marginTop: 15,
                            marginLeft: 12,
                            marginBottom: 32,
                            marginRight: 10
                        }}>
                            <Image source={ICONS.Tau} resizeMode="contain" style = {{height: 40, width: 40}}/>
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
                                    }}>00776 - Thái học 2</Text>
                                    <View style = {{flex: 5, marginTop: 3}}>
                                        <Out/>
                                    </View>
                                </View>
                                <View style = {{ marginTop: 5, flex: 1}}>
                                    <Image source={ICONS.Next} resizeMode="contain" style = {{height: 12, width: 12}} />
                                </View>
                            </View>
                            <View style = {{flex: 2}}>
                                <Text style = {{
                                    fontFamily: 'Roboto-Regular',
                                    fontSize: 12,
                                    marginBottom: 5,
                                    color: '#ADADAD'
                                }}>
                                    Loại: khai thác thủy sản
                                </Text>
                                <Text style = {{
                                    fontFamily: 'Roboto-Regular',
                                    fontSize: 12,
                                    color: '#ADADAD'
                                }}>
                                    Hạn đăng kiểm: 12/12/2022
                                </Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
                {/* =========== */}
                <View style = {{marginLeft: 12, marginBottom: 5, marginTop: 20}}>
                    <Text style = {{ color: '#005F94', fontFamily: 'Roboto-Bold', fontSize: 16}}>
                        Vị trí nhập bến mong muốn
                    </Text>
                </View>
                <View style = {{
                    borderRadius: 6,
                    height: 70,
                    backgroundColor: '#FFF',
                    flexDirection: 'row',
                    marginRight: 12,
                    marginLeft: 12,
                }}>
                    <View style = {{
                        marginTop: 15,
                        marginLeft: 11,
                        marginBottom: 15,
                        marginRight: 10
                    }}>
                        <Image source={ICONS.Canh} resizeMode="contain" style = {{height: 40, width: 40}}/>
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
                                }}>Bạc Bến Đá</Text>
                            </View>
                        </View>
                        <View style = {{flex: 1}}>

                            <Text style = {{
                                fontFamily: 'Roboto-Regular',
                                fontSize: 12,
                                color: '#ADADAD'
                            }}>
                                Khóm 6B, Trần Văn Thời, Cà Mau
                            </Text>
                        </View>
                    </View>
                </View>
                {/* =========== */}
                <View style = {{marginLeft: 12, marginBottom: 5, marginTop: 20}}>
                    <Text style = {{ color: '#005F94', fontFamily: 'Roboto-Bold', fontSize: 16}}>
                        Chủ sở hữu
                    </Text>
                </View>
                <TouchableOpacity>
                    <View style = {{
                        borderRadius: 6,
                        height: 103,
                        backgroundColor: '#FFF',
                        flexDirection: 'row',
                        marginRight: 12,
                        marginLeft: 12,
                        marginTop: 17,
                        marginBottom: 15
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
                                    }}>Phan Quốc Khánh</Text>
                                    <View style = {{flex: 5, marginTop: 3}}>
                                        <Text style ={{color:'#005F94', fontFamily: 'Roboto-Regular', fontSize: 12 }}>Chủ tàu</Text>
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
                                    03343500xx
                                </Text>
                                <Text style = {{
                                    fontFamily: 'Roboto-Regular',
                                    fontSize: 12,
                                    color: '#ADADAD',
                                    paddingRight: 12
                                }}>
                                    Sào Lưới, Xã Khánh Bình Tây Bắc, Huyện Trần Văn Thời, Tỉnh Cà Mau
                                </Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
                {/* =========== */}
                <View style = {{marginLeft: 12, marginBottom: 5, marginTop: 20, flexDirection: 'row', alignItems: 'center'}}>
                    <Text style = {{ color: '#005F94', fontFamily: 'Roboto-Bold', fontSize: 16}}>
                        Thành viên (3) 
                        {/* số lượng lấy giá trị của index dữ liệu */}
                    </Text>
                    <View style = {{marginLeft: 5, justifyContent: 'center', alignItems: 'center'}}>
                        <Image source={ICONS.Drop} resizeMode="contain" style = {{tintColor: '#005F94', width: 8, height: 6}}/>
                    </View>
                </View>
                <View style = {{
                    marginRight: 12,
                    marginLeft: 12,
                }}>
                    <TouchableOpacityComponent3 content={'Thêm thuyền viên'} color={'#FFF'} backgroundColor={'#459AC9'}/>
                </View>
                <View style = {{
                    borderRadius: 6,
                    backgroundColor: '#FFF',
                    marginRight: 12,
                    marginLeft: 12,
                    marginTop: 17,
                    marginBottom: 15,
                    flex: 1
                }}>
                    <ScrollView>
                        <View style = {{flex: 1}}>
                            <TouchableOpacity>
                                <View style = {{flexDirection: 'row', paddingBottom: 15, borderBottomWidth: 0.8, borderBottomColor: '#D6D6D6'}}>
                                    <View style = {{
                                        marginTop: 15,
                                        marginLeft: 12,
                                        marginBottom: 32,
                                        marginRight: 10,
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
                                                }}>Phan Quốc Khánh</Text>
                                                <View style = {{flex: 5, marginTop: 3}}>
                                                    <Text style ={{color:'#005F94', fontFamily: 'Roboto-Regular', fontSize: 12 }}>Chủ tàu</Text>
                                                </View>
                                            </View>
                                            <View style = {{ marginTop: 5, flex: 1}}>
                                                <Image source={ICONS.Delete} resizeMode="contain" style = {{height: 16, width: 16}} />
                                            </View>
                                        </View>
                                        <View style = {{flex: 2}}>
                                            <Text style = {{
                                                fontFamily: 'Roboto-Regular',
                                                fontSize: 14,
                                                marginBottom: 5,
                                                color: '#333'
                                            }}>
                                                03343500xx
                                            </Text>
                                            <Text style = {{
                                                fontFamily: 'Roboto-Regular',
                                                fontSize: 12,
                                                color: '#ADADAD',
                                                paddingRight: 12
                                            }}>
                                                Sào Lưới, Xã Khánh Bình Tây Bắc, Huyện Trần Văn Thời, Tỉnh Cà Mau
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style = {{flexDirection: 'row', paddingBottom: 15, borderBottomWidth: 0.8, borderBottomColor: '#D6D6D6'}}>
                                    <View style = {{
                                        marginTop: 15,
                                        marginLeft: 12,
                                        marginBottom: 32,
                                        marginRight: 10,
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
                                                }}>Phan Quốc Khánh</Text>
                                                <View style = {{flex: 5, marginTop: 3}}>
                                                    <Text style ={{color:'#005F94', fontFamily: 'Roboto-Regular', fontSize: 12 }}>Chủ tàu</Text>
                                                </View>
                                            </View>
                                            <View style = {{ marginTop: 5, flex: 1}}>
                                                <Image source={ICONS.Delete} resizeMode="contain" style = {{height: 16, width: 16}} />
                                            </View>
                                        </View>
                                        <View style = {{flex: 2}}>
                                            <Text style = {{
                                                fontFamily: 'Roboto-Regular',
                                                fontSize: 14,
                                                marginBottom: 5,
                                                color: '#333'
                                            }}>
                                                03343500xx
                                            </Text>
                                            <Text style = {{
                                                fontFamily: 'Roboto-Regular',
                                                fontSize: 12,
                                                color: '#ADADAD',
                                                paddingRight: 12
                                            }}>
                                                Sào Lưới, Xã Khánh Bình Tây Bắc, Huyện Trần Văn Thời, Tỉnh Cà Mau
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style = {{flexDirection: 'row', paddingBottom: 15, borderBottomWidth: 0.8, borderBottomColor: '#D6D6D6'}}>
                                    <View style = {{
                                        marginTop: 15,
                                        marginLeft: 12,
                                        marginBottom: 32,
                                        marginRight: 10,
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
                                                }}>Phan Quốc Khánh</Text>
                                                <View style = {{flex: 5, marginTop: 3}}>
                                                    <Text style ={{color:'#005F94', fontFamily: 'Roboto-Regular', fontSize: 12 }}>Chủ tàu</Text>
                                                </View>
                                            </View>
                                            <View style = {{ marginTop: 5, flex: 1}}>
                                                <Image source={ICONS.Delete} resizeMode="contain" style = {{height: 16, width: 16}} />
                                            </View>
                                        </View>
                                        <View style = {{flex: 2}}>
                                            <Text style = {{
                                                fontFamily: 'Roboto-Regular',
                                                fontSize: 14,
                                                marginBottom: 5,
                                                color: '#333'
                                            }}>
                                                03343500xx
                                            </Text>
                                            <Text style = {{
                                                fontFamily: 'Roboto-Regular',
                                                fontSize: 12,
                                                color: '#ADADAD',
                                                paddingRight: 12
                                            }}>
                                                Sào Lưới, Xã Khánh Bình Tây Bắc, Huyện Trần Văn Thời, Tỉnh Cà Mau
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style = {{flexDirection: 'row', paddingBottom: 15, borderBottomWidth: 0.8, borderBottomColor: '#D6D6D6'}}>
                                    <View style = {{
                                        marginTop: 15,
                                        marginLeft: 12,
                                        marginBottom: 32,
                                        marginRight: 10,
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
                                                }}>Phan Quốc Khánh</Text>
                                                <View style = {{flex: 5, marginTop: 3}}>
                                                    <Text style ={{color:'#005F94', fontFamily: 'Roboto-Regular', fontSize: 12 }}>Chủ tàu</Text>
                                                </View>
                                            </View>
                                            <View style = {{ marginTop: 5, flex: 1}}>
                                                <Image source={ICONS.Delete} resizeMode="contain" style = {{height: 16, width: 16}} />
                                            </View>
                                        </View>
                                        <View style = {{flex: 2}}>
                                            <Text style = {{
                                                fontFamily: 'Roboto-Regular',
                                                fontSize: 14,
                                                marginBottom: 5,
                                                color: '#333'
                                            }}>
                                                03343500xx
                                            </Text>
                                            <Text style = {{
                                                fontFamily: 'Roboto-Regular',
                                                fontSize: 12,
                                                color: '#ADADAD',
                                                paddingRight: 12
                                            }}>
                                                Sào Lưới, Xã Khánh Bình Tây Bắc, Huyện Trần Văn Thời, Tỉnh Cà Mau
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </View>
                <View style = {{
                    marginRight: 12,
                    marginLeft: 12,
                    marginTop: 17,
                    marginBottom: 15,
                    flexDirection: 'row'
                }}>
                    <View style = {{flex: 1, marginRight: 2.5}}>
                        <TouchableOpacityComponent3 content={'Đóng'} color={'#828282'} backgroundColor={'#FFF'} onPress={() => navigation.navigate('InScreen')}/>
                    </View>
                    <View style = {{flex: 1, marginLeft: 2.5}}>
                        <TouchableOpacityComponent3 content={'Yêu cầu nhập bến'} color={'#FFF'} backgroundColor={'#005F94'} onPress={() => setModalVisible(true)}/>
                    </View>
                </View>
            </ScrollView>
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
                        alignItems: 'center',
                        width: '100%',
                    }}>
                        <View style = {{marginTop: 7, height: 3, width: 60, backgroundColor: '#BDBDBD', borderRadius: 2}}/>
                        <Text style = {{color: '#333', fontFamily: 'Roboto-Bold', fontSize: 18, marginTop: 30}}>Xác nhận xuất bến</Text>
                        <Text style = {{color: '#333', fontFamily: 'Roboto-Regular', fontSize: 16, marginTop: 20 , textAlign: 'center'}}>
                        Sau khi yêu cầu được gửi, bạn sẽ không được chỉnh sửa thông tin trong yêu cầu, bạn có chắc chắn gửi đi hay không?
                        </Text>
                        <View style ={{marginTop: 50, marginRight: 12, marginLeft: 12, marginBottom: 37, flexDirection: 'row'}}>
                            <View style = {{flex: 1, marginRight: 2.5}}>
                                <TouchableOpacityComponent3 content={'Đóng'} color={'#828282'} backgroundColor={'#F5F5F5'} onPress={() => setModalVisible(false)}/>
                            </View>
                            <View style = {{flex: 1, marginLeft: 2.5}}>
                                <TouchableOpacityComponent3 content={'Xác nhận'} color={'#FFF'} backgroundColor={'#005F94'}/>
                            </View>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default RequestCheckInScreen