import React from 'react'

import Title from '../layouts/CustomTitle'

const Services: React.FC = () => {
    return (
        <>
            <Title>Услуги</Title>

            <main className='services'>
                <h1>Услуги</h1>
                <hr />
                <h2>Компания «mramor», кроме продажи изделий, предлагает ряд дополнительных услуг, которые могут помочь Вам в обустройстве Вашего жилища или объекта строительства, ведь профессиональная помощь никогда не будет лишней</h2>
                <hr />
                <div className='services__wrapper'>
                    <div className='services__container'>
                        <div className='services__container_img'></div>
                        <div className='services__container_text'>
                            <h2>Разработка проектов и дизайна</h2>
                            <p>Наша команда дизайнеров поможет Вам создать уникальный дизайн интерьера. Также мы можем помочь сделать так, чтобы любой желаемый предмет из мрамора выглядел в Вашем интерьере гармонично</p>
                        </div>
                    </div>
                    <div className='services__container'>
                        <div className='services__container_img'></div>
                        <div className='services__container_text'>
                            <h2>Производство изделий</h2>
                            <p>Мы готовы изготовить для Вас эксклюзивные изделия из мрамора. К примеру столешницы, камины, умывальники, плитки, колонны, мебель, малые архитектурные формы и многое другое</p>
                        </div>
                    </div>
                    <div className='services__container'>
                        <div className='services__container_img'></div>
                        <div className='services__container_text'>
                            <h2>Монтаж и послемонтажное обслуживание</h2>
                            <ul>
                                <li>Сборка</li>
                                <li>Резка</li>
                                <li>Укладка</li>
                                <li>Полировка</li>
                                <li>Реставрация</li>
                                <li>Монтаж плитки/изделий</li>
                            </ul>
                        </div>
                    </div>
                    <div className='services__container'>
                        <div className='services__container_img'></div>
                        <div className='services__container_text'>
                            <h2>Подбор и доставка мрамора</h2>
                            <p>Мы являемся прямыми поставщиками мрамора из стран происхождения. Также мы проводим консультации по выбору плитки. На них вы сможете узнать, какой мрамор лучше всего подходит для Вашего интерьера</p>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Services;