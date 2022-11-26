import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import Button from './components/Button';
import ImageViewer from './components/ImageViewer';

const placeHolderImage = require('./assets/images/background-image.png');

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer placeHolderImageSource={placeHolderImage} />
      </View>

      <View style={styles.footerContainer}>
        <Button theme='Primary' label='Choose a photo' />
        <Button label='Use this photo' />
      </View>
      <StatusBar style='auto' />
    </View>
  );
};

// React Native Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },

  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },

  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
});

export default App;
