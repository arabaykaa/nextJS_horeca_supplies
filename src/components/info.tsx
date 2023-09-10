import style from "../styles/Home.module.scss"

interface IProps {
    lang: string
}

export const Info = ({ lang }: IProps) => {
    return (
        <div className={style.containerInfo}>
            <h2>
                <p className={style.titleInfo}>
                    {lang === "RU" ? <>Чем мы отличаемся от наших конкурентов</> : lang === "KG" ? <>Атаандаштарыбыздан эмнеси менен айырмаланабыз</> : <>How we differ from our competitors</>}
                </p>
            </h2>
            <br />
            <h3>
                <p className={style.textInfo}>
                    {lang === "RU" ?
                        <>
                            -мы предоставляем клиентам больше, чем они от нас ожидают <br />  -для нас клиенты это наши друзья, которым мы помогаем даже после того, как они приобрели товар или услугу. <br />-если клиент недоволен услугой или ему что-то не понравилось (это бывает крайне редко), то мы возвращаем ему деньги или меняем товар.
                        </> : lang === "KG" ?
                            <>
                                Биз кардарларыбызга алар бизден күткөндөн да көптү беребиз. <br />- биз үчүн кардарлар биздин досторубуз, алар өнүм же кызматты сатып алгандан кийин да жардам беребиз. <br />- эгерде кардар тейлөөгө нааразы болсо же ага бир нерсе жакпаса(бул өтө сейрек кездешет), анда биз ага акчаны кайтарып беребиз же товарды алмаштырабыз.
                            </> :
                            <>
                                We provide our clients with more than what they expect from us. <br />- for us, customers are our friends, whom we help even after they have purchased a product or service. <br />-if the client is dissatisfied with the service or he did not like something (this is extremely rare), then we We return the money to them or change the goods.
                            </>
                    }
                </p>
            </h3>
        </div>
    )
}
