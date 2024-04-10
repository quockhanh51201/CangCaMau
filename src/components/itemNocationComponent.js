import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {ICONS} from '../assets/icons/icons';

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
          // onPress={() => {
          //     navigation.navigate('Detail',{
          //         item: item
          //     })
          // }}
          >
            <View
              style={{
                height: 84,
                width: 375,
                flexDirection: 'row',
                alignItems: 'center',
                flex: 1,
              }}>
              {/* tick thong bao chua doc */}
              <View
                style={{
                  height: 84,
                  flex: 0.5,
                  alignItems: 'center',
                }}>
                {item.status == 'new' ? (
                  <Image
                    resizeMode="stretch"
                    source={ICONS.Tick}
                    style={{
                      width: 10,
                      height: 10,
                      marginTop: 10,
                    }}
                  />
                ) : (
                  ''
                )}
              </View>
              <View
                style={{
                  flex: 9,
                  height: 84,
                  flexDirection: 'row',
                  borderTopWidth: 0.6,
                  borderBottomWidth: 0.6,
                  borderColor: '#D6D6D6',
                  justifyContent: 'space-between',
                }}>
                <Image
                  resizeMode="stretch"
                  source={item.icon}
                  style={{
                    width: 40,
                    height: 40,
                    marginTop: 15,
                  }}
                />
                <View>
                  <View
                    style={{
                      flexDirection: 'row',
                      flex: 1,
                      alignItems: 'center',
                      paddingLeft: 12,
                      paddingRight: 12,
                    }}>
                    <Text
                      style={{
                        flex: 9,
                        fontFamily: 'Roboto-Bold',
                        fontSize: 16,
                        color: '#333',
                      }}>
                      {item.lable}
                    </Text>
                    <Text
                      style={{
                        flex: 3,
                        fontFamily: 'Roboto-Regular',
                        fontSize: 12,
                        color: '#ADADAD',
                      }}>
                      {item.time}
                    </Text>
                    <Image
                      resizeMode="contain"
                      source={ICONS.Next}
                      style={{
                        width: 12,
                        height: 12,
                        flex: 1,
                      }}
                    />
                  </View>
                  <Text
                    style={{
                      paddingLeft: 12,
                      paddingRight: 12,
                      paddingBottom: 15,
                      fontFamily: 'Roboto-Regular',
                      fontSize: 12,
                      color: '#333',
                    }}>
                    {item.content}
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        );
      }}
      numColumns={1}></FlatList>
  );
};

export default ItemNocationComponent;

// icon: ICONS.Warning,
// lable: 'Cảnh báo',
// content: 'Cảnh báo thời hạn hết hạn đăng kiểm của tàu/thuyền hết hạn ngày 10 tháng 10 2022',
// time: '02/02/2022',
// status: 'new'
