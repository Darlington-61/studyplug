import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, StatusBar, Platform, View, ActivityIndicator, Text } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#004D40" />
      <WebView
        source={{ uri: 'https://studyplug.com.ng' }}
        style={styles.webview}
        allowsBackForwardNavigationGestures
        domStorageEnabled={true}
        javaScriptEnabled={true}
        cacheEnabled={true}
        startInLoadingState={true}
        scalesPageToFit={true}
        onLoadEnd={() => setLoading(false)}
        renderLoading={() => (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#FFD600" />
            <Text style={styles.loadingText}>Loading StudyPlug...</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#004D40',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  webview: {
    flex: 1,
    backgroundColor: '#004D40',
  },
  loadingContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#004D40',
  },
  loadingText: {
    marginTop: 12,
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 14,
  },
});
