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
import HeaderComponents from '../components/headerComponents';
import TouchableOpacityComponent3 from '../components/touchableOpacityComponent3';
import {IMAGES} from '../assets/images/images';
import {ICONS} from '../assets/icons/icons';
import {Calendar} from 'react-native-calendars';
import moment from 'moment';

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
          {right == 'Clear' ? <ClearComponent setText={setText} /> : ''}
          {right == 'Drop' ? <DropComponent setText={setText} /> : ''}
          {right == 'Calendar' ? <IconCalendar onPress={onPress} /> : ''}
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
const CrewInformationScreen = ({navigation}) => {
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
  return (
    <View style={{flex: 1}}>
      <HeaderComponents
        label={'Thông tin thuyền viên'}
        navigation={navigation}
        colorIcon={'#333'}
      />
      <StatusBar backgroundColor={'rgb(250,250,250)'} />
      <ScrollView>
        <View style={{flex: 1, marginLeft: 12, marginRight: 12}}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Image
              source={IMAGES.avt}
              resizeMode="contain"
              style={{width: 80, height: 80}}
            />
          </View>
          <View
            style={{
              borderRadius: 6,
              backgroundColor: '#FFF',
              marginTop: 20,
              paddingLeft: 12,
              paddingRight: 12,
              paddingBottom: 30,
            }}>
            <TextInputCusTom lable={'Họ và tên'} right={'Clear'} />
            <TextInputCusTom lable={'CCCD/CMND'} right={'Clear'} />
            <TextInputCusTom
              lable={'Ngày sinh'}
              right={'Calendar'}
              onPress={() => setModalVisible(!modalVisible)}
            />
            <TextInputCusTom lable={'Địa chỉ'} right={'Clear'} />
            <TextInputCusTom lable={'Phường/xã'} />
            <TextInputCusTom lable={'Quận/Huyện'} right={'Drop'} />
            <TextInputCusTom lable={'Tỉnh/Thành phố'} right={'Drop'} />
            <TextInputCusTom lable={'Số điện thoại'} />
            <CalendarComponent />
          </View>
          <View
            style={{
              borderRadius: 6,
              backgroundColor: '#FFF',
              marginTop: 20,
              paddingLeft: 12,
              paddingRight: 12,
              paddingBottom: 30,
            }}>
            <TextInputCusTom
              lable={'Giấy chứng nhận chuyên môn'}
              right={'Clear'}
            />
            <TextInputCusTom lable={'Cơ quan cấp'} right={'Clear'} />
            <TextInputCusTom
              lable={'Ngày cấp'}
              right={'Calendar'}
              onPress={() => setModalVisible(!modalVisible)}
            />
          </View>
          {/* ========= */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: 20,
              marginBottom: 37,
            }}>
            <View style={{width: 173}}>
              <TouchableOpacityComponent3
                content={'Đóng'}
                color={'#828282'}
                backgroundColor={'#FFF'}
                onPress={() => navigation.goBack()}
              />
            </View>
            <View style={{width: 173}}>
              <TouchableOpacityComponent3
                content={'Cập nhật'}
                color={'#FFF'}
                backgroundColor={'#005F94'}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default CrewInformationScreen;
