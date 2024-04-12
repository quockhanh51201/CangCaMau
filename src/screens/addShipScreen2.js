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
const AddShipScreen2 = ({navigation}) => {
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
  const [specifications, setSpecifications] = useState({
    machinesNumber: '3',
    totalCapacity: '1700',
    Lmax: '1400',
    Ltk: '1400',
    Bmax: '240',
    Btk: '220',
    D: '140',
    d: '50',
    f: '0.3',
    material: 'Gỗ',
    totalCapacity2: '15.28',
    carryingCapacity: '11.84',
    speed: '120',
  });
  const Specifications = ({data}) => {
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
          lable={'Số lượng máy'}
          text={data.machinesNumber}
          right={'clear'}
        />

        <TextInputCusTom
          lable={'Tổng công suât'}
          text={data.totalCapacity}
          right={'clear'}
        />

        <TextInputCusTom
          lable={'Chiều dài Lmax(m)'}
          text={data.Lmax}
          right={'clear'}
        />

        <TextInputCusTom
          lable={'Chiều dài Ltk(m)'}
          text={data.Ltk}
          right={'clear'}
        />

        <TextInputCusTom
          lable={'Chiều rộng Bmax(m)'}
          text={data.Bmax}
          right={'clear'}
        />

        <TextInputCusTom
          lable={'Chiều rộng Btk(m)'}
          text={data.Btk}
          right={'clear'}
        />

        <TextInputCusTom
          lable={'Chiều cao mạn D(m)'}
          text={data.D}
          right={'clear'}
        />

        <TextInputCusTom
          lable={'Chiều chìm d(m)'}
          text={data.d}
          right={'clear'}
        />

        <TextInputCusTom lable={'Mạn khô f(m)'} text={data.f} right={'clear'} />

        <TextInputCusTom
          lable={'Vật liệu vỏ'}
          text={data.material}
          right={'clear'}
        />

        <TextInputCusTom
          lable={'Tổng dung tích'}
          text={data.totalCapacity2}
          right={'clear'}
        />

        <TextInputCusTom
          lable={'Sức chở tối đa (Tấn)'}
          text={data.carryingCapacity}
          right={'clear'}
        />

        <TextInputCusTom
          lable={'Tốc độ tự do (Hải lý/h'}
          text={data.speed}
          right={'clear'}
        />
      </View>
    );
  };

  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor={'#FFF'} />

      <HeaderComponents
        navigation={navigation}
        label={'Thông số kĩ thuật'}
        colorIcon={'#333'}
      />
      <View style={{flex: 1, marginLeft: 12, marginRight: 12, marginTop: 17}}>
        <ScrollView>
          <Specifications data={specifications} navigation={navigation} />
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
                onPress={() => navigation.navigate('AddShipScreen3')}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default AddShipScreen2;
