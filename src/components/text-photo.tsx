import Image from "next/image"
import reactangle from "../../public/vectorBottom.png"
import kitchen from "../../public/kitchen.png"
import style from "../styles/Home.module.scss"

interface IProps {
    lang: string
}

interface IText {
    ru: string
    kg: string
    en: string
}

const text: IText = {
    ru: "Компания была создана с целью помочь владельцам, имеющим бизнес в сфере Ноrеса, комплексно оснастить их заведение необходимым оборудованием и прочими расходными материалами. Мы создаем все удобства для наших клиентов.",
    kg: "Бул тармакта чоң тажрыйбага ээ болгон компания чоң амбициялар менен тездик менен өсүп жатат. Компания Horeca аймагында бизнеси бар ээлерине жардам берүү, алардын мекемесин керектүү жабдуулар жана башка керектелүүчү материалдар менен комплекстүү жабдуу үчүн негизделген. Биз кардарларыбыз үчүн бардык ыңгайлуулуктарды түзөбүз.",
    en: "With vast experience in this field, The company is going up rapidly with great ambitions. The company was founded to help owners who have a business in the area of ​​Horeca', to comprehensively equip their establishment with the necessary equipment and other consumables. We create all conveniences for our clients."
}

export const TextPhoto = ({ lang }: IProps) => {
    return (
        <div className={style.containerTextPhoto}>
            <Image src={reactangle} alt="rectangles" className={style.textPhotoRectangles} />
            <div>
                <p className={style.textPhotoTitleStyle}>
                    {lang === "RU" ? <>О нас!</> : lang === "KG" ? <>Биз жөнүндө!</> : <>About us!</>}
                </p>
                <br />
                <h2>
                    <p className={style.textPhotoTextStyle}>
                        {lang === "RU" ? <>{text.ru}</> : lang === "KG" ? <>{text.kg}</> : <>{text.en}</>}
                    </p>
                </h2>
            </div>
            <Image src={kitchen} alt="kitchen" className={style.textPhotoImageStyle} />
        </div>
    )
}
