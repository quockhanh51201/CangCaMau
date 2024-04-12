import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from 'react-native';
import {IMAGES} from '../assets/images/images';
import TextInputComponent from '../components/textInputComponent';
import TouchableOpacityComponents from '../components/touchableOpacityComponents';
import CheckBoxComponent from '../components/checkBoxComponent';
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchAllAuth} from '../redux/slices/authSlices';
import CheckBoxComponent3 from '../components/checkBoxComponent3';
import TextInputComponent2 from '../components/textInputComponent2';
import TouchableOpacityComponent3 from '../components/touchableOpacityComponent3';

const LoginScreen = ({navigation}) => {
  const [selectedUse, setSelectedUse] = useState('Chủ tàu');

  const handleCheckboxChange = label => {
    setSelectedUse(label);
  };
  const [selectedSavePass, setSelectedSavePass] = useState(false);

  const dispatch = useDispatch();
  const listAuth = useSelector(state => state.auth.listAuth);
  useEffect(() => {
    dispatch(fetchAllAuth());
  }, []);

  return (
    <>
      {selectedUse === 'Chủ tàu' ? (
        <ImageBackground
          source={IMAGES.background2}
          style={{flex: 1}}
          resizeMode="stretch">
          <StatusBar backgroundColor={'#F2FDFF'} />
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
                đăng nhập
              </Text>
            </View>
            <View
              style={{
                justifyContent: 'space-evenly',
                flexDirection: 'row',
              }}>
              <CheckBoxComponent
                label={'Chủ tàu'}
                onPress={() => handleCheckboxChange('Chủ tàu')}
                isChecked={selectedUse === 'Chủ tàu'}
              />
              <CheckBoxComponent
                label={'Cán bộ'}
                onPress={() => handleCheckboxChange('Cán bộ')}
                isChecked={selectedUse === 'Cán bộ'}
              />
            </View>
            <View
              style={{
                justifyContent: 'space-evenly',
                alignItems: 'center',
              }}>
              <TextInputComponent
                placeholder={'Số điện thoại'}
                keyboardType={'numeric'}
              />
              <TextInputComponent
                placeholder={'Mật khẩu'}
                secureTextEntry={true}
              />
            </View>
            <View
              style={{
                marginTop: 15,
                justifyContent: 'center',
                alignItems: 'flex-end',
                right: 35,
              }}>
              <CheckBoxComponent
                label={'Lưu mật khẩu'}
                onPress={() => setSelectedSavePass(!selectedSavePass)}
                isChecked={selectedSavePass}
              />
            </View>
            <View
              style={{
                margin: 48,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <TouchableOpacityComponents
                content={'Đăng Nhập'}
                onPress={() => {
                  navigation.navigate('TabBar');
                  navigation.reset({
                    index: 0,
                    routes: [{name: 'TabBar'}],
                  });
                }}
              />
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                onPress={() => navigation.navigate('ForgotPass')}>
                <Text
                  style={{
                    fontFamily: 'Inter-Regular',
                    fontSize: 14,
                    color: '#005F94',
                  }}>
                  Quên mật khẩu?
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                margin: 48,
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <Text
                style={{
                  fontFamily: 'Inter-Regular',
                  fontSize: 14,
                  color: '#459AC9',
                }}>
                Chủ tàu chưa có tài khoản?
              </Text>
              <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                <Text
                  style={{
                    fontFamily: 'Inter-Bold',
                    fontSize: 14,
                    color: '#005F94',
                    textTransform: 'uppercase',
                    marginLeft: 5,
                  }}>
                  đăng ký ngay
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </ImageBackground>
      ) : (
        <ImageBackground
          source={IMAGES.background3}
          style={{flex: 1}}
          resizeMode="stretch">
          <StatusBar backgroundColor={'#EEEBFF'} />
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
                  color: '#2B13C0',
                }}>
                đăng nhập
              </Text>
            </View>
            <View
              style={{
                justifyContent: 'space-evenly',
                flexDirection: 'row',
              }}>
              <CheckBoxComponent3
                label={'Chủ tàu'}
                onPress={() => handleCheckboxChange('Chủ tàu')}
                isChecked={selectedUse === 'Chủ tàu'}
              />
              <CheckBoxComponent3
                label={'Cán bộ'}
                onPress={() => handleCheckboxChange('Cán bộ')}
                isChecked={selectedUse === 'Cán bộ'}
              />
            </View>
            <View
              style={{
                justifyContent: 'space-evenly',
                alignItems: 'center',
              }}>
              <TextInputComponent2
                placeholder={'Số điện thoại'}
                keyboardType={'numeric'}
              />
              <TextInputComponent2
                placeholder={'Mật khẩu'}
                secureTextEntry={true}
              />
            </View>
            <View
              style={{
                marginTop: 15,
                justifyContent: 'center',
                alignItems: 'flex-end',
                right: 35,
              }}>
              <CheckBoxComponent3
                label={'Lưu mật khẩu'}
                onPress={() => setSelectedSavePass(!selectedSavePass)}
                isChecked={selectedSavePass}
              />
            </View>
            <View style={{alignItems: 'center'}}>
              <View
                style={{
                  margin: 48,
                  width: 173,
                }}>
                <TouchableOpacityComponent3
                  content={'Đăng Nhập'}
                  color={'#fff'}
                  backgroundColor={'#2B13C0'}
                  onPress={() => {
                    navigation.navigate('TabBarCB');
                    navigation.reset({
                      index: 0,
                      routes: [{name: 'TabBarCB'}],
                    });
                  }}
                />
              </View>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                onPress={() => navigation.navigate('ForgotPass')}>
                <Text
                  style={{
                    fontFamily: 'Inter-Regular',
                    fontSize: 14,
                    color: '#2B13C0',
                  }}>
                  Quên mật khẩu?
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </ImageBackground>
      )}
    </>
  );
};

export default LoginScreen;
