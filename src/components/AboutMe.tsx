import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <section className="px-6 py-8">
      <motion.div
        className="max-w-3xl mx-auto bg-card/80 backdrop-blur-sm rounded-lg p-8 shadow-soft"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="section-heading">
          <h2 className="font-display text-accent-foreground">Sobre mim</h2>
        </div>
        <p className="text-foreground leading-[1.8] text-center max-w-2xl mx-auto">
          Sou apaixonada por papelaria e acredito que a organização e o cuidado com
          as nossas atividades espirituais merecem um toque especial de beleza e
          dedicação. O desejo de transformar papelaria em ferramentas de zelo,
          criando itens personalizados que acompanham você no ministério, nas
          reuniões e no dia a dia inspirou a idéia. Entrego peças feitas à mão,
          pensadas para quem valoriza cada detalhe da sua rotina teocrática,
          escolar e de escritório.
        </p>
      </motion.div>
    </section>
  );
};

export default AboutMe;
