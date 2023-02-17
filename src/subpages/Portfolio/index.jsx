import styles from "./Port.module.css"
import {Fade,Flip,Rotate,Zoom,Bounce,Slide,Roll,LightSpeed} from "react-reveal";

let videos = [
    {"src":"Brak.mp4","type":"video/mp4","text":"Ferramentas utilizadas: Photoshop,After Effects e Premier"},
    {"src":"Larbac.mp4","type":"video/mp4","text":"Ferramentas utilizadas: Photoshop,After Effects e Premier"},
    {"src":"Criolo.mp4","type":"video/mp4","text":"Ferramentas utilizadas: Photoshop,After Effects e Premier"},
    {"src":"Salvador.mp4","type":"video/mp4","text":"Ferramentas utilizadas: Photoshop,After Effects e Premier"},
    {"src":"Aula 1.mp4","type":"video/mp4","text":"Tutorial: Alterando domínio na Vercel"},
    {"src":"Aula 2.mp4","type":"video/mp4","text":"Tutorial: Componente com 'react-reavel' e 'react-bootstrap'"},
]

export default function Portfolio(){
    return(
        <>
           <h2 className={styles.title}>
               Portfólio
           </h2>

            <div className={styles.alinhamento}>
                {videos.map((item,index) => {
                    return (
                        <Fade duration={2000} bottom  key={index}>
                            <div className={styles.espacamento}>
                                <video width="340" height="240" controls >
                                    <source src={item.src} type={item.type}/>
                                </video>
                                <p className={styles.text}>
                                    {item.text}
                                </p>
                            </div>
                        </Fade>
                    )
                })}
            </div>

        </>
    )
}

