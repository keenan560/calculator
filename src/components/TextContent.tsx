import React from 'react';
import {View, Text} from 'react-native';

type Props = {
  value: string | number;
  fontSize: number | undefined;
  color: string | undefined;
  fontWeight: string;
  marginBottom: number | undefined;
  marginTop: number | undefined;
  textAlign: string | undefined;
  marginRight: string | undefined;
};

const TextContent = ({
  value,
  fontSize,
  color,
  fontWeight,
  marginBottom,
  marginTop,
  textAlign,
  marginRight,
}: Props) => {
  const styles = {
    fontSize: fontSize,
    color: color,
    fontWeight: fontWeight,
    marginBottom: marginBottom,
    marginTop: marginTop,
    textAlign: textAlign,
    marginRight: marginRight,
  };
  return (
    <View>
      <Text style={styles}>{value}</Text>
    </View>
  );
};

export default TextContent;
