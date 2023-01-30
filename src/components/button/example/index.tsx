import { View, Text } from '@tarojs/components';
import { Icon, Button } from '@/components/index'

function Example() {
  return (
    <View className='example'>
      <View className='example__block'>
        <Button size='large' shape='rectangle' theme='primary' block>
          强按钮
        </Button>
        <Button size='large' theme='primary' shape='rectangle' variant='outline' block>
          弱按钮
        </Button>
        <Button size='large' variant='outline' shape='rectangle' block>
          次按钮
        </Button>
        <Button icon={<Icon name='app' />} shape='rectangle' theme='primary' block>
          带图标按钮
        </Button>
        <Button size='large' theme='danger' shape='rectangle' block>
          强警告按钮
        </Button>
        <Button size='large' theme='danger' shape='rectangle' variant='outline' block>
          弱警告按钮
        </Button>
      </View>
      <View style={{ background: '#a6a6a6', padding: '8px 16px', marginBottom: '16px' }}>
        <Button size='large' shape='rectangle' variant='outline' ghost block>
          幽灵按钮
        </Button>
      </View>
      <View className='margin-button'>
        <Button size='large' shape='rectangle' theme='primary' variant='text' block>
          文字按钮
        </Button>
      </View>
    </View>
  );
}

definePageConfig({
  navigationBarTitleText: 'Button 按钮'
})

export default Example;
