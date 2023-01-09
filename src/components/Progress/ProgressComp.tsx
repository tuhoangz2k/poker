import React from 'react'
import { Background, Container,Progress } from './Progress.styled'

type Props = {
  percent:number
}

const ProgressComp:React.FC<Props>  = ({percent}) => {
  return (
    <Container>
    <Background />
    <Progress percent={percent} />
  </Container>
  )
}

export default ProgressComp