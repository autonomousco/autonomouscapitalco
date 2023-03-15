/**
 * Created by zhongdong on 2023/2/25
 * Url :
 */

import React, { useEffect } from 'react'
import RequestInfoBtn from '@/components/request-info-btn'
import CodeHighlight from '@/components/codeHighlight'

import './index.scss'

const Content = () => {
  useEffect(() => {
    require('@/lazy')
  }, [])
  return (
    <div id='content'>
      <div id='c1' data-lazy>
        <div className='img' data-lazy/>
        <p className='p1'>Our Vision & Solutions</p>
        <p className='p2'>Autonomous adopts a combination of cutting-edge technology and a systematic approach to investment management</p>
        <p className='p3'>Our Platform-as-a-Service model and suite of Digital Investable Strategies enable investors to easily access investment opportunities</p>
      </div>
      <div id='c2' data-lazy>
        <div className='img' data-lazy/>
        <p className='p1'>Digital Investible Strategies</p>
        <p className='p2'>Stay informed and in control</p>
        <p className='p3'>Our investment platform provides plug-and-play access to institutional-grade investable strategy suite</p>
      </div>
      <div id='c3' data-lazy>
        <div className='img' data-lazy/>
        <p className='p1'>Our Technology</p>
        <p className='p2'>Full stack investment automation platform via cloud-based portal, streaming and RESTful API</p>
        <p className='p3'>Autonomous provides everything you need to create and manage a complete digital asset portfolio across multiple venues</p>
        <p className='p4'>We are building modularized investment and trading infrastructure that combines leading technology and financial science</p>
        <CodeHighlight/>
      </div>
      <div id='c4'>
        <p className='p1'>Your trusted partner in<br/>Digital Investment Solutions</p>
        <p className='p2'>Jump start your digital investment journey</p>
        <RequestInfoBtn/>
      </div>
    </div>
  )
}


export default Content