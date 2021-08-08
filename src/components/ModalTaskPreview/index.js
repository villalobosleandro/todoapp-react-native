import React, { useContext } from 'react'
import { View, Text, Modal, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { TasksContext } from './../../context/TasksContext'

export const ModalTaskPreview = ({ task, modalVisible, setModalVisible, removeTask }) => {

  const { markAsCompleted } = useContext(TasksContext)

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >

      <View style={styles.centeredView}>

        <View style={styles.modalView}>

          <TouchableOpacity
            style={styles.iconDelete}
            onPress={() => {
              Alert.alert(
                "Are you sure to delete this task?",
                "You will not be able to recover it later",
                [
                  {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                  },
                  {
                    text: "OK", onPress: () => {
                      removeTask(task.id)
                      setModalVisible(!modalVisible)
                    }
                  }
                ]
              );
            }}
          >
            <Icon name={'delete'} size={40} />
          </TouchableOpacity>

          <View style={styles.paddingH20}>
            <Text>Title</Text>
            <View style={styles.inputStyle}>
              <Text style={{ color: Constant.colors.grayColor }}>{task.title}</Text>
            </View>
          </View>

          <View style={[styles.paddingH20, { paddingTop: 10 }]}>
            <Text>Deadline</Text>
            <View style={styles.inputStyle} >
              <Text style={{ color: Constant.colors.grayColor }}>{task.deadline}</Text>
            </View>
          </View>

          <View style={[styles.row, styles.justifySpaceBetween]}>

            <View style={styles.timeContainer}>
              <Text>Start time</Text>
              <View style={styles.inputStyle}>
                <Text style={{ color: Constant.colors.grayColor }}>{task.startTime}</Text>
              </View>
            </View>

            <View style={styles.timeContainer}>
              <Text>End time</Text>
              <View style={styles.inputStyle}>
                <Text style={{ color: Constant.colors.grayColor }}>{task.endTime}</Text>
              </View>
            </View>

          </View>

          <View style={[styles.paddingT10, styles.paddingH20]}>
            <Text>Remind</Text>
            <View style={styles.inputStyle}>
              <Text style={{ color: Constant.colors.grayColor }}>{task.remind}</Text>
            </View>
          </View>

          <View style={[styles.paddingT10, styles.paddingH20]}>
            <Text>Repeat</Text>
            <View style={styles.inputStyle}>
              <Text style={{ color: Constant.colors.grayColor }}>{task.repeat}</Text>
            </View>
          </View>

          <View style={[styles.paddingT10, styles.paddingH20]}>
            <Text>Priority</Text>
            <View style={styles.inputStyle}>
              <Text style={{ color: Constant.colors.grayColor }}>{task.priority}</Text>
            </View>
          </View>

          <View style={styles.buttonsContainer}>

            <TouchableOpacity
              onPress={() => setModalVisible(!modalVisible)}
              style={[styles.buttonStyle, { backgroundColor: Constant.colors.danger }]}
            >
              <Text style={{ color: Constant.colors.whiteColor, fontWeight: 'bold' }}>Close</Text>
            </TouchableOpacity>

            {task.status === 'uncompleted' && (
              <TouchableOpacity
                onPress={() => {
                  markAsCompleted(task)
                  setModalVisible(!modalVisible)
                }}
                style={[styles.buttonStyle, { backgroundColor: Constant.colors.greenSuccess }]}
              >
                <Text style={{ color: Constant.colors.whiteColor, fontWeight: 'bold' }}>Mark as completed</Text>
              </TouchableOpacity>
            )
            }

          </View>

        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  inputStyle: {
    height: 40,
    marginTop: 12,
    backgroundColor: Constant.colors.lightGrayColor,
    borderRadius: 5,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  iconDelete: {
    position: 'absolute',
    top: 15,
    right: 20
  },
  paddingH20: { paddingHorizontal: 20 },
  row: { flexDirection: 'row' },
  justifySpaceBetween: { justifyContent: 'space-between' },
  timeContainer: {
    paddingHorizontal: 20,
    paddingTop: 10,
    width: '50%'
  },
  paddingT10: { paddingTop: 10 },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20
  },
  buttonStyle: {
    width: '40%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10
  }
})