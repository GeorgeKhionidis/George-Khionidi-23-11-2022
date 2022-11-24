import React, {useEffect} from 'react';
import {View, Text} from 'react-native';

import {showErrorMessage} from '../../../helpers/toastHelper';

import {styles} from './ErrorIndicator.styles';

type IProps = {
  error: Error | null;
  errorInfo: React.ErrorInfo | null;
};

export const ErrorIndicator: React.FC<IProps> = ({errorInfo}) => {
  useEffect(() => {
    !!errorInfo?.componentStack &&
      showErrorMessage({
        message: 'Error in App',
        description: JSON.stringify(errorInfo.componentStack),
      });
  }, [errorInfo]);

  return (
    <View style={styles.wrapper}>
      {!!errorInfo?.componentStack && (
        <Text style={styles.text}>{errorInfo.componentStack}</Text>
      )}
    </View>
  );
};
