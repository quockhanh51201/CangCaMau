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
const AddShipScreen4 = ({navigation}) => {
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
  const [locator, setLocator] = useState({
    NhaCungCap: 'Viettel',
    Seri: '0209 2001 0511 2001',
    TrangThai: 'Đang hoạt động',
    NgayDk: '16/09/2022',
  });
  const Locator = ({data}) => {
    return (
      <View
        style={{
          borderRadius: 6,
          backgroundColor: '#FFF',
          flex: 1,
          paddingLeft: 12,
          paddingRight: 12,
          marginTop: 20,
          paddingBottom: 20,
        }}>
        <TextInputCusTom
          lable={'Nhà cung cấp mạng'}
          text={data.NhaCungCap}
          right={'clear'}
        />

        <TextInputCusTom lable={'Seri'} text={data.Seri} right={'clear'} />

        <TextInputCusTom
          lable={'Trạng thái'}
          text={data.TrangThai}
          right={'clear'}
        />

        <TextInputCusTom
          lable={'Ngày đăng kí thiết bị'}
          text={data.NgayDk}
          right={'calendar'}
        />
      </View>
    );
  };
  const [file, setFile] = useState({
    GCNDKT: 'GCNDKT.png',
    GCNATKT: 'GCNATKT.png',
    TBDV: 'dingvi.png',
  });
  const File = ({data}) => {
    const TextInputFile = ({label, text, setText}) => {
      return (
        <View
          style={{
            height: 98,
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
            {label}
          </Text>
          <View>
            <TouchableOpacity>
              <View
                style={{
                  flexDirection: 'row',
                  backgroundColor: '#E5EFF4',
                  width: 74,
                  height: 20,
                  borderRadius: 2,
                  marginTop: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={ICONS.Plus}
                  resizeMode="contain"
                  style={{width: 12, height: 12, marginRight: 2}}
                />
                <Text
                  style={{
                    fontSize: 12,
                    fontFamily: 'Roboto-Regular',
                    color: '#005F94',
                  }}>
                  Upload
                </Text>
              </View>
            </TouchableOpacity>
            <TextInput
              style={{
                color: '#333',
                fontFamily: 'Roboto-Regular',
                fontSize: 16,
              }}
              onChangeText={setText}
              value={text}></TextInput>
          </View>
        </View>
      );
    };
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
        <TextInputFile
          label={'Giấy chứng nhận đăng kí tàu'}
          text={data.GCNDKT}
        />

        <TextInputFile
          label={'Giấy chứng nhận an toàn kỹ thuật'}
          text={data.GCNATKT}
        />

        <TextInputFile label={'Thiết bị định vi'} text={data.TBDV} />
      </View>
    );
  };
  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor={'#FFF'} />
      <HeaderComponents
        navigation={navigation}
        label={'Thông tin thiết bị định vị và FILE đính kèm'}
        colorIcon={'#333'}
      />
      <View style={{flex: 1, marginLeft: 12, marginRight: 12, marginTop: 17}}>
        <ScrollView>
          <File data={file} />
          <Locator data={locator} navigation={navigation} />
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
                onPress={() => navigation.navigate('AddShipScreen5')}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default AddShipScreen4;
