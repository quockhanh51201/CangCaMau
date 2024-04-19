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

const InforCBScreen = ({navigation}) => {
  const [infor, setInfor] = useState({
    name: 'Phan Quốc Khánh',
    position: 'Đội trưởng đội rạch đốc',
    unit: 'IUU Rạch Đốc',
  });
  const Infor = ({data}) => {
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
        <TextInputCusTom lable={'Họ tên'} text={data.name} setText={setInfor} />
        <TextInputCusTom
          lable={'Chức vụ'}
          text={data.position}
          setText={setInfor}
        />
        <TextInputCusTom lable={'Đơn vị'} text={data.unit} setText={setInfor} />
      </View>
    );
  };
  return (
    <View
      style={{
        flex: 1,
      }}>
      <HeaderComponents
        label={'Thông tin cá nhân'}
        colorIcon={'#333'}
        navigation={navigation}
      />
      <View
        style={{
          borderRadius: 50,
          height: 120,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={ICONS.Profile}
          resizeMode="contain"
          style={{width: 80, height: 80}}
        />
      </View>
      <View style={{flex: 1, marginLeft: 12, marginRight: 12}}>
        <Infor data={infor} />
      </View>
    </View>
  );
};

export default InforCBScreen;
