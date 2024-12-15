import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import RenderHtml from 'react-native-render-html';
import theme from '../../theme';
import { Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

const BookDescription = ({ description }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Description</Text>
      <View style={[styles.descriptionWrapper, isExpanded && styles.expanded]}>
        <RenderHtml
          contentWidth={width}
          source={{ html: description }}
          baseStyle={styles.description}
        />
      </View>
      <TouchableOpacity style={styles.toggleButton} onPress={toggleDescription}>
        <Ionicons 
          name={isExpanded ? "chevron-up" : "chevron-down"} 
          size={20} 
          color={theme.colors.main} 
        />
        <Text style={styles.toggleText}>
          {isExpanded ? 'Hide Description' : 'Show Full Description'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    marginVertical: theme.spacing.large,
    paddingHorizontal: theme.spacing.medium,
  },
  title: {
    fontSize: theme.fontSizes.medium,
    color: theme.colors.text,
    fontWeight: 'bold',
    marginBottom: theme.spacing.small,
  },
  descriptionWrapper: {
    height: 100,
    overflow: 'hidden',
  },
  expanded: {
    height: 'auto',
  },
  description: {
    color: theme.colors.text,
    lineHeight: 22,
  },
  toggleButton: {
    alignItems: 'center',
    marginTop: theme.spacing.small,
  },
  toggleText: {
    fontSize: theme.fontSizes.small,
    color: theme.colors.main,
    marginLeft: theme.spacing.small,
  },
});

export default BookDescription;
