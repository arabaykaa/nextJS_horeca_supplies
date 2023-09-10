import Image from "next/image"
import reactangle from "../../public/vectorTop.png"
import bg from "../../public/mainImage.png"
import { Logo } from "./logo"
import { ChangeLang } from "./change-lang"
import style from "../styles/Home.module.scss"

interface IProps {
    lang: string
    setLang: React.Dispatch<React.SetStateAction<string>>
}

export const MainPhoto = ({ lang, setLang }: IProps) => {
    return (
        <div style={{ position: "relative" }}>
            <Image src={bg} alt="bg" className={style.imageStyleForMainPhoto} />
            <div className={style.mainPhotoContainer}>
                <div className={style.mainPhotoHeader_conainer}>
                    <Logo />
                    <ChangeLang setLang={setLang} />
                </div>
                <p className={style.mainPhotoTitle}>
                    {lang === "RU" ? <>"Время открывать рестораны!"</> : lang === "KG" ? <>“Ресторандарды ачууга убакыт келди!”</> : <>"Time to open restaurants!"</>}
                </p>
                <Image src={reactangle} alt="bbb" className={style.mainPhotoRectanglesPhoto} />
            </div>
        </div>
    )
}
