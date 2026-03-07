import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Youtube, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '../contexts/LanguageContext';

export default function HeroSection() {
  const { t } = useLanguage();
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background Blobs for Glassmorphism Context */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-32 left-1/2 w-96 h-96 bg-secondary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 container mx-auto px-4 relative z-10 items-center">
        <div className="flex justify-center lg:justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: -30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Decorative offset frames */}
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/30 to-accent/30 rounded-[2.5rem] blur-2xl -z-10 opacity-70 animate-pulse-glow"></div>
            <div className="absolute -inset-2 bg-card/40 backdrop-blur-sm rounded-[2.25rem] border border-white/10 dark:border-white/5 -z-10 rotate-3"></div>
            <div className="absolute -inset-2 bg-card/40 backdrop-blur-sm rounded-[2.25rem] border border-white/10 dark:border-white/5 -z-10 -rotate-2"></div>
            
            <div className="w-[280px] sm:w-[320px] lg:w-[420px] aspect-[4/5] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] glass-strong relative z-10 group">
              <img src="dapaa.jpg" alt="Gambar" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"/>
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent"></div>
            </div>
          </motion.div>
        </div>

        <div className="flex flex-col justify-center text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div className="mb-5 space-y-4 badge badge-primary text-sm px-4 py-2 font-medium glass-strong text-foreground border border-primary/30 rounded-full inline-block shadow-[0_0_15px_rgba(var(--primary),0.3)]">
                {t('hero.greeting')}
            </motion.div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-hero md:text-6xl lg:text-7xl font-bold mb-6"
          >
            Teuku Hablil Jidda
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            <strong>{t('hero.role')}</strong>
            <br />
            {t('hero.description')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12"
          >
            <Button 
              size="lg" 
              className="rounded-full px-8 shadow-glow bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {t('hero.contactBtn')}
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="rounded-full px-8 glass hover:bg-white/10"
              onClick={() => {
                const element = document.querySelector('#about');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {t('hero.moreBtn')}
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex items-center justify-center lg:justify-start gap-6"
          >
            {[
              { icon: Github, href: '#', label: 'GitHub' },
              { icon: Instagram, href: '#', label: 'Instagram' },
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                className="p-3 rounded-full glass hover:shadow-glow transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5 text-foreground" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 p-3 rounded-full glass animate-float cursor-pointer"
        whileHover={{ scale: 1.1 }}
        aria-label="Scroll to About"
      >
        <ArrowDown className="h-5 w-5 text-primary" />
      </motion.button>
    </section>
  );
}
