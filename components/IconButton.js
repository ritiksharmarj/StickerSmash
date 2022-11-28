import { StyleSheet, Text, Pressable } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const IconButton = ({ icon, label, onPress }) => {
  return (
    <Pressable style={styles.iconButton} onPress={onPress}>
      <MaterialIcons name={icon} size={24} color='#ffffff' />
      <Text style={styles.iconButtonLabel}>{label}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  iconButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  iconButtonLabel: {
    color: '#ffffff',
    marginTop: 12,
  },
});

export default IconButton;
