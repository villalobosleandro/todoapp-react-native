import React from 'react'
import { Modal, View, TouchableOpacity, Text, StyleSheet } from 'react-native';


export const ModalRemind = ({ modalRemindVisible, setModalRemindVisible, setRemind }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalRemindVisible}
      onRequestClose={() => {
        setModalRemindVisible(!modalRemindVisible);
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <TouchableOpacity
            onPress={() => {
              setRemind('10 minutes early')
              setModalRemindVisible(!modalRemindVisible)
            }}
            style={styles.typeButton}
          >
            <Text>10 minutes early</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setRemind('30 minutes early')
              setModalRemindVisible(!modalRemindVisible)
            }}
            style={styles.typeButton}
          >
            <Text>30 minutes early</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setRemind('45 minutes early')
              setModalRemindVisible(!modalRemindVisible)
            }}
            style={styles.typeButton}
          >
            <Text>45 minutes early</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setRemind('60 minutes early')
              setModalRemindVisible(!modalRemindVisible)
            }}
            style={styles.typeButton}
          >
            <Text>60 minutes early</Text>
          </TouchableOpacity>
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
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  typeButton: {
    width: 150,
    borderRadius: 10,
    borderWidth: 1,
    height: 30,
    alignItems: 'center',
    marginVertical: 3,
    justifyContent: 'center'
  }
})