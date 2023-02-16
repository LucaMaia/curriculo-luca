import styles from "./Footer.module.css";
import Icons from "@/components/Icons";

export default function Footer(){
    return(
            <footer className={styles.footer}>
                    <h1 className={styles.text_align}>
                        Acompanhe o meu trabalho
                    </h1>
                    <Icons/>
            </footer>
    )
}
