import { FlatList, Image, StatusBar, Text, TouchableOpacity, View } from "react-native"
import HeaderComponents2 from "../components/headerComponent2"
import { useState } from "react"
import { ICONS } from "../assets/icons/icons"


const CheckIn  = () => {
    return (
        <View style = {{
            borderRadius: 2,
            width: 55,
            height: 16,
            backgroundColor: '#2B13C0',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Text style = {{
                color: '#FFF',
                fontSize: 10,
                fontFamily: 'Inter-Regular'
            }}>
                Nhập bến
            </Text>
        </View>
    )
}
const CheckOut  = () => {
    return (
        <View style = {{
            borderRadius: 2,
            width: 55,
            height: 16,
            backgroundColor: '#FD397A',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Text style = {{
                color: '#FFF',
                fontSize: 10,
                fontFamily: 'Inter-Regular'
            }}>
                Xuất bến
            </Text>
        </View>
    )
}
const Out  = () => {
    return (
        <View style = {{
            borderRadius: 8,
            width: 65,
            height: 16,
            backgroundColor: '#459AC9',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Text style = {{
                color: '#FFF',
                fontSize: 10,
                fontFamily: 'Inter-Regular'
            }}>
                Ngoài biển
            </Text>
        </View>
    )
}
const In  = () => {
    return (
        <View style = {{
            borderRadius: 8,
            width: 59,
            height: 16,
            backgroundColor: '#FF820F',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Text style = {{
                color: '#FFF',
                fontSize: 10,
                fontFamily: 'Inter-Regular'
            }}>
                Trong bờ
            </Text>
        </View>
    )
}
// ===
const NoCheckIn  = () => {
    return (
        <View style = {{
            borderRadius: 8,
            borderWidth: 1,
            borderColor: '#F62825',
            width: 115,
            height: 16,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Text style = {{
                color: '#F62825',
                fontFamily: 'Inter-Regular',
                fontSize: 10
            }}>
                Không được nhập bến
            </Text>
        </View>
    )
}
const NoCheckOut  = () => {
    return (
        <View style = {{
            borderRadius: 8,
            borderWidth: 1,
            borderColor: '#F62825',
            width: 115,
            height: 16,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Text style = {{
                color: '#F62825',
                fontFamily: 'Inter-Regular',
                fontSize: 10
            }}>
                Không được xuất bến
            </Text>
        </View>
    )
}
const WaitCheckOut  = () => {
    return (
        <View style = {{
            borderRadius: 8,
            height: 16,
            width: 121,
            backgroundColor: '#583CFF',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Text style = {{
                fontFamily: 'Inter-Regular',
                fontSize: 10,
                color: '#FFF'
            }}>
                Chờ xác nhận xuất bến
            </Text>
        </View>
    )
}
const WaitCheckIn  = () => {
    return (
        <View style = {{
            borderRadius: 8,
            height: 16,
            width: 121,
            backgroundColor: '#FF9F47',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Text style = {{
                fontFamily: 'Inter-Regular',
                fontSize: 10,
                color: '#FFF'
            }}>
                Chờ xác nhận nhập bến
            </Text>
        </View>
    )
}
const Yes  = () => {
    return (
        <View style = {{
            borderRadius: 8,
            width: 87,
            height: 16,
            backgroundColor: '#FFC737',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Text style = {{
                fontFamily: 'Inter-Regular',
                fontSize: 10,
                color: '#FFF'
            }}>
                Được tiếp nhận
            </Text>
        </View>
    )
}
const No  = () => {
    return (
        <View style = {{
            borderRadius: 8,
            width: 50,
            height: 16,
            backgroundColor: '#F62825',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Text style = {{
                fontFamily: 'Inter-Regular',
                fontSize: 10,
                color: '#FFF'
            }}>
                Từ chối
            </Text>
        </View>
    )
}
const Waiting  = () => {
    return (
        <View style = {{
            borderRadius: 8,
            width: 125,
            height: 16,
            backgroundColor: '#0ABB87',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Text style = {{
                fontFamily: 'Inter-Regular',
                fontSize: 10,
                color: '#FFF'
            }}>
                Chờ tiếp nhận yêu cầu
            </Text>
        </View>
    )
}

const List = ({data, navigation}) => {
    return (
        <FlatList
            data={data}
            contentContainerStyle = {{
                paddingBottom: 100
            }}
            renderItem={({item, index}) => {
                return (
                    <TouchableOpacity>
                        <View style = {{
                            paddingLeft: 12,
                            paddingTop: 15,
                            paddingRight: 12,
                            borderBottomWidth: 0.8,
                            borderBottomColor: '#D6D6D6'
                        }}>
                            <View
                                style = {{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    marginTop: 15,
                                    alignItems: 'center'
                                }}
                            >
                                <Text style ={{
                                    fontFamily: 'Roboto-Bold',
                                    fontSize: 16,
                                    color: '#333'
                                }}>
                                    {item.title}
                                </Text>
                                <Image source={ICONS.Next} style = {{height: 12, width: 12, paddingTop: 1.2, paddingRight: 3.6, paddingBottom: 1.2, paddingLeft: 3}}/>
                            </View>
                            <View
                                style = {{
                                    flexDirection: 'row'
                                }}
                            >
                                <Text style = {{marginRight: 5, marginTop: 7}}>
                                    {item.status === 'Xuất bến' ? <CheckOut/> : ''}
                                    {item.status === 'Nhập bến' ? <CheckIn/> : ''}
                                    {item.status === 'Trong bờ' ? <In/> : ''}
                                    {item.status === 'Ngoài biển' ? <Out/> : ''}
                                </Text>
                                <Text style = {{marginTop: 7}}>
                                    {item.requestStatus === 'Không được nhập bến' ? <NoCheckIn/> : ''}
                                    {item.requestStatus === 'Không được xuất bến' ? <NoCheckOut/> : ''}
                                    {item.requestStatus === 'Chờ xác nhận xuất bến' ? <WaitCheckOut/> : ''}
                                    {item.requestStatus === 'Chờ xác nhận nhập bến' ? <WaitCheckIn/> : ''}
                                    {item.requestStatus === 'Được tiếp nhận' ? <Yes/> : ''}
                                    {item.requestStatus === 'Từ chối' ? <No/> : ''}
                                    {item.requestStatus === 'Chờ tiếp nhận yêu cầu' ? <Waiting/> : ''}
                                </Text>
                            </View>
                            <View style = {{
                                flexDirection: 'row',
                                marginTop: 5
                            }}>
                                <Text style = {{
                                    color: '#828282',
                                    fontFamily: 'Inter-Regular',
                                    fontSize: 12,
                                    marginRight: 33
                                }}>Xuất bến: <Text style = {{color: '#333', fontFamily: 'Inter-Bold', fontSize: 12}}>{item.timeOut !== '' ? item.timeOut : '--'}</Text></Text>
                                <Text style = {{
                                    color: '#828282',
                                    fontFamily: 'Inter-Regular',
                                    fontSize: 12
                                }}>Nhập bến: <Text style = {{color: '#333', fontFamily: 'Inter-Bold', fontSize: 12}}>{item.timeIn !== '' ? item.timeIn : '--'}</Text></Text>
                            </View>
                            <View>
                                <Text style = {{color: '#ADADAD', fontFamily: 'Inter-Regular', fontSize: 12, marginTop: 5, marginBottom: 15}}>{item.manager}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                )
            }
        }
        />
    )
}

const History = ({data, navigation}) => {
    return (
        <FlatList
            data={data}
            contentContainerStyle = {{
                paddingBottom: 100
            }}
            renderItem={({item, index}) => {
                return (
                    <TouchableOpacity>
                        <View style = {{
                            paddingLeft: 12,
                            paddingTop: 15,
                            paddingRight: 12,
                            borderBottomWidth: 0.8,
                            borderBottomColor: '#D6D6D6'
                        }}>
                            <View
                                style = {{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    marginTop: 15,
                                    alignItems: 'center'
                                }}
                            >
                                <Text style ={{
                                    fontFamily: 'Roboto-Bold',
                                    fontSize: 16,
                                    color: '#333'
                                }}>
                                    {item.title}
                                </Text>
                                <View style = {{
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                    <Text style = {{
                                        color: '#ADADAD',
                                        fontFamily: 'Inter-Regular',
                                        fontSize: 12,
                                        paddingBottom: 1.2,
                                        paddingTop: 1.2,
                                        marginRight: 3,
                                    }}>{item.time}</Text>
                                    <Image source={ICONS.Next} style = {{height: 12, width: 12, paddingTop: 1.2, paddingRight: 3.6, paddingBottom: 1.2, paddingLeft: 3}}/>
                                </View>
                            </View>
                            <View
                                style = {{
                                    flexDirection: 'row'
                                }}
                            >
                                <Text style = {{marginRight: 5, marginTop: 7}}>
                                    {item.status === 'Xuất bến' ? <CheckOut/> : ''}
                                    {item.status === 'Nhập bến' ? <CheckIn/> : ''}
                                    {item.status === 'Trong bờ' ? <In/> : ''}
                                    {item.status === 'Ngoài biển' ? <Out/> : ''}
                                </Text>
                                <Text style = {{marginTop: 7}}>
                                    {item.requestStatus === 'Không được nhập bến' ? <NoCheckIn/> : ''}
                                    {item.requestStatus === 'Không được xuất bến' ? <NoCheckOut/> : ''}
                                    {item.requestStatus === 'Chờ xác nhận xuất bến' ? <WaitCheckOut/> : ''}
                                    {item.requestStatus === 'Chờ xác nhận nhập bến' ? <WaitCheckIn/> : ''}
                                    {item.requestStatus === 'Được tiếp nhận' ? <Yes/> : ''}
                                    {item.requestStatus === 'Từ chối' ? <No/> : ''}
                                    {item.requestStatus === 'Chờ tiếp nhận yêu cầu' ? <Waiting/> : ''}
                                </Text>
                            </View>
                            <View>
                                <Text style = {{color: '#ADADAD', fontFamily: 'Inter-Regular', fontSize: 12, marginTop: 5, marginBottom: 15}}>{item.manager}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                )
            }
        }
        />
    )
}
const InOutScreen = ({navigation}) => {
    const [list,setList] = useState([
        { 
            title: '06020 - Thái học 3',
            status: 'Xuất bến',
            requestStatus: 'Chờ tiếp nhận yêu cầu',
            timeOut: '',
            timeIn: '',
            manager: 'Phan Văn Tiến, CMND: , SDT: 0984042497, Địa chỉ: k1, Xã Long Đức, Thành phố Trà Vinh, Tỉnh Trà Vinh'
        },
        { 
            title: '06020 - Thái học 4',
            status: 'Xuất bến',
            requestStatus: 'Không được xuất bến',
            timeOut: '',
            timeIn: '',
            manager: 'Phan Văn Tiến, CMND: , SDT: 0984042497, Địa chỉ: k1, Xã Long Đức, Thành phố Trà Vinh, Tỉnh Trà Vinh'
        },
        { 
            title: '06020 - Thái học 5',
            status: 'Xuất bến',
            requestStatus: 'Chờ xác nhận xuất bến',
            timeOut: '',
            timeIn: '',
            manager: 'Phan Văn Tiến, CMND: , SDT: 0984042497, Địa chỉ: k1, Xã Long Đức, Thành phố Trà Vinh, Tỉnh Trà Vinh'
        },
        { 
            title: '06020 - Thái học 2',
            status: 'Trong bờ',
            requestStatus: '',
            timeOut: '10:10 10/10/2010',
            timeIn: '10:10 10/10/2020',
            manager: 'Phan Văn Tiến, CMND: , SDT: 0984042497, Địa chỉ: k1, Xã Long Đức, Thành phố Trà Vinh, Tỉnh Trà Vinh'
        },
        { 
            title: '06020 - Thái học 1',
            status: 'Nhập bến',
            requestStatus: 'Chờ tiếp nhận yêu cầu',
            timeOut: '10:10 10/10/2010',
            timeIn: '',
            manager: 'Phan Văn Tiến, CMND: , SDT: 0984042497, Địa chỉ: k1, Xã Long Đức, Thành phố Trà Vinh, Tỉnh Trà Vinh'
        },
        { 
            title: '06020 - Thái học 6',
            status: 'Nhập bến',
            requestStatus: 'Không được nhập bến',
            timeOut: '10:10 10/10/2010',
            timeIn: '',
            manager: 'Phan Văn Tiến, CMND: , SDT: 0984042497, Địa chỉ: k1, Xã Long Đức, Thành phố Trà Vinh, Tỉnh Trà Vinh'
        },
        { 
            title: '06020 - Thái học 7',
            status: 'Nhập bến',
            requestStatus: 'Chờ xác nhận nhập bến',
            timeOut: '10:10 10/10/2010',
            timeIn: '',
            manager: 'Phan Văn Tiến, CMND: , SDT: 0984042497, Địa chỉ: k1, Xã Long Đức, Thành phố Trà Vinh, Tỉnh Trà Vinh'
        },
        { 
            title: '06020 - Thái học 8',
            status: 'Nhập bến',
            requestStatus: 'Được tiếp nhận',
            timeOut: '10:10 10/10/2010',
            timeIn: '',
            manager: 'Phan Văn Tiến, CMND: , SDT: 0984042497, Địa chỉ: k1, Xã Long Đức, Thành phố Trà Vinh, Tỉnh Trà Vinh'
        },
        { 
            title: '06020 - Thái học 9',
            status: 'Nhập bến',
            requestStatus: 'Từ chối',
            timeOut: '10:10 10/10/2010',
            timeIn: '',
            manager: 'Phan Văn Tiến, CMND: , SDT: 0984042497, Địa chỉ: k1, Xã Long Đức, Thành phố Trà Vinh, Tỉnh Trà Vinh'
        },
        { 
            title: '06020 - Thái học',
            status: 'Ngoài biển',
            requestStatus: '',
            timeOut: '10:10 10/10/2010',
            timeIn: '',
            manager: 'Phan Văn Tiến, CMND: , SDT: 0984042497, Địa chỉ: k1, Xã Long Đức, Thành phố Trà Vinh, Tỉnh Trà Vinh'
        },
    ])
    const [history,setHistory] = useState([
        { 
            title: '06020 - Thái học 3',
            status: 'Xuất bến',
            requestStatus: 'Chờ tiếp nhận yêu cầu',
            time: '10/10/2010',
            manager: 'Phan Văn Tiến, CMND: , SDT: 0984042497, Địa chỉ: k1, Xã Long Đức, Thành phố Trà Vinh, Tỉnh Trà Vinh'
        },
        { 
            title: '06020 - Thái học 4',
            status: 'Xuất bến',
            requestStatus: 'Không được xuất bến',
            time: '10/10/2010',
            manager: 'Phan Văn Tiến, CMND: , SDT: 0984042497, Địa chỉ: k1, Xã Long Đức, Thành phố Trà Vinh, Tỉnh Trà Vinh'
        },
        { 
            title: '06020 - Thái học 5',
            status: 'Xuất bến',
            requestStatus: 'Chờ xác nhận xuất bến',
            time: '10/10/2010',
            manager: 'Phan Văn Tiến, CMND: , SDT: 0984042497, Địa chỉ: k1, Xã Long Đức, Thành phố Trà Vinh, Tỉnh Trà Vinh'
        },
        { 
            title: '06020 - Thái học 2',
            status: 'Trong bờ',
            requestStatus: '',
            time: '10/10/2010',
            manager: 'Phan Văn Tiến, CMND: , SDT: 0984042497, Địa chỉ: k1, Xã Long Đức, Thành phố Trà Vinh, Tỉnh Trà Vinh'
        },
        { 
            title: '06020 - Thái học 1',
            status: 'Nhập bến',
            requestStatus: 'Chờ tiếp nhận yêu cầu',
            time: '10/10/2010',
            manager: 'Phan Văn Tiến, CMND: , SDT: 0984042497, Địa chỉ: k1, Xã Long Đức, Thành phố Trà Vinh, Tỉnh Trà Vinh'
        },
        { 
            title: '06020 - Thái học 6',
            status: 'Nhập bến',
            requestStatus: 'Không được nhập bến',
            time: '10/10/2010',
            manager: 'Phan Văn Tiến, CMND: , SDT: 0984042497, Địa chỉ: k1, Xã Long Đức, Thành phố Trà Vinh, Tỉnh Trà Vinh'
        },
        { 
            title: '06020 - Thái học 7',
            status: 'Nhập bến',
            requestStatus: 'Chờ xác nhận nhập bến',
            time: '10/10/2010',
            manager: 'Phan Văn Tiến, CMND: , SDT: 0984042497, Địa chỉ: k1, Xã Long Đức, Thành phố Trà Vinh, Tỉnh Trà Vinh'
        },
        { 
            title: '06020 - Thái học 8',
            status: 'Nhập bến',
            requestStatus: 'Được tiếp nhận',
            time: '10/10/2010',
            manager: 'Phan Văn Tiến, CMND: , SDT: 0984042497, Địa chỉ: k1, Xã Long Đức, Thành phố Trà Vinh, Tỉnh Trà Vinh'
        },
        { 
            title: '06020 - Thái học 9',
            status: 'Nhập bến',
            requestStatus: 'Từ chối',
            time: '10/10/2010',
            manager: 'Phan Văn Tiến, CMND: , SDT: 0984042497, Địa chỉ: k1, Xã Long Đức, Thành phố Trà Vinh, Tỉnh Trà Vinh'
        },
        { 
            title: '06020 - Thái học',
            status: 'Ngoài biển',
            requestStatus: '',
            time: '10/10/2010',
            manager: 'Phan Văn Tiến, CMND: , SDT: 0984042497, Địa chỉ: k1, Xã Long Đức, Thành phố Trà Vinh, Tỉnh Trà Vinh'
        },
    ])
    const [page, setPage] = useState('List')
    const [filter, setFilter] = useState(false)
    return(
        <View
            style = {{
                flex: 1
            }}
        >
            <StatusBar backgroundColor={'#459AC9'}/>
            <HeaderComponents2 navigation={navigation} label={'Thông tin xuất nhập bến'} right={page === 'List' ? '' : 'search'} setFilter={setFilter}/>
            {
                filter ? (
                    <>
                        <View style = {{
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('FilterScreen')}
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
                                        Tất cả tình trạng
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
                                        Tất cả thao tác
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
                            <TouchableOpacity>
                                <View style = {{
                                    flexDirection: 'row',
                                    borderRadius: 4,
                                    marginLeft: 5,
                                    backgroundColor: 'rgb(245,245,245)',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginTop: 10,
                                    marginBottom: 10                                    
                                }}>
                                    <Image source={ICONS.Calendar} resizeMode="contain" style = {{
                                        width: 14,
                                        height: 14,
                                        marginTop: 6,
                                        marginBottom: 5,
                                        marginLeft: 5,
                                        marginRight: 3
                                    }}/>
                                    <Text style = {{
                                        marginTop: 5,
                                        marginBottom: 5,
                                        marginRight: 5,
                                        fontFamily: 'Inter-Regular',
                                        fontSize: 12,
                                        color: '#333'                                        
                                    }}>Thời gian</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </>
                )
                :
                (
                    <>
                        <View style = {{
                            flexDirection: 'row',
                            borderBottomWidth: 0.8,
                            borderColor: '#D6D6D6',
                            marginLeft: 12,
                            marginRight: 12,
                            justifyContent: 'flex-start',
                            height: 37,
                            paddingTop: 15
                        }}>
                            <TouchableOpacity
                                style = {{
                                    borderBottomWidth: page === 'List' ? 2 : 0,
                                    borderBottomColor: '#005F94',
                                    marginRight: 35
                                }}

                                onPress={() => setPage('List')}
                            >
                                <Text style = {{
                                    fontFamily: 'Inter-Bold',
                                    fontSize: 14,
                                    color: page === 'List' ? '#005F94' : '#ADADAD'
                                }}>
                                    Danh sách
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style = {{
                                    borderBottomWidth: page === 'List' ? 0:2,
                                    borderBottomColor: '#005F94'
                                }}
                                onPress={() => setPage('List2')}
                            >
                                <Text style = {{
                                    fontFamily: 'Inter-Bold',
                                    fontSize: 14,
                                    color: page === 'List' ? '#ADADAD':'#005F94'
                                }}>
                                    Lịch sử yêu cầu
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </>
                )

            }
            <View>
                {page === 'List' ? <List data={list} navigation={navigation}/> : <History data={history} navigation={navigation}/>}
            </View>
        </View>
    )
}

export default InOutScreen