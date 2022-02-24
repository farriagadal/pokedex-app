import { styled } from 'stitches'

export const Card = styled('div', {
  background: 'linear-gradient(55.56deg, #FC7CFF 0%, #FA5AFD 100%)',
  borderRadius: 20,
  minHeight: 115,
  cursor: 'pointer',
  padding: '0 14px 13px 16px',
  position: 'relative',
  img: {
    width: 'calc(100% - 14px - 16px)',
    position: 'absolute',
    top: -60
  }
})

export const Header = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  background: '#676767',
  borderRadius: 10,
  height: 28,
  padding: '0 15px',
  position: 'absolute',
  bottom: 13,
  width: 'calc(100% - 14px - 16px)',
  p: {
    fontWeight: 800,
    fontSize: '12px',
    color: '#fff',
    textTransform: 'capitalize'
  },
  span: {
    fontWeight: 800,
    fontSize: '12px',
    color: '#F993FB'
  }
})
