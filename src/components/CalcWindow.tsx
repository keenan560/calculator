import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {formatNumber} from '../helpers';

type Props = {
  arg: string[] | number[] | undefined;
  value: string | number[] | undefined;
  operator: string | undefined;
  color: string;
  width: number;
  height: number;
  backgroundColor: string;
  borderWidth: number;
  borderRadius: number;
  fontSize: number | undefined;
  fontWeight: string | undefined;
  marginTop: string | undefined;
  justifyContent: string | undefined;
  textAlign: string | undefined;
  padding: string | undefined;
  marginBottom: number | undefined;
  borderColor: number | undefined;
  borderBottomEndRadius: number | undefined;
  borderBottomStartRadius: number | undefined;
};

const CalcWindow = ({
  arg,
  value,
  operator,
  color,
  backgroundColor,
  borderWidth,
  borderRadius,
  width,
  height,
  fontSize,
  fontWeight,
  marginTop,
  justifyContent,
  textAlign,
  padding,
  marginBottom,
  borderColor,
  borderBottomEndRadius,
  borderBottomStartRadius,
}: Props) => {
  const windowStyle = {
    backgroundColor: backgroundColor,
    borderWidth: borderWidth,
    borderRadius: borderRadius,
    width: width,
    height: height,
    marginTop: marginTop,
    justifyContent: justifyContent,
    marginBottom: marginBottom,
    borderColor: borderColor,
    borderBottomEndRadius: borderBottomEndRadius,
    borderBottomStartRadius: borderBottomStartRadius,
  };
  const textStyle = {
    color: color,
    fontSize: fontSize,
    fontWeight: fontWeight,
    textAlign: textAlign,
    padding: padding,
  };
  const formatDecider = (argument: any) => {
    console.log(argument);
    switch (true) {
      case argument === undefined:
        return '';
      case argument?.length === 0:
        return '';
      default:
        return formatNumber(argument);
    }
  };
  return (
    <View style={windowStyle}>
      <Text style={styles.arg}>{formatDecider(arg)}</Text>
      <Text style={textStyle}>{formatDecider(value)}</Text>
    </View>
  );
};

export default CalcWindow;

const styles = StyleSheet.create({
  arg: {
    textAlign: 'right',
    fontSize: 25,
    position: 'relative',
    top: 12,
    paddingRight: 12,
  },
});
