import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image,
  Button,
} from 'react-native';
import {Header, MainButton} from '../../Common';
import {constants, dummyData, icons} from '../../config/constants';
import DateTimePicker, {
  DateTimePickerAndroid,
} from '@react-native-community/datetimepicker';
import SelectDropdown from 'react-native-select-dropdown';
import styles from './style';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import DatePicker from 'react-native-date-picker';

interface Inputprop {
  navigation: any;
  data: {
    id: number;
    label: string;
    placeholder: string;
    value: string;
  }[];
  setShowCal: React.Dispatch<React.SetStateAction<boolean>>;
  showCal: boolean;
}

const EditAccount = (props: Inputprop) => {
  const {navigation, data, showCal, setShowCal} = props;
  const gender = ['Male', 'Female', 'Others'];
  const [date, setDate] = useState("");
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);
  const [val, SetVal] = useState(data);


  
  const formatDate = (date:any) => {
    let dateString = date?.toDateString();
    let strings = dateString?.split(' ');
    if (strings != undefined) {
      let newDate = dateString?.replace(strings[3], '');
      return newDate;
    }
    return dateString;
  };
  const onChange = (event: any, selectedDate: any) => {
     console.log(selectedDate)
    
    // const currentDate = selectedDate
    // setDate(currentDate);

    if(selectedDate != undefined){
      setDate(formatDate(selectedDate))
    }
    setShow(false);
  };

  // const showMode = (currentMode:any) => {
  //   DateTimePickerAndroid.open({
  //     value: date,
  //     onChange,
  //     mode: "date",
  //     is24Hour: true
  //   })
  // };

  const showMode = (currentMode: any) => {
    setShow(true);
  };
  const showDatepicker = () => {
    // showMode('date');
    setMode('date');
  };
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Header
        name={constants.screens.My_Account}
        leftIcon={icons.back}
        rytIcon={undefined}
      />
      <ScrollView showsVerticalScrollIndicator={false} style={{flex:1}}>
        <View style={styles.mapContainer}>
          {val.map((item: any, index: number) => {
            
            return (
              <View key={index}>
                <Text style={styles.label}>{item.label}</Text>
                <View style={styles.textinputView}>
                  <TextInput
                    style={{width: '90%'}}
                    // value={item.value}
                    placeholder={item.placeholder}
                    onChangeText={(text: any) => {
                      // index==3 ?dummyData.MyAccount[index].value=date.toString():
                      // dummyData.MyAccount[index].value = text
                      val[index].value = text;
                    }}
                  />
                  {index == 3 && (
                    <TouchableOpacity onPress={() => setShow(!show)}>
                      <Image source={icons.calendar} style={styles.btnIcon} />
                    </TouchableOpacity>
                  )}
                  {index == 4 && (
                    <TouchableOpacity onPress={() => setOpen(!open)}>
                      <Image source={icons.down_arrow} style={styles.btnIcon} />
                    </TouchableOpacity>
                  )}
                  {index == 4 && open && (
                    <SelectDropdown
                      data={gender}
                      onSelect={(selectedItem, index) => {
                        val[index].value = selectedItem;
                        console.log(selectedItem, index);
                      }}
                      buttonTextAfterSelection={(selectedItem, index) => {
                        return selectedItem;
                      }}
                      rowTextForSelection={(item, index) => {
                        return item;
                      }}
                    />
                  )}
                </View>
              </View>
            );
          })}
        </View>
        <View>
          {/* <Button onPress={()=>showDatepicker} title="Show date picker!" /> */}
          {/* <Text>selected: {date.toLocaleString()}</Text> */}
        </View>
     

        {show && (
          <RNDateTimePicker
            testID="dateTimePicker"
            value={new Date()}
            mode={'date'}
            is24Hour={true}
            display={"calendar"}

            onChange={onChange}
          />
        )}
        
        {/* <DatePicker
                    modal
                    open={open}
                    date={date}
                    maximumDate={new Date("2015-12-31")}
                    mode="date"
                    onConfirm={(date) => {
                        setOpen(false)
                        setDATA({ ...DATA, Dob: datedata })
                        setDate(date)
                    }}
                    onCancel={() => {
                        setOpen(false)
                    }}
                /> */}
      </ScrollView>

      {/* <MainButton name={constants.Button.Save}/> */}
      <Button
        title="Save"
        onPress={() => {
          val.map((item, index) => {
            console.log(item);
          });
        }}
      />
    </SafeAreaView>
  );
};

export default EditAccount;
