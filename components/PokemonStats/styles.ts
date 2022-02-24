import { styled } from 'stitches'

export const Card = styled('div', {
  border: '1px solid #E5E5E5'
})

export const Item = styled('div', {
  border: '1px solid #E5E5E5'
})

export const List = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  columnGap: '20px',
  rowGap: '40px'
})
