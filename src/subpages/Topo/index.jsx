import styles from "./Topo.module.css"
import {Fade,Flip,Rotate,Zoom,Bounce,Slide,Roll,LightSpeed} from "react-reveal";

export default function Topo(){
    return(
       <>

           <section className={styles.module}>
               <Zoom>
                   <h4 className={styles.title}>
                       Luca Lins Maia Vieira de Oliveira
                   </h4>
                   <p className={styles.desc}>
                       Desenvolvedor Web/ UX design
                   </p>
               </Zoom>
           </section>
       </>
    )
}

