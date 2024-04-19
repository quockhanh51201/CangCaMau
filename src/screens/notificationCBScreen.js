import {
  FlatList,
  Image,
  StatusBar,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import SearchComponent from '../components/searchComponent';
import {ICONS} from '../assets/icons/icons';
import {useState} from 'react';
import HeaderComponent7 from '../components/headerComponent7';
import {IMAGES} from '../assets/images/images';

const ItemNocationComponent = ({navigation, items}) => {
  return (
    <FlatList
      data={items}
      contentContainerStyle={{
        paddingBottom: 100,
      }}
      renderItem={({item, index}) => {
        return (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('DetailNotificationCBScreen', {
                item: item,
              });
            }}>
            <View
              style={{
                flexDirection: 'row',
                borderTopWidth: 0.6,
                borderBottomWidth: 0.6,
                borderColor: '#D6D6D6',
                paddingVertical: 15,
              }}>
              <Image
                resizeMode="stretch"
                source={item.icon}
                style={{
                  width: 40,
                  height: 40,
                }}
              />
              <View style={{flex: 1}}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingLeft: 12,
                    paddingRight: 12,
                  }}>
                  <Text
                    style={{
                      fontFamily: 'Roboto-Bold',
                      fontSize: 16,
                      color: '#333',
                      flex: 11,
                    }}>
                    {item.lable}
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      flex: 3,
                    }}>
                    <Text
                      style={{
                        fontFamily: 'Roboto-Regular',
                        fontSize: 12,
                        color: '#ADADAD',
                        marginRight: 3,
                      }}>
                      {item.time}
                    </Text>
                    <Image
                      resizeMode="contain"
                      source={ICONS.Next}
                      style={{
                        width: 12,
                        height: 12,
                      }}
                    />
                  </View>
                </View>
                <Text
                  style={{
                    paddingLeft: 12,
                    paddingRight: 12,
                    fontFamily: 'Inter-Regular',
                    fontSize: 12,
                    color: '#333',
                  }}>
                  Người tạo:{' '}
                  <Image
                    source={item.nguoiTao}
                    resizeMode="contain"
                    style={{width: 20, height: 20}}
                  />
                </Text>
                <Text
                  style={{
                    paddingLeft: 12,
                    paddingRight: 12,
                    fontFamily: 'Roboto-Regular',
                    fontSize: 12,
                    color: '#333',
                    marginTop: 8,
                  }}>
                  Xem chi tiết cảnh báo ngày 10 tháng 10 2022
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    paddingLeft: 12,
                  }}>
                  {item.chungNhan.map((item, index) => {
                    return (
                      <TouchableOpacity>
                        <Text
                          style={{
                            marginRight: 11,
                            color: '#3345CB',
                            fontFamily: 'Inter-Regular',
                            fontSize: 12,
                          }}>
                          {item}
                        </Text>
                      </TouchableOpacity>
                    );
                  })}
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
const NotificationCBScreen = ({navigation}) => {
  const [page, setPage] = useState('List');

  const [nocations, setNocations] = useState([
    {
      icon: ICONS.Warning,
      lable: 'Cảnh báo',
      content:
        'Cảnh báo thời hạn hết hạn đăng kiểm của tàu/thuyền hết hạn ngày 10 tháng 10 2022',
      time: '02/02/2022',
      nguoiTao: IMAGES.avt,
      chungNhan: ['canhbao.pdf'],
    },
    {
      icon: ICONS.Warning,
      lable: 'Cảnh báo',
      content:
        'Cảnh báo thời hạn hết hạn đăng kiểm của tàu/thuyền hết hạn ngày 10 tháng 10 2022',
      time: '02/02/2022',

      nguoiTao: IMAGES.avt,
      chungNhan: ['canhbao.pdf', 'anh.png'],
    },
  ]);
  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor={'#583CFF'} />
      <HeaderComponent7 label={'Thông báo'} navigation={navigation} />
      <View style={{marginHorizontal: 12}}>
        <View
          style={{
            flexDirection: 'row',
            borderBottomWidth: 0.8,
            borderBottomColor: '#F5F5F5',
          }}>
          <TouchableOpacity
            onPress={() => {
              setPage('List');
            }}>
            <View
              style={{
                paddingTop: 15,
                marginRight: 35,
                paddingBottom: 3,
                borderBottomWidth: 3,
                borderBottomColor: page === 'List' ? '#3345CB' : 'transparent',
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
          <TouchableOpacity
            onPress={() => {
              setPage('History');
            }}>
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
        {page === 'List' ? (
          <>
            <ItemNocationComponent navigation={navigation} items={nocations} />
          </>
        ) : (
          ''
        )}
      </View>
      <View style={{position: 'absolute', right: 12, bottom: 35}}>
        <TouchableOpacity
          onPress={() => navigation.navigate('AddNotifinationCBScreen')}>
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

export default NotificationCBScreen;
