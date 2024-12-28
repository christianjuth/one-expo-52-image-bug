import { Text, View } from 'react-native'
import { Image } from "expo-image";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100%',
      }}
    >
      <Text>Hello world, from One</Text>
      <Image />
    </View>
  )
}
