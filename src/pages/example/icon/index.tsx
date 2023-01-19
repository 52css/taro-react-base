import { View, Text } from '@tarojs/components'
import { Icon } from '@/components/index'
import Taro from '@tarojs/taro'
import './index.scss'

function ExampleIcon() {
  const icons = [
    'add-circle',
    'add-rectangle',
    'add',
    'app',
    'arrow-down-rectangle',
    'arrow-down',
    'arrow-left',
    'arrow-right',
    'arrow-up',
    'attach',
    'backtop-rectangle',
    'backtop',
    'backward',
    'barcode',
    'books',
    'browse-off',
    'browse',
    'bulletpoint',
    'calendar',
    'call',
    'caret-down-small',
    'caret-down',
    'caret-left-small',
    'caret-left',
    'caret-right-small',
    'caret-right',
    'caret-up-small',
    'caret-up',
    'cart',
    'chart-bar',
    'chart-bubble',
    'chart-pie',
    'chart',
    'chat',
    'check-circle-filled',
    'check-circle',
    'check-rectangle-filled',
    'check-rectangle',
    'check',
    'chevron-down-circle',
    'chevron-down-rectangle',
    'chevron-down',
    'chevron-left-circle',
    'chevron-left-double',
    'chevron-left-rectangle',
    'chevron-left',
    'chevron-right-circle',
    'chevron-right-double',
    'chevron-right-rectangle',
    'chevron-right',
    'chevron-up-circle',
    'chevron-up-rectangle',
    'chevron-up',
    'circle',
    'clear',
    'close-circle-filled',
    'close-circle',
    'close-rectangle',
    'close',
    'cloud-download',
    'cloud-upload',
    'cloud',
    'code',
    'control-platform',
    'creditcard',
    'dashboard',
    'delete',
    'desktop',
    'discount-filled',
    'discount',
    'download',
    'edit-1',
    'edit',
    'ellipsis',
    'enter',
    'error-circle-filled',
    'error-circle',
    'error',
    'file-add',
    'file-copy',
    'file-excel',
    'file-icon',
    'file-image',
    'file-paste',
    'file-pdf',
    'file-powerpoint',
    'file-unknown',
    'file-word',
    'file',
    'filter-clear',
    'filter',
    'flag',
    'folder-add',
    'folder-open',
    'folder',
    'fork',
    'format-horizontal-align-bottom',
    'format-horizontal-align-center',
    'format-horizontal-align-top',
    'format-vertical-align-center',
    'format-vertical-align-left',
    'format-vertical-align-right',
    'forward',
    'fullscreen-exit',
    'fullscreen',
    'gender-female',
    'gender-male',
    'gift',
    'heart-filled',
    'heart',
    'help-circle-filled',
    'help-circle',
    'help',
    'history',
    'home',
    'hourglass',
    'image-error',
    'image',
    'info-circle-filled',
    'info-circle',
    'internet',
    'jump',
    'laptop',
    'layers',
    'link-unlink',
    'link',
    'loading',
    'location',
    'lock-off',
    'lock-on',
    'login',
    'logo-android',
    'logo-apple-filled',
    'logo-apple',
    'logo-chrome-filled',
    'logo-chrome',
    'logo-codepen',
    'logo-github-filled',
    'logo-github',
    'logo-ie-filled',
    'logo-ie',
    'logo-qq',
    'logo-wechat',
    'logo-wecom',
    'logo-windows-filled',
    'logo-windows',
    'logout',
    'mail',
    'menu-fold',
    'menu-unfold',
    'minus-circle-filled',
    'minus-circle',
    'minus-rectangle',
    'mirror',
    'mobile-vibrate',
    'mobile',
    'money-circle',
    'more',
    'move',
    'next',
    'notification-filled',
    'notification',
    'order-adjustment-column',
    'order-ascending',
    'order-descending',
    'page-first',
    'page-last',
    'pause-circle-filled',
    'photo',
    'pin-filled',
    'pin',
    'play-circle-filled',
    'play-circle-stroke',
    'play-circle',
    'play',
    'poweroff',
    'precise-monitor',
    'previous',
    'print',
    'qrcode',
    'queue',
    'rectangle',
    'refresh',
    'relativity',
    'remove',
    'rollback',
    'rollfront',
    'root-list',
    'rotation',
    'round',
    'save',
    'scan',
    'search',
    'secured',
    'server',
    'service',
    'setting',
    'share',
    'shop',
    'slash',
    'sound',
    'star-filled',
    'star',
    'stop-circle-1',
    'stop-circle-filled',
    'stop-circle',
    'stop',
    'swap-left',
    'swap-right',
    'swap',
    'thumb-down',
    'thumb-up',
    'time-filled',
    'time',
    'tips',
    'tools',
    'unfold-less',
    'unfold-more',
    'upload',
    'usb',
    'user-add',
    'user-avatar',
    'user-circle',
    'user-clear',
    'user-talk',
    'user',
    'usergroup-add',
    'usergroup-clear',
    'usergroup',
    'video',
    'view-column',
    'view-list',
    'view-module',
    'wallet',
    'wifi',
    'zoom-in',
    'zoom-out',
  ]
  const copy = (icon) => {
    Taro.setClipboardData({
      data: `<Icon name='${icon}' size='32rpx' />`,
      success: function () {
        Taro.showToast({
          title: '复制成功',
          icon: 'none'
        })
      }
    })
  }
  return (
    <View className='example-icon'>
      <View className='example-icon__list'>
        {icons.map(icon => (<View className='example-icon__item' key={icon} onClick={() => copy(icon)}>
          <Icon name={icon} size='48rpx' className='test' onClick={() => console.log(22)} />
          <View className='example-icon__name'>
            {icon}
          </View>
        </View>))}
      </View>
    </View>
  );
}

export default ExampleIcon;
