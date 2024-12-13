import * as Linking from 'expo-linking';
import { useEffect, useState } from 'react';

function App() {
  const [initialUrl, setInitialUrl] = useState(null);

  useEffect(() => {
    async function getInitialURL(){
      try {
        const url = await Linking.getInitialURL();
        setInitialUrl(url);
        console.log('Initial URL:', url);
      } catch (error) {
        console.error('Error getting initial URL:', error);
        setInitialUrl(null);
      }
    }
    getInitialURL(); 
  }, []);

  return (
    <View>
      {initialUrl ? (
        <Text>App launched with URL: {initialUrl}</Text>
      ) : (
        <Text>No initial URL found.</Text>
      )}
    </View>
  );
}

export default App; 