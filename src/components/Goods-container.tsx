import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

import FilterGoods from './Filter-goods'
import Loader from './Loader'

import { getData } from '../utils/mock-server'

const GoodsWrapper = dynamic(() => import('./Good-wrapper'), { loading: () => <Loader /> })
const Email = dynamic(() => import('../components/Email'), { loading: () => <Loader /> })

const GoodsContainer: React.FC = () => {
    const [isLoading, setIsLoading] = useState(true)
    // eslint-disable-next-line no-undef
    const [goodsData, setItemData] = useState<Exclude<Awaited<ReturnType<typeof getData>>, undefined>>([])
    const [storageEmail, setStorageEmail] = useState<string | null>(null)

    useEffect(() => {
        getData().then(goodsData => {
            setItemData(goodsData)
            setIsLoading(false)
        })
    }, [])

    useEffect(() => {
        setStorageEmail(localStorage.getItem('email'))
    }, [])

    return (
        <main>
            <h2>Все товары</h2>
            <hr />
            <FilterGoods />

            <section className='goods'>
                {isLoading && <Loader />}
                {!isLoading &&
                    goodsData.map(good => {
                        const { srcImg, name, price, oldPrice } = good

                        return <GoodsWrapper
                            key={name}
                            srcImg={Array.isArray(srcImg) ? srcImg[0] : srcImg}
                            name={name}
                            price={price}
                            oldPrice={oldPrice}
                        />
                    })
                }
            </section>
            {!storageEmail && <Email setStorageEmail={setStorageEmail} />}
        </main >
    )
}

export default GoodsContainer;