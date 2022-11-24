import React from 'react';
import {Modal, ModalProps} from 'react-native';

export const ModalComponent: React.FC<React.PropsWithChildren<ModalProps>> = ({
  children,
  visible,
  onRequestClose,
}) => {
  return (
    <Modal
      animationType="slide"
      visible={visible}
      onRequestClose={onRequestClose}>
      {children}
    </Modal>
  );
};
