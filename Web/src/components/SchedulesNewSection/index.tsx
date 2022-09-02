import Calendar from '../Calendar'
import FooterButton from '../FooterButton'
import * as S from './styles'

export default function SchedulesNewSection() {
  return (
    <S.Container>
      <S.ContainerTitle>
        <h1>Escolha a Data</h1>
      </S.ContainerTitle>
      <Calendar />
    </S.Container>
  )
}
