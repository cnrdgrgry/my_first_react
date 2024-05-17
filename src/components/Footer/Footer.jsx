import styles from "./Footer.module.css";
import LinkedinIcon from "../../assets/images/linkedin.svg";
import InstagramIcon from "../../assets/images/instagram.svg";
import GithubIcon from "../../assets/images/github.svg";

function Footer() {
  return (
    <>
      <div className={styles.wrapper}>
        <p>@cnrdgrgry 2024</p>
        <div className={styles.socials}>
          <a
            href="https://www.linkedin.com/in/cnrdgrgry/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={LinkedinIcon} alt="LinkedIn" />
          </a>
          <a
            href="https://www.instagram.com/cnrdgrgry/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={InstagramIcon} alt="Instagram" />
          </a>
          <a
            href="https://github.com/cnrdgrgry"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={GithubIcon} alt="Github" />
          </a>
        </div>
      </div>
    </>
  );
}

export default Footer;
