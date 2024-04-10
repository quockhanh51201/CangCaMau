import {
  Image,
  StatusBar,
  Text,
  Touchable,
  TouchableOpacity,
  TouchableOpacityComponent,
  View,
} from 'react-native';
import {ICONS} from '../assets/icons/icons';
import TouchableOpacityComponents from '../components/touchableOpacityComponents';

const ProfileScreen = ({navigation}) => {
  const Item = ({icon, text, onpress}) => {
    return (
      <TouchableOpacity onPress={onpress}>
        <View
          style={{
            backgroundColor: '#FFFFFF',
            height: 50,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image
            source={icon}
            resizeMode="contain"
            style={{
              flex: 1,
              width: 20,
              height: 20,
            }}
          />
          <Text
            style={{
              flex: 8,
              fontFamily: 'Roboto-Regular',
              fontSize: 14,
              color: '#333',
            }}>
            {text}
          </Text>
          <Image
            source={ICONS.Next}
            resizeMode="contain"
            style={{
              flex: 1,
            }}
          />
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor={'#459AC9'} />
      <View
        style={{
          backgroundColor: '#459AC9',
          alignItems: 'center',
          height: 41,
        }}>
        <Text
          style={{
            fontFamily: 'Roboto-Bold',
            fontSize: 16,
            color: '#FFFFFF',
          }}>
          Cá Nhân
        </Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('InforScreen')}>
        <View
          style={{
            height: 87,
            marginTop: 5,
            backgroundColor: '#FFFFFF',
            flexDirection: 'row',
          }}>
          <View style={{flexDirection: 'row', flex: 9}}>
            <View
              style={{
                width: 48,
                height: 48,
                marginLeft: 12,
                marginTop: 15,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 48,
              }}>
              <Image
                source={ICONS.Profile}
                resizeMode="contain"
                style={{height: 48, width: 48}}
              />
            </View>
            <View
              style={{
                marginLeft: 5,
              }}>
              <Text
                style={{
                  fontFamily: 'Roboto-Bold',
                  fontSize: 16,
                  color: '#333333',
                }}>
                Phan Quốc Khánh
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  fontFamily: 'Roboto-Regular',
                  color: '#ADADAD',
                }}>
                0123456789
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  fontFamily: 'Roboto-Regular',
                  color: '#ADADAD',
                }}>
                Thuyền trưởng
              </Text>
            </View>
          </View>

          {/* ===== */}
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Image source={ICONS.Next} />
          </View>
        </View>
      </TouchableOpacity>

      <View
        style={{
          marginTop: 5,
        }}>
        <TouchableOpacity>
          <View
            style={{
              backgroundColor: '#FFFFFF',
              height: 50,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image
              source={ICONS.Version}
              resizeMode="contain"
              style={{
                flex: 1,
                width: 20,
                height: 20,
              }}
            />
            <Text
              style={{
                flex: 8,
                fontFamily: 'Roboto-Regular',
                fontSize: 14,
                color: '#333',
              }}>
              Phiên bản
            </Text>
            <Text
              style={{
                flex: 2,
                fontFamily: 'Roboto-Regular',
                fontSize: 14,
                color: '#333',
              }}>
              1.1.1.1
            </Text>
          </View>
        </TouchableOpacity>
        <Item icon={ICONS.Doc} text={'Giới thiệu và hướng dẫn'} />
        <Item icon={ICONS.Setting} text={'Cài đặt'} />
        <Item
          icon={ICONS.Lock}
          text={'Đổi mật khẩu'}
          onpress={() => {
            navigation.navigate('ChangePassScreen');
          }}
        />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <View
          style={{
            backgroundColor: '#FFFFFF',
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: 12,
            marginRight: 12,
            marginTop: 20,
            height: 40,
            borderRadius: 6,
          }}>
          <Text
            style={{
              color: '#005F94',
              fontFamily: 'Roboto-Bold',
              fontSize: 14,
            }}>
            Đăng xuất
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;
