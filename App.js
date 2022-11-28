import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ToastAndroid, View } from 'react-native';

// Components
import Button from './components/Button';
import ImageViewer from './components/ImageViewer';
import CircleButton from './components/CircleButton';
import IconButton from './components/IconButton';
import EmojiPicker from './components/EmojiPicker';

// to select images and videos from the phone's library or take a photo with the camera.
import * as ImagePicker from 'expo-image-picker';

const placeHolderImage = require('./assets/images/background-image.png');

const App = () => {
  // The modal is hidden until the user presses the 'CircleButton' to open it.
  const [isModalVisible, setIsModalVisible] = useState(false);

  /**
   * To show or hide buttons that open the modal alongside a few other options
   * When the app screen loads, set it to 'false' so that the options are not shown before picking an image.
   */
  const [showAppOptions, setShowAppOptions] = useState(false);

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

      // After selecting the image, set the App options to true.
      setShowAppOptions(true);
    } else {
      ToastAndroid.show('You did not select any image.', ToastAndroid.SHORT);
    }
  };

  // 'onReset' function to reset the app or back to the image picker button again
  const onReset = () => {
    setShowAppOptions(false);
  };

  // This will open the emoji picker modal
  const onAddSticker = () => {
    setIsModalVisible(true);
  };

  // To close the modal
  const onModalClose = () => {
    setIsModalVisible(false);
  };

  const onSaveImageAsync = () => {
    // we will implement this later
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer
          placeHolderImageSource={placeHolderImage}
          selectedImage={selectedImage}
        />
      </View>

      {/* Based on the value of showAppOptions, the buttons will be displayed. */}
      {showAppOptions ? (
        <View style={styles.optionsContainer}>
          <View style={styles.optionsRow}>
            <IconButton icon='refresh' label='Reset' onPress={onReset} />
            <CircleButton onPress={onAddSticker} />
            <IconButton
              icon='save-alt'
              label='Save'
              onPress={onSaveImageAsync}
            />
          </View>
        </View>
      ) : (
        <View style={styles.footerContainer}>
          <Button
            theme='Primary'
            label='Choose a photo'
            onPress={pickImageAsync}
          />
          <Button
            label='Use this photo'
            onPress={() => setShowAppOptions(true)}
          />
        </View>
      )}

      <EmojiPicker
        isVisible={isModalVisible}
        onClose={onModalClose}
      ></EmojiPicker>

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

  optionsContainer: {
    position: 'absolute',
    bottom: 80,
  },

  optionsRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
});

export default App;
