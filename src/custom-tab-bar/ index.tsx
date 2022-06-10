import { CoverImage, CoverView } from '@tarojs/components'
import Taro from '@tarojs/taro'

import { useEffect, useState } from 'react'
import config from '../app.config'
import './index.scss'

const isEqualPath = (a: string, b: string) => (a || '').replace(/^\//, '') === (b || '').replace(/^\//, '')

const switchTo = (path) => () => {
  Taro.switchTab({
    url: `/${path}`,
  })
}

function CustomTabbar() {
  const [path, setPath] = useState(Taro.getCurrentInstance().router.path)

  return (
    <CoverView className='tabbar'>
      <CoverView className='tabbar-order' />
      {config.tabBar.list.map((item, index) => {
        const isSelected = isEqualPath(path, item.pagePath)

        return (
          <CoverView
            className={['tabbar-item', 
            isSelected?'tabbar-item__selected':null ,
        ].filter(Boolean).join(' ')}
            key={index}
            onClick={switchTo(item.pagePath)}
          >
           
            <CoverView className='tabbar-item__text'>{item.text}</CoverView>
          </CoverView>
        )
      })}
    </CoverView>
  )
}

export default CustomTabbar
