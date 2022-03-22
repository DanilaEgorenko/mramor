import React from 'react'

const Loader: React.FC = () => {
    return (
        <svg className='loader' version='1.1' id='L4' xmlns='http://www.w3.org/2000/svg' x='0px' y='0px'
            viewBox='0 0 100 12'>
            <circle fill='#000' stroke='none' cx='6' cy='6' r='6'>
                <animate
                    attributeName='opacity'
                    dur='1s'
                    values='0;1;0'
                    repeatCount='indefinite'
                    begin='0.1' />
            </circle>
            <circle fill='#000' stroke='none' cx='26' cy='6' r='6'>
                <animate
                    attributeName='opacity'
                    dur='1s'
                    values='0;1;0'
                    repeatCount='indefinite'
                    begin='0.2' />
            </circle>
            <circle fill='#000' stroke='none' cx='46' cy='6' r='6'>
                <animate
                    attributeName='opacity'
                    dur='1s'
                    values='0;1;0'
                    repeatCount='indefinite'
                    begin='0.3' />
            </circle>
        </svg>
    )
}

export default Loader;