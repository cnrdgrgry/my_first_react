import styles from "./Home.module.css";
import Form from "../Form/Form";

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <div>
        <h3>An Example of using Hooks and Forms:</h3>
        <Form />
      </div>

      <p>
        Butcher bruh readymade williamsburg man bun, cornhole mixtape
        farm-to-table pour-over. Cliche small batch iPhone, migas edison bulb
        lyft distillery leggings kale chips fam. Distillery readymade
        letterpress roof party, messenger bag whatever hell of mlkshk migas
        lomo. Bodega boys marfa literally, blog poutine gentrify migas offal
        kinfolk waistcoat semiotics retro mlkshk.
      </p>
      <p>
        Pinterest intelligentsia poke typewriter offal locavore four loko subway
        tile praxis. Typewriter same you probably haven't heard of them ascot
        lo-fi cronut vaporware distillery wayfarers flannel. Offal green juice
        vibecession, occupy before they sold out asymmetrical bespoke hoodie
        microdosing man braid la croix. Synth chicharrones retro, biodiesel
        gochujang af everyday carry kitsch activated charcoal paleo tbh. Fam
        Brooklyn cold-pressed, biodiesel ugh ethical copper mug kombucha. Cred
        JOMO photo booth blog taxidermy narwhal tattooed church-key poke
        single-origin coffee. Quinoa DIY blog kitsch kinfolk pour-over aesthetic
        ethical 8-bit distillery.
      </p>
    </div>
  );
}
