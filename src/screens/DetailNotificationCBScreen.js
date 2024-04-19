import {
  FlatList,
  Image,
  StatusBar,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import HeaderComponents from '../components/headerComponents';

const DetailNotificationCBScreen = ({route, navigation}) => {
  const {item} = route.params;

  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor={'#fff'} />
      <HeaderComponents
        navigation={navigation}
        label={'Thông báo'}
        colorIcon={'#333'}
      />
      <View style={{marginHorizontal: 12}}>
        <View
          style={{
            backgroundColor: '#fff',
            borderRadius: 6,
            paddingHorizontal: 12,
            paddingVertical: 20,
          }}>
          <Text
            style={{fontFamily: 'Roboto-Regular', fontSize: 16, color: '#333'}}>
            {item.content}
          </Text>
        </View>
        <View
          style={{
            marginTop: 5,
            backgroundColor: '#fff',
            borderRadius: 6,
            paddingHorizontal: 12,
            paddingVertical: 20,
          }}>
          <Text
            style={{
              fontFamily: 'Roboto-Regular',
              fontSize: 12,
              color: '#ADADAD',
              marginBottom: 10,
            }}>
            Giấy chứng nhận đăng kí tàu
          </Text>
          <View style={{flexDirection: 'row'}}>
            {item.chungNhan.map((item, index) => {
              return (
                <TouchableOpacity>
                  <Text
                    style={{
                      marginRight: 11,
                      color: '#333',
                      fontFamily: 'Inter-Regular',
                      fontSize: 16,
                    }}>
                    {item}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </View>
    </View>
  );
};

export default DetailNotificationCBScreen;
