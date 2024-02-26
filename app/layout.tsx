import type { Metadata } from 'next'
import type { PropsWithChildren } from 'react'
import classNames from 'classnames'

import { Title, Subtitle } from './components/Title'
import fonts from './theme/fonts'

import './globals.css'


type RootLayoutPropsType = PropsWithChildren<{}>

interface Meta extends Metadata {
  title: string
}

export const metadata: Meta = {
  title:        'Apina',
  description:  'Kapina kiipesi puuhun',
}

export default function RootLayout ({ children }: Readonly<RootLayoutPropsType>) {
  const { title, description } = metadata

  return <html lang="en">
    <body className={classNames(fonts.lobster.className, 'min-h-screen')}>

      <header className='page-header bg-slate-200 h-64 align-middle'>
        <Title>{ title }</Title>
        <Subtitle>{ description }</Subtitle>
      </header>

      <section className='page-content'>
        { children }
      </section>

      <footer className='page-footer'>
        Disclaimer: results will vary lol.
      </footer>
    </body>
  </html>
}
