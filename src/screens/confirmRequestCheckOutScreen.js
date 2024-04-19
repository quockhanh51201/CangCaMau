import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {CheckOut, In, Out, Waiting} from '../components/statusComponent';
import HeaderComponents from '../components/headerComponents';
import {ICONS} from '../assets/icons/icons';
import TouchableOpacityComponent3 from '../components/touchableOpacityComponent3';
import {useState} from 'react';
import InOutCBScreen from './inOutCBScreen';

const ConfirmRequestCheckOutScreen = ({navigation}) => {
  const [detail, setDetail] = useState(false);
  const [action, setAction] = useState(true);
  const handleAction = lable => {
    setAction(lable);
  };

  return (
    <View style={{flex: 1}}>
      <HeaderComponents
        label={'00776 - Rạng đông 2'}
        colorIcon={'#333'}
        navigation={navigation}
      />
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 12,
        }}>
        <CheckOut />
      </View>
      <ScrollView>
        <TouchableOpacity>
          <View
            style={{
              borderRadius: 6,
              height: 87,
              backgroundColor: '#FFF',
              flexDirection: 'row',
              marginRight: 12,
              marginLeft: 12,
              marginTop: 17,
            }}>
            <View
              style={{
                marginTop: 15,
                marginLeft: 12,
                marginBottom: 32,
                marginRight: 10,
              }}>
              <Image
                source={ICONS.Tau}
                resizeMode="contain"
                style={{height: 40, width: 40}}
              />
            </View>
            <View style={{flex: 1}}>
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 15,
                  justifyContent: 'space-between',
                  flex: 1,
                }}>
                <View style={{flex: 10, flexDirection: 'row'}}>
                  <Text
                    style={{
                      fontFamily: 'Roboto-Bold',
                      fontSize: 16,
                      color: '#333',
                      flex: 5,
                    }}>
                    00776 - Rạng đông 2
                  </Text>
                  <View style={{flex: 5, marginTop: 3}}>
                    <Waiting />
                  </View>
                </View>
                <View style={{marginTop: 5, flex: 1}}>
                  <Image
                    source={ICONS.Next}
                    resizeMode="contain"
                    style={{height: 12, width: 12}}
                  />
                </View>
              </View>
              <View style={{flex: 2}}>
                <Text
                  style={{
                    fontFamily: 'Roboto-Regular',
                    fontSize: 12,
                    marginBottom: 5,
                    color: '#ADADAD',
                  }}>
                  Loại: khai thác thủy sản
                </Text>
                <Text
                  style={{
                    fontFamily: 'Roboto-Regular',
                    fontSize: 12,
                    color: '#ADADAD',
                  }}>
                  Hạn đăng kiểm: 12/12/2022
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        {/* =========== */}
        <View style={{marginLeft: 12, marginBottom: 5, marginTop: 10}}>
          <Text
            style={{color: '#005F94', fontFamily: 'Roboto-Bold', fontSize: 16}}>
            Chủ sở hữu
          </Text>
        </View>
        <TouchableOpacity>
          <View
            style={{
              borderRadius: 6,
              height: 103,
              backgroundColor: '#FFF',
              flexDirection: 'row',
              marginRight: 12,
              marginLeft: 12,
            }}>
            <View
              style={{
                marginTop: 15,
                marginLeft: 12,
                marginBottom: 32,
                marginRight: 10,
              }}>
              <Image
                source={ICONS.Profile}
                resizeMode="contain"
                style={{height: 40, width: 40}}
              />
            </View>
            <View style={{flex: 1}}>
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 15,
                  justifyContent: 'space-between',
                  flex: 1,
                }}>
                <View style={{flex: 10, flexDirection: 'row'}}>
                  <Text
                    style={{
                      fontFamily: 'Roboto-Bold',
                      fontSize: 16,
                      color: '#333',
                      flex: 5,
                    }}>
                    Phan Quốc Khánh
                  </Text>
                  <View style={{flex: 5, marginTop: 3}}>
                    <Text
                      style={{
                        color: '#005F94',
                        fontFamily: 'Roboto-Regular',
                        fontSize: 12,
                      }}>
                      Chủ tàu
                    </Text>
                  </View>
                </View>
                <View style={{marginTop: 5, flex: 1}}>
                  <Image
                    source={ICONS.Next}
                    resizeMode="contain"
                    style={{height: 12, width: 12}}
                  />
                </View>
              </View>
              <View style={{flex: 2}}>
                <Text
                  style={{
                    fontFamily: 'Roboto-Regular',
                    fontSize: 14,
                    marginBottom: 5,
                    color: '#333',
                  }}>
                  03343500xx
                </Text>
                <Text
                  style={{
                    fontFamily: 'Roboto-Regular',
                    fontSize: 12,
                    color: '#ADADAD',
                    paddingRight: 12,
                  }}>
                  Sào Lưới, Xã Khánh Bình Tây Bắc, Huyện Trần Văn Thời, Tỉnh Cà
                  Mau
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setDetail(!detail)}>
          <View
            style={{
              marginLeft: 12,
              marginTop: 20,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: '#005F94',
                fontFamily: 'Roboto-Bold',
                fontSize: 16,
                marginRight: 3,
              }}>
              I. THÔNG TIN XUẤT BẾN
            </Text>
            <Image
              source={ICONS.Drop}
              style={{width: 8, height: 6, tintColor: '#005F94'}}
            />
          </View>
        </TouchableOpacity>
        {detail || (
          <>
            <TouchableOpacity>
              {/* ===========  */}
              <View
                style={{
                  marginLeft: 12,
                  marginBottom: 5,
                  marginTop: 10,
                  flexDirection: 'row',
                }}>
                <Text
                  style={{
                    color: '#005F94',
                    fontFamily: 'Roboto-Bold',
                    fontSize: 16,
                  }}>
                  Vị trí
                </Text>
              </View>
              <View
                style={{
                  borderRadius: 6,
                  height: 70,
                  backgroundColor: '#FFF',
                  flexDirection: 'row',
                  marginRight: 12,
                  marginLeft: 12,
                }}>
                <View
                  style={{
                    marginTop: 15,
                    marginLeft: 11,
                    marginBottom: 15,
                    marginRight: 10,
                  }}>
                  <Image
                    source={ICONS.Canh}
                    resizeMode="contain"
                    style={{height: 40, width: 40}}
                  />
                </View>
                <View style={{flex: 1}}>
                  <View
                    style={{
                      flexDirection: 'row',
                      marginTop: 15,
                      justifyContent: 'space-between',
                      flex: 1,
                    }}>
                    <View style={{flex: 10, flexDirection: 'row'}}>
                      <Text
                        style={{
                          fontFamily: 'Roboto-Bold',
                          fontSize: 16,
                          color: '#333',
                          flex: 5,
                        }}>
                        Bến bạc đá
                      </Text>
                      <View style={{flex: 10, marginTop: 3}}>
                        <Text
                          style={{
                            color: '#005F94',
                            fontSize: 12,
                            fontFamily: 'Roboto-regular',
                          }}>
                          X0165/1022
                        </Text>
                      </View>
                    </View>
                    <View style={{marginTop: 5, flex: 1}}>
                      <Image
                        source={ICONS.Next}
                        resizeMode="contain"
                        style={{height: 12, width: 12}}
                      />
                    </View>
                  </View>
                  <View style={{flex: 1}}>
                    <Text
                      style={{
                        fontFamily: 'Roboto-Regular',
                        fontSize: 12,
                        color: '#ADADAD',
                      }}>
                      Khóm 6B, Trần Văn Thời, Cà Mau
                    </Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            {/* =========== */}
            <View
              style={{
                marginLeft: 12,
                marginBottom: 5,
                marginTop: 10,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: '#005F94',
                  fontFamily: 'Roboto-Bold',
                  fontSize: 16,
                }}>
                Thành viên (3)
                {/* số lượng lấy giá trị của index dữ liệu */}
              </Text>
              <View
                style={{
                  marginLeft: 5,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={ICONS.Drop}
                  resizeMode="contain"
                  style={{tintColor: '#005F94', width: 8, height: 6}}
                />
              </View>
            </View>
            <View
              style={{
                borderRadius: 6,
                backgroundColor: '#FFF',
                marginRight: 12,
                marginLeft: 12,
                flex: 1,
              }}>
              <ScrollView>
                <View style={{flex: 1}}>
                  <TouchableOpacity>
                    <View
                      style={{
                        flexDirection: 'row',
                        paddingBottom: 15,
                        borderBottomWidth: 0.8,
                        borderBottomColor: '#D6D6D6',
                      }}>
                      <View
                        style={{
                          marginTop: 15,
                          marginLeft: 12,
                          marginBottom: 32,
                          marginRight: 10,
                        }}>
                        <Image
                          source={ICONS.Profile}
                          resizeMode="contain"
                          style={{height: 40, width: 40}}
                        />
                      </View>
                      <View style={{flex: 1}}>
                        <View
                          style={{
                            flexDirection: 'row',
                            marginTop: 15,
                            justifyContent: 'space-between',
                            flex: 1,
                          }}>
                          <View style={{flex: 10, flexDirection: 'row'}}>
                            <Text
                              style={{
                                fontFamily: 'Roboto-Bold',
                                fontSize: 16,
                                color: '#333',
                                flex: 5,
                              }}>
                              Phan Quốc Khánh
                            </Text>
                            <View style={{flex: 5, marginTop: 3}}>
                              <Text
                                style={{
                                  color: '#005F94',
                                  fontFamily: 'Roboto-Regular',
                                  fontSize: 12,
                                }}>
                                Chủ tàu
                              </Text>
                            </View>
                          </View>
                          <View style={{marginTop: 5, flex: 1}}>
                            <Image
                              source={ICONS.Next}
                              resizeMode="contain"
                              style={{height: 12, width: 12}}
                            />
                          </View>
                        </View>
                        <View style={{flex: 2}}>
                          <Text
                            style={{
                              fontFamily: 'Roboto-Regular',
                              fontSize: 14,
                              marginBottom: 5,
                              color: '#333',
                            }}>
                            03343500xx
                          </Text>
                          <Text
                            style={{
                              fontFamily: 'Roboto-Regular',
                              fontSize: 12,
                              color: '#ADADAD',
                              paddingRight: 12,
                            }}>
                            Sào Lưới, Xã Khánh Bình Tây Bắc, Huyện Trần Văn
                            Thời, Tỉnh Cà Mau
                          </Text>
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <View
                      style={{
                        flexDirection: 'row',
                        paddingBottom: 15,
                        borderBottomWidth: 0.8,
                        borderBottomColor: '#D6D6D6',
                      }}>
                      <View
                        style={{
                          marginTop: 15,
                          marginLeft: 12,
                          marginBottom: 32,
                          marginRight: 10,
                        }}>
                        <Image
                          source={ICONS.Profile}
                          resizeMode="contain"
                          style={{height: 40, width: 40}}
                        />
                      </View>
                      <View style={{flex: 1}}>
                        <View
                          style={{
                            flexDirection: 'row',
                            marginTop: 15,
                            justifyContent: 'space-between',
                            flex: 1,
                          }}>
                          <View style={{flex: 10, flexDirection: 'row'}}>
                            <Text
                              style={{
                                fontFamily: 'Roboto-Bold',
                                fontSize: 16,
                                color: '#333',
                                flex: 5,
                              }}>
                              Phan Quốc Khánh
                            </Text>
                            <View style={{flex: 5, marginTop: 3}}>
                              <Text
                                style={{
                                  color: '#005F94',
                                  fontFamily: 'Roboto-Regular',
                                  fontSize: 12,
                                }}>
                                Chủ tàu
                              </Text>
                            </View>
                          </View>
                          <View style={{marginTop: 5, flex: 1}}>
                            <Image
                              source={ICONS.Next}
                              resizeMode="contain"
                              style={{height: 12, width: 12}}
                            />
                          </View>
                        </View>
                        <View style={{flex: 2}}>
                          <Text
                            style={{
                              fontFamily: 'Roboto-Regular',
                              fontSize: 14,
                              marginBottom: 5,
                              color: '#333',
                            }}>
                            03343500xx
                          </Text>
                          <Text
                            style={{
                              fontFamily: 'Roboto-Regular',
                              fontSize: 12,
                              color: '#ADADAD',
                              paddingRight: 12,
                            }}>
                            Sào Lưới, Xã Khánh Bình Tây Bắc, Huyện Trần Văn
                            Thời, Tỉnh Cà Mau
                          </Text>
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <View
                      style={{
                        flexDirection: 'row',
                        paddingBottom: 15,
                        borderBottomWidth: 0.8,
                        borderBottomColor: '#D6D6D6',
                      }}>
                      <View
                        style={{
                          marginTop: 15,
                          marginLeft: 12,
                          marginBottom: 32,
                          marginRight: 10,
                        }}>
                        <Image
                          source={ICONS.Profile}
                          resizeMode="contain"
                          style={{height: 40, width: 40}}
                        />
                      </View>
                      <View style={{flex: 1}}>
                        <View
                          style={{
                            flexDirection: 'row',
                            marginTop: 15,
                            justifyContent: 'space-between',
                            flex: 1,
                          }}>
                          <View style={{flex: 10, flexDirection: 'row'}}>
                            <Text
                              style={{
                                fontFamily: 'Roboto-Bold',
                                fontSize: 16,
                                color: '#333',
                                flex: 5,
                              }}>
                              Phan Quốc Khánh
                            </Text>
                            <View style={{flex: 5, marginTop: 3}}>
                              <Text
                                style={{
                                  color: '#005F94',
                                  fontFamily: 'Roboto-Regular',
                                  fontSize: 12,
                                }}>
                                Chủ tàu
                              </Text>
                            </View>
                          </View>
                          <View style={{marginTop: 5, flex: 1}}>
                            <Image
                              source={ICONS.Next}
                              resizeMode="contain"
                              style={{height: 12, width: 12}}
                            />
                          </View>
                        </View>
                        <View style={{flex: 2}}>
                          <Text
                            style={{
                              fontFamily: 'Roboto-Regular',
                              fontSize: 14,
                              marginBottom: 5,
                              color: '#333',
                            }}>
                            03343500xx
                          </Text>
                          <Text
                            style={{
                              fontFamily: 'Roboto-Regular',
                              fontSize: 12,
                              color: '#ADADAD',
                              paddingRight: 12,
                            }}>
                            Sào Lưới, Xã Khánh Bình Tây Bắc, Huyện Trần Văn
                            Thời, Tỉnh Cà Mau
                          </Text>
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <View
                      style={{
                        flexDirection: 'row',
                        paddingBottom: 15,
                        borderBottomWidth: 0.8,
                        borderBottomColor: '#D6D6D6',
                      }}>
                      <View
                        style={{
                          marginTop: 15,
                          marginLeft: 12,
                          marginBottom: 32,
                          marginRight: 10,
                        }}>
                        <Image
                          source={ICONS.Profile}
                          resizeMode="contain"
                          style={{height: 40, width: 40}}
                        />
                      </View>
                      <View style={{flex: 1}}>
                        <View
                          style={{
                            flexDirection: 'row',
                            marginTop: 15,
                            justifyContent: 'space-between',
                            flex: 1,
                          }}>
                          <View style={{flex: 10, flexDirection: 'row'}}>
                            <Text
                              style={{
                                fontFamily: 'Roboto-Bold',
                                fontSize: 16,
                                color: '#333',
                                flex: 5,
                              }}>
                              Phan Quốc Khánh
                            </Text>
                            <View style={{flex: 5, marginTop: 3}}>
                              <Text
                                style={{
                                  color: '#005F94',
                                  fontFamily: 'Roboto-Regular',
                                  fontSize: 12,
                                }}>
                                Chủ tàu
                              </Text>
                            </View>
                          </View>
                          <View style={{marginTop: 5, flex: 1}}>
                            <Image
                              source={ICONS.Next}
                              resizeMode="contain"
                              style={{height: 12, width: 12}}
                            />
                          </View>
                        </View>
                        <View style={{flex: 2}}>
                          <Text
                            style={{
                              fontFamily: 'Roboto-Regular',
                              fontSize: 14,
                              marginBottom: 5,
                              color: '#333',
                            }}>
                            03343500xx
                          </Text>
                          <Text
                            style={{
                              fontFamily: 'Roboto-Regular',
                              fontSize: 12,
                              color: '#ADADAD',
                              paddingRight: 12,
                            }}>
                            Sào Lưới, Xã Khánh Bình Tây Bắc, Huyện Trần Văn
                            Thời, Tỉnh Cà Mau
                          </Text>
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
              </ScrollView>
            </View>
            {/* =========== */}
            <View style={{marginLeft: 12, marginRight: 12, marginTop: 20}}>
              <Text
                style={{
                  color: '#005F94',
                  fontFamily: 'Roboto-Bold',
                  fontSize: 16,
                  marginRight: 3,
                }}>
                HÀNH ĐỘNG XỬ LÝ
              </Text>
              <View
                style={{
                  backgroundColor: '#FFF',
                  borderRadius: 6,
                  paddingLeft: 12,
                  marginTop: 5,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingBottom: 15,
                    paddingTop: 15,
                    borderBottomWidth: 0.8,
                    borderBottomColor: '#D9D9D9',
                  }}>
                  <TouchableOpacity
                    onPress={() => handleAction('Được tiếp nhận')}>
                    <Image
                      source={
                        action === 'Được tiếp nhận' ? ICONS.CBox2 : ICONS.CBox1
                      }
                      resizeMode="contain"
                      style={{height: 16, width: 16, marginRight: 5}}
                    />
                  </TouchableOpacity>
                  <Text
                    style={{
                      fontFamily: 'Roboto-Medium',
                      fontSize: 16,
                      color: '#FFC737',
                    }}>
                    Được tiếp nhận
                  </Text>
                </View>
                <View
                  style={{
                    paddingBottom: 15,
                    paddingTop: 15,
                  }}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <TouchableOpacity onPress={() => handleAction('Từ chối')}>
                      <Image
                        source={
                          action === 'Từ chối' ? ICONS.CBox3 : ICONS.CBox1
                        }
                        resizeMode="contain"
                        style={{height: 16, width: 16, marginRight: 5}}
                      />
                    </TouchableOpacity>
                    <Text
                      style={{
                        fontFamily: 'Roboto-Medium',
                        fontSize: 16,
                        color: '#F62825',
                      }}>
                      Từ chối
                    </Text>
                  </View>
                  {action === 'Từ chối' ? (
                    <View
                      style={{
                        borderBottomWidth: 0.8,
                        borderBottomColor: '#D9D9D9',
                      }}>
                      <Text
                        style={{
                          fontFamily: 'Roboto-Regular',
                          color: '#ADADAD',
                          fontSize: 12,
                        }}>
                        Lý do
                      </Text>
                      <TextInput
                        placeholder="-Nhập lý do-"
                        placeholderTextColor={'#ADADAD'}
                        style={{
                          fontFamily: 'Roboto-Regular',
                          fontSize: 14,
                        }}
                      />
                    </View>
                  ) : (
                    ''
                  )}
                </View>
              </View>
              <TouchableOpacity
                onPress={() => navigation.navigate('AddAskScreen')}>
                <View style={{flexDirection: 'row', marginTop: 10}}>
                  <Text
                    style={{
                      fontFamily: 'Roboto-Bold',
                      fontSize: 14,
                      color: '#3345CB',
                      lineHeight: 16.41,
                      textDecorationLine: 'underline',
                    }}>
                    Hỏi ý kiến cấp trên
                  </Text>
                  <Text
                    style={{
                      fontFamily: 'Roboto-Bold',
                      fontSize: 14,
                      color: '#3345CB',
                      lineHeight: 16.41,
                      marginLeft: 5,
                    }}>
                    >>
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            {/* =========== */}
          </>
        )}
        <View
          style={{
            justifyContent: 'space-around',
            alignItems: 'center',
            marginTop: 20,
            marginBottom: 37,
            flexDirection: 'row',
          }}>
          <View style={{width: 173}}>
            <TouchableOpacityComponent3
              content={'Đóng'}
              color={'#333333'}
              backgroundColor={'#FFF'}
              onPress={() => navigation.goBack()}
            />
          </View>
          <View style={{width: 173}}>
            <TouchableOpacityComponent3
              content={'Xác nhận'}
              color={'#FFF'}
              backgroundColor={'#3345CB'}
              onPress={() => navigation.navigate('InOutCBScreen')}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ConfirmRequestCheckOutScreen;
