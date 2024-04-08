import { Alert, Image, Modal, ScrollView, Text, TouchableOpacity, View } from "react-native"
import {Calendar, LocaleConfig} from 'react-native-calendars';
import HeaderComponent3 from "../components/headerComponent3"
import RadioComponent from "../components/radioComponent"
import { cloneElement, useState } from "react"
import { ICONS } from "../assets/icons/icons"
import moment from 'moment'
import TouchableOpacityComponent2 from "../components/touchableOpacityComponent2";

const FilterScreen = ({navigation}) => {
    const [selectedApprove,setSelectedApprove] = useState('')
    const handleApproveRadioChange = (label) => {
        setSelectedApprove(label);
    };

    const [selectedStatus,setSelectedStatus] = useState('')
    const handleStatusRadioChange = (label) => {
        setSelectedStatus(label);
    };

    const [selectedTime,setSelectedTime] = useState('')
    const handleTimeRadioChange = (label) => {
        setSelectedTime(label);
    };

    const [modalVisible, setModalVisible] = useState(false);
    const [since, setSince] = useState('')
    const [toDate, setToDate] = useState('')
    const [isModalToday, setIsModalToday] = useState(false)

    const CalendarCustom = () => {
        return (
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                setModalVisible(!modalVisible);
                }}>
                    <View style = {{
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#005F94',
                        flex: 1,
                        marginTop: 200,
                        marginBottom: 220,
                        borderRadius: 20
                    }}>
                        <Calendar
                            style = {{
                                width: 400,
                                height: 350,
                                borderRadius: 20
                            }}
                            onDayPress={day => {
                                const selectedDate = moment(day.dateString).format('DD/MM/YYYY');
                                if (isModalToday) {
                                    setToDate(selectedDate);
                                } else {
                                    setSince(selectedDate);
                                }
                                setIsModalToday(false); 
                            }}
                        />

                        <TouchableOpacity
                            onPress={() => setModalVisible(!modalVisible)}
                            style = {{marginTop: 10}}
                        >
                            <View style = {{
                                backgroundColor: '#459AC9',
                                padding: 12,
                                width: 100,
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: 20
                            }}>
                                <Text style ={{fontFamily: 'Inter_Regular', fontSize: 12, color: '#FFF'}}>Đóng</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
            </Modal>
        )
    }
    return (
        <View style = {{
            flex: 1
        }}>
            <HeaderComponent3 label={'Lọc kết quả'} navigation={navigation}/>
            <ScrollView>
                <Text style = {{
                    color: '#005F94',
                    fontFamily: 'Roboto-Bold',
                    fontSize: 16,
                    marginLeft: 12,
                    marginTop: 15,
                }}>Tình trạng duyệt đề nghị</Text>
                <View
                    style = {{
                        backgroundColor: '#FFF',
                        borderRadius: 6,
                        marginLeft: 12,
                        marginRight: 12,
                        marginTop: 5,
                    }}
                >
                    <RadioComponent label={'Tất cả tình trạng'}
                        onPress={() => handleApproveRadioChange('Tất cả tình trạng')}
                        isChecked={selectedApprove === 'Tất cả tình trạng'}
                    />
                    <RadioComponent label={'Trong bờ'}
                        onPress={() => handleApproveRadioChange('Trong bờ')}
                        isChecked={selectedApprove === 'Trong bờ'}                    
                    />
                    <RadioComponent label={'Ngoài biển'}
                        onPress={() => handleApproveRadioChange('Ngoài biển')}
                        isChecked={selectedApprove === 'Ngoài biển'}                        
                    />
                    <RadioComponent label={'Không được nhập bến'}
                        onPress={() => handleApproveRadioChange('Không được nhập bến')}
                        isChecked={selectedApprove === 'Không được nhập bến'}                        
                    />
                    <RadioComponent label={'Không được xuất bến'}
                        onPress={() => handleApproveRadioChange('Không được xuất bến')}
                        isChecked={selectedApprove === 'Không được xuất bến'}                        
                    />
                    <RadioComponent label={'Chờ xác nhận xuất bến'}
                        onPress={() => handleApproveRadioChange('Chờ xác nhận xuất bến')}
                        isChecked={selectedApprove === 'Chờ xác nhận xuất bến'}                        
                    />
                    <RadioComponent label={'Được tiếp nhận'}
                        onPress={() => handleApproveRadioChange('Được tiếp nhận')}
                        isChecked={selectedApprove === 'Được tiếp nhận'}                        
                    />
                    <RadioComponent label={'Từ chối'}
                        onPress={() => handleApproveRadioChange('Từ chối')}
                        isChecked={selectedApprove === 'Từ chối'}                        
                    />
                    <RadioComponent label={'Chờ tiếp nhận yêu cầu'}
                        onPress={() => handleApproveRadioChange('Chờ tiếp nhận yêu cầu')}
                        isChecked={selectedApprove === 'Chờ tiếp nhận yêu cầu'}                        
                    />

                </View>
                <Text style = {{
                    color: '#005F94',
                    fontFamily: 'Roboto-Bold',
                    fontSize: 16,
                    marginLeft: 12,
                    marginTop: 15,
                }}>Trạng thái</Text>
                <View
                    style = {{
                        backgroundColor: '#FFF',
                        borderRadius: 6,
                        marginLeft: 12,
                        marginRight: 12,
                        marginTop: 5,
                    }}
                >
                    <RadioComponent label={'Tất cả thao tác'}
                        onPress={() => handleStatusRadioChange('Tất cả thao tác')
                    }
                    isChecked={selectedStatus === 'Tất cả thao tác'}
                    />
                    <RadioComponent label={'Xuất bến'}
                        onPress={() => handleStatusRadioChange('Xuất bến')
                    }
                    isChecked={selectedStatus === 'Xuất bến'}
                    />
                    <RadioComponent label={'Nhập bến'}
                        onPress={() => handleStatusRadioChange('Nhập bến')
                    }
                    isChecked={selectedStatus === 'Nhập bến'}
                    />

                </View>
                <Text style = {{
                    color: '#005F94',
                    fontFamily: 'Roboto-Bold',
                    fontSize: 16,
                    marginLeft: 12,
                    marginTop: 15,
                }}>Thời gian gửi</Text>
                <View
                    style = {{
                        backgroundColor: '#FFF',
                        borderRadius: 6,
                        marginLeft: 12,
                        marginRight: 12,
                        marginTop: 5,
                    }}
                >
                    <RadioComponent label={'Tất cả thời gian'}
                        onPress={() => handleTimeRadioChange('Tất cả thời gian')}
                        isChecked={selectedTime === 'Tất cả thời gian'}
                    />
                    <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1}}>
                        <TouchableOpacity onPress={() => handleTimeRadioChange('abcd')} style = {{flex: 1}} >
                            <View
                            style={{
                                marginTop: 15, 
                                marginRight: 10, 
                                marginBottom: 15, 
                                marginLeft: 12,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}
                            >
                            {selectedTime === 'abcd' ? (<Image source={ICONS.Radio1} style = {{width: 16, height: 16, }}/>):(<Image source={ICONS.Radio2} style = {{width: 16, height: 16}}/>)}
                            </View>
                        </TouchableOpacity>
                        <View style = {{flexDirection: 'row', flex: 8}}>
                            <View
                                style = {{
                                    flex: 6,
                                    borderBottomWidth: 0.6,
                                    borderBottomColor: '#D6D6D6',
                                    height: 46,
                                    justifyContent: 'flex-start',
                                    flexDirection: 'row',
                                    alignItems: 'center'

                                }}
                            >
                                <TouchableOpacity onPress={() => {
                                    setIsModalToday(true)
                                    setModalVisible(true)
                                }}>
                                    <CalendarCustom/>
                                    <Image source={ICONS.Calendar} resizeMode="contain" style = {{width: 14, height: 14}}/>
                                </TouchableOpacity>
                                <Text style ={{marginLeft: 2}}>Từ ngày: {since}</Text>
                            </View>
                            <View
                                style = {{
                                    flex: 1,
                                    height: 46,
                                    width: 28,
                                    justifyContent: 'center',
                                }}
                            >
                                <Text style = {{fontSize: 14, color: '#333', fontFamily: 'Roboto-Regular'}}>-</Text>
                            </View>
                            <View
                                style = {{
                                    flex: 6,
                                    borderBottomWidth: 0.6,
                                    borderBottomColor: '#D6D6D6',
                                    height: 46,
                                    justifyContent: 'flex-start',
                                    flexDirection: 'row',
                                    alignItems: 'center'
                                }}
                            >
                                <TouchableOpacity onPress={() => {
                                    setIsModalToday(true)
                                    setModalVisible(true)
                                }}
                                >
                                    <CalendarCustom/>
                                    <Image source={ICONS.Calendar} resizeMode="contain" style = {{width: 14, height: 14}}/>
                                </TouchableOpacity>
                                <Text style ={{marginLeft: 2}}>Đến ngày: {toDate}</Text>
                            </View>
                        </View>
                    </View>
                    <View style = {{flexDirection: 'row', marginTop: 29, marginLeft:12, marginRight: 12, marginBottom: 27, justifyContent: 'space-evenly'}}>
                        <TouchableOpacityComponent2 content={'Đặt lại'} color={'#828282'} backgroundColor={'#FFF'} />
                        <TouchableOpacityComponent2 content={'Áp dụng'} color={'#FFF'} backgroundColor={'#005F94'}/>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default FilterScreen