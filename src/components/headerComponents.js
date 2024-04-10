import {Image, Text, TouchableOpacity, View} from 'react-native';
import {ICONS} from '../assets/icons/icons';
import {cloneElement} from 'react';

const HeaderComponents = ({label, navigation, colorIcon}) => {
  return (
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <View
          style={{
            paddingBottom: 2,
            paddingTop: 2,
            paddingRight: 5,
            paddingLeft: 5,
            marginLeft: 12,
            marginTop: 12,
            marginBottom: 12,
            width: 20,
            height: 25,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={ICONS.Back}
            resizeMode="contain"
            style={{tintColor: colorIcon}}
          />
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
export default HeaderComponents;
