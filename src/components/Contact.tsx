import { Instagram, MessageCircle } from "lucide-react";
import useInView from "@/hooks/use-in-view";

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
  const { ref, inView } = useInView();

  return (
    <section className="px-6 py-8">
      <div
        ref={ref}
        className={`max-w-3xl mx-auto bg-contact-bg rounded-2xl p-10 reveal ${inView ? "is-visible" : ""}`}
      >
        <div className="section-heading">
          <h2 className="font-display text-accent-foreground">Entre em contato comigo</h2>
          <p>Posso criar algo único e exclusivo para otimizar e customizar sua rotina</p>
        </div>
        <div className="flex flex-col gap-4 mt-6 max-w-md mx-auto">
          {contacts.map((c, i) => (
            <a
              key={c.title}
              href={c.href}
              target="_blank"
              rel="noreferrer"
              className={`flex items-center gap-4 p-4 rounded-lg bg-card shadow-soft no-underline text-foreground transition-all duration-200 ease-expo-out hover:-translate-y-0.5 hover:shadow-card reveal-left reveal-delay-${i + 1} ${inView ? "is-visible" : ""}`}
            >
              <div className="w-10 h-10 rounded-lg grid place-items-center bg-primary/10">
                <c.icon className="w-5 h-5 text-accent" />
              </div>
              <div>
                <span className="font-semibold text-sm block">{c.title}</span>
                <span className="text-muted-foreground text-sm">{c.handle}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
