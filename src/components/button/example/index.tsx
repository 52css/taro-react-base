import { View, Text } from '@tarojs/components';
import { Icon, Button } from '@/components/index'

function Example() {
  return (
    <View className='example'>
      <View className='example__block'>
        <Button size='large' shape='rectangle' theme='primary' block className='test'>
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
      <View className='flex align-center margin-right'>
        <Button size='large' icon={<Icon name='app' />} shape='rectangle' theme='primary'>
          图标按钮
        </Button>
        <Button size='large' icon={<Icon name='app' />} shape='round' theme='primary'>
          图标按钮
        </Button>
      </View>
      <View className='flex align-center margin-right'>
        <Button size='large' icon={<Icon name='app' />} shape='square' theme='primary'></Button>
        <Button size='large' icon={<Icon name='app' />} shape='circle' theme='primary'></Button>
      </View>
      <View className='button-demo flex'>
        <Button size='large' shape='square' theme='primary' loading></Button>
        <Button size='large' shape='rectangle' theme='primary' loading>
          加载中...
        </Button>
      </View>
      <View className='flex align-center margin-right'>
        <Button size='large' shape='rectangle' theme='primary'>按钮 44</Button>
        <Button shape='rectangle' theme='primary'>按钮 40</Button>
        <Button size='small' shape='rectangle' theme='primary'>按钮 36</Button>
      </View>
    </View>
  );
}

definePageConfig({
  navigationBarTitleText: 'Button 按钮'
})

export default Example;
