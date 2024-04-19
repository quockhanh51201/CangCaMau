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
const AddAccidentCBScreen = ({navigation}) => {
  const [name, setName] = useState('0602 -Thái học 3');
  const [time, setTime] = useState('20/2/2022 10:30');
  const [LyDo, setLyDo] = useState('');
  const [chet, setChet] = useState('');
  const [matTich, setMatTich] = useState('');
  const [biThuong, setBiThuong] = useState('03');

  const [xuLy, setXuLy] = useState('');
  const [note, setNote] = useState('');
  const [chim, setChim] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisiblePopup, setModalVisiblePopUp] = useState(false);

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
        label={'Thêm mới tai nạn'}
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
            paddingBottom: 20,
          }}>
          <TextInputCusTom
            lable={'Tên tàu'}
            text={name}
            setText={setName}
            right={'Drop'}
          />
          <TextInputCusTom
            lable={'Thời gian tai nạn'}
            text={time}
            setText={setTime}
            right={'Calendar'}
            onPress={() => setModalVisible(!modalVisible)}
          />
          <TextInputCusTom
            lable={'Nguyên nhân'}
            text={LyDo}
            setText={setLyDo}
            right={'Clear'}
          />
        </View>
        <Text
          style={{
            color: '#005F94',
            fontFamily: 'Roboto-Bold',
            fontSize: 16,
            marginLeft: 12,
            marginTop: 15,
          }}>
          Thiệt hại về người
        </Text>
        <View
          style={{
            borderRadius: 10,
            marginLeft: 12,
            marginRight: 12,
            marginTop: 10,
            backgroundColor: '#FFF',
            paddingLeft: 12,
            paddingRight: 12,
            paddingBottom: 20,
          }}>
          <TextInputCusTom
            lable={'Số người chết'}
            text={chet}
            setText={setChet}
            right={'Clear'}
          />
          <TextInputCusTom
            lable={'Số người mất tích'}
            text={matTich}
            setText={setMatTich}
            right={'Clear'}
          />
          <TextInputCusTom
            lable={'Số người bị thương'}
            text={biThuong}
            setText={setBiThuong}
            right={'Clear'}
          />
        </View>
        <Text
          style={{
            color: '#005F94',
            fontFamily: 'Roboto-Bold',
            fontSize: 16,
            marginLeft: 12,
            marginTop: 15,
          }}>
          Thiệt hại về phương tiện
        </Text>
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
          <View
            style={{
              height: 114,
              backgroundColor: '#FFF',

              marginTop: 15,
            }}>
            <CheckBoxComponent2
              label={'Chìm'}
              isChecked={true}
              color={'#333'}
            />
            <TextInputCusTom lable={'Thông tin chìm'} right={'Clear'} />
          </View>
        </View>
        <View
          style={{
            borderRadius: 10,
            marginLeft: 12,
            marginRight: 12,
            marginTop: 10,
            backgroundColor: '#FFF',
            paddingLeft: 12,
            paddingRight: 12,
            paddingVertical: 15,
          }}>
          <View
            style={{
              backgroundColor: '#FFF',
            }}>
            <CheckBoxComponent2
              label={'Chìm'}
              isChecked={true}
              color={'#333'}
            />
          </View>
        </View>
        <View
          style={{
            borderRadius: 10,
            marginLeft: 12,
            marginRight: 12,
            marginTop: 10,
            backgroundColor: '#FFF',
            paddingLeft: 12,
            paddingRight: 12,
            paddingVertical: 15,
          }}>
          <View
            style={{
              backgroundColor: '#FFF',
            }}>
            <CheckBoxComponent2
              label={'Chìm'}
              isChecked={true}
              color={'#333'}
            />
          </View>
        </View>
        <Text
          style={{
            color: '#005F94',
            fontFamily: 'Roboto-Bold',
            fontSize: 16,
            marginLeft: 12,
            marginTop: 15,
          }}>
          Đơn vị xử lý
        </Text>
        <View
          style={{
            borderRadius: 10,
            marginLeft: 12,
            marginRight: 12,
            marginTop: 10,
            backgroundColor: '#FFF',
            paddingLeft: 12,
            paddingRight: 12,
            paddingBottom: 20,
          }}>
          <TextInputCusTom
            lable={'Đơn vị xử lý'}
            text={xuLy}
            setText={setXuLy}
            right={'Clear'}
          />
          <TextInputCusTom
            lable={'Ghi chú'}
            text={note}
            setText={setNote}
            right={'Clear'}
          />
        </View>
        <View
          style={{
            borderRadius: 10,
            marginLeft: 12,
            marginRight: 12,
            marginTop: 10,
            backgroundColor: '#FFF',
            paddingLeft: 12,
            paddingRight: 12,
            paddingVertical: 15,
          }}>
          <Text
            style={{
              color: '#3345CB',
              fontFamily: 'Roboto-Regular',
              fontSize: 16,
            }}>
            Người tạo
          </Text>
          <View style={{flexDirection: 'row', marginTop: 10}}>
            <Image
              source={IMAGES.avt}
              resizeMode="contain"
              style={{width: 48, height: 48, marginRight: 10}}
            />
            <View>
              <Text
                style={{
                  color: '#333',
                  fontFamily: 'Roboto-Bold',
                  fontSize: 16,
                }}>
                Lê văn kiển
              </Text>
              <Text
                style={{
                  color: '#ADADAD',
                  fontFamily: 'Roboto-Regular',
                  fontSize: 12,
                }}>
                Chuyên viên đội rạch đốc
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            marginRight: 12,
            marginLeft: 12,
            marginTop: 17,
            marginBottom: 15,
            flexDirection: 'row',
          }}>
          <View style={{flex: 1, marginRight: 2.5}}>
            <TouchableOpacityComponent3
              content={'Đóng'}
              color={'#828282'}
              backgroundColor={'#FFF'}
              onPress={() => navigation.navigate('InScreen')}
            />
          </View>
          <View style={{flex: 1, marginLeft: 2.5}}>
            <TouchableOpacityComponent3
              content={'Tạo mới'}
              color={'#FFF'}
              backgroundColor={'#3345CB'}
              onPress={() => setModalVisiblePopUp(true)}
            />
          </View>
        </View>
      </ScrollView>
      <CalendarComponent />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisiblePopup}
        onRequestClose={() => {
          setModalVisiblePopUp(!modalVisiblePopup);
        }}>
        <View
          style={{
            backgroundColor: '#626262',
            flex: 1,
          }}>
          <View
            style={{
              borderTopLeftRadius: 15,
              borderTopRightRadius: 15,
              backgroundColor: '#FFF',
              position: 'absolute',
              bottom: 0,
              alignItems: 'center',
              width: '100%',
            }}>
            <View
              style={{
                marginTop: 7,
                height: 3,
                width: 60,
                backgroundColor: '#BDBDBD',
                borderRadius: 2,
              }}
            />
            <Text
              style={{
                color: '#333',
                fontFamily: 'Roboto-Bold',
                fontSize: 18,
                marginTop: 30,
              }}>
              Xác nhận thêm tai nạn
            </Text>
            <Text
              style={{
                color: '#333',
                fontFamily: 'Roboto-Regular',
                fontSize: 16,
                marginTop: 20,
                textAlign: 'center',
              }}>
              Sau khi yêu cầu thêm mới được gửi, bạn sẽ không được chỉnh sửa
              thông tin trong yêu cầu, bạn có chắc chắn gửi đi hay không?
            </Text>
            <View
              style={{
                marginTop: 50,
                marginRight: 12,
                marginLeft: 12,
                marginBottom: 37,
                flexDirection: 'row',
              }}>
              <View style={{flex: 1, marginRight: 2.5}}>
                <TouchableOpacityComponent3
                  content={'Đóng'}
                  color={'#828282'}
                  backgroundColor={'#F5F5F5'}
                  onPress={() => setModalVisiblePopUp(false)}
                />
              </View>
              <View style={{flex: 1, marginLeft: 2.5}}>
                <TouchableOpacityComponent3
                  content={'Xác nhận'}
                  color={'#FFF'}
                  backgroundColor={'#3345CB'}
                />
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default AddAccidentCBScreen;
