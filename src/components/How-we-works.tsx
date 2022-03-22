import React from 'react'

const HowWeWorks: React.FC = () => {
    return (
        <section className='howweworks'>
            <h1>Как мы работаем?</h1>
            <section className='howweworks__container'>
                <h2>Закупаем материалы</h2>
                <p>Связываемся с производителями из разных стран и заказываем у них мрамор</p>
            </section>
            <section className='howweworks__container'>
                <h2>Обрабатываем мрамор</h2>
                <p>И создаем из него плитки и различные изделия (примеру столешницы и колонны)</p>
            </section>
            <section className='howweworks__container'>
                <h2>Получаем заявки от Вас</h2>
                <p>К примеру на заказ плиток или создание уникального дизайна или Вашей ванной</p>
            </section>
            <section className='howweworks__container'>
                <h2>Учитываем пожелания</h2>
                <p>Мы внимательно относимся к пожеланиям и идеям наших покупателей</p>
            </section>
            <section className='howweworks__container'>
                <h2>Дарим Вам положительные эмоции</h2>
                <p>Качественно выполняем все поставленные Вами задачи и сдаем работу</p>
            </section>
        </section>
    )
}

export default HowWeWorks;