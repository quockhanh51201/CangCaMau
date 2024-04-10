import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import HeaderComponents from '../components/headerComponents';
import CheckBoxComponent2 from '../components/checkBoxComponent2';
import {ICONS} from '../assets/icons/icons';
import {Out} from '../components/statusComponent';
import TouchableOpacityComponent3 from '../components/touchableOpacityComponent3';

const TextInputCusTom = ({lable, placeholder, text, setText, keyboardType}) => {
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
        {text}
        {lable}
      </Text>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={'#333'}
        keyboardType={keyboardType}
        style={{
          color: '#333',
          fontFamily: 'Roboto-Regular',
          fontSize: 16,
        }}
        onChangeText={setText}
        value={text}
        editable={false}></TextInput>
    </View>
  );
};
const Title = ({title, icon}) => {
  return (
    <View
      style={{
        marginTop: 10,
        marginBottom: 5,
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <Text
        style={{
          color: '#005F94',
          fontFamily: 'Roboto-Bold',
          fontSize: 16,
          flex: 0.99,
        }}>
        {title}
      </Text>
      {icon ? (
        <Image
          source={ICONS.Drop}
          resizeMode="contain"
          style={{width: 8, height: 6, tintColor: '#005F94'}}
        />
      ) : (
        ''
      )}
    </View>
  );
};
const TitleChild = ({title}) => {
  return (
    <View style={{marginTop: 10, marginBottom: 5}}>
      <Text
        style={{color: '#005F94', fontFamily: 'Roboto-Regular', fontSize: 16}}>
        {title}
      </Text>
    </View>
  );
};
const MinutesCheckOutScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, marginLeft: 12, marginRight: 12}}>
      <HeaderComponents
        label={'Biên bản kiểm tra tàu cá xuất Bến'}
        colorIcon={'#333'}
        navigation={navigation}
      />
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text
          style={{fontFamily: 'Roboto-Bold', fontSize: 14, color: '#828282'}}>
          (16:19, 26/10/2022)
        </Text>
      </View>
      <ScrollView>
        <View style={{marginTop: 20}}>
          <CheckBoxComponent2
            label={'Xác nhận bàn giao biên bản cho Biên phòng'}
            isChecked={true}
            color={'#005F94'}
          />
        </View>
        {/* ============ */}
        <Title title={'Vị trí'} icon={false} />
        <View
          style={{
            borderRadius: 6,
            height: 70,
            backgroundColor: '#FFF',
            flexDirection: 'row',
          }}>
          <View
            style={{
              marginTop: 15,
              marginLeft: 11,
              marginBottom: 15,
              marginRight: 10,
            }}>
            <Image
              source={ICONS.Canh}
              resizeMode="contain"
              style={{height: 40, width: 40}}
            />
          </View>
          <View style={{flex: 1}}>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 15,
                justifyContent: 'space-between',
                flex: 1,
              }}>
              <View style={{flex: 10, flexDirection: 'row'}}>
                <Text
                  style={{
                    fontFamily: 'Roboto-Bold',
                    fontSize: 16,
                    color: '#333',
                    flex: 5,
                  }}>
                  Bến bạc đá
                </Text>
                <View style={{flex: 10, marginTop: 3}}>
                  <Text
                    style={{
                      color: '#005F94',
                      fontSize: 12,
                      fontFamily: 'Roboto-regular',
                    }}>
                    X0165/1022
                  </Text>
                </View>
              </View>
              <View style={{marginTop: 5, flex: 1}}>
                <Image
                  source={ICONS.Next}
                  resizeMode="contain"
                  style={{height: 12, width: 12}}
                />
              </View>
            </View>
            <View style={{flex: 1}}>
              <Text
                style={{
                  fontFamily: 'Roboto-Regular',
                  fontSize: 12,
                  color: '#ADADAD',
                }}>
                Khóm 6B, Trần Văn Thời, Cà Mau
              </Text>
            </View>
          </View>
        </View>
        {/* ========== */}
        <Title
          title={
            '1. Đơn vị kiểm tra: Văn phòng đại diện thanh tra, kiểm tra, kiểm soát tàu cá'
          }
          icon={true}
        />
        <View
          style={{
            borderRadius: 6,
            backgroundColor: '#FFF',
            flex: 1,
            paddingLeft: 12,
            paddingRight: 12,
            marginTop: 5,
          }}>
          <View style={{paddingBottom: 15, paddingTop: 15}}>
            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  marginRight: 10,
                }}>
                <Image
                  source={ICONS.Profile}
                  resizeMode="contain"
                  style={{height: 48, width: 48}}
                />
              </View>
              <View>
                <View>
                  <Text
                    style={{
                      fontFamily: 'Roboto-Bold',
                      fontSize: 16,
                      color: '#333',
                    }}>
                    Phan Quốc Khánh
                  </Text>
                </View>
                <View style={{marginTop: 5}}>
                  <Text
                    style={{
                      fontFamily: 'Roboto-Regular',
                      fontSize: 12,
                      color: '#ADADAD',
                      paddingRight: 12,
                    }}>
                    Đội trưởng đội rạch đốc
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            borderRadius: 6,
            backgroundColor: '#FFF',
            flex: 1,
            paddingLeft: 12,
            paddingRight: 12,
            marginTop: 5,
          }}>
          <View style={{paddingBottom: 15, paddingTop: 15}}>
            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  marginRight: 10,
                }}>
                <Image
                  source={ICONS.Profile}
                  resizeMode="contain"
                  style={{height: 48, width: 48}}
                />
              </View>
              <View>
                <View>
                  <Text
                    style={{
                      fontFamily: 'Roboto-Bold',
                      fontSize: 16,
                      color: '#333',
                    }}>
                    Phan Quốc Khánh
                  </Text>
                </View>
                <View style={{marginTop: 5}}>
                  <Text
                    style={{
                      fontFamily: 'Roboto-Regular',
                      fontSize: 12,
                      color: '#ADADAD',
                      paddingRight: 12,
                    }}>
                    Đội trưởng đội rạch đốc
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        {/* ====== */}
        <Title title={'2. Kiểm tra tàu'} icon={true} />
        <TitleChild title={'2.1 Tàu cá'} />
        <TouchableOpacity>
          <View
            style={{
              borderRadius: 6,
              height: 87,
              backgroundColor: '#FFF',
              flexDirection: 'row',
            }}>
            <View
              style={{
                marginTop: 15,
                marginLeft: 12,
                marginBottom: 32,
                marginRight: 10,
              }}>
              <Image
                source={ICONS.Tau}
                resizeMode="contain"
                style={{height: 40, width: 40}}
              />
            </View>
            <View style={{flex: 1}}>
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 15,
                  justifyContent: 'space-between',
                  flex: 1,
                }}>
                <View style={{flex: 10, flexDirection: 'row'}}>
                  <Text
                    style={{
                      fontFamily: 'Roboto-Bold',
                      fontSize: 16,
                      color: '#333',
                      flex: 5,
                    }}>
                    00776 - Rạng đông 2
                  </Text>
                  <View style={{flex: 5, marginTop: 3}}>
                    <Out />
                  </View>
                </View>
                <View style={{marginTop: 5, flex: 1}}>
                  <Image
                    source={ICONS.Next}
                    resizeMode="contain"
                    style={{height: 12, width: 12}}
                  />
                </View>
              </View>
              <View style={{flex: 2}}>
                <Text
                  style={{
                    fontFamily: 'Roboto-Regular',
                    fontSize: 12,
                    marginBottom: 5,
                    color: '#ADADAD',
                  }}>
                  Loại: khai thác thủy sản
                </Text>
                <Text
                  style={{
                    fontFamily: 'Roboto-Regular',
                    fontSize: 12,
                    color: '#ADADAD',
                  }}>
                  Hạn đăng kiểm: 12/12/2022
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <TitleChild title={'2.2 Tên chủ tàu'} />
        <TouchableOpacity>
          <View
            style={{
              borderRadius: 6,
              height: 103,
              backgroundColor: '#FFF',
              flexDirection: 'row',
            }}>
            <View
              style={{
                marginTop: 15,
                marginLeft: 12,
                marginBottom: 32,
                marginRight: 10,
              }}>
              <Image
                source={ICONS.Profile}
                resizeMode="contain"
                style={{height: 40, width: 40, borderRadius: 6}}
              />
            </View>
            <View style={{flex: 1}}>
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 15,
                  justifyContent: 'space-between',
                  flex: 1,
                }}>
                <View style={{flex: 10, flexDirection: 'row'}}>
                  <Text
                    style={{
                      fontFamily: 'Roboto-Bold',
                      fontSize: 16,
                      color: '#333',
                      flex: 5,
                    }}>
                    Phan Quốc Khánh
                  </Text>
                  <View style={{flex: 5, marginTop: 3}}>
                    <Text
                      style={{
                        color: '#005F94',
                        fontFamily: 'Roboto-Regular',
                        fontSize: 12,
                      }}>
                      Chủ tàu
                    </Text>
                  </View>
                </View>
                <View style={{marginTop: 5, flex: 1}}>
                  <Image
                    source={ICONS.Next}
                    resizeMode="contain"
                    style={{height: 12, width: 12}}
                  />
                </View>
              </View>
              <View style={{flex: 2}}>
                <Text
                  style={{
                    fontFamily: 'Roboto-Regular',
                    fontSize: 14,
                    marginBottom: 5,
                    color: '#333',
                  }}>
                  03343500xx
                </Text>
                <Text
                  style={{
                    fontFamily: 'Roboto-Regular',
                    fontSize: 12,
                    color: '#ADADAD',
                    paddingRight: 12,
                  }}>
                  Sào Lưới, Xã Khánh Bình Tây Bắc, Huyện Trần Văn Thời, Tỉnh Cà
                  Mau
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <TitleChild title={'2.3 Tên thuyền trưởng'} />
        <TouchableOpacity>
          <View
            style={{
              borderRadius: 6,
              height: 103,
              backgroundColor: '#FFF',
              flexDirection: 'row',
            }}>
            <View
              style={{
                marginTop: 15,
                marginLeft: 12,
                marginBottom: 32,
                marginRight: 10,
              }}>
              <Image
                source={ICONS.Profile}
                resizeMode="contain"
                style={{height: 40, width: 40, borderRadius: 6}}
              />
            </View>
            <View style={{flex: 1}}>
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 15,
                  justifyContent: 'space-between',
                  flex: 1,
                }}>
                <View style={{flex: 10, flexDirection: 'row'}}>
                  <Text
                    style={{
                      fontFamily: 'Roboto-Bold',
                      fontSize: 16,
                      color: '#333',
                      flex: 5,
                    }}>
                    Phan Quốc Khánh
                  </Text>
                  <View style={{flex: 5, marginTop: 3}}>
                    <Text
                      style={{
                        color: '#005F94',
                        fontFamily: 'Roboto-Regular',
                        fontSize: 12,
                      }}>
                      Thuyền trưởng
                    </Text>
                  </View>
                </View>
                <View style={{marginTop: 5, flex: 1}}>
                  <Image
                    source={ICONS.Next}
                    resizeMode="contain"
                    style={{height: 12, width: 12}}
                  />
                </View>
              </View>
              <View style={{flex: 2}}>
                <Text
                  style={{
                    fontFamily: 'Roboto-Regular',
                    fontSize: 14,
                    marginBottom: 5,
                    color: '#333',
                  }}>
                  03343500xx
                </Text>
                <Text
                  style={{
                    fontFamily: 'Roboto-Regular',
                    fontSize: 12,
                    color: '#ADADAD',
                    paddingRight: 12,
                  }}>
                  Sào Lưới, Xã Khánh Bình Tây Bắc, Huyện Trần Văn Thời, Tỉnh Cà
                  Mau
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <Title title={'3. Kiểm tra hồ sơ'} icon={true} />
        <View
          style={{
            borderRadius: 6,
            backgroundColor: '#FFF',
            paddingTop: 5,
            paddingBottom: 5,
            paddingRight: 12,
            paddingLeft: 12,
          }}>
          <View
            style={{
              marginTop: 15,
              paddingBottom: 15,
              borderBottomWidth: 0.8,
              borderBottomColor: '#D6D6D6',
            }}>
            <CheckBoxComponent2
              label={'Giấy chứng nhận đăng ký tàu cá'}
              isChecked={true}
              color={'#005F94'}
            />
          </View>
          <View
            style={{
              marginTop: 15,
              paddingBottom: 15,
              borderBottomWidth: 0.8,
              borderBottomColor: '#D6D6D6',
            }}>
            <CheckBoxComponent2
              label={'Giấy phép chứng nhận an toàn kỹ thuật tàu cá'}
              isChecked={true}
              color={'#005F94'}
            />
          </View>
          <View
            style={{
              marginTop: 15,
              paddingBottom: 15,
              borderBottomWidth: 0.8,
              borderBottomColor: '#D6D6D6',
            }}>
            <CheckBoxComponent2
              label={'Giấy phép khai thác thủy sản'}
              isChecked={true}
              color={'#005F94'}
            />
          </View>
          <View
            style={{
              marginTop: 15,
              paddingBottom: 15,
              borderBottomWidth: 0.8,
              borderBottomColor: '#D6D6D6',
            }}>
            <CheckBoxComponent2
              label={'Nhật ký khai thác thủy sản'}
              isChecked={true}
              color={'#005F94'}
            />
          </View>
          <View
            style={{
              marginTop: 15,
              paddingBottom: 15,
              borderBottomWidth: 0.8,
              borderBottomColor: '#D6D6D6',
            }}>
            <CheckBoxComponent2
              label={'Số danh bạ thuyền viên tàu cá'}
              isChecked={true}
              color={'#005F94'}
            />
          </View>
          <View
            style={{
              marginTop: 15,
              paddingBottom: 15,
              borderBottomWidth: 0.8,
              borderBottomColor: '#D6D6D6',
            }}>
            <CheckBoxComponent2
              label={'Văn bằng, chứng chỉ thuyền trưởng'}
              isChecked={true}
              color={'#005F94'}
            />
          </View>
          <View
            style={{
              marginTop: 15,
              paddingBottom: 15,
              borderBottomWidth: 0.8,
              borderBottomColor: '#D6D6D6',
            }}>
            <CheckBoxComponent2
              label={'Văn bằng, chứng chỉ máy trưởng'}
              isChecked={true}
              color={'#005F94'}
            />
          </View>
          <View
            style={{
              marginTop: 15,
              paddingBottom: 15,
              borderBottomWidth: 0.8,
              borderBottomColor: '#D6D6D6',
            }}>
            <CheckBoxComponent2
              label={'Giấy chứng nhận ATTP theo quy định'}
              isChecked={true}
              color={'#005F94'}
            />
          </View>
        </View>
        <Title
          title={
            '4. Kiểm tra thực tế(Check chọn nếu đủ (Đ), không check nếu thiếu (T))'
          }
          icon={true}
        />
        <TitleChild title={'4.1 Trang thiết bị trên tàu'} />
        <View
          style={{
            borderRadius: 6,
            backgroundColor: '#FFF',
            paddingTop: 5,
            paddingBottom: 5,
            paddingRight: 12,
            paddingLeft: 12,
            marginTop: 5,
          }}>
          <View style={{marginTop: 15}}>
            <CheckBoxComponent2
              label={'Trang thiết bị hàng hải'}
              isChecked={true}
              color={'#005F94'}
            />
            <TextInputCusTom lable={'Diễn giải'} placeholder={'-Diễn giải-'} />
          </View>
        </View>
        <View
          style={{
            borderRadius: 6,
            backgroundColor: '#FFF',
            paddingTop: 5,
            paddingBottom: 5,
            paddingRight: 12,
            paddingLeft: 12,
            marginTop: 5,
          }}>
          <View style={{marginTop: 15}}>
            <CheckBoxComponent2
              label={'Thông tin liên lạc, tín hiệu'}
              isChecked={true}
              color={'#005F94'}
            />
            <TextInputCusTom lable={'Diễn giải'} placeholder={'-Diễn giải-'} />
          </View>
        </View>
        <View
          style={{
            borderRadius: 6,
            backgroundColor: '#FFF',
            paddingTop: 5,
            paddingBottom: 5,
            paddingRight: 12,
            paddingLeft: 12,
            marginTop: 5,
          }}>
          <View style={{marginTop: 15}}>
            <CheckBoxComponent2
              label={'Cứu sinh, cứu hỏa'}
              isChecked={true}
              color={'#005F94'}
            />
            <TextInputCusTom lable={'Diễn giải'} placeholder={'-Diễn giải-'} />
          </View>
        </View>
        <View
          style={{
            borderRadius: 6,
            backgroundColor: '#FFF',
            paddingTop: 5,
            paddingBottom: 5,
            paddingRight: 12,
            paddingLeft: 12,
            marginTop: 5,
          }}>
          <View style={{marginTop: 15}}>
            <CheckBoxComponent2
              label={'Giám sát hành trình'}
              isChecked={true}
              color={'#005F94'}
            />
            <TextInputCusTom lable={'Diễn giải'} placeholder={'-Diễn giải-'} />
          </View>
        </View>
        <TitleChild
          title={'4.2 Loại nghề khai thác thủy sản và đánh dấu tàu cá'}
        />
        <View
          style={{
            borderRadius: 6,
            backgroundColor: '#FFF',
            paddingTop: 5,
            paddingBottom: 5,
            paddingRight: 12,
            paddingLeft: 12,
          }}>
          <View
            style={{
              marginTop: 15,
              paddingBottom: 15,
              borderBottomWidth: 0.8,
              borderBottomColor: '#D6D6D6',
            }}>
            <CheckBoxComponent2
              label={'Lưới kéo'}
              isChecked={true}
              color={'#005F94'}
            />
          </View>
          <View
            style={{
              marginTop: 15,
              paddingBottom: 15,
              borderBottomWidth: 0.8,
              borderBottomColor: '#D6D6D6',
            }}>
            <CheckBoxComponent2
              label={'Lưới vây'}
              isChecked={false}
              color={'#005F94'}
            />
          </View>
          <View
            style={{
              marginTop: 15,
              paddingBottom: 15,
              borderBottomWidth: 0.8,
              borderBottomColor: '#D6D6D6',
            }}>
            <CheckBoxComponent2
              label={'Nghề chụp'}
              isChecked={true}
              color={'#005F94'}
            />
          </View>
          <View
            style={{
              marginTop: 15,
              paddingBottom: 15,
              borderBottomWidth: 0.8,
              borderBottomColor: '#D6D6D6',
            }}>
            <CheckBoxComponent2
              label={'Dịch vụ hậu cần'}
              isChecked={false}
              color={'#005F94'}
            />
          </View>
          <View
            style={{
              marginTop: 15,
              paddingBottom: 15,
              borderBottomWidth: 0.8,
              borderBottomColor: '#D6D6D6',
            }}>
            <CheckBoxComponent2
              label={'Lưới rê'}
              isChecked={true}
              color={'#005F94'}
            />
          </View>
          <View
            style={{
              marginTop: 15,
              paddingBottom: 15,
              borderBottomWidth: 0.8,
              borderBottomColor: '#D6D6D6',
            }}>
            <CheckBoxComponent2
              label={'Nghề lồng, bẫy'}
              isChecked={false}
              color={'#005F94'}
            />
          </View>
          <View
            style={{
              marginTop: 15,
              paddingBottom: 15,
              borderBottomWidth: 0.8,
              borderBottomColor: '#D6D6D6',
            }}>
            <CheckBoxComponent2
              label={'Đánh dấu tàu cá'}
              isChecked={true}
              color={'#005F94'}
            />
          </View>
        </View>
        <TitleChild title={'4.3 Số lượng thuyền viên tàu cá'} />
        <View
          style={{
            borderRadius: 6,
            backgroundColor: '#FFF',
            paddingTop: 5,
            paddingBottom: 20,
            paddingRight: 12,
            paddingLeft: 12,
          }}>
          <TextInputCusTom
            lable={'Số lượng thuyền viên tàu cá'}
            placeholder={'--'}
          />
        </View>
        <Title
          title={'5. Đã nộp báo cáo, nhật ký khai thác chuyến trước'}
          icon={true}
        />
        <View
          style={{
            borderRadius: 6,
            backgroundColor: '#FFF',
            paddingTop: 5,
            paddingBottom: 5,
            paddingRight: 12,
            paddingLeft: 12,
          }}>
          <View
            style={{
              marginTop: 15,
              paddingBottom: 15,
              borderBottomWidth: 0.8,
              borderBottomColor: '#D6D6D6',
            }}>
            <CheckBoxComponent2
              label={'Báo cáo khai thác thủy sản'}
              isChecked={true}
              color={'#005F94'}
            />
          </View>
          <View
            style={{
              marginTop: 15,
              paddingBottom: 15,
              borderBottomWidth: 0.8,
              borderBottomColor: '#D6D6D6',
            }}>
            <CheckBoxComponent2
              label={'Nhật ký khai thác thủy sản'}
              isChecked={false}
              color={'#005F94'}
            />
          </View>
        </View>
        <Title title={'6. Kết luận kiểm tra'} icon={true} />
        <View
          style={{
            borderRadius: 6,
            backgroundColor: '#FFF',
            paddingTop: 5,
            paddingBottom: 20,
            paddingRight: 12,
            paddingLeft: 12,
          }}>
          <TextInputCusTom lable={'Kết luận kiểm tra'} placeholder={'--'} />
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
            marginBottom: 37,
          }}>
          <View style={{width: 173}}>
            <TouchableOpacityComponent3
              content={'Đóng'}
              color={'#333333'}
              backgroundColor={'#FFF'}
              onPress={() => navigation.goBack()}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default MinutesCheckOutScreen;
