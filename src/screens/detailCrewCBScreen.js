import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  View,
} from 'react-native';
import HeaderComponents from '../components/headerComponents';
import {ICONS} from '../assets/icons/icons';
import {IMAGES} from '../assets/images/images';
import TouchableOpacityComponent3 from '../components/touchableOpacityComponent3';

const TextInputCusTom = ({lable, text, setText, keyboardType}) => {
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
        {text}
        {lable}
      </Text>
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
    </View>
  );
};
const DetailCrewCBScreen = ({navigation}) => {
  const [name, setName] = useState('Phan Quốc Khánh');
  const [cmnd, setCmnd] = useState('');
  const [birthDay, setBirthDay] = useState('');
  const [address, setAddress] = useState('');
  const [ward, setWard] = useState('');
  const [city, setCity] = useState('');
  const [district, setDistric] = useState('');
  const [phone, setPhone] = useState('');
  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor={'#FFF'} />
      <HeaderComponents
        navigation={navigation}
        label={'Thông tin thuyền viên'}
        colorIcon={'#333'}
      />
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Image
          source={IMAGES.avt}
          resizeMode="contain"
          style={{width: 80, height: 80}}
        />
        <View
          style={{
            width: 66,
            height: 16,
            borderRadius: 2,
            backgroundColor: '#4DBFFF',
            alignItems: 'center',
            marginTop: 7,
          }}>
          <Text
            style={{fontFamily: 'Inter-Regular', fontSize: 10, color: '#FFF'}}>
            Rạng đông 1
          </Text>
        </View>
      </View>
      <ScrollView>
        <View
          style={{
            flex: 1,
            borderRadius: 10,
            marginLeft: 12,
            marginRight: 12,
            marginTop: 10,
            backgroundColor: '#FFF',
            paddingLeft: 12,
            paddingRight: 12,
          }}>
          <TextInputCusTom text={name} setText={setName} />
          <TextInputCusTom lable={'CMND/CCCD'} setText={setCmnd} />
          <TextInputCusTom lable={'Ngày sinh'} setText={setBirthDay} />
          <TextInputCusTom lable={'Địa chỉ'} setText={setAddress} />
          <TextInputCusTom lable={'Phường/Xã'} setText={setWard} />
          <TextInputCusTom lable={'Quận/Huyện'} setText={setDistric} />
          <TextInputCusTom lable={'Tỉnh/Thành phố'} setText={setCity} />
          <TextInputCusTom lable={'Số điện thoại'} setText={setPhone} />
        </View>
        <View
          style={{
            flex: 1,
            borderRadius: 10,
            marginLeft: 12,
            marginRight: 12,
            marginTop: 20,
            backgroundColor: '#FFF',
            paddingLeft: 12,
            paddingRight: 12,
          }}>
          <TextInputCusTom lable={'Giấy chứng nhân chuyên môn'} />
          <TextInputCusTom lable={'Cơ quan cấp'} />
          <TextInputCusTom lable={'Ngày cấp'} />
        </View>
        <View style={{marginTop: 20, marginBottom: 30, alignItems: 'center'}}>
          <View style={{width: 173}}>
            <TouchableOpacityComponent3
              content={'Đóng'}
              backgroundColor={'#FFF'}
              color={'#828282'}
              onPress={() => navigation.goBack()}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default DetailCrewCBScreen;
