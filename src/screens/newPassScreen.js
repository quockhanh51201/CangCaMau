import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {IMAGES} from '../assets/images/images';
import TextInputComponent from '../components/textInputComponent';
import TouchableOpacityComponents from '../components/touchableOpacityComponents';
import CheckBoxComponent from '../components/checkBoxComponent';
import {useState} from 'react';
import HeaderComponents from '../components/headerComponents';

const NewPassScreen = ({navigation}) => {
  return (
    <ImageBackground
      source={IMAGES.background2}
      style={{flex: 1}}
      resizeMode="stretch">
      <HeaderComponents navigation={navigation} />
      <ScrollView style={{flex: 1}}>
        <View
          style={{
            margin: 50,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              textTransform: 'uppercase',
              fontFamily: 'Roboto-Bold',
              fontSize: 24,
              color: '#005F94',
            }}>
            quên mật khẩu
          </Text>
        </View>
        <View
          style={{
            alignItems: 'center',
          }}>
          <TextInputComponent
            placeholder={'Mật khẩu mới'}
            secureTextEntry={true}
          />
          <TextInputComponent
            placeholder={'Nhập lại mật khẩu mới'}
            secureTextEntry={true}
          />
        </View>
        <View
          style={{
            margin: 48,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacityComponents
            content={'Đổi mật khẩu'}
            onPress={() => navigation.navigate('Login')}
          />
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default NewPassScreen;
