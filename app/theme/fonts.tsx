import toClassNames, { Value } from 'classnames'
import { Inter, Lobster_Two, Antonio, Gluten } from 'next/font/google'

export const inter = Inter({
  subsets:  ['latin']
})

export const antonio = Gluten({
  subsets:  ['latin'],
  weight:   [ '100', '400', '800' ]
})

export const lobster = Lobster_Two({
  subsets:  [ 'latin' ],
  weight:   [ '400', '700' ]
})

const fonts = {
  inter,
  antonio,
  lobster,
}

type FontName = keyof typeof fonts

export const classNameWithFont = (font: FontName) => (...classNames: Array<Value>) =>
  toClassNames(fonts.antonio.className, ...classNames)

export default fonts
