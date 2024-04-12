import React, {useState} from 'react';
import {
  Image,
  Modal,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {ICONS} from '../assets/icons/icons';
import {IMAGES} from '../assets/images/images';
import {Calendar} from 'react-native-calendars';
import moment from 'moment';
import TouchableOpacityComponent3 from '../components/touchableOpacityComponent3';
import HeaderComponents from '../components/headerComponents';

const TextInputCusTom = ({
  lable,
  text,
  setText,
  keyboardType,
  right,
  onPress,
}) => {
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
          {right == 'clear' ? <ClearComponent setText={setText} /> : ''}
          {right == 'drop' ? <DropComponent setText={setText} /> : ''}
          {right == 'calendar' ? <IconCalendar onPress={onPress} /> : ''}
        </View>
      </View>
    </View>
  );
};
const IconCalendar = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View>
        <Image
          source={ICONS.Calendar}
          style={{width: 16, height: 16}}
          resizeMode="contain"
        />
      </View>
    </TouchableOpacity>
  );
};

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
const DropComponent = ({setText}) => {
  return (
    <TouchableOpacity>
      <View
        style={{
          padding: 1.6,
        }}>
        <Image
          source={ICONS.Drop}
          resizeMode="contain"
          style={{width: 6.36, height: 6.36}}
        />
      </View>
    </TouchableOpacity>
  );
};
const AddShipScreen3 = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const CalendarComponent = () => {
    return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#005F94',
            flex: 1,
            marginTop: 200,
            marginBottom: 220,
            borderRadius: 20,
          }}>
          <Calendar
            style={{
              width: 400,
              height: 350,
              borderRadius: 20,
            }}
            onDayPress={day => {
              const selectedDate = moment(day.dateString).format('DD/MM/YYYY');
              // if (isModalToday) {
              //     setToDate(selectedDate);
              // } else {
              //     setSince(selectedDate);
              // }
              // setIsModalToday(false);
            }}
          />

          <TouchableOpacity
            onPress={() => setModalVisible(!modalVisible)}
            style={{marginTop: 10}}>
            <View
              style={{
                backgroundColor: '#459AC9',
                padding: 12,
                width: 100,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 20,
              }}>
              <Text
                style={{
                  fontFamily: 'Inter_Regular',
                  fontSize: 12,
                  color: '#FFF',
                }}>
                Đóng
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </Modal>
    );
  };
  const [certificates, setCertificates] = useState({
    SoGPKT: '0034/2021',
    NgayCapGPKT: '03/02/2021',
    NgayHetHanGPKT: '17/1/2024',
    DonViCapGPKT: 'Chi cục thủy sản cà mau',
    SoGiayCHungNhan: '0375',
    NgayCapGCNATKT: '23/2/2022',
    NgayHetHanGCNATKT: '23/2/2024',
    DonViCapGCNATKT: 'Trung tâm đăng kiểm tàu cá cà mau',
    SoGiayDangKyTauCa: '020902',
    NgayCapSoGiayDKTauCa: '16/9/2023',
  });
  const Certificates = ({data}) => {
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
          lable={'Số giấy phép khai thác'}
          text={data.SoGPKT}
          right={'clear'}
        />

        <TextInputCusTom
          lable={'Ngày cấp GPKT'}
          text={data.NgayCapGPKT}
          right={'calendar'}
        />

        <TextInputCusTom
          lable={'Ngày hết hạn GPKT'}
          text={data.NgayHetHanGPKT}
          right={'calendar'}
        />

        <TextInputCusTom
          lable={'Đơn vị cấp GPKT'}
          text={data.DonViCapGPKT}
          right={'clear'}
        />

        <TextInputCusTom
          lable={'Số giấy chứng nhận an toàn kĩ thuật'}
          text={data.SoGiayCHungNhan}
          right={'clear'}
        />

        <TextInputCusTom
          lable={'Ngày cấp GCNATKT'}
          text={data.NgayCapGCNATKT}
          right={'calendar'}
        />

        <TextInputCusTom
          lable={'Ngày hết hạn CGNATKT'}
          text={data.NgayHetHanGCNATKT}
          right={'calendar'}
        />

        <TextInputCusTom
          lable={'Đơn vị cấp GCNATKT'}
          text={data.DonViCapGCNATKT}
          right={'clear'}
        />

        <TextInputCusTom
          lable={'Số giấy đăng kí tàu cá'}
          text={data.SoGiayDangKyTauCa}
          right={'clear'}
        />

        <TextInputCusTom
          lable={'Ngày cấp số giấy đăng kí tàu cá'}
          text={data.NgayCapSoGiayDKTauCa}
          right={'calendar'}
        />
      </View>
    );
  };

  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor={'#FFF'} />

      <HeaderComponents
        navigation={navigation}
        label={'Thông tin giấy chứng nhận'}
        colorIcon={'#333'}
      />
      <View style={{flex: 1, marginLeft: 12, marginRight: 12, marginTop: 17}}>
        <ScrollView>
          <Certificates data={certificates} navigation={navigation} />
          <CalendarComponent />
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: 35,
              marginTop: 20,
            }}>
            <View style={{width: 173}}>
              <TouchableOpacityComponent3
                content={'Tiếp tục'}
                color={'#005F94'}
                backgroundColor={'#FFF'}
                onPress={() => navigation.navigate('AddShipScreen4')}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default AddShipScreen3;
