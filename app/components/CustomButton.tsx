import React from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TextStyle,
  ActivityIndicator,
} from 'react-native';
import {s} from 'react-native-size-matters';

interface CustomButtonProps {
  children?: React.ReactNode;
  title?: string;
  mode?: 'primary' | 'secondary' | 'ghost';
  onPress: () => void;
  isLoading?: boolean;
  disabled?: boolean;
  customStyle?: StyleProp<ViewStyle>;
  customTextStyle?: StyleProp<TextStyle>;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  title,
  mode = 'primary',
  onPress,
  isLoading = false,
  disabled = false,
  customStyle,
  customTextStyle,
}) => {
  let containerStyles: StyleProp<ViewStyle> = [styles.buttonContainer];
  let isDisabled = disabled || isLoading;

  if (isDisabled) {
    containerStyles.push(styles.disabledButtonContainer);
  } else {
    switch (mode) {
      case 'primary':
        containerStyles.push(styles.primaryButtonContainer);
        break;
      case 'secondary':
        containerStyles.push(styles.secondaryButtonContainer);
        break;
      case 'ghost':
        containerStyles.push(styles.ghostButtonContainer);
        break;
      default:
        containerStyles.push(styles.primaryButtonContainer);
    }
    containerStyles.push(customStyle);
  }

  let textStyles: StyleProp<TextStyle> = [styles.buttonText, customTextStyle];
  if (mode === 'ghost') {
    textStyles.push(styles.ghostButtonText);
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={isDisabled}
      style={containerStyles}>
      {isLoading ? (
        <ActivityIndicator size="small" color="#fff" />
      ) : (
        <Text style={textStyles}>{children || title}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    paddingVertical: s(12),
    paddingHorizontal: s(20),
    alignItems: 'center',
    justifyContent: 'center',
    height: s(60),
    borderRadius: s(8),
  },
  primaryButtonContainer: {
    backgroundColor: '#181E37',
  },
  secondaryButtonContainer: {
    backgroundColor: '#2C2C2C',
  },
  disabledButtonContainer: {
    backgroundColor: '#bbb',
  },
  buttonText: {
    fontSize: s(18),
    fontWeight: '400',
    color: '#fff',
    fontFamily: 'Trap-Bold',
  },
  ghostButtonContainer: {
    backgroundColor: 'transparent',
    borderColor: '#181E37',
    borderWidth: 1,
  },
  ghostButtonText: {
    color: '#181E37',
  },
});

export default CustomButton;
