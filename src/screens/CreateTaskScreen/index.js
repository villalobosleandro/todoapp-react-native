import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { Header } from '../../components/Header';
import { ModalPriority } from './../../components/ModalPriority';
import { ModalRemind } from './../../components/ModalRemind';
import { ModalRepeat } from './../../components/ModalRepeat';
import { Container } from './styles'
import { useCreateTask } from './../../hooks/useCreateTask'


export const CreateTaskScreen = ({ navigation }) => {

  const {
    createTask,
    showDatepicker,
    title,
    setTitle,
    date,
    show,
    dateToShow,
    priority,
    setPriority,
    remind,
    setRemind,
    modalPriorityVisible,
    setModalPriorityVisible,
    modalRemindVisible,
    setModalRemindVisible,
    startTime,
    endTime,
    showStartTime,
    setShowStartTime,
    showEndTime,
    setShowEndTime,
    repeat,
    setRepeat,
    modalRepeatVisible,
    setModalRepeatVisible,
  } = useCreateTask()
  

  return (
    <Container>
      <Header
        title={'Add task'}
        arrowBack
        iconRight={false}
        navigation={navigation}
      />

      <View style={styles.inputContainer}>
        <Text>Title</Text>
        <TextInput
          style={styles.inputStyle}
          onChangeText={(text) => setTitle(text)}
          placeholder="Title task"
          placeholderTextColor={Constant.colors.grayColor}
          value={title}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text>Deadline</Text>
        <TouchableOpacity
          style={[styles.inputStyle, styles.selectInput]}
          onPress={showDatepicker}
        >
          <Text style={{ color: Constant.colors.grayColor }}>{dateToShow === '' ? 'Deadline' : dateToShow}</Text>
          <Icon name={'chevron-down'} size={30} />
        </TouchableOpacity>

      </View>

      <View style={styles.row}>

        <View style={[styles.inputContainer, { width: '50%' }]}>
          <Text>Start time</Text>
          <TouchableOpacity
            style={[styles.inputStyle, styles.selectInput]}
            onPress={() => setShowStartTime(true)}
          >
            <Text style={{ color: Constant.colors.grayColor }}>{startTime}</Text>
            <Icon name={'clock-time-three-outline'} size={16} />
          </TouchableOpacity>

        </View>

        <View style={[styles.inputContainer, { width: '50%' }]}>
          <Text>End time</Text>
          <TouchableOpacity
            style={[styles.inputStyle, styles.selectInput]}
            onPress={() => setShowEndTime(true)}
          >
            <Text style={{ color: Constant.colors.grayColor }}>{endTime}</Text>
            <Icon name={'clock-time-three-outline'} size={16} />
          </TouchableOpacity>

        </View>

      </View>

      <View style={styles.inputContainer}>
        <Text>Remind</Text>
        <TouchableOpacity
          style={[styles.inputStyle, styles.selectInput]}
          onPress={() => setModalRemindVisible(true)}
        >
          <Text style={{ color: Constant.colors.grayColor }}>{remind}</Text>
          <Icon name={'chevron-down'} size={30} />
        </TouchableOpacity>

      </View>

      <View style={styles.inputContainer}>
        <Text>Repeat</Text>
        <TouchableOpacity
          style={[styles.inputStyle, styles.selectInput]}
          onPress={() => setModalRepeatVisible(true)}
        >
          <Text style={{ color: Constant.colors.grayColor }}>{repeat}</Text>
          <Icon name={'chevron-down'} size={30} />
        </TouchableOpacity>

      </View>

      <View style={styles.inputContainer}>
        <Text>Priority</Text>
        <TouchableOpacity
          style={[styles.inputStyle, styles.selectInput]}
          onPress={() => setModalPriorityVisible(true)}
        >
          <Text style={{ color: Constant.colors.grayColor }}>{priority}</Text>
          <Icon name={'chevron-down'} size={30} />
        </TouchableOpacity>

      </View>

      <View style={styles.buttonCreateContainer}>
        <TouchableOpacity
          onPress={() => createTask()}
          style={styles.createButton}>
          <Text style={{ color: '#fff' }}>Add a task</Text>
        </TouchableOpacity>

      </View>

      {
        modalPriorityVisible && (
          <ModalPriority
            modalPriorityVisible={modalPriorityVisible}
            setModalPriorityVisible={setModalPriorityVisible}
            setPriority={setPriority}
          />
        )
      }

      {
        modalRemindVisible && (
          <ModalRemind
            modalRemindVisible={modalRemindVisible}
            setModalRemindVisible={setModalRemindVisible}
            setRemind={setRemind}
          />
        )
      }

      {
        modalRepeatVisible && (
          <ModalRepeat
            modalRepeatVisible={modalRepeatVisible}
            setModalRepeatVisible={setModalRepeatVisible}
            setRepeat={setRepeat}
          />
        )
      }

      {show && (
        <DateTimePicker
          value={date}
          mode={'date'}
          is24Hour={true}
          display="default"
          onChange={onChangeDeadline}
        />
      )}

      {showStartTime && (
        <DateTimePicker
          value={new Date()}
          mode={'time'}
          is24Hour={true}
          timeZoneOffsetInMinutes={60}
          display="default"
          onChange={onChangeStartTime}
        />
      )}

      {showEndTime && (
        <DateTimePicker
          value={new Date()}
          mode={'time'}
          is24Hour={true}
          display="default"
          onChange={onChangeEndTime}
        />
      )}

    </Container>
  )
}

const styles = StyleSheet.create({
  inputStyle: {
    height: 40,
    marginTop: 12,
    backgroundColor: Constant.colors.lightGrayColor,
    borderRadius: 5,
    padding: 10,
  },
  inputContainer: { 
    paddingHorizontal: 20, 
    paddingTop: 10
  },
  row: { 
    flexDirection: 'row', 
    justifyContent: 'space-between' 
  },
  selectInput: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center'
  },
  buttonCreateContainer: { 
    alignItems: 'center', 
    justifyContent: 'flex-end', 
    flex: 1, 
    marginBottom: 20 
  },
  createButton: {
    width: '90%', 
    backgroundColor: Constant.colors.greenSuccess, 
    alignItems: 'center',
    justifyContent: 'center', 
    height: 50, 
    borderRadius: 10
  } 
})