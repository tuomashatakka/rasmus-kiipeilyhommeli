import Image from 'next/image'
import { PropsWithChildren } from 'react'
import { Heading } from './Title'


type CardProps = PropsWithChildren<{ title: string }>


export default function Card ({ children, title }: CardProps ) {
  return <div className="w-full rounded overflow-hidden shadow-lg bg-slate-50">
    <Image width={640} height={480} className="object-cover w-full" src="/card-img.png" alt="Tits or gtfo" />
    <div className="px-6 py-4 text-center">
      <Heading>{ title }</Heading>
      {children}
    </div>
  </div>
}
