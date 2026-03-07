import { motion } from 'framer-motion';
import { Github, Linkedin, Youtube, Instagram, Heart } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  return (
    <footer className="py-8 border-t border-white/5 bg-background relative z-10 w-full overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4">
          
          {/* Left Column: Name and "Made With" */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-start gap-1 flex-1"
          >
            <h4 className="font-bold text-lg text-foreground tracking-tight">
              {t('footer.name')}
            </h4>
            <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <span>{t('footer.madeWith')}</span>
              <Heart className="h-3.5 w-3.5 text-destructive fill-destructive" />
              <span>{t('footer.andCoffee')}</span>
            </div>
          </motion.div>

          {/* Center Column: Social Icons */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-5 flex-1"
          >
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5 stroke-[1.5]" />
              </a>
            ))}
          </motion.div>

          {/* Right Column: Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center justify-center md:justify-end flex-1 text-xs text-muted-foreground"
          >
            <span>© {currentYear} {t('footer.name')}. {t('footer.allRights')}</span>
          </motion.div>

        </div>
      </div>
    </footer>
  );
}
