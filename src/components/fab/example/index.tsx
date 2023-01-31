import { View, Text } from '@tarojs/components'
import { Fab, Icon } from '@/components/index'
import './index.scss'

definePageConfig({
  navigationBarTitleText: 'Fab 悬浮按钮'
})

export default function () {
  const onClick = (e) => {
    console.log('click Fab', e);
  };
  return (
    <>
      <Fab icon={<Icon name="add" />} onClick={onClick} />
      {/* <Fab
        icon={<Icon name="add" />}
        text="按钮文字"
        style={{ right: '16px', bottom: '32px' }}
        buttonProps={{ variant: 'outline' }}
        onClick={onClick}
      /> */}
    </>
  );
}
