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
import SearchComponent from '../components/searchComponent';
import {IMAGES} from '../assets/images/images';

const ItemHomeComponent = ({navigation, items}) => {
  return (
    <FlatList
      data={items}
      contentContainerStyle={{alignSelf: 'center'}}
      renderItem={({item, index}) => {
        return (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate(item.screen);
            }}>
            <View
              style={{
                width: 110,
                height: 140,
                borderRadius: 20,
                backgroundColor: index % 2 == 0 ? '#D6DAF5' : '#FFCFA2',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: 5.5,
                marginLeft: 5.5,
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
      screen: 'InOutCBScreen',
    },
    {
      label: 'Tàu cá',
      image: ICONS.ItemCB2,
      screen: 'ListOfShipCBScreen',
    },
    {
      label: 'Thuyền viên',
      image: ICONS.ItemCB3,
      screen: 'ListOfCrewCBScreen',
    },
    {
      label: 'Vi phạm',
      image: ICONS.ItemCB4,
      screen: 'ViolationCBScreen',
    },
    {
      label: 'Tai nạn',
      image: ICONS.ItemCB5,
      screen: 'AccidentHistoryCBScreen',
    },
    {
      label: 'Thông báo',
      image: ICONS.ItemCB6,
      screen: 'NotificationCBScreen',
    },
    {
      label: 'Hỏi ý kiến cấp trên',
      image: ICONS.ItemCB7,
      screen: 'AskCBScreen',
    },
    {
      label: 'Tra cứu bến',
      image: ICONS.ItemCB8,
      screen: 'ListPierScreen',
    },
  ]);
  return (
    <View style={{flex: 1, paddingBottom: 100}}>
      <StatusBar backgroundColor={'#F5F5F5'} />
      <ScrollView>
        <View
          style={{
            marginLeft: 15,
            marginTop: 15,
            marginBottom: 20,
          }}>
          <View
            style={{
              flexDirection: 'row',
              borderBottomWidth: 0.8,
              borderBottomColor: '#F5F5F5',
              paddingBottom: 5,
              marginBottom: 15,
            }}>
            <View
              style={{
                borderRadius: 6,
                alignItems: 'center',
                backgroundColor: '#333',
                height: 38,
                width: 343,
                justifyContent: 'flex-start',
                flexDirection: 'row',
                padding: 13,
                opacity: 0.3,
              }}>
              <Image
                source={ICONS.Search}
                resizeMode="stretch"
                style={{tintColor: 'black', height: 20, width: 20}}
              />
              <TextInput
                placeholder="Nhập nội dung tìm kiếm ..."
                placeholderTextColor="#333"
                style={{
                  height: 38,
                  fontSize: 14,
                  fontFamily: 'Roboto-Regular',
                }}
              />
            </View>
            <View style={{marginLeft: 10}}>
              <Image
                source={IMAGES.avt}
                resizeMode="contain"
                style={{width: 36, height: 36}}
              />
            </View>
          </View>
          <Text
            style={{
              fontFamily: 'Inter-Regular',
              fontSize: 18,
              letterSpacing: 1.8,
              textTransform: 'uppercase',
              color: '#2B13C0',
            }}>
            Quản lý
          </Text>
          <Text
            style={{
              fontFamily: 'Inter-Bold',
              fontSize: 28,
              textTransform: 'uppercase',
              color: '#2B13C0',
            }}>
            tàu cá cà mau
          </Text>
        </View>
        <View style={{flex: 1, alignItems: 'center'}}>
          <ItemHomeComponent navigation={navigation} items={itemHome} />
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeCBScreen;
