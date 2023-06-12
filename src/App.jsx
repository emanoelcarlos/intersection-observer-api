import { useEffect, useRef, useState } from "react";

import "./App.css";
import Section from "./components/Section/Section";

function App() {
  const rocketSectionRef = useRef();
  const [rocketSectionIsVisible, setRocketSectionIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) setRocketSectionIsVisible(true);
    });

    observer.observe(rocketSectionRef.current)
  }, []);

  return (
    <>
      <Section primary>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus
        adipisci beatae molestias obcaecati dolore eos asperiores reiciendis
        officiis tempora, quis placeat quaerat, labore cupiditate nemo,
        voluptatibus vel. Laboriosam, provident temporibus!
      </Section>

      <Section secondary>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus
        adipisci beatae molestias obcaecati dolore eos asperiores reiciendis
        officiis tempora, quis placeat quaerat, labore cupiditate nemo,
        voluptatibus vel. Laboriosam, provident temporibus!
      </Section>

      <Section primary>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus
        adipisci beatae molestias obcaecati dolore eos asperiores reiciendis
        officiis tempora, quis placeat quaerat, labore cupiditate nemo,
        voluptatibus vel. Laboriosam, provident temporibus!
      </Section>

      <Section secondary>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus
        adipisci beatae molestias obcaecati dolore eos asperiores reiciendis
        officiis tempora, quis placeat quaerat, labore cupiditate nemo,
        voluptatibus vel. Laboriosam, provident temporibus!
      </Section>

      <Section primary>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus
        adipisci beatae molestias obcaecati dolore eos asperiores reiciendis
        officiis tempora, quis placeat quaerat, labore cupiditate nemo,
        voluptatibus vel. Laboriosam, provident temporibus!

        <span
          ref={rocketSectionRef}
          className={`rocket ${rocketSectionIsVisible ? "animateRocket" : ""}`}
        >
          🚀
        </span>
      </Section>

      <Section secondary>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus
        adipisci beatae molestias obcaecati dolore eos asperiores reiciendis
        officiis tempora, quis placeat quaerat, labore cupiditate nemo,
        voluptatibus vel. Laboriosam, provident temporibus!
      </Section>

      <Section primary>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus
        adipisci beatae molestias obcaecati dolore eos asperiores reiciendis
        officiis tempora, quis placeat quaerat, labore cupiditate nemo,
        voluptatibus vel. Laboriosam, provident temporibus!
      </Section>
    </>
  );
}

export default App;
