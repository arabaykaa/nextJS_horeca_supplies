import Image from "next/image"
import watsapp from "../../public/watsapp.svg"
import style from "../styles/Home.module.scss"

interface IProps {
    lang: string
}

export const ContactUs = ({ lang }: IProps) => {
    return (
        <div className={style.containerContact}>
            <p className={style.titleContact}>
                {lang === "RU" ? <>Свяжитесь с нами прямо сейчас!</> : lang === "KG" ? <>Биз менен азыр байланышыңыз!</> : <>Contact us right now!</>}
            </p>
            <a href="https://wa.me/996705920004">
                <div className={style.whatsappContainer}>
                    <div className={style.watsapp}>
                        <Image src={watsapp} alt="whatsapp" width={33} />
                    </div>
                    <p className={style.textContact}>WhatsApp</p>
                </div>
            </a>
        </div>
    )
}
