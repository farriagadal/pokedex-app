import { styled } from 'stitches'

export const Card = styled('div', {
  background: 'linear-gradient(55.56deg, #FC7CFF 0%, #FA5AFD 100%)',
  borderRadius: 20,
  minHeight: 205,
  cursor: 'pointer',
  padding: '0 14px 13px 16px',
  position: 'relative',
  img: {
    width: 'calc(100% - 14px - 16px)',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)'
  }
})

export const Header = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  marginTop: 65,
  marginBottom: 10,
  p: {
    fontWeight: 800,
    fontSize: '16px',
    color: '#000',
    textTransform: 'capitalize',
    margin: 0
  },
  span: {
    fontWeight: 800,
    fontSize: '16px',
    color: '#F993FB'
  }
})

export const Category = styled('div', {
  fontWeight: 800,
  fontSize: '16px',
  display: 'grid',
  // alignItems: 'center',
  // justifyContent: 'space-between',
  gridTemplateColumns: '1fr 1fr',
  columnGap: '20px',
  width: '100%',
  marginTop: 22,
  marginBottom: 10,
  span: {
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 38,
    background: 'rgba(252, 166, 0, 0.97)',
    boxShadow: '0px 51px 80px rgba(0, 0, 0, 0.07), 0px 25.5249px 40.0391px rgba(0, 0, 0, 0.0532233), 0px 15.375px 24.1177px rgba(0, 0, 0, 0.0456112), 0px 9.85311px 15.4559px rgba(0, 0, 0, 0.0399626), 0px 6.38599px 10.0172px rgba(0, 0, 0, 0.035), 0px 4.01991px 6.30574px rgba(0, 0, 0, 0.0300374), 0px 2.30969px 3.62304px rgba(0, 0, 0, 0.0243888), 0px 1.01655px 1.59459px rgba(0, 0, 0, 0.0167767)',
    borderRadius: '10px'
  }
})
