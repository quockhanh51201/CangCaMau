import {Image, Text, TouchableOpacity, View} from 'react-native';
import {ICONS} from '../assets/icons/icons';
import {cloneElement} from 'react';

const HeaderComponent5 = ({label, navigation}) => {
  return (
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <View
          style={{
            paddingTop: 2,
            marginLeft: 12,
            marginTop: 12,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 14,
              fontFamily: 'Roboto-Regular',
              color: '#828282',
            }}>
            Đóng
          </Text>
        </View>
      </TouchableOpacity>

      <View
        style={{
          flex: 1,
          paddingTop: 2,
          marginTop: 12,
          marginRight: 32,
          height: 25,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            alignContent: 'center',
            fontFamily: 'Roboto-Bold',
            fontSize: 16,
            color: '#333333',
          }}>
          {label}
        </Text>
      </View>
    </View>
  );
};
export default HeaderComponent5;
