import styles from "./Listas.module.css";
import {Fade,Flip,Rotate,Zoom,Bounce,Slide,Roll,LightSpeed} from "react-reveal";

export default function Listas(){
    return(
        <Zoom  duration={2000} bottom left>
            <div className={styles.listas}>
                <h2 className={styles.title}>
                    Experiências
                </h2>

                <ul className={styles.espaco_lista_experiencia}>
                    <li className={styles.lista}>
                        Atendente em uma rede de açaís (Açaí do Japa). (2019)
                    </li>

                    <li className={styles.lista}>
                        Menor aprendiz na empresa G4F na areá de RH.  (2020/2021)
                    </li>

                    <li className={styles.lista}>
                        Estagiário na aréa de arquitetura de software  e desenvolvimento em LowCode (SharePoint e Power apps)
                        no MEC pela G4F Soluções Corporativas. (2021/2022)
                    </li>

                    <li className={styles.lista}>
                        Estagiário na aréa de Suporte no HUB pela G4F Soluções Corporativas (Hospital Universitário de Brasília) .
                    </li>

                    <li className={styles.lista}>
                        Tecnico de apoio ao usuário de informática. (2022)
                    </li>
                </ul>


                <h2 className={styles.title}>
                    Aptidões e competências
                </h2>

                <ul className={styles.espaco_lista_aptidoes}>
                    <li className={styles.lista}>
                        Nivel avançado em Photoshop , Illustrator , Premiere e After Effects.
                    </li>

                    <li className={styles.lista}>
                        Experiencia em JavaScript , com foco em ReactsJS e NodeJS.
                    </li>

                    <li className={styles.lista}>
                        Nivel intermediario em inglês.
                    </li>

                    <li className={styles.lista}>
                        Nivel basico em Excel e Power point.
                    </li>

                    <li className={styles.lista}>
                        Nivel intermediario em Adobe XD.
                    </li>

                    <li className={styles.lista}>
                        Certificado Microsoft Power Platform PL-900.
                    </li>
                </ul>

                <h2 className={styles.title}>
                    Formações
                </h2>

                <ul className={styles.espaco_lista_aptidoes}>
                    <li className={styles.lista}>
                        Formado em Análise e desenvolvimento de sistemas - Estácio de Sá.
                    </li>

                    <li className={styles.lista}>
                        Pós graduando em MBA em UX Design e Usabilidade - Infnet.
                    </li>

                </ul>
            </div>
        </Zoom>

    )
}

