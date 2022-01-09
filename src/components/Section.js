import React from 'react'
import styled from 'styled-components'

function Section({
  title,
  description,
  backgroundImg,
  leftBtnText,
  rightBtnText,
}) {
  return (
    <Wrap bgImg={backgroundImg}>
      <ItemText>
        <h1>{title}</h1>
        <p>{description}</p>
      </ItemText>

      <Button>
        <ButtonGroup>
          <LeftButton>{leftBtnText}</LeftButton>
          {rightBtnText && <RightButton>{rightBtnText}</RightButton>}
        </ButtonGroup>

        <DownArrow src="/images/down-arrow.svg" />
      </Button>
    </Wrap>
  )
}

export default Section

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-size: cover;
  background-image: url('/images/model-s.jpeg');
  background-position: center;
  background-repeat: no-repeat;
  background-image: ${(props) => `url('/images/${props.bgImg}')`};
`
const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`

const ButtonGroup = styled.div`
  margin-bottom: 30px;
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const LeftButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 256px;
  height: 40px;
  font-size: 12px;
  background: rgba(23, 26, 32, 0.8);
  color: white;
  opacity: 0.85;
  border-radius: 40px;
  text-transform: uppercase;
  margin: 8px;
`

const RightButton = styled(LeftButton)`
  background: white;
  color: black;
  opcity: 0.65;
`

const DownArrow = styled.img`
  height: 40px;
  overflow-x: hidden;
  animation: animationDown infinite 1.5s;
`

const Button = styled.div``
