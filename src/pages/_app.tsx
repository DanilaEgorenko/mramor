import React from 'react'
import dynamic from 'next/dynamic'
import { AppProps } from 'next/app'

import Loader from '../components/Loader'
import Menu from '../layouts/Menu'

const Icons = dynamic(() => import('../layouts/Icons'))
const Footer = dynamic(() => import('../layouts/Footer'), { loading: () => <Loader /> })

import '../styles/index.css'
import '../styles/pages/Item.css'
import '../styles/pages/About-us.css'
import '../styles/pages/404.css'
import '../styles/pages/Payment.css'
import '../styles/pages/Services.css'
import '../styles/pages/Works.css'

import '../styles/components/Filter-goods.css'
import '../styles/components/Good-wrapper.css'
import '../styles/components/Goods-container.css'
import '../styles/components/Header.css'
import '../styles/components/How-we-works.css'
import '../styles/components/Email.css'
import '../styles/components/Loader.css'

import '../styles/layouts/Footer.css'
import '../styles/layouts/Icons.css'
import '../styles/layouts/Menu.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <>
            <Icons />
            <Menu />
            <Component {...pageProps} />
            <Footer />
        </>
    )
}

export default MyApp;

// фильтры, поиск, приоритет
// несколько фото у товаров
// корзина
// тесты