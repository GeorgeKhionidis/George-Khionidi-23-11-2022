import React, {memo} from 'react';
import {ActivityIndicator, ActivityIndicatorProps} from 'react-native';

export const Loader: React.FC<ActivityIndicatorProps> = memo(({...props}) => {
  return <ActivityIndicator {...props} />;
});
