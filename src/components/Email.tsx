import React, { useRef, useState } from 'react'

import emailProps from '../interfaces/email-props'

const Email = ({ setStorageEmail }: emailProps) => {
    const [successValidateEmail, setSuccessValidateEmail] = useState<boolean>(true)

    const inputEmailRef = useRef({} as HTMLInputElement)

    const validateEmail = (email: string): boolean => {
        return email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) || !email.length
            ? true
            : false
    }

    return (
        <div className='email'>
            <h2>Следите за новым мрамором</h2>
            <div className="email__input">
                <input
                    ref={inputEmailRef}
                    type='email'
                    placeholder='Email'
                    className={`${successValidateEmail ? '' : 'errorValidate'}`}
                    onChange={(e) => setSuccessValidateEmail(validateEmail(e.target.value))}
                />
                <button
                    type='submit'
                    onClick={() => {
                        if (successValidateEmail) {
                            localStorage.setItem('email', inputEmailRef.current.value)
                            setTimeout(() => setStorageEmail(inputEmailRef.current.value), 1000)
                        }
                    }}
                >Отправить</button>
            </div>
        </div>
    )
}

export default Email;