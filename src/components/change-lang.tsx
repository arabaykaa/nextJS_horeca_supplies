import Image from "next/image"
import ru from "../../public/ru.png"
import kg from "../../public/kg.png"
import us from "../../public/us.png"
import style from "../styles/Home.module.scss"

interface IProps {
    setLang: React.Dispatch<React.SetStateAction<string>>
}

export const ChangeLang = ({ setLang }: IProps) => {
    return (
        <div className={style.flagsContainer}>
            <Image src={ru} alt="logo" className={style.flagsStyle} onClick={() => setLang("RU")} />
            <Image src={kg} alt="logo" className={style.flagsStyle} onClick={() => setLang("KG")} />
            <Image src={us} alt="logo" className={style.flagsStyle} onClick={() => setLang("EN")} />
        </div>
    )
}
