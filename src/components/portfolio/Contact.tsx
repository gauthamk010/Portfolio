import AnimatedSection from "./AnimatedSection";
import { Mail, Phone, MapPin } from "lucide-react";

const contactInfo = [
  { icon: <Mail size={28} />, label: "Email", value: "gauthamkeshav1001@gmail.com", href: "mailto:gauthamkeshav1001@gmail.com" },
  { icon: <Phone size={28} />, label: "Phone", value: "+91 9480218915", href: "tel:+919480218915" },
  { icon: <MapPin size={28} />, label: "Location", value: "Bangalore, India", href: "https://www.google.com/maps/place/Bengaluru,+Karnataka,+India" },
];

export default function Contact() {
  return (
    <section id="contact" className="py-[100px] px-8 pb-[120px] relative z-10 text-center">
      <div className="max-w-[1000px] mx-auto">
        <AnimatedSection>
          <p className="text-portfolio-gold text-[13px] tracking-[3px] uppercase mb-3">Connect</p>
          <h2 className="font-serif text-[clamp(32px,4vw,52px)] font-bold mb-5">
            Let's Work Together
          </h2>
          <div className="w-[60px] h-[3px] bg-portfolio-gold mx-auto mb-8 rounded-sm" />
          <p className="text-[16px] leading-[1.8] text-portfolio-muted mb-12">
            I'm actively looking for entry-level and junior developer roles. Whether you have a project,
            an opportunity, or just want to connect — I'd love to hear from you.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-10">
            {contactInfo.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="no-underline group w-full md:w-[320px]"
              >
                <div className="bg-portfolio-card border border-portfolio-border rounded-2xl p-6 hover:-translate-y-1 hover:border-portfolio-gold/50 hover:shadow-[0_16px_40px_rgba(201,168,76,0.12)] transition-all duration-300 text-portfolio-text h-full flex flex-col items-center justify-center">
                  <div className="mb-2.5 text-portfolio-text flex justify-center">{item.icon}</div>
                  <div className="text-portfolio-gold text-[12px] tracking-widest uppercase mb-1.5">
                    {item.label}
                  </div>
                  <div className="text-[13px] whitespace-nowrap">{item.value}</div>
                </div>
              </a>
            ))}
          </div>

          <button
            className="bg-gradient-to-br from-portfolio-gold to-[#e8c96a] text-portfolio-bg px-10 py-3.5 rounded-md font-semibold text-[16px] hover:opacity-90 transition-transform transform hover:-translate-y-px"
            onClick={() => (window.location.href = "mailto:gauthamkeshav1001@gmail.com")}
          >
            Send Me an Email →
          </button>
        </AnimatedSection>
      </div>
    </section>
  );
}
