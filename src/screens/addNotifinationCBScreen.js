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
import CheckBoxComponent2 from '../components/checkBoxComponent2';
import {ICONS} from '../assets/icons/icons';
import {Calendar} from 'react-native-calendars';

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
          alignItems: 'center',
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
        <View style={{}}>
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
const AddNotifinationCBScreen = ({navigation}) => {
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
      <StatusBar backgroundColor={'transparent'} />
      <HeaderComponents
        navigation={navigation}
        label={'Thêm mới thông báo'}
        colorIcon={'#333'}
      />
      <View style={{paddingHorizontal: 12, flex: 1}}>
        <TouchableOpacity>
          <View
            style={{
              backgroundColor: '#fff',
              borderRadius: 6,
              paddingHorizontal: 12,
              paddingVertical: 13,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                fontFamily: 'Roboto-Regular',
                fontSize: 16,
                color: '#333',
              }}>
              Chọn loại thông báo
            </Text>
            <Image
              source={ICONS.Drop}
              style={{width: 10, height: 6}}
              resizeMode="contain"
            />
          </View>
        </TouchableOpacity>
        <View
          style={{
            backgroundColor: '#fff',
            borderRadius: 6,
            paddingHorizontal: 12,
            paddingVertical: 13,
            marginTop: 10,
          }}>
          <TextInputCusTom lable={'Nội dung thông báo'} right={'Clear'} />
        </View>
        <View
          style={{
            backgroundColor: '#fff',
            borderRadius: 6,
            paddingHorizontal: 12,
            paddingVertical: 13,
            marginTop: 10,
          }}>
          <Text
            style={{
              fontFamily: 'Roboto-Regular',
              fontSize: 12,
              color: '#ADADAD',
            }}>
            File đính kèm
          </Text>
          <TouchableOpacity>
            <View
              style={{
                width: 74,
                height: 20,
                paddingHorizontal: 11,
                paddingVertical: 3,
                flexDirection: 'row',
                backgroundColor: '#3345CB1A',
                alignItems: 'center',
                marginTop: 10,
                marginBottom: 10,
              }}>
              <Image
                source={ICONS.Add}
                resizeMode="contain"
                style={{
                  width: 12,
                  height: 12,
                  marginRight: 3,
                  marginTop: 3,
                }}
              />
              <Text
                style={{
                  fontFamily: 'Roboto-Regular',
                  color: '#3345CB',
                  fontSize: 12,
                }}>
                Upload
              </Text>
            </View>
          </TouchableOpacity>
          <Text
            style={{
              fontFamily: 'Roboto-Regular',
              color: '#333',
              fontSize: 12,
            }}>
            chungNhan.png
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            position: 'absolute',
            bottom: 25,
            left: 12,
          }}>
          <View style={{flex: 1, marginRight: 2.5}}>
            <TouchableOpacityComponent3
              content={'Đóng'}
              color={'#828282'}
              backgroundColor={'#FFF'}
              onPress={() => navigation.goBack()}
            />
          </View>
          <View style={{flex: 1, marginLeft: 2.5}}>
            <TouchableOpacityComponent3
              content={'Tạo mới'}
              color={'#FFF'}
              backgroundColor={'#3345CB'}
              onPress={() => navigation.goBack()}
            />
          </View>
        </View>
      </View>
      <CalendarComponent />
    </View>
  );
};

export default AddNotifinationCBScreen;
