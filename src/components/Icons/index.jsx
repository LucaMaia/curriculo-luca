import {Link} from "@mui/material";
import ImageAvatars from "../../components/Avatar";
import styles from "./Icons.module.css";

export default function Icons() {
    return (
        <div className={styles.alinhamento}>
            <Link href="https://www.instagram.com/lucalmaia/" className={styles.espacamento}>
                <ImageAvatars
                    src="insta.png"
                    width="25"
                    height="25"
                />
            </Link>

            <Link href="https://pt-br.facebook.com/" className={styles.espacamento}>
                <ImageAvatars
                    src="imgFace.png"
                    width="25"
                    height="25"
                />
            </Link>

            <Link href="https://www.linkedin.com/in/luca-maia-6a06581a9/" className={styles.espacamento}>
                <ImageAvatars
                    src="linkedin.png"
                    width="25"
                    height="25"
                />
            </Link>

            <Link href="https://github.com/LucaMaia?tab=repositories" className={styles.espacamento}>
                <ImageAvatars
                    src="git3.png"
                    width="25"
                    height="25"
                />
            </Link>

            <Link href="https://wa.me/5561983439530" className={styles.espacamento}>
                <ImageAvatars
                    src="wpp.png"
                    width="25"
                    height="25"
                />
            </Link>
        </div>
    );
}
