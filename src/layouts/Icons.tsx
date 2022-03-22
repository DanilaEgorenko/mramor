import React from 'react'
import Image from 'next/image'

const Icons: React.FC = () => {
    return (
        <address className='icons'>
            <a href='tel:88005553535'>
                <Image src='/assets/call.svg' alt='Позвонить' width='40px' height='40px' />
            </a>
            <a href='mailto:unknown@gmail.com' target='_blank' rel='noreferrer'>
                <Image src='/assets/email.svg' alt='Написать на почту' width='40px' height='40px' />
            </a>
            <a href='https://goo.gl/maps/xizKAz47fPJpVSKW8' target='_blank' rel='noreferrer'>
                <Image src='/assets/location.svg' alt='Найти на карте' width='40px' height='40px' />
            </a>
        </address >
    )
}

export default Icons;