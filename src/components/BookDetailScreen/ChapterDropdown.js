import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import ChapterList from './Chapterlist';
import theme from '../../theme';

const ChapterDropdown = ({ chapters, bookId }) => { // bookId prop'u alınıyor
  const groupSize = 10;
  const [selectedGroup, setSelectedGroup] = useState(0);

  const groupChapters = (chapters, groupSize) => {
    const groups = [];
    for (let i = 0; i < chapters.length; i += groupSize) {
      groups.push(chapters.slice(i, i + groupSize));
    }
    return groups;
  };

  const chapterGroups = groupChapters(chapters, groupSize);

  return (
    <View style={styles.container}>
      <Picker
        selectedValue={selectedGroup}
        onValueChange={(itemValue) => setSelectedGroup(itemValue)}
        style={styles.picker}
        itemStyle={styles.pickerItem}
        mode="dropdown"
      >
        {chapterGroups.map((_, index) => (
          <Picker.Item
            key={index}
            label={`Chapters ${index * groupSize + 1}-${Math.min((index + 1) * groupSize, chapters.length)}`}
            value={index}
          />
        ))}
      </Picker>

      <ChapterList
        chapters={chapterGroups[selectedGroup]}
        bookId={bookId} // bookId burada iletiliyor
      />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    paddingHorizontal: theme.spacing.medium,
  },
  picker: {
    backgroundColor: theme.colors.surface,
    color: theme.colors.text,
    marginBottom: theme.spacing.medium,
    borderRadius: 8, // Android için köşe yumuşatma
  },
  pickerItem: {
    color: theme.colors.text, // iOS yazı rengini kontrol eder
    fontSize: theme.fontSizes.medium,
  },
});

export default ChapterDropdown;
