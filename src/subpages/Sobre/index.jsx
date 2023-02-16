import ImageAvatars from "@/components/Avatar";
import styles from "./Sobre.module.css"

import {Fade,Flip,Rotate,Zoom,Bounce,Slide,Roll,LightSpeed} from "react-reveal";

export default function Sobre(){
    return(
        <>
            <Fade duration={2000}>
                <ImageAvatars
                    width="150"
                    height="150"
                    src="https://avatars.githubusercontent.com/u/65935751?s=400&u=a3465c186fed85be2a453704baebc2f922c88730&v=4"
                />
                <p className={styles.text_sobre_mim}>
                    Com as minhas habilidades comportamentais e a experiência atingida ao longo dos anos, desejo
                    estar em uma empresa em que possa contribuir para o desenvolvimento de projetos inovadores
                    na área de tecnologia.
                </p>
            </Fade>
        </>
    )
}

