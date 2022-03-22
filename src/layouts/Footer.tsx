import React from 'react'
import Image from 'next/image'

const Footer: React.FC = () => {
	const year: Date = new Date();
	return (
		<footer>
			<Image className='logo' src='/assets/favicon.png' alt='Логотип' height='40px' width='40px' />
			<h2>MRAMOR</h2>
			<h2>© 2015 - {year.getFullYear()}</h2>
		</footer>
	)
}

export default Footer;