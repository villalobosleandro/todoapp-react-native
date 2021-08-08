import React from 'react'
import { Modal, View, TouchableOpacity, Text, StyleSheet } from 'react-native';

export const ModalRepeat = ({ modalRepeatVisible, setModalRepeatVisible, setRepeat }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalRepeatVisible}
      onRequestClose={() => {
        setModalRepeatVisible(!modalRepeatVisible);
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <TouchableOpacity
            onPress={() => {
              setRepeat('Daily')
              setModalRepeatVisible(!modalRepeatVisible)
            }}
            style={styles.typeButton}
          >
            <Text>Daily</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setRepeat('weekly')
              setModalRepeatVisible(!modalRepeatVisible)
            }}
            style={styles.typeButton}
          >
            <Text>Weekly</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setRepeat('monthly')
              setModalRepeatVisible(!modalRepeatVisible)
            }}
            style={styles.typeButton}
          >
            <Text>Monthly</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setRepeat('annually')
              setModalRepeatVisible(!modalRepeatVisible)
            }}
            style={styles.typeButton}
          >
            <Text>Annually</Text>
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