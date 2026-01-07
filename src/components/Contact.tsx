import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

const Contact = () => {
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="mb-16 text-center"
        >
          <motion.span
            variants={itemVariants}
            className="text-sm uppercase tracking-widest text-primary"
          >
            {t.contact.label}
          </motion.span>
          <motion.h2
            variants={itemVariants}
            className="font-serif text-4xl md:text-5xl mt-2"
          >
            {t.contact.title1}
            <br />
            <span className="text-primary">{t.contact.title2}</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-foreground/60 mt-4 max-w-2xl mx-auto"
          >
            {t.contact.description}
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Contact Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="space-y-8"
          >
            {/* Phone */}
            <motion.div variants={itemVariants} className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                  <Phone className="h-6 w-6 text-accent" />
                </div>
              </div>
              <div>
                <h3 className="font-serif text-lg text-foreground mb-2">
                  {t.contact.phone}
                </h3>
                <div className="space-y-1">
                  <a
                    href="tel:+41324931142"
                    className="text-foreground/70 hover:text-primary transition-colors"
                  >
                    +41 32 493 11 42
                  </a>
                  <a
                    href="tel:+41794459247"
                    className="block text-foreground/70 hover:text-primary transition-colors"
                  >
                    +41 79 445 92 47
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Email */}
            <motion.div variants={itemVariants} className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                  <Mail className="h-6 w-6 text-accent" />
                </div>
              </div>
              <div>
                <h3 className="font-serif text-lg text-foreground mb-2">
                  {t.contact.email}
                </h3>
                <a
                  href="mailto:1tigroux@gmail.com"
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  1tigroux@gmail.com
                </a>
              </div>
            </motion.div>

            {/* Address */}
            <motion.div variants={itemVariants} className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                  <MapPin className="h-6 w-6 text-accent" />
                </div>
              </div>
              <div>
                <h3 className="font-serif text-lg text-foreground mb-2">
                  {t.contact.address}
                </h3>
                <p className="text-foreground/70">
                  La Fin Dessous 4<br />
                  2743 Eschert<br />
                  Switzerland
                </p>
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div variants={itemVariants} className="pt-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <a href="tel:+41324931142">{t.contact.cta}</a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Google Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden shadow-soft h-96"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2728.7634876543217!2d7.39751!3d47.276509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479273f2e3c3c3c3%3A0x0!2sCorp%20In%20Massages!5e0!3m2!1sfr!2sch!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
