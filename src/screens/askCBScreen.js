import {
  FlatList,
  Image,
  StatusBar,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import {ICONS} from '../assets/icons/icons';
import {useState} from 'react';
import HeaderComponent7 from '../components/headerComponent7';

const List = ({data, navigation}) => {
  return <ItemAskComponent navigation={navigation} items={data} />;
};
const History = ({data, navigation}) => {
  return <ItemAskComponent navigation={navigation} items={data} />;
};
const ItemAskComponent = ({navigation, items}) => {
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
              navigation.navigate(
                item.status ? 'DetailAskScreen' : 'ReplyAskScreen',
                {
                  item: item,
                },
              );
            }}>
            <View
              style={{
                paddingHorizontal: 10,
                paddingVertical: 15,
                backgroundColor: '#fff',
                borderRadius: 6,
                marginBottom: 5,
              }}>
              <View style={{flexDirection: 'row'}}>
                <View>
                  <Image
                    source={item.status ? ICONS.Check1 : ICONS.Check}
                    resizeMode="contain"
                    style={{width: 16, height: 16}}
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
                        marginBottom: 5,
                      }}>
                      {item.name}
                    </Text>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <Text
                        style={{
                          fontFamily: 'Roboto-Regular',
                          fontSize: 12,
                          color: '#ADADAD',
                        }}>
                        {item.time}
                      </Text>
                      <Image
                        source={ICONS.Next}
                        resizeMode="contain"
                        style={{width: 12, height: 12}}
                      />
                    </View>
                  </View>
                  <Text
                    style={{
                      fontFamily: 'Inter-Regular',
                      fontSize: 12,
                      color: '#333333',
                      marginBottom: 5,
                    }}>
                    {item.note}
                  </Text>
                  <Text
                    style={{
                      fontFamily: 'Inter-Regular',
                      fontSize: 12,
                      color: '#3345CB',
                      marginBottom: 5,
                    }}>
                    {item.image}
                  </Text>
                  {item.status ? (
                    <>
                      <View
                        style={{
                          borderTopWidth: 0.9,
                          borderTopColor: '#D6D6D6',
                          paddingTop: 10,
                        }}>
                        <Text
                          style={{
                            fontFamily: 'Inter-Regular',
                            fontSize: 12,
                            color: '#333',
                            marginBottom: 5,
                          }}>
                          Nội dung phản hồi
                        </Text>
                        <Text
                          style={{
                            fontFamily: 'Inter-Regular',
                            fontSize: 12,
                            color: '#3345CB',
                            marginBottom: 5,
                          }}>
                          {item.image}
                        </Text>
                      </View>
                    </>
                  ) : (
                    ''
                  )}
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
const AskCBScreen = ({navigation}) => {
  const [filterList, setFilterList] = useState(false);
  const [page, setPage] = useState('List');
  const [list, setList] = useState([
    {
      name: '#Số - Tên tàu',
      note: '#Ghi chú hỏi ý kiến cấp trên',
      image: '#Hình ảnh đính kèm',
      time: '12/12/2022',
      status: true,
    },
    {
      name: '#Số - Tên tàu',
      note: '#Ghi chú hỏi ý kiến cấp trên',
      image: '#Hình ảnh đính kèm',
      time: '12/12/2022',
      status: false,
    },
    {
      name: '#Số - Tên tàu',
      note: '#Ghi chú hỏi ý kiến cấp trên',
      image: '#Hình ảnh đính kèm',
      time: '12/12/2022',
      status: true,
    },
  ]);
  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor={'#583CFF'} />
      <HeaderComponent7
        label={'Hỏi ý kiếm cấp trên'}
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
                onPress={() => navigation.navigate('FilterAskCBSceen')}>
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
                    Thời gian gửi
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
                    Phản hồi ý kiến
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </>
        )}

        <View style={{marginTop: 11}}>
          {page === 'List' ? (
            <List data={list} navigation={navigation} />
          ) : (
            <History data={list} navigation={navigation} />
          )}
        </View>
      </View>
      <View style={{position: 'absolute', right: 12, bottom: 35}}>
        <TouchableOpacity onPress={() => navigation.navigate('AddAskScreen')}>
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

export default AskCBScreen;
