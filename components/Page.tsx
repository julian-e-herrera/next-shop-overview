import Head from 'next/head'
import React, { FC, ReactNode } from 'react'
import Title from './Title'
import Navbar from './Navbar'

interface Props {
    children: ReactNode,
    title: string
}

const Page: FC<Props> = ({ children, title }) => {
    return (
        <>
            <Head>
                <title>{title} - Next Shop</title>
                <meta name="description" content="Next Shop" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header>
                <Navbar />
            </header>
            <main className="px-6 py-4">
                <Title>{title}</Title>
                {children}
            </main>
        </>
    )
}

export default Page