import React, { useEffect, useState } from 'react';

import useInterval from '../hooks/useInterval';
import Title from '../layouts/CustomTitle';

const Works: React.FC = () => {

    const [slide, setSlide] = useState(1)

    const decrement = () => setSlide(slide => slide > 1 ? slide - 1 : 4)
    const increment = () => setSlide(slide => slide < 4 ? slide + 1 : 1)

    document.addEventListener('keydown', (e: KeyboardEvent) => {
        if (e.keyCode === 39) increment()
        if (e.keyCode === 37) decrement()
    })

    useInterval(increment, 5000)

    useEffect(() => {
        document.querySelectorAll('.slider__button_demo').forEach(item => item.classList.remove('active'))
        document.querySelectorAll('.slider__button_demo')[slide - 1]?.classList.add('active')
        document.querySelectorAll('.slider__wrapper_demo').forEach(item => item.classList.remove('active'))
        document.querySelectorAll('.slider__wrapper_demo')[slide - 1]?.classList.add('active')
    }, [slide])

    return (
        <>
            <Title>Наши работы</Title>

            < main className='slider' >
                <h1>Наши работы</h1>
                <hr />
                <div className='slider__wrapper'>
                    <div className='slider__wrapper_demo'></div>
                    <div className='slider__wrapper_demo'></div>
                    <div className='slider__wrapper_demo'></div>
                    <div className='slider__wrapper_demo'></div>
                </div>

                <button
                    className='slider__button slider__button_left'
                    onClick={decrement}
                >
                    &#60;
                </button>
                <button
                    className='slider__button slider__button_right'
                    onClick={increment}
                >
                    &#62;
                </button>

                <div className='slider__button_demos'>
                    <button
                        className='slider__button_demo'
                        onClick={() => setSlide(1)}
                    ></button>
                    <button
                        className='slider__button_demo'
                        onClick={() => setSlide(2)}
                    ></button>
                    <button
                        className='slider__button_demo'
                        onClick={() => setSlide(3)}
                    ></button>
                    <button
                        className='slider__button_demo'
                        onClick={() => setSlide(4)}
                    ></button>
                </div>
            </main >
        </>
    )
}

export default Works;