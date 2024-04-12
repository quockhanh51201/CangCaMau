import {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const CheckBoxComponent3 = ({label, onPress, isChecked}) => {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <TouchableOpacity onPress={onPress}>
        <View
          style={{
            width: 16,
            height: 16,
            borderRadius: 4,
            borderWidth: 1,
            borderColor: isChecked ? '#2B13C0' : '#8D84DF',
            marginRight: 8,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {isChecked && (
            <Text style={{fontSize: 10, fontWeight: 900, color: '#2B13C0'}}>
              ✔
            </Text>
          )}
        </View>
      </TouchableOpacity>
      <Text
        style={{
          color: isChecked ? '#2B13C0' : '#8D84DF',
        }}>
        {label}
      </Text>
    </View>
  );
};
// const CheckboxGroup = () => {
//     const [selectedOption, setSelectedOption] = useState('');

//     const handleCheckboxChange = (label) => {
//       setSelectedOption(label);
//     };

//     return (
//       <View>
//         <CheckboxComponent
//           label={'Chủ tàu'}
//           onPress={() => handleCheckboxChange('Chủ tàu')}
//           isChecked={selectedOption === 'Chủ tàu'}
//         />
//         <CheckboxComponent
//           label={'Cán bộ'}
//           onPress={() => handleCheckboxChange('Cán bộ')}
//           isChecked={selectedOption === 'Cán bộ'}
//         />
//       </View>
//     )
// }
export default CheckBoxComponent3;
