import React, {useState} from 'react';
import {
  FlatList,
  Image,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import HeaderComponent7 from '../components/headerComponent7';
import {IMAGES} from '../assets/images/images';
import {In, Out} from '../components/statusComponent';
import {ICONS} from '../assets/icons/icons';

const List = ({data, navigation}) => {
  return (
    <FlatList
      data={data}
      renderItem={({item, index}) => (
        <TouchableOpacity
          onPress={() => navigation.navigate('DetailViolationCBScreen')}>
          <View
            style={{
              paddingBottom: 15,
              paddingTop: 15,
              borderBottomWidth: 0.8,
              borderBottomColor: '#D6D6D6',
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={{flexDirection: 'row', flex: 1}}>
                <Text
                  style={{
                    marginRight: 9,
                    fontFamily: 'Roboto-Bold',
                    fontSize: 16,
                    color: '#333',
                  }}>
                  {item.name}
                </Text>
                <View style={{marginTop: 4}}>
                  {item.status === 'Trong bờ' ? <In /> : <Out />}
                </View>
              </View>
              <Text
                style={{
                  marginRight: 5,
                  color: '#ADADAD',
                  fontFamily: 'Inter-Regular',
                  fontSize: 12,
                }}>
                {item.time}
              </Text>
              <View>
                <Image
                  source={ICONS.Next}
                  resizeMode="contain"
                  style={{height: 12, width: 12}}
                />
              </View>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  color: '#333',
                  fontFamily: 'Inter-Regular',
                  fontSize: 12,
                }}>
                Người tạo:
              </Text>
              <Image
                source={item.nguoiTao}
                resizeMode="contain"
                style={{height: 20, width: 20, marginLeft: 5}}
              />
            </View>
            <Text
              style={{
                color: '#333',
                fontFamily: 'Inter-Regular',
                fontSize: 12,
              }}>
              Thời gian bị bắt: {item.thoiGianBiBat}
            </Text>
            <Text
              style={{
                color: '#ADADAD',
                fontFamily: 'Inter-Regular',
                fontSize: 12,
              }}>
              {item.xuLi}
            </Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};
const History = () => {};
const ViolationCBScreen = ({navigation}) => {
  const [filterList, setFilterList] = useState(false);
  const [page, setPage] = useState('List');
  const [list, setList] = useState([
    {
      name: 'CM-01030-TS',
      status: 'Ngoài biển',
      nguoiTao: IMAGES.avt,
      thoiGianBiBat: '20/10/2021 10:31',
      time: '22/2/2022',
      xuLi: 'Đề nghị quay lại bờ và phạt hành chính 20 triệu',
    },
    {
      name: 'CM-01030-TS',
      status: 'Trong bờ',
      nguoiTao: IMAGES.avt,
      thoiGianBiBat: '20/10/2021 10:31',
      time: '22/2/2022',
      xuLi: 'Đề nghị quay lại bờ và phạt hành chính 20 triệu',
    },
  ]);
  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor={'#583CFF'} />
      <HeaderComponent7
        label={'Lịch sử vi phạm'}
        navigation={navigation}
        right={'search'}
        setFilter={setFilterList}
      />
      <View style={{marginLeft: 12, marginRight: 12}}>
        {filterList ? (
          <>
            <View
              style={{
                paddingTop: 15,
                paddingBottom: 10,
                borderBottomColor: '#D6D6D6',
                borderBottomWidth: 0.8,
                flexDirection: 'row',
              }}>
              <TouchableOpacity
                onPress={() => navigation.navigate('FilterViolationCBSceen')}>
                <View
                  style={{
                    flexDirection: 'row',
                    borderRadius: 4,
                    padding: 5,
                    borderWidth: 0.6,
                    borderColor: '#D6D6D6',
                    alignItems: 'center',
                    marginRight: 5,
                  }}>
                  <Image
                    source={ICONS.Filter}
                    resizeMode="contain"
                    style={{width: 14, height: 14}}
                  />
                  <Text
                    style={{
                      marginLeft: 3,
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
                    borderRadius: 4,
                    padding: 5,
                    borderWidth: 0.6,
                    borderColor: '#D6D6D6',
                    alignItems: 'center',
                    width: 116,
                    marginRight: 5,
                  }}>
                  <Text
                    style={{
                      marginRight: 3,
                      fontFamily: 'Inter-Regular',
                      fontSize: 12,
                      color: '#333',
                    }}>
                    Người tạo
                  </Text>
                  <Image
                    source={ICONS.Drop}
                    resizeMode="contain"
                    style={{
                      width: 10,
                      height: 6,
                      position: 'absolute',
                      right: 5,
                    }}
                  />
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flexDirection: 'row',
                    borderRadius: 4,
                    padding: 5,
                    borderWidth: 0.6,
                    borderColor: '#D6D6D6',
                    alignItems: 'center',
                    width: 116,
                    marginRight: 5,
                    backgroundColor: '#ADADAD',
                  }}>
                  <Image
                    source={ICONS.Calendar}
                    resizeMode="contain"
                    style={{
                      width: 14,
                      height: 14,
                      marginRight: 3,
                    }}
                  />
                  <Text
                    style={{
                      marginRight: 3,
                      fontFamily: 'Inter-Regular',
                      fontSize: 12,
                      color: '#333',
                    }}>
                    Thời gian bị bắt
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </>
        ) : (
          <>
            <View
              style={{
                flexDirection: 'row',
                borderBottomWidth: 0.8,
                borderBottomColor: '#F5F5F5',
              }}>
              <TouchableOpacity onPress={() => setPage('List')}>
                <View
                  style={{
                    paddingTop: 15,
                    marginRight: 35,
                    paddingBottom: 3,
                    borderBottomWidth: 3,
                    borderBottomColor:
                      page === 'List' ? '#3345CB' : 'transparent',
                  }}>
                  <Text
                    style={{
                      fontFamily: 'Inter-Bold',
                      fontSize: 14,
                      lineHeight: 16.94,
                      color: page === 'List' ? '#3345CB' : '#ADADAD',
                    }}>
                    Danh sách
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setPage('History')}>
                <View
                  style={{
                    paddingTop: 15,
                    marginRight: 35,
                    paddingBottom: 3,
                    borderBottomWidth: 3,
                    borderBottomColor:
                      page === 'History' ? '#3345CB' : 'transparent',
                  }}>
                  <Text
                    style={{
                      fontFamily: 'Inter-Bold',
                      fontSize: 14,
                      lineHeight: 16.94,
                      color: page === 'History' ? '#3345CB' : '#ADADAD',
                    }}>
                    Lịch sử tạo
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </>
        )}

        <View>
          {page === 'List' ? (
            <List data={list} navigation={navigation} />
          ) : (
            <History />
          )}
        </View>
      </View>
      <View style={{position: 'absolute', right: 12, bottom: 35}}>
        <TouchableOpacity
          onPress={() => navigation.navigate('AddViolationScreen')}>
          <Image
            source={ICONS.Add}
            resizeMode="contain"
            style={{width: 56, height: 56}}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ViolationCBScreen;
