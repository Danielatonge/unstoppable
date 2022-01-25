import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Amplify, { Auth, API, graphqlOperation } from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react-native'

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import awsconfig from './src/aws-exports';
import { useEffect } from 'react';
import { getUser } from './src/graphql/queries';
import { createUser } from './src/graphql/mutations';
import { CreateUserInput } from './src/API';


Amplify.configure(awsconfig);
Auth.configure(awsconfig);

function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  const getRandomImage = () => {
    return 'https://picsum.photos/500/500'
  };

  const createUserInDB = async (user:CreateUserInput) => {
    console.log(user)
    //write mutation to post new user
    await API.graphql(graphqlOperation(createUser, {input: user}))
  };

  // hook will be called only when component mounts
  useEffect(() => {
    const updateUser = async () => {
      // Get current authenticated user
      const userInfo = await Auth.currentAuthenticatedUser({bypassCache: true})
      // console.log(userInfo)

      if (userInfo) {
        //write query to get user
        // Check if user is already exists
        const userData = await API.graphql(graphqlOperation(getUser, {id: userInfo.attributes.sub}))
        // console.log(userData)

        if(userData.data.getUser) {
          console.log("user exists")
        } else {
          const user = {
            id: userInfo.attributes.sub,
            username: userInfo.username,
            name: userInfo.username,
            email: userInfo.attributes.email,
            image: getRandomImage()
          }
          // create user
          await createUserInDB(user)
        }
      }
      // If not, create new user
    }

    updateUser();
  }, [])

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}

export default withAuthenticator(App);