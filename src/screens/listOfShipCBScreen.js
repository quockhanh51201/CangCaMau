import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import HeaderComponent4 from '../components/headerComponent4';
import {ICONS} from '../assets/icons/icons';
import {In, Out} from '../components/statusComponent';
import TouchableOpacityComponent3 from '../components/touchableOpacityComponent3';
import HeaderComponent6 from '../components/headerComponent6';
import moment from 'moment';
import HeaderComponent7 from '../components/headerComponent7';

const RenderListShip = ({data, navigation}) => {
  return (
    <View>
      <FlatList
        data={data}
        renderItem={({item, index}) => {
          const currentDate = moment().format('DD/MM/YYYY');
          const specificDate = moment(item.exp, 'DD/MM/YYYY');
          const soNgayChenhLech = moment(specificDate, 'DD-MM-YYYY').diff(
            moment(currentDate, 'DD-MM-YYYY'),
            'days',
          );
          const color = () => {
            if (soNgayChenhLech > 5) {
              return '#ADADAD';
            } else if (soNgayChenhLech < 0) {
              return '#F62825';
            } else {
              return '#FF820F';
            }
          };
          // console.log(soNgayChenhLech);
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate('ShipInformationCBScreen')}>
              <View
                style={{
                  flexDirection: 'row',
                  paddingTop: 15,
                  paddingBottom: 15,
                  paddingRight: 12,
                  borderBottomWidth: 0.6,
                  borderBottomColor: '#D6D6D6',
                  borderTopWidth: 0.6,
                  borderTopColor: '#D6D6D6',
                }}>
                <View style={{flex: 1, marginRight: 10}}>
                  <Image
                    source={ICONS.Tau}
                    resizeMode="contain"
                    style={{width: 40, height: 40}}
                  />
                </View>
                <View style={{flex: 8}}>
                  <View style={{flexDirection: 'row'}}>
                    <View style={{flex: 4}}>
                      <Text
                        style={{
                          fontFamily: 'Roboto-Bold',
                          fontSize: 16,
                          color: '#333',
                        }}>
                        {item.name}
                      </Text>
                    </View>
                    <View style={{flex: 4, marginTop: 3}}>
                      {item.status === 'Trong bờ' ? <In /> : <Out />}
                    </View>
                    <View
                      style={{
                        flex: 0.3,
                        width: 12,
                        height: 12,
                        paddingTop: 1.2,
                        paddingRight: 3.6,
                        paddingBottom: 1.2,
                        paddingLeft: 3,
                      }}>
                      <Image
                        source={ICONS.Next}
                        resizeMode="contain"
                        style={{width: 15, height: 15}}
                      />
                    </View>
                  </View>
                  <Text
                    style={{
                      fontFamily: 'Inter-Regular',
                      fontSize: 12,
                      color: '#ADADAD',
                    }}>
                    {item.manager}
                  </Text>
                  <Text
                    style={{
                      fontFamily: 'Roboto-Regular ',
                      fontSize: 12,
                      color: color(),
                    }}>
                    Hạn đăng kiểm: {item.exp}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const ListOfShipCBScreen = ({navigation}) => {
  const [listShip, setListShip] = useState([
    {
      name: '00750 - Thái học 1',
      manager:
        'Phan Văn Tiến, CMND: , SDT: 0984042497, Địa chỉ: k1, Xã Long Đức, Thành phố Trà Vinh, Tỉnh Trà Vinh',
      exp: '17/04/2024',
      status: 'Trong bờ',
    },
    {
      name: '0075 - Thái học 2',
      manager:
        'Phan Văn Tiến, CMND: , SDT: 0984042497, Địa chỉ: k1, Xã Long Đức, Thành phố Trà Vinh, Tỉnh Trà Vinh',
      exp: '16/04/2024',
      status: 'Ngoài biển',
    },
    {
      name: '0075 - Thái học 3',
      manager:
        'Phan Văn Tiến, CMND: , SDT: 0984042497, Địa chỉ: k1, Xã Long Đức, Thành phố Trà Vinh, Tỉnh Trà Vinh',
      exp: '10/04/2024',
      status: 'Trong bờ',
    },
    {
      name: '0075 - Thái học 4',
      manager:
        'Phan Văn Tiến, CMND: , SDT: 0984042497, Địa chỉ: k1, Xã Long Đức, Thành phố Trà Vinh, Tỉnh Trà Vinh',
      exp: '04/10/2023',
      status: 'Ngoài biển',
    },
  ]);
  useEffect(() => {
    listShip.sort((a, b) => {
      const DateA = moment(a.exp, 'DD/MM/YYYY');
      const DateB = moment(b.exp, 'DD/MM/YYYY');
      return moment(DateB, 'DD-MM-YYYY').diff(
        moment(DateA, 'DD-MM-YYYY'),
        'days',
      );
    });
  }, []);
  const [filter, setFilter] = useState(false);
  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor={'#583CFF'} />
      <HeaderComponent7
        label={'Danh sách tàu cá'}
        navigation={navigation}
        right={'search'}
        setFilter={setFilter}
      />
      <ScrollView>
        <View style={{marginLeft: 12}}>
          {filter ? (
            <>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('FilterShipCBSceen')}>
                  <View
                    style={{
                      flexDirection: 'row',
                      borderWidth: 0.6,
                      borderColor: '#D6D6D6',
                      borderRadius: 4,
                      marginLeft: 5,
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginTop: 10,
                      marginBottom: 10,
                    }}>
                    <Image
                      source={ICONS.Filter}
                      resizeMode="contain"
                      style={{
                        width: 14,
                        height: 14,
                        marginTop: 6,
                        marginLeft: 5,
                        marginBottom: 5,
                        marginRight: 3,
                      }}
                    />
                    <Text
                      style={{
                        marginTop: 5,
                        marginBottom: 5,
                        marginRight: 5,
                        fontFamily: 'Inter-Regular',
                        fontSize: 12,
                        color: '#333',
                      }}>
                      Lọc
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity>
                  <View
                    style={{
                      flexDirection: 'row',
                      borderWidth: 0.6,
                      borderColor: '#D6D6D6',
                      borderRadius: 4,
                      marginLeft: 5,
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginTop: 10,
                      marginBottom: 10,
                    }}>
                    <Text
                      style={{
                        marginTop: 5,
                        marginBottom: 5,
                        marginRight: 3,
                        marginLeft: 5,
                        fontFamily: 'Inter-Regular',
                        fontSize: 12,
                        color: '#333',
                      }}>
                      Tất cả tình trạng
                    </Text>
                    <Image
                      source={ICONS.Drop}
                      resizeMode="contain"
                      style={{
                        width: 10,
                        height: 6,
                        marginTop: 11,
                        marginBottom: 8,
                        marginRight: 5,
                      }}
                    />
                  </View>
                </TouchableOpacity>
                <TouchableOpacity>
                  <View
                    style={{
                      flexDirection: 'row',
                      borderWidth: 0.6,
                      borderColor: '#D6D6D6',
                      borderRadius: 4,
                      marginLeft: 5,
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginTop: 10,
                      marginBottom: 10,
                    }}>
                    <Text
                      style={{
                        marginTop: 5,
                        marginBottom: 5,
                        marginRight: 3,
                        marginLeft: 5,
                        fontFamily: 'Inter-Regular',
                        fontSize: 12,
                        color: '#333',
                      }}>
                      Tất cả thao tác
                    </Text>
                    <Image
                      source={ICONS.Drop}
                      resizeMode="contain"
                      style={{
                        width: 10,
                        height: 6,
                        marginTop: 11,
                        marginBottom: 8,
                        marginRight: 5,
                      }}
                    />
                  </View>
                </TouchableOpacity>
                <TouchableOpacity>
                  <View
                    style={{
                      flexDirection: 'row',
                      borderRadius: 4,
                      marginLeft: 5,
                      backgroundColor: 'rgb(245,245,245)',
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginTop: 10,
                      marginBottom: 10,
                    }}>
                    <Image
                      source={ICONS.Calendar}
                      resizeMode="contain"
                      style={{
                        width: 14,
                        height: 14,
                        marginTop: 6,
                        marginBottom: 5,
                        marginLeft: 5,
                        marginRight: 3,
                      }}
                    />
                    <Text
                      style={{
                        marginTop: 5,
                        marginBottom: 5,
                        marginRight: 5,
                        fontFamily: 'Inter-Regular',
                        fontSize: 12,
                        color: '#333',
                      }}>
                      Thời gian
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </>
          ) : (
            ''
          )}
          <RenderListShip navigation={navigation} data={listShip} />
        </View>
      </ScrollView>
    </View>
  );
};

export default ListOfShipCBScreen;
