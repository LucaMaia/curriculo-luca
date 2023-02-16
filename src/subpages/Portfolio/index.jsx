import styles from "./Port.module.css"

let images = [
    {"title":"Titulo 1","href":"/","src":"/vintage.jpeg"},
    {"title":"Titulo 1","href":"/","src":"/criolo.jpeg"},
]

let videos = [
    {"src":"Brak.mp4","type":"video/mp4"},
    {"src":"Larbac.mp4","type":"video/mp4"},
    {"src":"Criolo.mp4","type":"video/mp4"},
    {"src":"Salvador.mp4","type":"video/mp4"},
]

export default function Portfolio(){
    return(
        <>
           <h1>Portfólio</h1>
            <div className={styles.alinhamento}>

                {videos.map((item,index) => {
                    return (
                        <div className={styles.espacamento}>
                            <video width="320" height="240" controls>
                                <source src={item.src} type={item.type}/>
                            </video>
                        </div>
                    )
                })}

                {/*{images.map((item,index) => {*/}
                {/*    return (*/}
                {/*        <div className={styles.espacamento} key={index}>*/}
                {/*            <Image*/}
                {/*                src={item.src}*/}
                {/*                height={350}*/}
                {/*                width={300}*/}
                {/*                className={styles.image}*/}
                {/*            />*/}
                {/*            <Link href={item.href}>*/}
                {/*                <p>*/}
                {/*                    {item.title}*/}
                {/*                </p>*/}
                {/*            </Link>*/}
                {/*        </div>*/}
                {/*    )*/}
                {/*})}*/}
            </div>
        </>
    )
}

