import { motion } from "framer-motion";
import { Instagram, MessageCircle } from "lucide-react";

const contacts = [
  {
    icon: Instagram,
    title: "Instagram",
    handle: "@arts_da_brenda",
    href: "https://www.instagram.com/arts_da_brenda/",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    handle: "(44) 93618-0906",
    href: "https://api.whatsapp.com/send?phone=5511936180906",
  },
];

const Contact = () => {
  return (
    <section className="px-6 py-8">
      <motion.div
        className="max-w-3xl mx-auto bg-contact-bg rounded-2xl p-10"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="section-heading">
          <h2 className="font-display text-accent-foreground">Entre em contato comigo</h2>
          <p>Posso criar algo único e exclusivo para otimizar e customizar sua rotina</p>
        </div>
        <div className="flex flex-col gap-4 mt-6 max-w-md mx-auto">
          {contacts.map((c, i) => (
            <motion.a
              key={c.title}
              href={c.href}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 p-4 rounded-lg bg-card shadow-soft no-underline text-foreground transition-all duration-200 ease-expo-out hover:-translate-y-0.5 hover:shadow-card"
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="w-10 h-10 rounded-lg grid place-items-center bg-primary/10">
                <c.icon className="w-5 h-5 text-accent" />
              </div>
              <div>
                <span className="font-semibold text-sm block">{c.title}</span>
                <span className="text-muted-foreground text-sm">{c.handle}</span>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
