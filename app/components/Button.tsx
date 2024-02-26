'use client'

import classNames from 'classnames'
import { PropsWithChildren, useCallback } from 'react'


// TODO: Move to globals a definition file
const colorPrimary = classNames(
  'bg-teal-500',
  'text-teal-100',
  'hover:bg-teal-200',
  'hover:text-teal-600',
  'focus:bg-teal-400',
  'focus:text-teal-700',
  'transition',
  'duration-200',
  'border',
  'border-black',
  'border-opacity-10',
)


export default function Button ({ children, onClick }: PropsWithChildren<{ onClick?: React.UIEventHandler }>) {
  return <button onClick={onClick} className={classNames('button', colorPrimary, 'font-black', 'my-6', 'py-2', 'px-4', 'rounded-xs', 'text-2xl')}>
    { children }
  </button>
}

export function AlertButton ({ children }: PropsWithChildren<{}>) {
  const callback = () => alert('mahdollista vasta ensi vuonna :(')
  const handleButtonPress = useCallback(callback, [])
  return <Button onClick={handleButtonPress}>
    {children}
  </Button>
}
