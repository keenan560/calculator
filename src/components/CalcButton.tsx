import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

interface Button {
  title: string | number;
  type: string;
  value: number | string;
  onPress: (event: any) => void;
  color: string | undefined;
  backgroundColor: string | undefined;
  borderRadius: number | undefined;
  borderWidth: number | undefined;
  fontWeight: string | number | undefined;
  fontSize: number | undefined;
  marginBottom: number | undefined;
  height: number | undefined;
  width: string | number | undefined;
  padding: number | undefined;
  textAlign: string | undefined;
  justifyContent: string | undefined;
  alignItems: string | undefined;
}

const CalcButton = ({
  title,
  type,
  value,
  color,
  backgroundColor,
  borderRadius,
  borderWidth,
  fontSize,
  fontWeight,
  marginBottom,
  height,
  width,
  padding,
  textAlign,
  justifyContent,
  alignItems,
  onPress,
}: Button) => {
  const buttonStyle = {
    backgroundColor: backgroundColor,
    borderRadius: borderRadius,
    borderWidth: borderWidth,
    marginBottom: marginBottom,
    height: height,
    width: width,
    padding: padding,
    textAlign: textAlign,
    justifyContent: justifyContent,
    alignItems: alignItems,
  };

  const textStyle = {
    color,
    fontSize: fontSize,
    fontWeight: fontWeight,
  };
  return (
    <View>
      <TouchableOpacity onPress={onPress} style={buttonStyle}>
        <Text style={textStyle}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CalcButton;
