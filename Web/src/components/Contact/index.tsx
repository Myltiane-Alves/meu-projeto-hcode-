
import * as S from "./styles";
import whats from "../../assets/img/whatsapp.webp"
export default function Contact() {
    return (
      <S.Container>
        <button
          type="button"
        >
        {/* <a
          href="https://api.whatsapp.com/send/?phone=5561984915007&text=Vim+Pelo+site&app_absent=0"
          ><img src={whats} alt="Botão do Whatsapp"
        /></a> */}
        </button>
        <div className="columns">
          <div>
            <ul className="links">
              <li><a href="index.html">Home</a></li>
              <li><a href="about.html">Sobre</a></li>
              <li><a href="blog.html">Blog</a></li>
              <li><a href="contact.html">Contato</a></li>
              <li><a href="services.html">Serviços</a></li>
              <li><a href="schedules-new.html">Agendamentos</a></li>
            </ul>
          </div>

        <p>Todos os direitos reservardos @Myltiane 2022</p>
        </div>
      </S.Container>
    )
}
