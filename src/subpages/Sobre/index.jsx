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
                    Atuando na área de tecnologia da informação a 3 anos.
                    Comecei minha carreira como Menor Aprendiz na área de Recursos Humanos pela G4F.
                    Logo, fui promovido a estagiário e prestei serviços para o MEC – Ministério da Educação.
                    Conforme fui me desenvolvendo profissionalmente, surgiu a oportunidade de realmente me engajar na tão sonhada área de TI.
                    Aceitei o desafio de ir para a área de Suporte Técnico ao Usuário e atualmente estou atuando na área de Desenvolvimento,
                    como Analista de Dev Jr. para o cliente BBTS também pela G4F.
                </p>
            </Fade>
        </>
    )
}

