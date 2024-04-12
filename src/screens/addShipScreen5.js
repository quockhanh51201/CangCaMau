import React, {useState} from 'react';
import {
  FlatList,
  Image,
  Modal,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {ICONS} from '../assets/icons/icons';
import {IMAGES} from '../assets/images/images';
import {Calendar} from 'react-native-calendars';
import moment from 'moment';
import TouchableOpacityComponent3 from '../components/touchableOpacityComponent3';
import HeaderComponents from '../components/headerComponents';

const Member2 = ({data, navigation}) => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <View>
      <FlatList
        data={data}
        renderItem={({item, index}) => {
          return (
            <View style={{flexDirection: 'row'}}>
              <View style={{flex: 0.4, marginTop: 27}}>
                <TouchableOpacity onPress={() => setIsChecked(!isChecked)}>
                  <View
                    style={{
                      width: 16,
                      height: 16,
                      borderRadius: 4,
                      borderWidth: 1,
                      borderColor: isChecked ? '#005F94' : '#79AECA',
                      marginRight: 8,
                    }}>
                    {isChecked && (
                      <Text
                        style={{
                          fontSize: 10,
                          fontWeight: 900,
                          color: '#005F94',
                        }}>
                        ✔
                      </Text>
                    )}
                  </View>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flex: 9,
                  borderBottomWidth: 0.8,
                  borderTopWidth: 0.8,
                  borderColor: '#D6D6D6',
                }}>
                <TouchableOpacity onPress={() => navigation.navigate('')}>
                  <View
                    style={{
                      borderRadius: 6,
                      height: 103,
                      backgroundColor: '#FFF',
                      flexDirection: 'row',
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
                        <View style={{flex: 1, flexDirection: 'row'}}>
                          <Text
                            style={{
                              fontFamily: 'Roboto-Bold',
                              fontSize: 16,
                              color: '#333',
                              marginRight: 5,
                            }}>
                            {item.name}
                          </Text>
                          <View style={{marginTop: 3}}>
                            <Text
                              style={{
                                color: '#005F94',
                                fontFamily: 'Roboto-Regular',
                                fontSize: 12,
                              }}>
                              {item.position}
                            </Text>
                          </View>
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
                          {item.cccd}
                        </Text>
                        <Text
                          style={{
                            fontFamily: 'Roboto-Regular',
                            fontSize: 12,
                            color: '#ADADAD',
                            paddingRight: 12,
                          }}>
                          {item.location}
                        </Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};
const AddShipScreen5 = ({navigation}) => {
  const [member, setMember] = useState([
    {
      name: 'Phan Văn Anh',
      position: 'Thuyền trưởng',
      cccd: '003040506070809',
      location:
        'Sào Lưới, Xã Khánh Bình Tây Bắc, Huyện Trần Văn Thời, Tỉnh Cà Mau',
    },
    {
      name: 'Phan Văn Em',
      position: 'Thuyền phó',
      cccd: '003040506070809',
      location:
        'Sào Lưới, Xã Khánh Bình Tây Bắc, Huyện Trần Văn Thời, Tỉnh Cà Mau',
    },
    {
      name: 'Phan Văn Đức',
      position: 'Thuyền nhỏ',
      cccd: '003040506070809',
      location:
        'Sào Lưới, Xã Khánh Bình Tây Bắc, Huyện Trần Văn Thời, Tỉnh Cà Mau',
    },
    {
      name: 'Phan Văn Báo',
      position: 'Thuyền to',
      cccd: '003040506070809',
      location:
        'Sào Lưới, Xã Khánh Bình Tây Bắc, Huyện Trần Văn Thời, Tỉnh Cà Mau',
    },
  ]);
  const [modalVisible, setModalVisible] = useState(false);
  const PopUp = () => {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View
          style={{
            backgroundColor: '#626262',
            flex: 1,
          }}>
          <View
            style={{
              borderTopLeftRadius: 15,
              borderTopRightRadius: 15,
              backgroundColor: '#FFF',
              position: 'absolute',
              bottom: 0,
              width: '100%',
            }}>
            <View style={{alignItems: 'center'}}>
              <View
                style={{
                  marginTop: 7,
                  height: 3,
                  width: 60,
                  backgroundColor: '#BDBDBD',
                  borderRadius: 2,
                }}
              />
            </View>
            <View style={{flex: 1}}>
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity
                  onPress={() => setModalVisible(!modalVisible)}>
                  <View
                    style={{
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
                    <Image
                      source={ICONS.Back}
                      resizeMode="contain"
                      style={{tintColor: '#333'}}
                    />
                  </View>
                </TouchableOpacity>

                <View
                  style={{
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
                      color: '#333333',
                    }}>
                    Thông tin thyền viên
                  </Text>
                </View>
              </View>
              <View
                style={{
                  marginLeft: 12,
                  marginRight: 12,
                  paddingLeft: 10.23,
                  paddingRight: 10.23,
                  flexDirection: 'row',
                  borderRadius: 6,
                  backgroundColor: '#FAFAFA',
                  alignItems: 'center',
                }}>
                <Image
                  source={ICONS.Search}
                  resizeMode="contain"
                  style={{width: 20, height: 20}}
                />
                <TextInput placeholder="Nhập nội dung tìm kiếm" />
              </View>
              <ScrollView>
                <View style={{marginLeft: 12, marginRight: 12}}>
                  <Member2 data={member} navigation={navigation} />
                </View>
              </ScrollView>
            </View>
            <View style={{alignItems: 'center'}}>
              <View
                style={{
                  marginTop: 50,
                  marginRight: 12,
                  marginLeft: 12,
                  marginBottom: 35,
                  width: 178,
                }}>
                <TouchableOpacityComponent3
                  content={'Thêm thuyền viên'}
                  color={'#FFF'}
                  backgroundColor={'#005F94'}
                />
              </View>
            </View>
          </View>
        </View>
      </Modal>
    );
  };
  return (
    <View style={{flex: 1}}>
      <HeaderComponents
        navigation={navigation}
        label={'Chủ sở hữu & thuyền viên'}
        colorIcon={'#333'}
      />
      <View style={{flex: 1, marginLeft: 12, marginRight: 12, marginTop: 17}}>
        <StatusBar backgroundColor={'#FFF'} />
        <ScrollView>
          <View style={{marginTop: 17}}>
            <Text
              style={{
                color: '#005F94',
                fontFamily: 'Roboto-Bold',
                fontSize: 16,
              }}>
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
                    Sào Lưới, Xã Khánh Bình Tây Bắc, Huyện Trần Văn Thời, Tỉnh
                    Cà Mau
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <View style={{marginTop: 20}}>
            <Text
              style={{
                color: '#005F94',
                fontFamily: 'Roboto-Bold',
                fontSize: 16,
              }}>
              Thuyền viên (5)
            </Text>
          </View>
          <View style={{marginTop: 10}}>
            <TouchableOpacityComponent3
              content={'Thêm thuyền viên'}
              color={'#FFF'}
              backgroundColor={'#459AC9'}
              onPress={() => setModalVisible(!modalVisible)}
            />
          </View>
          <View
            style={{
              borderRadius: 6,
              backgroundColor: '#FFF',
              marginTop: 5,
              marginBottom: 15,
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
                            source={ICONS.Delete}
                            resizeMode="contain"
                            style={{height: 16, width: 16}}
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
                          Sào Lưới, Xã Khánh Bình Tây Bắc, Huyện Trần Văn Thời,
                          Tỉnh Cà Mau
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
                            source={ICONS.Delete}
                            resizeMode="contain"
                            style={{height: 16, width: 16}}
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
                          Sào Lưới, Xã Khánh Bình Tây Bắc, Huyện Trần Văn Thời,
                          Tỉnh Cà Mau
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
                            source={ICONS.Delete}
                            resizeMode="contain"
                            style={{height: 16, width: 16}}
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
                          Sào Lưới, Xã Khánh Bình Tây Bắc, Huyện Trần Văn Thời,
                          Tỉnh Cà Mau
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
                            source={ICONS.Delete}
                            resizeMode="contain"
                            style={{height: 16, width: 16}}
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
                          Sào Lưới, Xã Khánh Bình Tây Bắc, Huyện Trần Văn Thời,
                          Tỉnh Cà Mau
                        </Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: 35,
              marginTop: 20,
            }}>
            <View style={{width: 173}}>
              <TouchableOpacityComponent3
                content={'Tiếp tục'}
                color={'#005F94'}
                backgroundColor={'#FFF'}
                onPress={() => navigation.navigate('AddShipScreen6')}
              />
            </View>
          </View>
          <PopUp />
        </ScrollView>
      </View>
    </View>
  );
};

export default AddShipScreen5;
