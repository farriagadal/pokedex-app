import { createStitches } from '@stitches/react'

export const { styled, css, getCssText, keyframes, globalCss } = createStitches({
  media: {
    minSm: '(min-width: 576px)',
    minMd: '(min-width: 768px)',
    minLg: '(min-width: 992px)',
    minXl: '(min-width: 1200px)'
  }
})
