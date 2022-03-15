import { useState } from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import { selectCars } from '../features/car/carSlice'
import { useSelector } from 'react-redux'

const Header = () => {
  const [burgerStatus, setBurgerStatus] = useState(false)
  const cars = useSelector(selectCars)
  console.log(cars, '787777')

  return (
    <Container>
      <a href="javascript:;">
        <img src="/images/tesla-logo.svg"></img>
      </a>

      <Menu>
        {cars &&
          cars.length > 0 &&
          cars.map((car) => <a href="javascript:;">{car}</a>)}
      </Menu>

      <RightMenu>
        <a href="javascript:;">Shop</a>
        <a href="javascript:;">Account</a>
        <CustomMenu
          onClick={() => {
            setBurgerStatus(true)
          }}
        />
      </RightMenu>

      <BurgerNav show={burgerStatus}>
        <CloseWrap>
          <CustomClose
            onClick={() => {
              setBurgerStatus(false)
            }}
          />
        </CloseWrap>
        {cars && cars.length > 0 && cars.map((car) => <li>{car}</li>)}
        <li>Existing Inventory</li>
        <li>Used Inventory</li>
        <li>Trade-in</li>
        <li>Test Drive</li>
        <li>Cybertruck</li>
        <li>Roadster</li>
        <li>Semi</li>
      </BurgerNav>
    </Container>
  )
}

export default Header

const Container = styled.div`
  width: 100%;
  display: flex;
  z-index: 10;
  position: fixed;
  min-height: 60px;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  img {
    height: 12px;
  }
`

const Menu = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: no-wrap;
  a {
    padding: 0 10px;
    font-weight: 600;
  }
  @media (max-width: 768px) {
    display: none;
  }
`

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    margin-right: 10px;
    font-weight: 600;
  }
`

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`

const BurgerNav = styled.div`
  display: flex;
  flex-direction: column;
  text-align: start;
  padding: 20px;
  background: white;
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
  width: 300px;
  transform: ${(props) => (props.show ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.2s;
  li {
    list-style: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    padding: 15px 0;
    cursor: pointer;
    font-weight: 600;
  }
`

const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`

const CloseWrap = styled.div`
  display: flex;
  justify-content: flex-end;
`
