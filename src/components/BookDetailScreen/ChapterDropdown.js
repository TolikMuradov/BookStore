import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import ChapterList from './Chapterlist';
import theme from '../../theme';

const ChapterDropdown = ({ chapters }) => {
  const groupSize = 10; // Her grup 10 chapter içerecek
  const [selectedGroup, setSelectedGroup] = useState(0);

  // Chapter'ları gruplandırma
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
      {/* Dropdown Picker */}
      <Picker
        selectedValue={selectedGroup}
        onValueChange={(itemValue) => setSelectedGroup(itemValue)}
        style={styles.picker}
        itemStyle={styles.pickerItem} // iOS yazı rengini kontrol eder
        mode="dropdown" // iOS için dropdown görünümü sağlar
      >
        {chapterGroups.map((_, index) => (
          <Picker.Item
            key={index}
            label={`Chapters ${index * groupSize + 1}-${Math.min((index + 1) * groupSize, chapters.length)}`}
            value={index}
          />
        ))}
      </Picker>

      {/* Seçilen grup */}
      <ChapterList chapters={chapterGroups[selectedGroup]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    padding: theme.spacing.medium,
  },
  picker: {
    backgroundColor: theme.colors.surface,
    color: theme.colors.text, // Android yazı rengini kontrol eder
    
    marginVertical: -10, // Dikey marginleri sıfırlar
  },
  pickerItem: {
    color: theme.colors.text, // iOS yazı rengini kontrol eder
    fontSize: theme.fontSizes.medium,
  },
});

export default ChapterDropdown;
