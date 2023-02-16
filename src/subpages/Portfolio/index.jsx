import styles from "./Port.module.css"
import {Fade,Flip,Rotate,Zoom,Bounce,Slide,Roll,LightSpeed} from "react-reveal";

let images = [
    {"title":"Titulo 1","href":"/","src":"/vintage.jpeg"},
    {"title":"Titulo 1","href":"/","src":"/criolo.jpeg"},
]

let videos = [
    {"src":"Brak.mp4","type":"video/mp4"},
    {"src":"Larbac.mp4","type":"video/mp4"},
    {"src":"Criolo.mp4","type":"video/mp4"},
    {"src":"Salvador.mp4","type":"video/mp4"},
    {"src":"Aula 1.mp4","type":"video/mp4"},
    {"src":"Aula 2.mp4","type":"video/mp4"},
]

export default function Portfolio(){
    return(
        <>
           <h1>Portfólio</h1>
            <div className={styles.alinhamento}>

                {videos.map((item,index) => {
                    return (
                        <Fade duration={2000} bottom  key={index}>
                            <div className={styles.espacamento}>
                                <video width="340" height="240" controls>
                                    <source src={item.src} type={item.type}/>
                                </video>
                            </div>
                        </Fade>
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
