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
import {In, Out} from '../components/statusComponent';
import HeaderComponents from '../components/headerComponents';
import {ICONS} from '../assets/icons/icons';
import TouchableOpacityComponent3 from '../components/touchableOpacityComponent3';
import {useState} from 'react';
import {Calendar} from 'react-native-calendars';
import TouchableOpacityComponent2 from '../components/touchableOpacityComponent2';

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
const ReplyAskScreen = ({navigation}) => {
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
        label={'Phản hồi ý kiến'}
        colorIcon={'#333'}
        navigation={navigation}
      />
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
            paddingBottom: 20,
          }}>
          <TextInputCusTom lable={'Tên tàu'} text={'20260 - Thái học 2'} />
          <TextInputCusTom lable={'Nội dung ý kiến'} />
        </View>
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
            paddingBottom: 20,
          }}>
          <TextInputCusTom lable={'Nội dung phản hồi'} right={'Clear'} />
        </View>
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
            paddingBottom: 20,
            paddingTop: 20,
          }}>
          <Text
            style={{
              color: '#ADADAD',
              fontFamily: 'Roboto-Regular',
              fontSize: 12,
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
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity>
              <View
                style={{
                  paddingHorizontal: 5.51,
                  paddingVertical: 3,
                  paddingHorizontal: 11,
                  paddingVertical: 3,
                  flexDirection: 'row',
                  backgroundColor: '#3345CB1A',
                  alignItems: 'center',
                  marginTop: 10,
                  marginBottom: 10,
                  marginRight: 5,
                }}>
                <Text
                  style={{
                    fontFamily: 'Roboto-Regular',
                    color: '#3345CB',
                    fontSize: 12,
                    marginRight: 3,
                  }}>
                  anh.png
                </Text>
                <Image
                  source={ICONS.X}
                  resizeMode="contain"
                  style={{
                    width: 12,
                    height: 12,
                    marginTop: 3,
                  }}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View
                style={{
                  paddingHorizontal: 5.51,
                  paddingVertical: 3,
                  paddingHorizontal: 11,
                  paddingVertical: 3,
                  flexDirection: 'row',
                  backgroundColor: '#3345CB1A',
                  alignItems: 'center',
                  marginTop: 10,
                  marginBottom: 10,
                  marginRight: 5,
                }}>
                <Text
                  style={{
                    fontFamily: 'Roboto-Regular',
                    color: '#3345CB',
                    fontSize: 12,
                    marginRight: 3,
                  }}>
                  anh.png
                </Text>
                <Image
                  source={ICONS.X}
                  resizeMode="contain"
                  style={{
                    width: 12,
                    height: 12,
                    marginTop: 3,
                  }}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 29,

          marginBottom: 27,
          justifyContent: 'space-evenly',
        }}>
        <TouchableOpacityComponent2
          content={'Hủy'}
          color={'#828282'}
          backgroundColor={'#FFFFFF'}
        />
        <TouchableOpacityComponent2
          content={'Gửi phản hồi'}
          color={'#FFF'}
          backgroundColor={'#3345CB'}
          onPress={() => navigation.goBack()}
        />
      </View>
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
              Xác nhận thêm vị phạm
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

export default ReplyAskScreen;
