import { motion } from 'framer-motion';
import { Scale, Trophy, Medal, BookOpen } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useLanguage } from '../contexts/LanguageContext';

export default function AboutSection() {
  const { t } = useLanguage();
  const stats = [
    { icon: Scale, value: t('about.focus'), label: t('about.focusDesc') },
    { icon: Trophy, value: t('about.active'), label: t('about.activeDesc') },
    { icon: BookOpen, value: t('about.strong'), label: t('about.strongDesc') },
    { icon: Medal, value: t('about.high'), label: t('about.highDesc') },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium mb-2 block">{t('about.subtitle')}</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            {t('about.title')}
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="relative max-w-6xl mx-auto mt-24">
          
          {/* Main Content Layout with Overlap */}
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-0">
            
            {/* Left Image Carousel Side */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full lg:w-5/12 relative z-10"
            >
              <div className="relative group mx-auto max-w-md">
                {/* Decorative blobs behind carousel */}
                <div className="absolute -inset-6 bg-gradient-to-tr from-accent/20 to-primary/20 rounded-full blur-3xl -z-10 opacity-60"></div>
                
                <div className="aspect-[4/5] rounded-[2rem] overflow-hidden glass-strong shadow-[0_8px_32px_rgba(0,0,0,0.12)] border border-white/20 dark:border-white/10 relative">
                  <Carousel className="w-full h-full" opts={{ loop: true }}>
                    <CarouselContent className="h-full mt-0 ml-0">
                      {/* Anda bisa mengganti foto-foto ini sesuai keinginan */}
                      {['', '', ''].map((imgSrc, index) => (
                        <CarouselItem key={index} className="pt-0 pl-0 relative h-full">
                          <div className="w-full h-full bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center">
                            <span className="text-muted-foreground/50 font-medium">Foto {index + 1}</span>
                            <img src={imgSrc} alt={`Gallery ${index + 1}`} className="w-full h-full object-cover hidden" />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 border-none bg-background/50 hover:bg-background/80 text-foreground backdrop-blur-sm" />
                      <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 border-none bg-background/50 hover:bg-background/80 text-foreground backdrop-blur-sm" />
                    </div>
                  </Carousel>
                </div>
                
                {/* Overlapping glass decorative panel */}
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-card/40 backdrop-blur-xl rounded-2xl border border-white/20 shadow-lg -z-0 rotate-12 hidden md:block"></div>
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 backdrop-blur-xl rounded-full border border-white/10 shadow-lg -z-0 -rotate-12 hidden md:block"></div>
              </div>
            </motion.div>

            {/* Right Text Content Side - Overlapping the Image on Desktop */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="w-full lg:w-8/12 lg:-ml-16 relative z-20"
            >
              <div className="glass-strong p-8 md:p-12 rounded-[2.5rem] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.2)] border border-white/10 bg-card/60 backdrop-blur-2xl">
                <h3 className="font-display text-2xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80">
                  {t('hero.role')}
                </h3>
                <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
                  <p>
                    {t('about.desc1')}
                  </p>
                  <p>
                    {t('about.desc2')}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Floating Stats Ornaments (Absolute Positioning for Desktop) */}
          <div className="mt-16 lg:mt-0 relative w-full h-[600px] lg:h-auto pointer-events-none lg:absolute lg:inset-0 lg:-z-0 hidden md:block">
            {stats.map((stat, index) => {
              // Pre-calculated organic positions around the center content
              const positions = [
                "top-[-40px] left-[10%] lg:left-[50%]", 
                "bottom-[10%] lg:bottom-[-20px] right-[5%] lg:right-[15%]", 
                "top-[30%] left-[-2%] lg:left-[-5%]",
                "top-[15%] right-[-2%] lg:right-[0%]"
              ];
              
              const delays = [0.4, 0.6, 0.5, 0.7];

              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8, y: 30 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: delays[index], type: "spring", bounce: 0.4 }}
                  className={`absolute ${positions[index]} pointer-events-auto group/stat cursor-default`}
                >
                  <div className="p-4 glass rounded-[1.5rem] shadow-[0_8px_24px_-8px_rgba(0,0,0,0.15)] hover:shadow-[0_8px_32px_-8px_rgba(var(--primary),0.3)] border border-white/20 hover:border-primary/40 transition-all duration-300 transform hover:-translate-y-2 bg-background/50 backdrop-blur-xl flex items-center gap-4 animate-float" style={{ animationDelay: `${index * 0.5}s` }}>
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20 shadow-inner group-hover/stat:scale-110 transition-transform duration-300">
                      <stat.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-display text-xl font-bold text-foreground leading-none">{stat.value}</p>
                      <p className="text-xs text-muted-foreground font-medium mt-1 uppercase tracking-wider">{stat.label}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Mobile Fallback for Stats */}
          <div className="grid grid-cols-2 gap-4 mt-12 md:hidden">
             {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="p-4 glass rounded-2xl text-center border border-white/10 bg-card/40 backdrop-blur-md"
                >
                  <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-primary/10 flex items-center justify-center">
                    <stat.icon className="h-6 w-6 text-primary" />
                  </div>
                  <p className="font-display text-xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                </motion.div>
              ))}
          </div>

        </div>
      </div>
    </section>
  );
}
