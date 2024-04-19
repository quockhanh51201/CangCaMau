import {
  FlatList,
  Image,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import HeaderComponents2 from '../components/headerComponent2';
import {useState} from 'react';
import {ICONS} from '../assets/icons/icons';
import HeaderComponent6 from '../components/headerComponent6';
import {IMAGES} from '../assets/images/images';

const CheckIn = () => {
  return (
    <View
      style={{
        borderRadius: 2,
        width: 55,
        height: 16,
        backgroundColor: '#2B13C0',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text
        style={{
          color: '#FFF',
          fontSize: 10,
          fontFamily: 'Inter-Regular',
        }}>
        Nhập bến
      </Text>
    </View>
  );
};
const CheckOut = () => {
  return (
    <View
      style={{
        borderRadius: 2,
        width: 55,
        height: 16,
        backgroundColor: '#FD397A',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text
        style={{
          color: '#FFF',
          fontSize: 10,
          fontFamily: 'Inter-Regular',
        }}>
        Xuất bến
      </Text>
    </View>
  );
};
const Out = () => {
  return (
    <View
      style={{
        borderRadius: 8,
        width: 65,
        height: 16,
        backgroundColor: '#459AC9',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text
        style={{
          color: '#FFF',
          fontSize: 10,
          fontFamily: 'Inter-Regular',
        }}>
        Ngoài biển
      </Text>
    </View>
  );
};
const In = () => {
  return (
    <View
      style={{
        borderRadius: 8,
        width: 59,
        height: 16,
        backgroundColor: '#FF820F',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text
        style={{
          color: '#FFF',
          fontSize: 10,
          fontFamily: 'Inter-Regular',
        }}>
        Trong bờ
      </Text>
    </View>
  );
};
// ===
const NoCheckIn = () => {
  return (
    <View
      style={{
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#F62825',
        width: 115,
        height: 16,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text
        style={{
          color: '#F62825',
          fontFamily: 'Inter-Regular',
          fontSize: 10,
        }}>
        Không được nhập bến
      </Text>
    </View>
  );
};
const NoCheckOut = () => {
  return (
    <View
      style={{
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#F62825',
        width: 115,
        height: 16,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text
        style={{
          color: '#F62825',
          fontFamily: 'Inter-Regular',
          fontSize: 10,
        }}>
        Không được xuất bến
      </Text>
    </View>
  );
};
const WaitCheckOut = () => {
  return (
    <View
      style={{
        borderRadius: 8,
        height: 16,
        width: 121,
        backgroundColor: '#583CFF',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text
        style={{
          fontFamily: 'Inter-Regular',
          fontSize: 10,
          color: '#FFF',
        }}>
        Chờ xác nhận xuất bến
      </Text>
    </View>
  );
};
const WaitCheckIn = () => {
  return (
    <View
      style={{
        borderRadius: 8,
        height: 16,
        width: 121,
        backgroundColor: '#FF9F47',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text
        style={{
          fontFamily: 'Inter-Regular',
          fontSize: 10,
          color: '#FFF',
        }}>
        Chờ xác nhận nhập bến
      </Text>
    </View>
  );
};
const Yes = () => {
  return (
    <View
      style={{
        borderRadius: 8,
        width: 87,
        height: 16,
        backgroundColor: '#FFC737',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text
        style={{
          fontFamily: 'Inter-Regular',
          fontSize: 10,
          color: '#FFF',
        }}>
        Được tiếp nhận
      </Text>
    </View>
  );
};
const No = () => {
  return (
    <View
      style={{
        borderRadius: 8,
        width: 50,
        height: 16,
        backgroundColor: '#F62825',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text
        style={{
          fontFamily: 'Inter-Regular',
          fontSize: 10,
          color: '#FFF',
        }}>
        Từ chối
      </Text>
    </View>
  );
};
const Waiting = () => {
  return (
    <View
      style={{
        borderRadius: 8,
        width: 125,
        height: 16,
        backgroundColor: '#0ABB87',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text
        style={{
          fontFamily: 'Inter-Regular',
          fontSize: 10,
          color: '#FFF',
        }}>
        Chờ tiếp nhận yêu cầu
      </Text>
    </View>
  );
};

const List = ({data, navigation}) => {
  return (
    <FlatList
      data={data}
      contentContainerStyle={{
        paddingBottom: 100,
      }}
      renderItem={({item, index}) => {
        const onPress = () => {
          if (
            item.status === 'Nhập bến' &&
            item.requestStatus === 'Chờ tiếp nhận yêu cầu'
          ) {
            navigation.navigate('ConfirmRequestCheckInScreen');
          }
          if (
            item.status === 'Xuất bến' &&
            item.requestStatus === 'Chờ tiếp nhận yêu cầu'
          ) {
            navigation.navigate('ConfirmRequestCheckOutScreen');
          }
        };
        return (
          <TouchableOpacity onPress={onPress}>
            <View
              style={{
                marginLeft: 12,
                paddingRight: 12,
                borderBottomWidth: 0.8,
                borderBottomColor: '#D6D6D6',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 15,
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontFamily: 'Roboto-Bold',
                    fontSize: 16,
                    color: '#333',
                  }}>
                  {item.title}
                </Text>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text
                    style={{
                      fontFamily: 'Inter-Regular',
                      fontSize: 12,
                      color: '#ADADAD',
                      paddingLeft: 3,
                      paddingRight: 3,
                    }}>
                    {item.time}
                  </Text>
                  <Image
                    source={ICONS.Next}
                    style={{
                      height: 12,
                      width: 12,
                      paddingTop: 1.2,
                      paddingRight: 3.6,
                      paddingBottom: 1.2,
                      paddingLeft: 3,
                    }}
                  />
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                }}>
                <Text style={{marginRight: 5, marginTop: 7}}>
                  {item.status === 'Xuất bến' ? <CheckOut /> : ''}
                  {item.status === 'Nhập bến' ? <CheckIn /> : ''}
                  {item.status === 'Trong bờ' ? <In /> : ''}
                  {item.status === 'Ngoài biển' ? <Out /> : ''}
                </Text>
                <Text style={{marginTop: 7}}>
                  {item.requestStatus === 'Không được nhập bến' ? (
                    <NoCheckIn />
                  ) : (
                    ''
                  )}
                  {item.requestStatus === 'Không được xuất bến' ? (
                    <NoCheckOut />
                  ) : (
                    ''
                  )}
                  {item.requestStatus === 'Chờ xác nhận xuất bến' ? (
                    <WaitCheckOut />
                  ) : (
                    ''
                  )}
                  {item.requestStatus === 'Chờ xác nhận nhập bến' ? (
                    <WaitCheckIn />
                  ) : (
                    ''
                  )}
                  {item.requestStatus === 'Được tiếp nhận' ? <Yes /> : ''}
                  {item.requestStatus === 'Từ chối' ? <No /> : ''}
                  {item.requestStatus === 'Chờ tiếp nhận yêu cầu' ? (
                    <Waiting />
                  ) : (
                    ''
                  )}
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    color: '#ADADAD',
                    fontFamily: 'Inter-Regular',
                    fontSize: 12,
                    marginTop: 5,
                    marginBottom: 15,
                  }}>
                  {item.manager}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        );
      }}
    />
  );
};

const History = ({data, navigation}) => {
  return (
    <FlatList
      data={data}
      contentContainerStyle={{
        paddingBottom: 100,
      }}
      renderItem={({item, index}) => {
        const onPress = () => {
          if (
            item.status === 'Nhập bến' &&
            item.requestStatus === 'Được tiếp nhận'
          ) {
            navigation.navigate('AcceptCheckIn');
          }
          if (
            item.status === 'Xuất bến' &&
            item.requestStatus === 'Được tiếp nhận'
          ) {
            navigation.navigate('AcceptCheckOut');
          }
          if (item.status === 'Nhập bến' && item.requestStatus === 'Từ chối') {
            navigation.navigate('RefuseCheckInScreen');
          }
          if (item.status === 'Xuất bến' && item.requestStatus === 'Từ chối') {
            navigation.navigate('RefuseCheckOutScreen');
          }
        };
        return (
          <TouchableOpacity onPress={onPress}>
            <View
              style={{
                marginLeft: 12,
                paddingRight: 12,
                borderBottomWidth: 0.8,
                borderBottomColor: '#D6D6D6',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 15,
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontFamily: 'Roboto-Bold',
                    fontSize: 16,
                    color: '#333',
                  }}>
                  {item.title}
                </Text>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text
                    style={{
                      fontFamily: 'Inter-Regular',
                      fontSize: 12,
                      color: '#ADADAD',
                      paddingLeft: 3,
                      paddingRight: 3,
                    }}>
                    {item.time}
                  </Text>
                  <Image
                    source={ICONS.Next}
                    style={{
                      height: 12,
                      width: 12,
                      paddingTop: 1.2,
                      paddingRight: 3.6,
                      paddingBottom: 1.2,
                      paddingLeft: 3,
                    }}
                  />
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <View style={{opacity: 0.5, marginRight: 5, paddingTop: 3.5}}>
                  <Image
                    source={IMAGES.avt}
                    resizeMode="contain"
                    style={{width: 20, height: 20}}
                  />
                </View>
                <Text style={{marginRight: 5, marginTop: 7}}>
                  {item.status === 'Xuất bến' ? <CheckOut /> : ''}
                  {item.status === 'Nhập bến' ? <CheckIn /> : ''}
                  {item.status === 'Trong bờ' ? <In /> : ''}
                  {item.status === 'Ngoài biển' ? <Out /> : ''}
                </Text>
                <Text style={{marginTop: 7}}>
                  {item.requestStatus === 'Không được nhập bến' ? (
                    <NoCheckIn />
                  ) : (
                    ''
                  )}
                  {item.requestStatus === 'Không được xuất bến' ? (
                    <NoCheckOut />
                  ) : (
                    ''
                  )}
                  {item.requestStatus === 'Chờ xác nhận xuất bến' ? (
                    <WaitCheckOut />
                  ) : (
                    ''
                  )}
                  {item.requestStatus === 'Chờ xác nhận nhập bến' ? (
                    <WaitCheckIn />
                  ) : (
                    ''
                  )}
                  {item.requestStatus === 'Được tiếp nhận' ? <Yes /> : ''}
                  {item.requestStatus === 'Từ chối' ? <No /> : ''}
                  {item.requestStatus === 'Chờ tiếp nhận yêu cầu' ? (
                    <Waiting />
                  ) : (
                    ''
                  )}
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    color: '#ADADAD',
                    fontFamily: 'Inter-Regular',
                    fontSize: 12,
                    marginTop: 5,
                  }}>
                  {item.manager}
                </Text>
              </View>
              {item.reason === '' ? (
                ''
              ) : (
                <View>
                  <Text
                    style={{
                      color: '#333',
                      fontFamily: 'Inter-Regular',
                      fontSize: 16,
                      marginTop: 5,
                      marginBottom: 15,
                    }}>
                    {item.reason}
                  </Text>
                </View>
              )}
            </View>
          </TouchableOpacity>
        );
      }}
    />
  );
};
const InOutCBScreen = ({navigation}) => {
  const [list, setList] = useState([
    {
      title: '06020 - Thái học 3',
      status: 'Xuất bến',
      requestStatus: 'Chờ tiếp nhận yêu cầu',
      manager:
        'Phan Văn Tiến, CMND: , SDT: 0984042497, Địa chỉ: k1, Xã Long Đức, Thành phố Trà Vinh, Tỉnh Trà Vinh',
      time: '10/10/2022',
    },
    {
      title: '06020 - Thái học 3',
      status: 'Nhập bến',
      requestStatus: 'Chờ tiếp nhận yêu cầu',
      manager:
        'Phan Văn Tiến, CMND: , SDT: 0984042497, Địa chỉ: k1, Xã Long Đức, Thành phố Trà Vinh, Tỉnh Trà Vinh',
      time: '10/10/2022',
    },
  ]);
  const [history, setHistory] = useState([
    {
      title: '06020 - Thái học 3',
      status: 'Xuất bến',
      requestStatus: 'Được tiếp nhận',
      manager:
        'Phan Văn Tiến, CMND: , SDT: 0984042497, Địa chỉ: k1, Xã Long Đức, Thành phố Trà Vinh, Tỉnh Trà Vinh',
      time: '10/10/2022',
      avt: IMAGES.avt,
      reason: '',
    },
    {
      title: '06020 - Thái học 3',
      status: 'Nhập bến',
      requestStatus: 'Được tiếp nhận',
      manager:
        'Phan Văn Tiến, CMND: , SDT: 0984042497, Địa chỉ: k1, Xã Long Đức, Thành phố Trà Vinh, Tỉnh Trà Vinh',
      time: '10/10/2022',
      avt: IMAGES.avt,
      reason: '',
    },
    {
      title: '06020 - Thái học 3',
      status: 'Xuất bến',
      requestStatus: 'Từ chối',
      manager:
        'Phan Văn Tiến, CMND: , SDT: 0984042497, Địa chỉ: k1, Xã Long Đức, Thành phố Trà Vinh, Tỉnh Trà Vinh',
      time: '10/10/2022',
      avt: IMAGES.avt,
      reason: 'Biển có thủy quái......',
    },
    {
      title: '06020 - Thái học 3',
      status: 'Nhập bến',
      requestStatus: 'Từ chối',
      manager:
        'Phan Văn Tiến, CMND: , SDT: 0984042497, Địa chỉ: k1, Xã Long Đức, Thành phố Trà Vinh, Tỉnh Trà Vinh',
      time: '10/10/2022',
      avt: IMAGES.avt,
      reason: 'Biển đang có thủy quái.....',
    },
  ]);
  const [page, setPage] = useState('List');
  const [header, setHeader] = useState('Danh sách yêu cầu');
  return (
    <View
      style={{
        flex: 1,
      }}>
      <StatusBar backgroundColor={'#583CFF'} />
      <HeaderComponent6 navigation={navigation} label={header} right={true} />
      <View
        style={{
          flexDirection: 'row',
          borderBottomWidth: 0.8,
          borderColor: '#D6D6D6',
          marginLeft: 12,
          marginRight: 12,
          justifyContent: 'flex-start',
          height: 37,
          paddingTop: 15,
        }}>
        <TouchableOpacity
          style={{
            borderBottomWidth: page === 'List' ? 2 : 0,
            borderBottomColor: '#005F94',
            marginRight: 35,
          }}
          onPress={() => {
            setPage('List');
            setHeader('Danh sách yêu cầu');
          }}>
          <Text
            style={{
              fontFamily: 'Inter-Bold',
              fontSize: 14,
              color: page === 'List' ? '#005F94' : '#ADADAD',
            }}>
            Danh sách
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderBottomWidth: page === 'List' ? 0 : 2,
            borderBottomColor: '#005F94',
          }}
          onPress={() => {
            setPage('List2');
            setHeader('Lịch sử duyệt yêu cầu');
          }}>
          <Text
            style={{
              fontFamily: 'Inter-Bold',
              fontSize: 14,
              color: page === 'List' ? '#ADADAD' : '#005F94',
            }}>
            Lịch sử yêu cầu
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        {page === 'List' ? (
          <List data={list} navigation={navigation} />
        ) : (
          <History data={history} navigation={navigation} />
        )}
      </View>
    </View>
  );
};

export default InOutCBScreen;
