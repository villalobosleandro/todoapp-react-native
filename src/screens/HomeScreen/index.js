import React, { useContext, useState, useCallback } from 'react';
import { ListTasks } from '../../components/ListTasks';
import { Header } from './../../components/Header';
import { TasksContext } from '../../context/TasksContext'
import { useFocusEffect } from '@react-navigation/native';

import { ListContainer, Title, Container, ButtonContainer, PressableButton } from './styles'

export const HomeScreen = ({ navigation }) => {
  const { markAsCompleted, listTask } = useContext(TasksContext)
  const [completedTask, setCompletedTask] = useState([])
  const [pendingTask, setPendingTask] = useState([])

  useFocusEffect(
    useCallback(() => {
      getListTasks()

      return () => {
        setCompletedTask([])
        setPendingTask([])
      };
    }, [listTask])
  );

  const getListTasks = () => {
    const completed = listTask.filter(element => element.status === 'completed')
    const pending = listTask.filter(element => element.status === 'uncompleted')

    setCompletedTask(completed)
    setPendingTask(pending)
  }

  const setTaskCompleted = (task) => {
    markAsCompleted(task)
    getListTasks();
  }

  return (
    <Container>
      <Header />
      <ListContainer>
        <Title>Completed tasks</Title>
        <ListTasks
          data={completedTask}
          getListTasks={getListTasks}
        />
      </ListContainer>

      <ListContainer>
        <Title>Pending tasks</Title>
        <ListTasks
          data={pendingTask}
          setTaskCompleted={setTaskCompleted}
          getListTasks={getListTasks}
        />
      </ListContainer>

      <ButtonContainer>
        <PressableButton
          onPress={() => navigation.navigate('Create')}
          title='Add a task'
          bgColor={Constant.colors.greenSuccess}
          textColor={Constant.colors.whiteColor}
        />

      </ButtonContainer>
    </Container>
  )
}