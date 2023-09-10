import Image from "next/image"
import logo from "../../public/logo.png"
import style from "../styles/Home.module.scss"

export const Logo = () => (
    <div className={style.logo_container}>
        <Image src={logo} alt="logo" className={style.logo} />
        <div>
            <h1 style={{ display: "none" }}>Horeca Supplies</h1>
            <p className={style.logoTitle1}>Horeca</p>
            <p className={style.logoTitle2}>Supplies</p>
        </div>
    </div>
)
