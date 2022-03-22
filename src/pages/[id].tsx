import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router'

import Loader from '../components/Loader'
import NotFound from './404'
import Title from '../layouts/CustomTitle'

import { getDataByName } from '../utils/mock-server'

const Item: React.FC = () => {
    const [isLoading, setIsLoading] = useState(true)
    // eslint-disable-next-line no-undef
    const [itemData, setItemData] = useState<Awaited<ReturnType<typeof getDataByName>>>()

    const { id } = useRouter().query

    useEffect(() => {
        getDataByName(Array.isArray(id) ? id[0] : id).then(itemData => {
            setItemData(itemData)
            setIsLoading(false)
        })
    }, [id])

    const PageItem = () => {
        // eslint-disable-next-line no-undef
        const { srcImg, name, price, oldPrice, title, sizes, thickness, country, colors } = itemData as Exclude<Awaited<ReturnType<typeof getDataByName>>, undefined>

        return (
            <main>
                <div className='item'>
                    <div
                        className='item__img'
                        style={{ backgroundImage: `url(${Array.isArray(srcImg) ? srcImg[0] : srcImg})` }}
                    ></div>
                    <div className='item__text'>
                        <h1 className='item__name'>{name}</h1>
                        <h2 className='item__price'>{price} <s>{oldPrice}</s> р.</h2>
                        <h2 className='item__title'>{title}</h2>
                        <select className='item__sizes' name='selectSizes' defaultValue={sizes[0]}>
                            {sizes.map(item => {
                                return <option key={item} value={item}>{item} x {item}</option>
                            })
                            }
                        </select>
                        <select className='item__colors' name='selectColors' defaultValue={colors[0]}>
                            {colors.map(item => {
                                return <option key={item} value={item}>{item}</option>
                            })
                            }
                        </select>
                        <p className='item__thickness'>Толщина: {thickness} мм</p>
                        <p className='item__country'>Страна: {country}</p>
                        <button className='item__cart'>В корзину</button>
                    </div>
                </div>
            </main>
        )
    }

    return (
        <>
            <Title>{Array.isArray(id) ? id[0] : id}</Title>

            <button
                className='back'
                onClick={() => window.history.back()}
            >
                &#8592; Назад
            </button>

            {isLoading && <main>
                <div className='item'>
                    <Loader />
                </div>
            </main>}
            {!isLoading && !itemData && <NotFound />}
            {!isLoading && itemData && <PageItem />}
        </>
    )
}

export default Item;