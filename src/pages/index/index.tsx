import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.styl'
import Taro from '@tarojs/taro'

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  handleDetailRouter() {
    Taro.navigateTo({
      url: '/pages/detail/detail'
    })
  }

  render () {
    return (
      <View className='index'>
        <View
          className='index-detail-button'
          onClick={this.handleDetailRouter}
        >
          点击跳转详情页
        </View>
      </View>
    )
  }
}
