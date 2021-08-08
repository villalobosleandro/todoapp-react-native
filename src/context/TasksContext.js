import React, { useState, useEffect, createContext } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ToastAndroid } from 'react-native';

export const TasksContext = createContext();

export const TasksProvider = ({ children }) => {
  const [listTask, setListTask] = useState([])

  useEffect(() => {
    getTasks()
  }, [listTask])

  const getTasks = async () => {
    try {
      const value = await AsyncStorage.getItem('listTask')
      setListTask(value !== null ? JSON.parse(value) : [])
    } catch (e) {
      ToastAndroid.showWithGravityAndOffset(
        `Error! ${e}`,
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        50
      );
      setListTask([])
    }
  }

  const addTask = async (task) => {
    let temp = [...listTask, task]
    try {
      await AsyncStorage.setItem('listTask', JSON.stringify(temp))
      setListTask(temp)
      ToastAndroid.showWithGravityAndOffset(
        `Task created successfully`,
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        50
      );
    } catch (e) {
      ToastAndroid.showWithGravityAndOffset(
        `Error! ${e}`,
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        50
      );
      setListTask([])
    }
  }

  const markAsCompleted = async (task) => {
    const temp = listTask.filter(element => element.id === task.id ? element.status = 'completed' : 'uncompleted')
    setListTask(temp)
    await AsyncStorage.setItem('listTask', JSON.stringify(temp))
  }

  const deleteTask = async (id) => {
    const list = listTask.filter(element => element.id !== id)
    setListTask(list)
    await AsyncStorage.setItem('listTask', JSON.stringify(list))
    ToastAndroid.showWithGravityAndOffset(
      `Task deleted successfully`,
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50
    );
  }

  return (
    <TasksContext.Provider value={{
      listTask,
      setListTask,
      addTask,
      markAsCompleted,
      getTasks,
      deleteTask
    }}>
      {children}
    </TasksContext.Provider>
  )

}