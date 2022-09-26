import {StyleSheet, Text, View, Dimensions, Pressable} from 'react-native';
import React from 'react';
import Video from 'react-native-video';
import LinearGradient from 'react-native-linear-gradient';

const dayVideo = {
  uri: 'https://vod-progressive.akamaized.net/exp=1664217073~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F1313%2F18%2F456567423%2F2014598378.mp4~hmac=9e204042a1a81f845e0a2dd5bdad9917715664a0f3fd9616bdde0f0d5826a1db/vimeo-prod-skyfire-std-us/01/1313/18/456567423/2014598378.mp4',
};
const nightVideo = {
  uri: 'https://vod-progressive.akamaized.net/exp=1664217267~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F4730%2F20%2F523652620%2F2451507059.mp4~hmac=9daccc57a9da8bf73b60ed900987c15e0be8f87b38f2fd05178bea171542393f/vimeo-prod-skyfire-std-us/01/4730/20/523652620/2451507059.mp4',
};

const Welcome = () => {
  const {height, width} = Dimensions.get('window');
  const [day, setDay] = React.useState(true);

  React.useEffect(() => {
    let time = new Date().getHours();
    time >= 6 && time <= 17 ? setDay(true) : setDay(false);
  }, []);

  return (
    <>
      <Video
        source={day ? dayVideo : nightVideo}
        style={{...styles.backgroundVideo, height: height}}
        muted={true}
        repeat={true}
        resizeMode={'cover'}
        rate={day ? 1 : 0.5}
        ignoreSilentSwitch={'obey'}
      />
      <LinearGradient
        colors={['rgba(0,0,0,0.8)', 'transparent', 'rgba(0,0,0,0.8)']}
        style={{...styles.linearGradient}}>
        <View style={{...styles.container}}>
          <View style={styles.logoContainer}>
            <Text style={{...styles.logoText}}>Friends</Text>
          </View>
          <View style={{...styles.buttonContainer}}>
            <Text style={{...styles.description}}>Welcome to Friends</Text>
            <Pressable style={{...styles.button, width: 0.8 * width}}>
              <Text style={{...styles.buttonText}}>CONTINUE</Text>
            </Pressable>
          </View>
        </View>
      </LinearGradient>
    </>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    alignItems: 'stretch',
    bottom: 0,
    right: 0,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 100,
  },
  logoContainer: {
    flex: 1,
  },
  logoText: {
    fontSize: 64,
    fontFamily: 'Pacifico-Regular',
    color: 'white',
    zIndex: 10,
  },
  buttonContainer: {
    marginBottom: 40,
    alignItems: 'center',
  },
  description: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 10,
  },
  button: {
    paddingVertical: 15,
    backgroundColor: 'gold',
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonText: {
    fontWeight: 'bold',
  },
  linearGradient: {
    flex: 1,
  },
});
