import { styled } from 'stitches'

export const Container = styled('div', {
  display: 'flex',
  justifyContent: 'center',
})

export const Input = styled('input', {
  height: 42,
  background: '#E5E5E5',
  border: 'none',
  borderRadius: 30,
  width: '100%',
  textAlign: 'center',
  '&:active, &:focus-visible': {
    outline: 'none',
  }
})
