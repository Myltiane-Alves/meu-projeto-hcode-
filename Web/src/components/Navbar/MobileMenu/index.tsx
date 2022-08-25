import * as S from "./styles";
import { Link } from "react-router-dom";
import logo from "../../../assets/img/visionclinic.png"
export default function MobileMenu() {
  return (
    <S.Container>
      <S.Nav>
        <span>
          <a>
            {/* <img src={logo} alt="logo" /> */}
          </a>
        </span>
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="about.html">Sobre</a></li>
          <li><a href="blog.html">Blog</a></li>
          <li><a href="contact.html">Contato</a></li>
          <li><a href="services.html">Serviços</a></li>
          <li><a href="schedules-new.html">Agendamentos</a></li>
          <li>
            <Link to="login">
              <button
                type="button"
              >
                Login
              </button>
            </Link>
          </li>
        </ul>
      </S.Nav>
    </S.Container>
  )
}
