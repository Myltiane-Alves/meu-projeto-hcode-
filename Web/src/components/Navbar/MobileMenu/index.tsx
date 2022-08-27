import * as S from "./styles";
import { Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineAlignRight } from "react-icons/ai";
import logo from "../../../assets/img/visionclinic.png"
import React from "react";
interface MobileMenuProps {
  openMobileMenu(): void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({openMobileMenu}) => {
  return (
    <S.Container>
      <S.Nav>
        <div className="logoMenu">
          <a>
            <img src={logo} alt="logo" />
          </a>
        </div>
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="about.html">Sobre</a></li>
          <li><a href="blog.html">Blog</a></li>
          <li><a href="contact.html">Contato</a></li>
          <li><a href="services.html">Serviços</a></li>
          <li><a href="schedules-new.html">Agendamentos</a></li>
          <li>
            <div>
              <button
                type="button"
              >
               <Link to=""> Login </Link>
              </button>
            </div>
          </li>
        </ul>

          <button className="closeMenu" type="button" onClick={openMobileMenu}>
            <AiOutlineClose />
          </button>

      </S.Nav>
    </S.Container>
  )
}

export default MobileMenu;
