import styles from "./Footer.module.css";
import Icons from "@/components/Icons";

export default function Footer(){
    return(
            <footer className={styles.footer}>
                    <h1 className={styles.text_align}>
                        Acompanhe o meu trabalho
                    </h1>

                    <p className={styles.text_align_email}>
                        Email: lucamaia2007@hotmail.com
                    </p>
                <p className={styles.text_align_p}>
                    Site desenvolvido em NextJS - por Luca Maia
                </p>
                    <Icons/>
            </footer>
    )
}
