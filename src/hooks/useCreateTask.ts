import React, { useState, useContext } from 'react'
import { Alert } from 'react-native'
import { TasksContext } from './../context/TasksContext'
import { TaskModel } from './../models/task'

export const useCreateTask = () => {
  const [title, setTitle] = useState('')
  const [date, setDate] = useState(new Date())
  const [mode, setMode] = useState('date')
  const [show, setShow] = useState(false)
  const [dateToShow, setDateToShow] = useState('')
  const [priority, setPriority] = useState('normal')
  const [remind, setRemind] = useState('10 minutes early')
  const [modalPriorityVisible, setModalPriorityVisible] = useState(false)
  const [modalRemindVisible, setModalRemindVisible] = useState(false)
  const [startTime, setStartTime] = useState('00:00')
  const [endTime, setEndTime] = useState('00:00')
  const [showStartTime, setShowStartTime] = useState(false)
  const [showEndTime, setShowEndTime] = useState(false)
  const [repeat, setRepeat] = useState('Daily')
  const [modalRepeatVisible, setModalRepeatVisible] = useState(false)
  const { addTask } = useContext(TasksContext)

  const createTask = () => {
    if (title === '') {
      Alert.alert(
        "Alert!!!",
        "Title is required",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ]
      );
    } else {
      const newTask: TaskModel = {
        id: parseInt((Math.random() * 1000000000), 10),
        title,
        deadline: dateToShow,
        startTime,
        endTime,
        remind,
        repeat,
        priority,
        status: 'uncompleted'
      }
      addTask(newTask)
      setTitle('')
      setPriority('low')
      setRemind('10 minutes early')
      setStartTime('00:00')
      setEndTime('00:00')
      setRepeat('Daily')
    }

  }

  const onChangeDeadline = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
    let tempDate = new Date(currentDate);
    let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
    setDateToShow(fDate)
  };

  const onChangeStartTime = (event, selectedDate) => {
    const currentDate = selectedDate || new Date();
    let tempDate = new Date(currentDate);
    let fTime = tempDate.getHours() + ':' + tempDate.getMinutes()
    setStartTime(fTime);
    setShowStartTime(false)
  };

  const onChangeEndTime = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    let tempDate = new Date(currentDate);
    let fTime = tempDate.getHours() + ':' + tempDate.getMinutes()
    setEndTime(fTime);
    setShowEndTime(false)
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  return {
    createTask,
    onChangeDeadline,
    onChangeStartTime,
    onChangeEndTime,
    showMode,
    showDatepicker,
    title,
    setTitle,
    date,
    setDate,
    mode,
    setMode,
    show,
    setShow,
    dateToShow,
    setDateToShow,
    priority,
    setPriority,
    remind,
    setRemind,
    modalPriorityVisible,
    setModalPriorityVisible,
    modalRemindVisible,
    setModalRemindVisible,
    startTime,
    setStartTime,
    endTime,
    setEndTime,
    showStartTime,
    setShowStartTime,
    showEndTime,
    setShowEndTime,
    repeat,
    setRepeat,
    modalRepeatVisible,
    setModalRepeatVisible,
  }
}