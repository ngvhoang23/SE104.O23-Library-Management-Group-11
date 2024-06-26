import { Modal, StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useEffect, useRef } from "react";
import { normalize } from "../defined_function";

function ErrorAlertModal({ text, visible, onClose }) {
  const timeoutRef = useRef();

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      onClose();
    }, 2000);
    return () => {
      clearTimeout(timeoutRef?.current);
    };
  }, [visible]);

  return (
    <Modal animationType="fade" transparent={true} visible={visible} statusBarTranslucent={true}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <AntDesign name="closecircleo" size={40} color="#ff3333" />
          <Text style={styles.modalText}>{text}</Text>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0008",
  },

  modalView: {
    margin: normalize(20),
    paddingHorizontal: normalize(20),
    paddingVertical: normalize(0),
    backgroundColor: "white",
    borderRadius: normalize(5),
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  modalText: {
    marginVertical: normalize(15),
    textAlign: "center",
    fontSize: normalize(14),
    marginLeft: normalize(15),
    fontFamily: "nunito-medium",
    letterSpacing: normalize(4),
  },
});

export default ErrorAlertModal;
