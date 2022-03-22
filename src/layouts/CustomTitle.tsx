import Head from 'next/head'

const useTitle = ({ children }: { children: string }) => {
    return (
        <Head>
            <title>{children} -  MRAMOR</title>
        </Head>
    )
}

export default useTitle;