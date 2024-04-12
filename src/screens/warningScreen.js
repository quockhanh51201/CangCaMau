import React, {useState} from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  StatusBar,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from 'react-native';
import HeaderComponent4 from '../components/headerComponent4';
import {ICONS} from '../assets/icons/icons';

const WarningScreen = ({navigation}) => {
  const [warning, setwarning] = useState([
    {
      name: '0034 - Thái học 3',
      time1: '11/2/2022',
      time2: '20/10/2021',
      loai: 'Khai thác thủy sản',
    },
    {
      name: '0034 - Thái học 6',
      time1: '11/2/2022',
      time2: '20/10/2021',
      loai: 'Khai thác thủy sản',
    },
  ]);
  const ListWarning = ({data, navigation}) => {
    return (
      <FlatList
        data={data}
        renderItem={({item, index}) => {
          return (
            <View style={{flexDirection: 'row', flex: 1}}>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                  marginTop: 15,
                }}>
                <View>
                  <Image
                    source={ICONS.Tau}
                    resizeMode="contain"
                    style={{width: 40, height: 40}}
                  />
                </View>
              </View>
              <View
                style={{
                  flex: 6,
                  borderBottomWidth: 1,
                  borderBottomColor: '#D6D6D6',
                  paddingTop: 15,
                  paddingBottom: 12,
                  paddingRight: 9,
                }}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('DetailWarningScreen')}>
                  <View>
                    <View style={{flexDirection: 'row'}}>
                      <View style={{flexDirection: 'row', flex: 7}}>
                        <Text
                          style={{
                            fontFamily: 'Roboto-Bold',
                            fontSize: 16,
                            color: 'black',
                            marginRight: 5,
                          }}>
                          {item.name}
                        </Text>
                      </View>
                      <View style={{flexDirection: 'row', flex: 2}}>
                        <Text
                          style={{
                            color: '#ADADAD',
                            fontFamily: 'Inter-Regular',
                            fontSize: 12,
                          }}>
                          {item.time1}
                        </Text>
                        <View style={{marginTop: 3, marginLeft: 5}}>
                          <Image
                            source={ICONS.Next}
                            resizeMode="contain"
                            style={{width: 12, height: 12}}
                          />
                        </View>
                      </View>
                    </View>
                    <View style={{}}>
                      <Text
                        style={{
                          color: '#ADADAD',
                          fontFamily: 'Inter-Regular',
                          fontSize: 12,
                        }}>
                        Loại: {item.loai}
                      </Text>
                      <Text
                        style={{
                          color: '#FF820F',
                          fontFamily: 'Inter-Regular',
                          fontSize: 12,
                        }}>
                        Hạn đăng kiểm: {item.time2}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          );
        }}></FlatList>
    );
  };
  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor={'#459AC9'} />
      <HeaderComponent4 label={'Cảnh báo'} navigation={navigation} />
      {warning.length === 0 ? (
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            marginTop: 115,
            opacity: 0.5,
          }}>
          <Image
            source={ICONS.Mail}
            resizeMode="contain"
            style={{width: 203, height: 160}}
          />
          <Text
            style={{
              fontFamily: 'Roboto-Regular',
              fontSize: 14,
              color: '#D6D6D6',
            }}>
            Không có dữ liệu
          </Text>
        </View>
      ) : (
        <View style={{flex: 1}}>
          <ScrollView>
            <ListWarning data={warning} navigation={navigation} />
          </ScrollView>
        </View>
      )}
    </View>
  );
};

export default WarningScreen;
