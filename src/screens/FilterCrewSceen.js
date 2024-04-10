import {
  Alert,
  Image,
  Modal,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import HeaderComponent3 from '../components/headerComponent3';
import RadioComponent from '../components/radioComponent';
import {cloneElement, useState} from 'react';
import {ICONS} from '../assets/icons/icons';
import moment from 'moment';
import TouchableOpacityComponent2 from '../components/touchableOpacityComponent2';

const FilterCrewScreen = ({navigation}) => {
  const [selectedApprove, setSelectedApprove] = useState('');
  const handleApproveRadioChange = label => {
    setSelectedApprove(label);
  };

  const [selectedStatus, setSelectedStatus] = useState('');
  const handleStatusRadioChange = label => {
    setSelectedStatus(label);
  };

  const [selectedTime, setSelectedTime] = useState('');
  const handleTimeRadioChange = label => {
    setSelectedTime(label);
  };

  return (
    <View
      style={{
        flex: 1,
      }}>
      <HeaderComponent3 label={'Lọc kết quả'} navigation={navigation} />
      <ScrollView>
        <Text
          style={{
            color: '#005F94',
            fontFamily: 'Roboto-Bold',
            fontSize: 16,
            marginLeft: 12,
            marginTop: 15,
          }}>
          Tình trạng duyệt đề nghị
        </Text>
        <View
          style={{
            backgroundColor: '#FFF',
            borderRadius: 6,
            marginLeft: 12,
            marginRight: 12,
            marginTop: 5,
          }}>
          <RadioComponent
            label={'Tất cả thuyền viên'}
            onPress={() => handleApproveRadioChange('Tất cả thuyền viên')}
            isChecked={selectedApprove === 'Tất cả thuyền viên'}
          />
          <RadioComponent
            label={'Thuyền trưởng'}
            onPress={() => handleApproveRadioChange('Thuyền trưởng')}
            isChecked={selectedApprove === 'Thuyền trưởng'}
          />
          <RadioComponent
            label={'Thuyền viên'}
            onPress={() => handleApproveRadioChange('Thuyền viên')}
            isChecked={selectedApprove === 'Thuyền viên'}
          />
          <RadioComponent
            label={'Tổ máy'}
            onPress={() => handleApproveRadioChange('Tổ máy')}
            isChecked={selectedApprove === 'Tổ máy'}
          />
          <RadioComponent
            label={'Khác'}
            onPress={() => handleApproveRadioChange('Khác')}
            isChecked={selectedApprove === 'Khác'}
          />
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
          content={'Đặt lại'}
          color={'#828282'}
          backgroundColor={'#FFF'}
        />
        <TouchableOpacityComponent2
          content={'Áp dụng'}
          color={'#FFF'}
          backgroundColor={'#005F94'}
        />
      </View>
    </View>
  );
};

export default FilterCrewScreen;
