import React, { useState, useContext } from 'react'
import { Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { TasksContext } from '../../context/TasksContext';
import { ModalTaskPreview } from '../ModalTaskPreview';

import { EmptyList } from './styles'

export const ListTasks = ({ data = [], setTaskCompleted, getListTasks }) => {
  const [modalVisible, setModalVisible] = useState(false)
  const [task, setTask] = useState({})
  const { deleteTask } = useContext(TasksContext)

  const getColor = (type) => {
    const colorTask = {
      'hight': Constant.colors.danger,
      'medium': Constant.colors.warning,
      'low': Constant.colors.info
    }

    const res = colorTask[type] || Constant.colors.info;
    return res;
  }

  const getIcon = (type) => {
    if (type === 'completed') {
      return 'checkbox-marked'
    }

    return 'checkbox-blank-outline'
  }

  const renderItem = ({ item }) => {
    return (

      <TouchableOpacity
        key={item.id}
        style={styles.taskElementContainer}
        onPress={() => {
          setTask(item)
          setModalVisible(true)
        }}
      >

        <Icon
          name={getIcon(item.status)}
          size={30}
          color={getColor(item.priority)}
          onPress={() => {
            if (item.status === 'uncompleted') {
              setTaskCompleted(item)
            }
          }}
        />
        <Text style={styles.titleTask}>{item.title}</Text>
      </TouchableOpacity>
    )
  }

  const ListEmpty = () => (

    <EmptyList
      image={Constant.images.empty}
      title='The list is empty'
      textColor={Constant.colors.blackColor}
    />
  );

  const removeTask = (id) => {
    deleteTask(id)
    getListTasks()
  }

  return (
    <>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ListEmptyComponent={ListEmpty}
      />
      {
        modalVisible && (
          <ModalTaskPreview
            setModalVisible={setModalVisible}
            modalVisible={modalVisible}
            task={task}
            removeTask={removeTask}
          />
        )
      }
    </>
  )
}

const styles = StyleSheet.create({
  taskElementContainer: { 
    flexDirection: 'row', 
    width: 'auto', 
    paddingVertical: 10, 
    alignItems: 'center' 
  },
  titleTask: { paddingLeft: 10 }
})