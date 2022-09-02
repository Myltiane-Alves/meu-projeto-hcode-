import * as S from "./styles"

export default function FooterButton() {
  return (
    <S.Container>
      <form action="">
        <input type="hidden" />

        <footer className="fixed">
          <button type="submit">Continuar</button>
          <button
            className="btn-voltar"
          >
            <a href="">Voltar</a>
          </button>
        </footer>
      </form>
    </S.Container>
  )
}
