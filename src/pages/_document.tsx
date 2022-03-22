import { Html, Head, Main, NextScript } from 'next/document'

const Document = () => {
    return (
        <Html lang='ru'>
            <Head>
                <link rel='icon' href='./assets/favicon.png' />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}

export default Document;