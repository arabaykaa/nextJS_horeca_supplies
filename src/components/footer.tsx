import Image from "next/image"
import wots from "../../public/wots.svg"
import call from "../../public/call.svg"
import map from "../../public/map.svg"
import mesage from "../../public/mesage.svg"
import face from "../../public/face.svg"
import insta from "../../public/insta.svg"
import style from "../styles/Home.module.scss"

interface ILinks {
    text: string
    icons: string
    link: string
}

const links_array: ILinks[] = [
    {
        text: "+996 706 600 020",
        icons: call,
        link: "tel:+996706600020",
    },
    {
        text: "+996 705 920 004",
        icons: wots,
        link: "https://wa.me/996705920004",
    },
]

const links_array1: ILinks[] = [
    {
        text: "Horeca Supplies",
        icons: face,
        link: "https://www.facebook.com/profile.php?id=100094422595581",
    },
    {
        text: "@horeca.supplies_kg",
        icons: insta,
        link: "https://www.instagram.com/horeca.supplies_kg/",
    },
]

const links_array2: ILinks[] = [
    {
        text: "Horecasupplies.kgg@gmail.com",
        icons: mesage,
        link: "mailto:horecasupplies.kgg@gmail.com",
    },
    {
        text: "Lermontova st., 35a s/c Taatan, АО23-АО24",
        icons: map,
        link: "https://2gis.kg/bishkek/firm/70000001022349364",
    },
]

export const Footer = () => {
    return (
        <div className={style.footerContainer}>
            <div className={style.fourLinksContainer}>
                <div className={style.linksContainer}>
                    {links_array.map((items) => (
                        <a href={items.link} key={items.text} className={style.tagA}>
                            <Image src={items.icons} alt={items.text} className={style.iconsSize} />
                            <p>{items.text}</p>
                        </a>
                    ))}
                </div>
                <div className={style.linksContainer}>
                    {links_array1.map((items) => (
                        <a href={items.link} key={items.text} className={style.tagA}>
                            <Image src={items.icons} alt={items.text} className={style.iconsSize} />
                            <p>{items.text}</p>
                        </a>
                    ))}
                </div>
            </div>
            <div className={style.linksContainerBig}>
                {links_array2.map((items) => (
                    <a href={items.link} key={items.text} className={style.tagA}>
                        <Image src={items.icons} alt={items.text} className={style.iconsSize} />
                        <p>{items.text}</p>
                    </a>
                ))}
            </div>
        </div>
    )
}
