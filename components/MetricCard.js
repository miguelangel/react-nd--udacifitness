import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import DateHeader from './DateHeader';
import {getMetricMetaInfo} from '../utils/helpers';
import {gray} from '../utils/colors';

const MetricCard = ({date, metrics}) => (
  <View>
    {date && <DateHeader date={date} />}
    {Object.keys(metrics).map((metric) => {
      const {getIcon, displayName, unit} =
        getMetricMetaInfo(metric);

      return (
        <View style={styles.metric} key={metric}>
          {getIcon()}
          <View>
            <Text style={{fontSize: 20}}>
              {displayName}
            </Text>

            <Text style={{fontSize: 16, color: gray}}>
              {metrics[metric]} {unit}
            </Text>
          </View>
        </View>
      );
    })}
  </View>
);

MetricCard.propTypes = {
  date: PropTypes.string.isRequired,
  metrics: PropTypes.object.isRequired
};

const styles = StyleSheet.create({
  metric: {
    flexDirection: 'row',
    marginTop: 12
  }
});

export default MetricCard;
