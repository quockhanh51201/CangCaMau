import {
  FlatList,
  Image,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {ICONS} from '../assets/icons/icons';
import {useEffect, useLayoutEffect, useState} from 'react';

const ItemHomeComponent = ({navigation, items}) => {
  return (
    <FlatList
      data={items}
      renderItem={({item, index}) => {
        return (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate(item.screen);
            }}>
            <View
              style={{
                width: 110,
                height: 139,
                borderRadius: 20,
                backgroundColor: index % 2 == 0 ? '#D6DAF5' : '#FFCFA2',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: 11,
                marginBottom: 11,
              }}>
              <Image source={item.image} style={{width: 60, height: 60}} />
              <Text
                style={{
                  color: index % 2 == 0 ? '#3345CB' : '#FF820F',
                  fontFamily: 'Roboto-Bold',
                  fontSize: 14,
                  marginTop: 13,
                }}>
                {item.label}
              </Text>
            </View>
          </TouchableOpacity>
        );
      }}
      numColumns={3}></FlatList>
  );
};
const HomeCBScreen = ({navigation}) => {
  const [itemHome, setItemHome] = useState([
    {
      label: 'Yêu cầu Xuất/Nhập bến',
      image: ICONS.ItemCB1,
      screen: 'InOutScreen',
    },
    {
      label: 'Tàu cá',
      image: ICONS.ItemCB2,
      screen: 'ListOfShipScreen',
    },
    {
      label: 'Thuyền viên',
      image: ICONS.ItemCB3,
      screen: 'ListOfCrewScreen',
    },
    {
      label: 'Vi phạm',
      image: ICONS.ItemCB4,
      screen: 'ViolationHistoryScreen',
    },
    {
      label: 'Tai nạn',
      image: ICONS.ItemCB5,
      screen: 'AccidentHistoryScreen',
    },
    {
      label: 'Thông báo',
      image: ICONS.ItemCB6,
      screen: 'WarningScreen',
    },
    {
      label: 'Hỏi ý kiến cấp trên',
      image: ICONS.ItemCB7,
      screen: 'InScreen',
    },
    {
      label: 'Tra cứu bến',
      image: ICONS.ItemCB8,
      screen: 'OutScreen',
    },
  ]);
  return (
    <View style={{flex: 1, paddingBottom: 100}}>
      <StatusBar backgroundColor={'#F5F5F5'} />
      <ScrollView>
        <View
          style={{
            flexDirection: 'row',
            height: 46,
            borderBottomColor: '#F5F5F5',
            borderBottomWidth: 1,
            marginTop: 5,
          }}>
          <View
            style={{
              width: 40,
              height: 40,
              marginLeft: 15,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={ICONS.Profile}
              resizeMode="stretch"
              style={{height: 36, width: 36}}
            />
          </View>
          <View
            style={{
              marginLeft: 5,
            }}>
            <Text
              style={{
                fontFamily: 'Inter-Bold',
                fontSize: 16,
                color: '#333333',
              }}>
              Phan Quốc Khánh
            </Text>
            <Text
              style={{
                fontSize: 15,
                fontFamily: 'Roboto-Regular',
                color: '#005F94',
              }}>
              Thuyền trưởng
            </Text>
          </View>
        </View>
        <View
          style={{
            marginLeft: 15,
            marginTop: 15,
            marginBottom: 20,
          }}>
          <Text
            style={{
              fontFamily: 'Inter-Regular',
              fontSize: 18,
              letterSpacing: 1.8,
              textTransform: 'uppercase',
              color: '#005F94',
            }}>
            Quản lý
          </Text>
          <Text
            style={{
              fontFamily: 'Inter-Bold',
              fontSize: 28,
              textTransform: 'uppercase',
              color: '#005F94',
            }}>
            tàu cá cà mau
          </Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <ItemHomeComponent navigation={navigation} items={itemHome} />
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeCBScreen;
