import { View, ActivityIndicator, Text } from "react-native";

import React, { Children, useContext, useEffect, useState } from "react";

import Modal from "react-native-modal";


interface ProgressDialogProps {
    isOpen: boolean;
    setModal?: (state: boolean) => void;

}


const ProgressDialog = (props: ProgressDialogProps) => {

    const { isOpen = false, setModal } = props;
    const closeModal = () => {
        setModal(false);
    };

    return (
        <Modal
          isVisible={isOpen}
          backdropOpacity={0.4}
          backdropColor={'transparent'}
          onBackdropPress={() => closeModal()}
        >
          <View
            style={{
              flex: 1,
              backgroundColor: 'transparent',
              alignItems: "center",
              justifyContent: "center",
              padding: 0,
              margin: 0
            }}
          >
            <View
              style={{
                borderRadius: 10,
                backgroundColor: "white",
                padding: 25,
                borderColor: "#dcdcdc"
              }}
            >
              <Text style={{ fontSize: 20, fontWeight: "200" }}>Cargando...</Text>
              <ActivityIndicator size="large" />
            </View>
          </View>
        </Modal>
      );


};


export default ProgressDialog;