
import styled from 'styled-components'

export default function MenuIcon(){
    return(
		<Svg viewBox="0 0 100 80" width="40" height="40">
    <rect width="100" height="7"></rect>
    <rect y="30" width="100" height="7"></rect>
    <rect y="60" width="100" height="7"></rect>
		</Svg>
  )
}

const Svg = styled.svg`
  width: 30px;
  height: 30px;
`