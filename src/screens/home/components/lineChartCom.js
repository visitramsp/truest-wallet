import React from 'react';
import {View, StyleSheet} from 'react-native';
import {LineChart, Grid} from 'react-native-svg-charts';
import * as shape from 'd3-shape';

const LineChartExample = () => {
  const data = [50, 10, 40, 95, 85, 91, 35, 53, 24, 50];

  return (
    <View style={styles.container}>
      <LineChart
        style={{height: 200}}
        data={data}
        svg={{stroke: '#3A86FF', strokeWidth: 2}}
        contentInset={{top: 20, bottom: 20}}
        curve={shape.curveMonotoneX}>
        <Grid />
      </LineChart>
    </View>
  );
};

export default LineChartExample;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#0A0A0A',
  },
});
