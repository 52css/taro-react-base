import { View, Text } from '@tarojs/components'
import { useRouter } from '@tarojs/taro'

function About() {
  const router = useRouter()

  console.log('router', router)
  return (
    <View>
      About
    </View>
  );
}

export default About;
