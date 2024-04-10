import { FlatList, Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native"
import HeaderComponents from "../components/headerComponents"
import CheckBoxComponent2 from "../components/checkBoxComponent2"
import { ICONS } from "../assets/icons/icons"
import { Out } from "../components/statusComponent"
import TouchableOpacityComponent3 from "../components/touchableOpacityComponent3"
import { useState } from "react"

const DataTable = ({data}) => {
    // Khởi tạo giá trị tổng ban đầu là 0
    const totalActualNumber = data.slice(1).reduce((accumulator, currentItem) => {
    // Chuyển đổi giá trị actualNumber từ chuỗi thành số và cộng vào tổng
        return accumulator + parseInt(currentItem.actualNumber);
    }, 0);

    // Khởi tạo giá trị tổng ban đầu là 0
    const totalNumberOfReports = data.slice(1).reduce((accumulator, currentItem) => {
    // Chuyển đổi giá trị actualNumber từ chuỗi thành số và cộng vào tổng
            return accumulator + parseInt(currentItem.numberOfReports);
    }, 0);
    return (
        <View>
            <FlatList
            data={data}
            renderItem={({item, index}) => {
                return (
                    <View>
                        {
                            index === 0 ? (
                                <View style ={{backgroundColor: '#459AC9', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingTop: 10, paddingBottom: 10, paddingLeft: 12, paddingRight: 12, borderTopLeftRadius: 6, borderTopRightRadius: 6}}>
                                    <Text style = {{ color: '#FFF', fontFamily: 'Roboto-Bold', fontSize: 13, flex: 2}}>{item.name}</Text>
                                    <Text style = {{ color: '#FFF', fontFamily: 'Roboto-Bold', fontSize: 13, flex: 1, textAlign: 'center'}}>{item.numberOfReports}</Text>
                                    <Text style = {{ color: '#FFF', fontFamily: 'Roboto-Bold', fontSize: 13, flex: 1, textAlign: 'center'}}>{item.actualNumber}</Text>
                                </View>
                            ) : (
                                <View style ={{backgroundColor: '#FFF', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingTop: 10, paddingBottom: 10, paddingLeft: 12, paddingRight: 12, borderBottomWidth: 0.9, borderBottomColor: '#D6D6D6'}}>
                                    <Text style = {{ color: '#333', fontFamily: 'Roboto-Regular', fontSize: 13, flex: 2}}>{item.name}</Text>
                                    <Text style = {{ color: '#333', fontFamily: 'Roboto-Regular', fontSize: 13, flex: 1, textAlign: 'center'}}>{item.numberOfReports}</Text>
                                    <Text style = {{ color: '#005F94', fontFamily: 'Roboto-Regular', fontSize: 13, flex: 1, textAlign: 'center'}}>{item.actualNumber}</Text>
                                </View>
                            )
                        }
                    </View>
                )
            }}
        />
            <View style ={{backgroundColor: '#FFF', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingTop: 10, paddingBottom: 10, paddingLeft: 12, paddingRight: 12, borderBottomLeftRadius: 6, borderBottomRightRadius: 6}}>
                <Text style = {{ color: '#333', fontFamily: 'Roboto-Bold', fontSize: 13, flex: 2}}>Tổng cộng</Text>
                <Text style = {{ color: '#333', fontFamily: 'Roboto-Bold', fontSize: 13, flex: 1, textAlign: 'center'}}>{totalNumberOfReports}</Text>
                <Text style = {{ color: '#005F94', fontFamily: 'Roboto-Bold', fontSize: 13, flex: 1, textAlign: 'center'}}>{totalActualNumber}</Text>
            </View>
        </View>
    )
}
const TextInputCusTom = ({lable, placeholder, text, setText, keyboardType}) => {
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
            }}>{lable}</Text>
            <TextInput
                placeholder= {placeholder}
                placeholderTextColor={'#333'}
                keyboardType= {keyboardType}
                style ={{
                    color: '#333',
                    fontFamily: 'Roboto-Regular',
                    fontSize: 16,
                }}
                onChangeText={setText}
                value = {text}
                editable = {false}
            >
            </TextInput>
        </View>
    )
}
const Title = ({title , icon}) => {
    return (
        <View style = {{ marginTop: 10, marginBottom: 5, flexDirection: 'row', alignItems: 'center'}}>
            <Text style = {{ color: '#005F94', fontFamily: 'Roboto-Bold', fontSize: 16, flex: 0.99}}>
                {title}
            </Text>
            {icon ? (<Image source={ICONS.Drop} resizeMode="contain" style = {{width: 8, height: 6, tintColor:'#005F94',}}/>) : ''}
        </View>
    )
}
const TitleChild = ({title}) => {
    return (
        <View style = {{marginTop: 10, marginBottom: 5}}>
            <Text style = {{ color: '#005F94', fontFamily: 'Roboto-Regular', fontSize: 16}}>
                {title}
            </Text>
        </View>
    )
}
const MinutesCheckInScreen = ({navigation}) => {
    const [quantity, setQuantity] = useState(
        [
            {
                name: 'Tên loại thủy sản',
                numberOfReports: 'Sản lượng báo cáo (kg)',
                actualNumber: 'Sản lượng thực tế (kg)'
            },
            {
                name: 'Cá thu',
                numberOfReports: '100000',
                actualNumber: '120000'
            },
            {
                name: 'Cá thác lác',
                numberOfReports: '12345',
                actualNumber: '12543'
            },
            {
                name: 'Cá ngừ',
                numberOfReports: '300000',
                actualNumber: '310000'
            },
            {
                name: 'Cá voi',
                numberOfReports: '100000',
                actualNumber: '111111'
            },
        ]
    )
    return (
        <View style = {{flex: 1, marginLeft: 12, marginRight: 12}}>
            <HeaderComponents label={'Biên bản kiểm tra tàu nhập Bến'} colorIcon={'#333'} navigation={navigation}/>
            <View style = {{justifyContent: 'center', alignItems: 'center'}}>
                <Text style = {{fontFamily: 'Roboto-Bold', fontSize: 14,color: '#828282'}}>
                (16:19, 26/10/2022)
                </Text>
            </View>
            <ScrollView>
                <View style = {{marginTop: 20}}>
                    <CheckBoxComponent2
                        label={'Xác nhận hoàn thành kiểm tra'}
                        isChecked={true}
                        color={'#005F94'}
                    />
                </View>
                {/* ============ */}
                <Title title={'Vị trí'} icon={false}/>
                <View style = {{
                    borderRadius: 6,
                    height: 70,
                    backgroundColor: '#FFF',
                    flexDirection: 'row',

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
                                }}>Bến bạc đá</Text>
                                <View style = {{flex: 10, marginTop: 3}}>
                                    <Text style = {{color: '#005F94', fontSize: 12, fontFamily: 'Roboto-regular'}}>X0165/1022</Text>
                                </View>
                            </View>
                            <View style = {{ marginTop: 5, flex: 1}}>
                                <Image source={ICONS.Next} resizeMode="contain" style = {{height: 12, width: 12}} />
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
                {/* ========== */}
                <Title title={'1. Đơn vị kiểm tra: Văn phòng đại diện thanh tra, kiểm tra, kiểm soát tàu cá'} icon={true}/>
                <View style = {{
                    borderRadius: 6,
                    backgroundColor: '#FFF',
                    flex: 1,
                    paddingLeft: 12,
                    paddingRight: 12,
                    marginTop: 5,
                    paddingBottom: 20
                }}>
                    <TextInputCusTom lable={'Người kiểm tra 1'} placeholder={'-Chọn người kiểm tra 1-'}/>
                </View>
                <View style = {{
                    borderRadius: 6,
                    backgroundColor: '#FFF',
                    flex: 1,
                    paddingLeft: 12,
                    paddingRight: 12,
                    marginTop: 5, 
                    paddingBottom: 20
                }}>
                    <TextInputCusTom lable={'Người kiểm tra 2'} placeholder={'-Chọn người kiểm tra 2-'}/>
                </View>
                {/* ====== */}
                <Title title={'2. Kiểm tra tàu'} icon={true}/>
                <View style = {{
                    borderRadius: 6,
                    backgroundColor: '#FFF',
                    flex: 1,
                    paddingLeft: 12,
                    paddingRight: 12,
                    marginTop: 5, 
                    paddingBottom: 20
                }}>
                    <TextInputCusTom lable={'Tên phương tiện'} text={'Thái học 3'}/>
                    <TextInputCusTom lable={'Số đăng ký'} text={'2345678910JQKA'}/>
                    <TextInputCusTom lable={'Ngành nghề'} text={'Câu mực'}/>
                </View>
                <TitleChild title={'2.1 Tên chủ tàu'}/>
                <TouchableOpacity>
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
                            marginRight: 10,
                        }}>
                            <Image source={ICONS.Profile} resizeMode="contain" style = {{height: 40, width: 40, borderRadius: 6}}/>
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
                <TitleChild title={'2.2 Tên thuyền trưởng'}/>
                <TouchableOpacity>
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
                            marginRight: 10,
                        }}>
                            <Image source={ICONS.Profile} resizeMode="contain" style = {{height: 40, width: 40, borderRadius: 6}}/>
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
                                        <Text style ={{color:'#005F94', fontFamily: 'Roboto-Regular', fontSize: 12 }}>Thuyền trưởng</Text>
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
                <Title title={'3. Kiểm tra hồ sơ'} icon={true}/>
                <View style = {{
                    borderRadius: 6,
                    backgroundColor: '#FFF',
                    paddingTop: 5,
                    paddingRight: 12,
                    paddingLeft: 12,
                }}>
                    <View style = {{marginTop: 15, paddingBottom: 15, borderBottomWidth: 0.8 ,borderBottomColor: '#D6D6D6'}}>
                        <CheckBoxComponent2
                            label={'Báo cáo khai thác thủy sản'}
                            isChecked={true}
                            color={'#005F94'}
                        />
                    </View> 
                    <View style = {{marginTop: 15, paddingBottom: 15, borderBottomWidth: 0.8 ,borderBottomColor: '#D6D6D6'}}>
                        <CheckBoxComponent2
                            label={'Nhật kí khai thác thủy sản'}
                            isChecked={true}
                            color={'#005F94'}
                        />
                    </View>                                                                                                                                           
                </View>
                <Title title={'4. Kiểm tra sản lượng khai thác'} icon={true}/>
                <View>
                    <DataTable data={quantity}/>
                </View>
                <Title title={'5. Kết luận kiểm tra'} icon={true}/>
                <View style = {{
                    borderRadius: 6,
                    backgroundColor: '#FFF',
                    paddingTop: 5,
                    paddingBottom: 20,
                    paddingRight: 12,
                    paddingLeft: 12,
                }}>
                    <TextInputCusTom lable={'Kết luận kiểm tra'} placeholder={'--'}/>
                </View>
                <View style = {{justifyContent: 'center', alignItems: 'center', marginTop: 20, marginBottom: 37 }}>
                    <View style = {{width: 173}}>
                        <TouchableOpacityComponent3 content={'Đóng'} color={'#333333'} backgroundColor={'#FFF'} onPress={() => navigation.goBack()}/>
                    </View>
                </View>
            </ScrollView>
        </View>
    ) 
}

export default MinutesCheckInScreen