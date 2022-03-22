import React from 'react'
import Link from 'next/link'

import Good from '../interfaces/good'

const GoodsWrapper: React.FC<Good> = ({ srcImg, name, price, oldPrice }: Good) => {
    return (
        <Link href={`/${name}`}>
            <section className='good'>
                <div className='good__img' style={{ backgroundImage: `url(${srcImg})` }}></div>
                <h2 className='good__name'>{name}</h2>
                <p className='good__price'>{price} <s>{oldPrice}</s> р.</p>
                <button className='good__button'>В корзину</button>
            </section>
        </Link>
    )
}

export default GoodsWrapper;