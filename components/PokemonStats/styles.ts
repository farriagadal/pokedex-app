import { styled } from 'stitches'

export const Wrapper = styled('div', {
})

export const Card = styled('div', {
  marginTop: 35,
  background: '#FA5AFD',
  borderRadius: '60px 60px 0px 0px',
  padding: '41px 30px',
  marginLeft: '-22px',
  width: 'calc(100% - -44px)',
  position: 'relative'
})

export const Item = styled('div', {
  // border: '1px solid #E5E5E5',
  textAlign: 'center',
  label: {
    fontWeight: 800,
    fontSize: '16px',
    color: '#fff'
  },
  p: {
    fontWeight: 'bold',
    fontSize: '16px',
    color: 'rgba(255, 255, 255, 0.56)',
    textTransform: 'capitalize'
  }
})

export const List = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  columnGap: '20px',
  rowGap: '40px',
  marginBottom: '40px'
})

export const ImageContainer = styled('div', {
  position: 'absolute',
  bottom: -10,
  right: 0
})
