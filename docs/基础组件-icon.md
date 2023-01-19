# 基础组件-icon

## 制作图标字体

1. 设计提供svg图标
2. https://www.iconfont.cn/ 新建项目
3. 上传图片
4. 转成字体，第一次需要等待10分支审核

## 开发图片字体

1. 考虑传递对应name来控制显示对应图标
2. 考虑通过size来控制图片字体大小
3. 考虑兼容className 和 onClick 事件

整体代码如下，采用hooks写代码，感觉简介了很多

```js
import { View, Text } from '@tarojs/components';
import classNames from 'classnames'
import {addUnit} from '@/utils/index'
import './index.scss';

export interface IProps {
  name: string;
  size?: string | number;
  className?: string;
  onClick?: () => void;
}

function Icon({name = 'app', size = '32rpx', className, onClick}: IProps) {
  return (
    <Text className={classNames(['icon', `icon-${name}`, className])} style={{fontSize: addUnit(size)}} onClick={onClick} />
  );
}

export default Icon;
```
