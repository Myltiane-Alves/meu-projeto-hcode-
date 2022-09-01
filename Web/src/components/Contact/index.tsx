
import * as S from "./styles";
import whats from "../../assets/img/whatsapp.webp"
import { AiFillMail, AiFillGithub } from "react-icons/ai";
import { RiWhatsappFill, RiSendPlaneFill } from "react-icons/ri";

import { useForm } from 'react-hook-form';
export default function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  return (
    <S.Container>
      <div className="contact-form">
        <h2>Fale Conosco</h2>
        <form >
          <div>
            <input
              type="text"
              placeholder="Nome"
              {...register("Nome", { required: true, maxLength: 80 })}
            />
          </div>
          <div>
            <input type="text" placeholder="Email" {...register("Email", { required: true, pattern: /^\S+@\S+$/i })} />
          </div>
          <div>
            <input type="tel" placeholder="Número" {...register("Número", { required: true, maxLength: 12 })} />
          </div>
          <div>
            <select {...register("Selecione o Serviço", { required: true })}>
              <option value="Mr">Mr</option>
              <option value="Mrs">Mrs</option>
              <option value="Miss">Miss</option>
              <option value="Dr">Dr</option>
            </select>
          </div>
          <div>
            <input type="datetime-local" placeholder="Escolha o Horário" {...register("Escolha o Horário", {})} />
          </div>
          <div>
            <input type="text" placeholder="Mensagem" {...register("Mensagem", {})} />
          </div>
          <input type="submit" className="btn" />
        </form>
      </div>
      <div className="contact-info">
        <h2>Contato</h2>
        <div className="email">
          <AiFillMail size={24} style={{ color: "#FFFAFA" }} />
          <p> myltiane.aux@gmail.com </p>
        </div>
        <div className="phone">
          <RiWhatsappFill size={24} style={{ color: "#FFFAFA" }} />
          <p> (61) 98491-5007 </p>
        </div>
        <div className="github">
          <AiFillGithub size={24} style={{ color: "#FFFAFA" }} />
          <p> https://github.com/Myltiane-Alves </p>
        </div>
      </div>
    </S.Container>
  )
}
