import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

// Components
import Button from './components/Button';
import ImageViewer from './components/ImageViewer';

// to select images and videos from the phone's library or take a photo with the camera.
import * as ImagePicker from 'expo-image-picker';

const placeHolderImage = require('./assets/images/background-image.png');

const App = () => {
  // use this state variable to hold the URI of the selected image
  const [selectedImage, setSelectedImage] = useState(null);

  // 'pickImageAsync' function to launch the device's image library
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    } else {
      alert('You did not select any image.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer
          placeHolderImageSource={placeHolderImage}
          selectedImage={selectedImage}
        />
      </View>

      <View style={styles.footerContainer}>
        <Button
          theme='Primary'
          label='Choose a photo'
          onPress={pickImageAsync}
        />
        <Button label='Use this photo' />
      </View>
      <StatusBar style='light' />
    </View>
  );
};

// Styles
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
