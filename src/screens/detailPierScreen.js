import React, {useState} from 'react';
import {
  FlatList,
  Image,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import HeaderComponents from '../components/headerComponents';
import {ICONS} from '../assets/icons/icons';

const TextinputCustom = ({label, text, placeholder}) => {
  return (
    <View
      style={{
        borderBottomColor: '#D6D6D6',
        borderBottomWidth: 0.8,
        marginBottom: 15,
      }}>
      <Text
        style={{fontFamily: 'Roboto-Regular', fontSize: 12, color: '#ADADAD'}}>
        {label}
      </Text>
      <TextInput
        value={text}
        placeholder={placeholder}
        placeholderTextColor={'#D6D6D6'}
        style={{
          fontFamily: 'Roboto-Regular',
          fontSize: 16,
          color: '#333333',
          marginTop: 5,
        }}></TextInput>
    </View>
  );
};
const ItemShip = ({navigation, data}) => {
  return (
    <FlatList
      data={data}
      renderItem={({item, index}) => {
        return (
          <TouchableOpacity
            onPress={() => navigation.navigate('ShipInformationCBScreen')}>
            <View
              style={{
                marginBottom: 15,
                borderBottomColor: '#D6D6D6',
                borderBottomWidth: 0.9,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                }}>
                <View>
                  <Image
                    source={ICONS.Tau}
                    resizeMode="contain"
                    style={{width: 40, height: 40}}
                  />
                </View>
                <View style={{marginLeft: 10, flex: 1}}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <Text
                      style={{
                        fontFamily: 'Roboto-Bold',
                        fontSize: 16,
                        color: '#333333',
                      }}>
                      {item.name}
                    </Text>
                    <View style={{flexDirection: 'row'}}>
                      <Text
                        style={{
                          color: '#ADADAD',
                          fontFamily: 'Inter-Regular',
                          fontSize: 12,
                        }}>
                        {item.time}
                      </Text>
                      <Image
                        source={ICONS.Next}
                        resizeMode="contain"
                        style={{
                          width: 12,
                          height: 12,
                          marginTop: 2.8,
                          marginLeft: 3.6,
                        }}
                      />
                    </View>
                  </View>
                  <View>
                    <Text
                      style={{
                        color: '#ADADAD',
                        fontFamily: 'Inter-Regular',
                        fontSize: 12,
                        marginBottom: 5,
                      }}>
                      {item.manage}
                    </Text>
                    <Text
                      style={{
                        color: '#ADADAD',
                        fontFamily: 'Roboto-Regular',
                        fontSize: 12,
                      }}>
                      Hạn đăng kiểm: {item.Dk}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        );
      }}
      numColumns={1}
    />
  );
};

const DetailPierScreen = ({navigation}) => {
  const [listShip, setListShip] = useState([
    {
      name: '060206 - Thái học 0',
      time: '22/02/2022',
      manage:
        'Phan Văn Tiến, CMND: , SDT: 0984042497, Địa chỉ: k1, Xã Long Đức, Thành phố Trà Vinh...',
      Dk: '12/12/2022',
    },
    {
      name: '060206 - Thái học 1',
      time: '22/02/2022',
      manage:
        'Phan Văn Tiến, CMND: , SDT: 0984042497, Địa chỉ: k1, Xã Long Đức, Thành phố Trà Vinh...',
      Dk: '12/12/2022',
    },
    {
      name: '060206 - Thái học 2',
      time: '22/02/2022',
      manage:
        'Phan Văn Tiến, CMND: , SDT: 0984042497, Địa chỉ: k1, Xã Long Đức, Thành phố Trà Vinh...',
      Dk: '12/12/2022',
    },
    {
      name: '060206 - Thái học 3',
      time: '22/02/2022',
      manage:
        'Phan Văn Tiến, CMND: , SDT: 0984042497, Địa chỉ: k1, Xã Long Đức, Thành phố Trà Vinh...',
      Dk: '12/12/2022',
    },
    {
      name: '060206 - Thái học 4',
      time: '22/02/2022',
      manage:
        'Phan Văn Tiến, CMND: , SDT: 0984042497, Địa chỉ: k1, Xã Long Đức, Thành phố Trà Vinh...',
      Dk: '12/12/2022',
    },
    {
      name: '060206 - Thái học 5',
      time: '22/02/2022',
      manage:
        'Phan Văn Tiến, CMND: , SDT: 0984042497, Địa chỉ: k1, Xã Long Đức, Thành phố Trà Vinh...',
      Dk: '12/12/2022',
    },
    {
      name: '060206 - Thái học 6',
      time: '22/02/2022',
      manage:
        'Phan Văn Tiến, CMND: , SDT: 0984042497, Địa chỉ: k1, Xã Long Đức, Thành phố Trà Vinh...',
      Dk: '12/12/2022',
    },
    {
      name: '060206 - Thái học 7',
      time: '22/02/2022',
      manage:
        'Phan Văn Tiến, CMND: , SDT: 0984042497, Địa chỉ: k1, Xã Long Đức, Thành phố Trà Vinh...',
      Dk: '12/12/2022',
    },
    {
      name: '060206 - Thái học 8',
      time: '22/02/2022',
      manage:
        'Phan Văn Tiến, CMND: , SDT: 0984042497, Địa chỉ: k1, Xã Long Đức, Thành phố Trà Vinh...',
      Dk: '12/12/2022',
    },
    {
      name: '060206 - Thái học 9',
      time: '22/02/2022',
      manage:
        'Phan Văn Tiến, CMND: , SDT: 0984042497, Địa chỉ: k1, Xã Long Đức, Thành phố Trà Vinh...',
      Dk: '12/12/2022',
    },
    {
      name: '060206 - Thái học 10',
      time: '22/02/2022',
      manage:
        'Phan Văn Tiến, CMND: , SDT: 0984042497, Địa chỉ: k1, Xã Long Đức, Thành phố Trà Vinh...',
      Dk: '12/12/2022',
    },
  ]);
  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor={'#fff'} />
      <HeaderComponents
        navigation={navigation}
        label={'Chi tiết bến'}
        colorIcon={'#333'}
      />
      <View style={{paddingHorizontal: 12, flex: 1}}>
        <View
          style={{
            backgroundColor: '#fff',
            borderRadius: 6,
            paddingHorizontal: 12,
            paddingTop: 20,
            paddingBottom: 5,
          }}>
          <TextinputCustom label={'Tên cảng biển'} text={'Bến bạc đá'} />
          <TextinputCustom
            label={'Địa chỉ'}
            text={'Khóm 6B, Trần Văn Thời, Cà Mau'}
          />
          <TextinputCustom
            label={'Ghi chú'}
            text={''}
            placeholder={'Ghi chú cảng'}
          />
        </View>
        <Text
          style={{
            fontFamily: 'Roboto-Bold',
            fontSize: 16,
            color: '#3345CB',
            marginTop: 20,
            marginBottom: 5,
          }}>
          Tàu cá (40)
        </Text>
        <View
          style={{
            backgroundColor: '#fff',
            borderRadius: 6,
            paddingHorizontal: 12,
            paddingTop: 20,
            paddingBottom: 5,
          }}>
          <ItemShip navigation={navigation} data={listShip} />
        </View>
      </View>
    </View>
  );
};

export default DetailPierScreen;
