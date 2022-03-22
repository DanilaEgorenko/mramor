import React from 'react'
import Head from 'next/head'

import Header from '../components/Header'
import GoodsContainer from '../components/Goods-container'

const Main: React.FC = () => {
  return (
    <>
      <Head>
        <title>MRAMOR</title>
      </Head>
      <Header />
      <GoodsContainer />
    </>
  );
}

export default Main;
