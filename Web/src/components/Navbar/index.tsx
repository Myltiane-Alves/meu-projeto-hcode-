import * as S from "./styles";
import { Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineAlignRight } from "react-icons/ai";
import logo from "../../assets/img/vision-clinicc.png"
import React, { useCallback, useState } from "react";
import MobileMenu from "./MobileMenu";

const Navbar: React.FC  =  () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const OpenMobileMenu = useCallback(() => {
    setMobileMenu(!mobileMenu);
  }, []);

  return (
    <S.Container>
      <S.Content>
        <div>
          <a>
            <img src={logo} alt="logo" className="logo"/>
          </a>
        </div>
        <button className="mobileMenu" type="button" onClick={OpenMobileMenu}>
          <AiOutlineAlignRight />
        </button>
        {mobileMenu && <MobileMenu  openMobileMenu={OpenMobileMenu}/>}
        <nav>
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
        </nav>
      </S.Content>
    </S.Container>
  )
}

export default Navbar;
