import React from 'react';

import HowWeWorks from '../components/How-we-works'
import AboutUsText from '../components/About-us-text'
import Title from '../layouts/CustomTitle'

const AboutUs: React.FC = () => {
    return (
        <>
            <Title>О компании</Title>
            <main className='aboutUs'>
                <h1>О нас</h1>
                <hr />
                <HowWeWorks />
                <AboutUsText />
            </main>
        </>
    )
}
export default AboutUs;