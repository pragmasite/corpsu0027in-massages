import { useLanguage } from "@/hooks/useLanguage";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-xl mb-2">Corps'In Massages</h3>
            <p className="text-sm text-background/70">{t.footer.tagline}</p>
            <p className="text-sm text-background/60 mt-4 leading-relaxed">
              {t.footer.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-sm uppercase tracking-widest mb-4">
              {t.footer.navigation}
            </h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>
                <a href="#about" className="hover:text-background transition-colors">
                  {t.nav.about}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-background transition-colors">
                  {t.nav.services}
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-background transition-colors">
                  {t.nav.gallery}
                </a>
              </li>
              <li>
                <a href="#hours" className="hover:text-background transition-colors">
                  {t.nav.hours}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-background transition-colors">
                  {t.nav.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-sm uppercase tracking-widest mb-4">
              {t.contact.label}
            </h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>
                <a href="tel:+41324931142" className="hover:text-background transition-colors">
                  +41 32 493 11 42
                </a>
              </li>
              <li>
                <a href="mailto:1tigroux@gmail.com" className="hover:text-background transition-colors">
                  1tigroux@gmail.com
                </a>
              </li>
              <li>La Fin Dessous 4</li>
              <li>2743 Eschert</li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-serif text-sm uppercase tracking-widest mb-4">
              {t.hours.label}
            </h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>Lun-Mar: 13:30 - 20:00</li>
              <li>Mer: Fermé</li>
              <li>Jeu: 18:00 - 20:00</li>
              <li>Ven: 13:30 - 20:00</li>
              <li>Sam-Dim: Fermé</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-background/60">
              © 2024 Corps'In Massages. {t.footer.copyright}
            </p>
            <p className="text-xs text-background/50 mt-4 md:mt-0">
              Site créé avec passion pour votre bien-être
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
