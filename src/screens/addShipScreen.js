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
import HeaderComponent5 from '../components/headerComponent5';
import TouchableOpacityComponent3 from '../components/touchableOpacityComponent3';

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
const ShipInfor = ({data, navigation}) => {
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
        right={'clear'}
      />

      <TextInputCusTom lable={'Tên tàu'} text={data.name} placeholder={'--'} />

      <TextInputCusTom
        lable={'Địa bàn đăng kí'}
        text={data.registerLocation}
        right={'clear'}
      />

      <TextInputCusTom lable={'Ngành nghề'} text={data.job} right={'drop'} />

      <TextInputCusTom lable={'Hô hiệu'} text={data.shortName} />

      <TextInputCusTom lable={'Loại tàu'} text={data.type} right={'drop'} />

      <TextInputCusTom
        lable={'Ngày xuất xưởng'}
        text={data.mfg}
        right={'calendar'}
        onPress={() => setModalVisible(!modalVisible)}
      />

      <TextInputCusTom
        lable={'Nơi đóng'}
        text={data.shipbuildingSite}
        right={'clear'}
      />

      <TextInputCusTom
        lable={'Mẫu thiết kế'}
        text={data.design}
        right={'clear'}
      />

      <TextInputCusTom
        lable={'Cơ quan thiết kế'}
        text={data.designAgency}
        right={'clear'}
      />

      <TextInputCusTom
        lable={'Cảng biển đăng kí'}
        text={data.registerPort}
        right={'drop'}
      />

      <TextInputCusTom
        lable={'Cơ quan đăng kiểm'}
        text={data.registerAgency}
        right={'clear'}
      />

      <TextInputCusTom
        lable={'Ngày hết hạn đăng kiểm'}
        text={data.expRegister}
        right={'calendar'}
      />

      <TextInputCusTom
        lable={'Khu vực hoạt động'}
        text={data.activityArea}
        right={'clear'}
      />

      <TextInputCusTom
        lable={'Đơn vị quản lý'}
        text={data.managementUnit}
        right={'drop'}
      />
    </View>
  );
};
const AddShipScreen = ({navigation}) => {
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
  const ShipInfor = ({data, navigation}) => {
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
          right={'clear'}
        />

        <TextInputCusTom
          lable={'Tên tàu'}
          text={data.name}
          placeholder={'--'}
        />

        <TextInputCusTom
          lable={'Địa bàn đăng kí'}
          text={data.registerLocation}
          right={'clear'}
        />

        <TextInputCusTom lable={'Ngành nghề'} text={data.job} right={'drop'} />

        <TextInputCusTom lable={'Hô hiệu'} text={data.shortName} />

        <TextInputCusTom lable={'Loại tàu'} text={data.type} right={'drop'} />

        <TextInputCusTom
          lable={'Ngày xuất xưởng'}
          text={data.mfg}
          right={'calendar'}
          onPress={() => setModalVisible(!modalVisible)}
        />

        <TextInputCusTom
          lable={'Nơi đóng'}
          text={data.shipbuildingSite}
          right={'clear'}
        />

        <TextInputCusTom
          lable={'Mẫu thiết kế'}
          text={data.design}
          right={'clear'}
        />

        <TextInputCusTom
          lable={'Cơ quan thiết kế'}
          text={data.designAgency}
          right={'clear'}
        />

        <TextInputCusTom
          lable={'Cảng biển đăng kí'}
          text={data.registerPort}
          right={'drop'}
        />

        <TextInputCusTom
          lable={'Cơ quan đăng kiểm'}
          text={data.registerAgency}
          right={'clear'}
        />

        <TextInputCusTom
          lable={'Ngày hết hạn đăng kiểm'}
          text={data.expRegister}
          right={'calendar'}
          onPress={() => setModalVisible(!modalVisible)}
        />

        <TextInputCusTom
          lable={'Khu vực hoạt động'}
          text={data.activityArea}
          right={'clear'}
        />

        <TextInputCusTom
          lable={'Đơn vị quản lý'}
          text={data.managementUnit}
          right={'drop'}
        />
      </View>
    );
  };
  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor={'#FFF'} />
      <HeaderComponent5 navigation={navigation} label={'Thông tin tàu'} />
      <View style={{flex: 1, marginLeft: 12, marginRight: 12, marginTop: 17}}>
        <ScrollView>
          <ShipInfor data={shipInfor} navigation={navigation} />
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
                onPress={() => navigation.navigate('AddShipScreen2')}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default AddShipScreen;
