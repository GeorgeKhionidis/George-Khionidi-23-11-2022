import {showMessage} from 'react-native-flash-message';

interface IMessage {
  message: string;
  description?: string;
}

export const showErrorMessage = ({message, description}: IMessage) => {
  showMessage({
    type: 'danger',
    message,
    description,
  });
};

export const showSuccessMessage = ({message, description}: IMessage) => {
  showMessage({
    type: 'success',
    message,
    description,
  });
};
