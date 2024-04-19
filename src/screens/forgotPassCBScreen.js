import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import HeaderComponents from '../components/headerComponents';
import {ICONS} from '../assets/icons/icons';
import {useState} from 'react';
import TouchableOpacityComponent3 from '../components/touchableOpacityComponent3';

const ClearComponent = ({setText}) => {
  const Clear = () => setText('');
  return (
    <TouchableOpacity onPress={Clear}>
      <View
        style={{
          padding: 1.6,
        }}>
        <Image
          source={ICONS.Clear}
          resizeMode="contain"
          style={{width: 6.36, height: 6.36}}
        />
      </View>
    </TouchableOpacity>
  );
};
const TextInputCusTom = ({lable, text, setText, keyboardType, onPress}) => {
  return (
    <View
      style={{
        height: 55,
        backgroundColor: '#FFF',
        borderBottomWidth: 1,
        borderColor: '#D6D6D6',
        marginTop: 15,
      }}>
      <Text
        style={{
          color: '#ADADAD',
          fontSize: 12,
          fontFamily: 'Roboto-Regular',
        }}>
        {lable}
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <TextInput
          placeholder="--"
          placeholderTextColor={'#333'}
          keyboardType={keyboardType}
          style={{
            color: '#333',
            fontFamily: 'Roboto-Regular',
            fontSize: 16,
          }}
          onChangeText={setText}
          value={text}></TextInput>
        <View>
          <ClearComponent setText={setText} />
        </View>
      </View>
    </View>
  );
};

const ForgotPassCBScreen = ({navigation}) => {
  const [pass, setPass] = useState({
    useName: '',
    passOld: '',
    newPass: '',
    reNewPass: '',
  });
  const Pass = ({data}) => {
    return (
      <View
        style={{
          borderRadius: 6,
          backgroundColor: '#FFF',
          paddingLeft: 12,
          paddingRight: 12,
          marginTop: 5,
          paddingBottom: 20,
        }}>
        <TextInputCusTom
          lable={'Tên đăng nhập'}
          text={data.name}
          setText={setPass}
        />
        <TextInputCusTom
          lable={'Nhập mật khẩu cũ'}
          text={data.position}
          setText={setPass}
        />
        <TextInputCusTom
          lable={'Nhập mật khẩu mới'}
          text={data.unit}
          setText={setPass}
        />
        <TextInputCusTom
          lable={'Nhập lại mật khẩu'}
          text={data.unit}
          setText={setPass}
        />
      </View>
    );
  };
  return (
    <View
      style={{
        flex: 1,
      }}>
      <HeaderComponents
        label={'Đổi mật khẩu'}
        colorIcon={'#333'}
        navigation={navigation}
      />
      <View style={{marginLeft: 12, marginRight: 12}}>
        <Pass data={pass} />
      </View>
      <View style={{alignItems: 'center', marginTop: 20}}>
        <View style={{width: 173}}>
          <TouchableOpacityComponent3
            backgroundColor={'#3345CB'}
            color={'#FFF'}
            content={'Đổi mật khẩu'}
            onPress={() => navigation.navigate('Login')}
          />
        </View>
      </View>
    </View>
  );
};

export default ForgotPassCBScreen;
