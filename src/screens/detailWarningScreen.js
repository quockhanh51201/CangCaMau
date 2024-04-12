import React, {useState} from 'react';
import {ScrollView, StatusBar, Text, TextInput, View} from 'react-native';
import HeaderComponents from '../components/headerComponents';
import TouchableOpacityComponent3 from '../components/touchableOpacityComponent3';

const TextInputCusTom = ({lable, text, setText}) => {
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
      <TextInput
        placeholder="--"
        placeholderTextColor={'#333'}
        editable={false}
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
const DetailWarningScreen = ({navigation}) => {
  const [shipInfor, setShipInfor] = useState({
    registerNum: '00175',
    name: 'Thái học',
    registerLocation: 'Trong tỉnh',
    job: 'Câu mực',
    shortName: '',
    type: 'Tàu cá',
    mfg: '13/2/2023',
    shipbuildingSite: '',
    design: 'Dân gian',
    designAgency: '',
    registerPort: 'Sông đốc',
    registerAgency: 'Trung tâm đăng kiểm cà mau',
    expRegister: '22/12/2024',
    activityArea: 'Biển Việt Nam',
    managementUnit: 'Trạm kiểm soát bồ đề',
  });
  const ShipInfor = ({data}) => {
    return (
      <View
        style={{
          borderRadius: 6,
          backgroundColor: '#FFF',
          flex: 1,
          paddingLeft: 12,
          paddingRight: 12,
          marginTop: 5,
          paddingBottom: 20,
        }}>
        <TextInputCusTom
          lable={'Số đăng kí'}
          text={data.registerNum}
          placeholder={'--'}
        />

        <TextInputCusTom
          lable={'Tên tàu'}
          text={data.name}
          placeholder={'--'}
        />

        <TextInputCusTom
          lable={'Địa bàn đăng kí'}
          text={data.registerLocation}
          placeholder={'--'}
        />

        <TextInputCusTom
          lable={'Ngành nghề'}
          text={data.job}
          placeholder={'--'}
        />

        <TextInputCusTom
          lable={'Hô hiệu'}
          text={data.shortName}
          placeholder={'--'}
        />

        <TextInputCusTom
          lable={'Loại tàu'}
          text={data.type}
          placeholder={'--'}
        />

        <TextInputCusTom
          lable={'Ngày xuất xưởng'}
          text={data.mfg}
          placeholder={'--'}
        />

        <TextInputCusTom
          lable={'Nơi đóng'}
          text={data.shipbuildingSite}
          placeholder={'--'}
        />

        <TextInputCusTom
          lable={'Mẫu thiết kế'}
          text={data.design}
          placeholder={'--'}
        />

        <TextInputCusTom
          lable={'Cơ quan thiết kế'}
          text={data.designAgency}
          placeholder={'--'}
        />

        <TextInputCusTom
          lable={'Cảng biển đăng kí'}
          text={data.registerPort}
          placeholder={'--'}
        />

        <TextInputCusTom
          lable={'Cơ quan đăng kiểm'}
          text={data.registerAgency}
          placeholder={'--'}
        />

        <TextInputCusTom
          lable={'Ngày hết hạn đăng kiểm'}
          text={data.expRegister}
          placeholder={'--'}
        />

        <TextInputCusTom
          lable={'Khu vực hoạt động'}
          text={data.activityArea}
          placeholder={'--'}
        />

        <TextInputCusTom
          lable={'Đơn vị quản lý'}
          text={data.managementUnit}
          placeholder={'--'}
        />
      </View>
    );
  };
  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor={'#FFF'} />
      <HeaderComponents
        navigation={navigation}
        label={'Thông tin tàu'}
        colorIcon={'#333'}
      />
      <ScrollView>
        <View
          style={{
            borderRadius: 10,
            marginLeft: 12,
            marginRight: 12,
            marginTop: 10,
            backgroundColor: '#FFF',
            paddingLeft: 12,
            paddingRight: 12,
          }}>
          <ShipInfor data={shipInfor} />
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
            marginBottom: 15,
          }}>
          <View style={{width: 173}}>
            <TouchableOpacityComponent3
              content={'Đóng'}
              color={'#828282'}
              backgroundColor={'#FFF'}
              onPress={() => navigation.goBack()}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default DetailWarningScreen;
