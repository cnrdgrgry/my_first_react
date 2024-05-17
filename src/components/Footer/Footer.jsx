import styles from "./Footer.module.css";

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
            <img src="/images/linkedin.svg" alt="LinkedIn" />
          </a>
          <a
            href="https://www.instagram.com/cnrdgrgry/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/images/instagram.svg" alt="Instagram" />
          </a>
          <a
            href="https://github.com/cnrdgrgry"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/images/github.svg" alt="Github" />
          </a>
        </div>
      </div>
    </>
  );
}

export default Footer;
