import React, { useState, useCallback, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

const Menu: React.FC = () => {
    const [activeMenu, setActiveMenu] = useState(false)

    const toggle = useCallback(() => {
        setActiveMenu(state => !state)
    }, [setActiveMenu])

    useEffect(() => {
        document.body.style.overflow = activeMenu ? 'hidden' : 'visible'
    }, [activeMenu])

    let activeClassStyles = activeMenu ? 'active' : ''

    const links = [
        { to: '/', text: 'Главная', tagText: 'MRAMOR' },
        { to: '/works', text: 'Наши работы' },
        { to: '/service', text: 'Услуги' },
        { to: '/payment', text: 'Оплата' },
        { to: '/about', text: 'О компании' }
    ]

    return (
        <>
            <button title='Меню' className={`menu__toggle ${activeClassStyles}`} onClick={toggle}>
                <span></span>
                <span></span>
                <span></span>
            </button>
            <nav className={`menu ${activeClassStyles}`}>
                {
                    links.map(link => {
                        return <div
                            key={link.to}
                            onClick={toggle}
                            data-text={link.text}
                            className={useRouter().pathname === link.to ? 'href activeLink' : 'href'}
                        >
                            <Link href={link.to}>{link.tagText || link.text}</Link>
                        </div>
                    })
                }
            </nav>
        </>
    )
}

export default Menu;