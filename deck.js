export { nightOwlFull as theme } from 'code-surfer/themes'
import { slides as introduction } from './introduction.mdx'
import { slides as dumb } from './dumb.mdx'
import { slides as smart } from './Smart.mdx'
import { slides as Logic } from './Logic.mdx'
import { slides as Container } from './Container.mdx'
import { slides as Test } from './Test.mdx'
import { slides as Summary } from './Summary.mdx'

export const slides = [
    ...introduction,
    ...dumb,
    ...smart,
    ...Logic,
    ...Container,
    ...Test,
    ...Summary
]