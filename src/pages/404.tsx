import React from 'react'

import Title from '../layouts/customTitle'

const NotFound: React.FC = () => {
    return (
        <>
            <Title>Ошибка 404</Title>

            <main>
                <div className='pageNotFound'>
                    <h2 className='pageNotFound__text'>Такого товара не существует 🤔</h2>
                </div>
            </main>
        </>
    )
}

export default NotFound;