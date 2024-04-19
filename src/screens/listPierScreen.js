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
import {ICONS} from '../assets/icons/icons';
import {IMAGES} from '../assets/images/images';

const ItemPier = ({navigation, data}) => {
  return (
    <FlatList
      data={data}
      renderItem={({item, index}) => {
        return (
          <TouchableOpacity
            onPress={() => navigation.navigate('DetailPierScreen')}>
            <View
              style={{
                flexDirection: 'row',
                paddingRight: 12,
                paddingVertical: 15,
                borderBottomColor: '#D6D6D6',
                borderBottomWidth: 1,
              }}>
              <View style={{marginRight: 10}}>
                <Image
                  source={item.image}
                  resizeMode="contain"
                  style={{width: 40, height: 40, borderRadius: 4}}
                />
              </View>
              <View style={{flex: 1}}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={{
                      fontFamily: 'Roboto-Bold',
                      fontSize: 16,
                      color: '#333333',
                    }}>
                    {item.name} (40)
                  </Text>
                  {/* 40 là số lượng tàu ở bên trong bến cảng */}
                  <Image
                    source={ICONS.Next}
                    resizeMode="contain"
                    style={{
                      width: 12,
                      height: 12,
                    }}
                  />
                </View>
                <Text
                  style={{
                    fontFamily: 'Roboto-Regular',
                    fontSize: 12,
                    color: '#ADADAD',
                  }}>
                  {item.location}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        );
      }}
      numColumns={1}
    />
  );
};
const ListPierScreen = ({navigation}) => {
  const [search, setSearch] = useState(false);
  const [listPier, setListPier] = useState([
    {
      name: 'Bến bạc đá',
      location: 'Khóm 6B, Trần Văn Thời, Cà Mau',
      image: ICONS.Canh,
    },
    {
      name: 'Bến bạc đá',
      location: 'Khóm 6B, Trần Văn Thời, Cà Mau',
      image: ICONS.Canh,
    },
    {
      name: 'Bến bạc đá',
      location: 'Khóm 6B, Trần Văn Thời, Cà Mau',
      image: ICONS.Canh,
    },
  ]);
  return (
    <View>
      <StatusBar backgroundColor={'#583CFF'} />
      {/* ====== */}
      <View
        style={{
          height: 41,
          backgroundColor: '#583CFF',
          flexDirection: 'row',
          paddingHorizontal: 12,
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={ICONS.Back}
            resizeMode="contain"
            style={{width: 9, height: 16, marginTop: 4}}
            tintColor={'#fff'}
          />
        </TouchableOpacity>
        <Text
          style={{
            color: '#FFFFFF',
            fontFamily: 'Roboto-Bold',
            fontSize: 16,
            marginTop: 5,
          }}>
          Tra cứu bến
        </Text>
        <TouchableOpacity onPress={() => setSearch(!search)}>
          <Image
            source={ICONS.Search}
            resizeMode="contain"
            style={{width: 18, height: 18, marginTop: 5}}
            tintColor={'#fff'}
          />
        </TouchableOpacity>
      </View>
      {/* ===== */}
      {search ? (
        <View
          style={{
            paddingLeft: 20,
            paddingRight: 12,
            paddingVertical: 10,
            borderBottomWidth: 1,
            borderBottomColor: '#D6D6D6',
          }}>
          <View
            style={{
              backgroundColor: '#F5F5F5',
              borderRadius: 6,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image
              source={ICONS.Search}
              resizeMode="contain"
              style={{width: 18.8, height: 18.8, tintColor: '#333'}}
            />
            <TextInput
              placeholder="Nhập nội dung tìm kiếm"
              placeholderTextColor={'#333333'}
              style={{opacity: 0.5, marginLeft: 4}}
            />
          </View>
        </View>
      ) : (
        ''
      )}
      <View style={{marginLeft: 12}}>
        <ItemPier navigation={navigation} data={listPier} />
      </View>
    </View>
  );
};

export default ListPierScreen;
