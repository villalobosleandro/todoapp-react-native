import React from 'react'
import { Modal, View, TouchableOpacity, Text, StyleSheet } from 'react-native';

export const ModalPriority = ({ modalPriorityVisible, setModalPriorityVisible, setPriority }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalPriorityVisible}
      onRequestClose={() => {
        setModalPriorityVisible(!modalPriorityVisible);
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <TouchableOpacity
            onPress={() => {
              setPriority('hight')
              setModalPriorityVisible(!modalPriorityVisible)
            }}
            style={[styles.typeButton, { backgroundColor: Constant.colors.danger }]}
          >
            <Text style={{ color: Constant.colors.whiteColor }}>Hight</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setPriority('medium')
              setModalPriorityVisible(!modalPriorityVisible)
            }}
            style={[styles.typeButton, { backgroundColor: Constant.colors.warning }]}
          >
            <Text style={{ color: Constant.colors.whiteColor }}>Medium</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setPriority('low')
              setModalPriorityVisible(!modalPriorityVisible)
            }}
            style={[styles.typeButton, { backgroundColor: Constant.colors.info }]}
          >
            <Text style={{ color: Constant.colors.whiteColor }}>Normal</Text>
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
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  typeButton: {
    width: 150,
    borderRadius: 10,
    height: 30,
    alignItems: 'center',
    marginVertical: 3,
    justifyContent: 'center'
  }
})