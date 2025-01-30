'use client'

import { MainBanner } from '@/components/banner/main-banner'
import { NikeCard } from '@/components/nikeCard'
import React from 'react'
import styled from 'styled-components'

const AppContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const producerPage = () => {
  return (
    <>
        {/* <AppContainer>
            <NikeCard  name={"Nike"} price={550} />    
        </AppContainer>    */}    

        <MainBanner/>
    </>
  )
}

export default producerPage