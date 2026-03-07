import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { ExternalLink, Github, Play } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";


export default function ProjectsSection() {
  const { t } = useLanguage();
  
  const projects = [
    {
      title: t('projects.p5.title'),
      description: t('projects.p5.desc'),
      tags: [t('tag.environment'), t('tag.waste'), t('tag.garden')],
      image: '🌱',
      color: 'from-green-500/20 to-emerald-500/20',
    },
    {
      title: t('projects.market.title'),
      description: t('projects.market.desc'),
      tags: ['Market Day', t('tag.business'), t('tag.creativity')],
      image: '💡',
      color: 'from-amber-400/20 to-orange-500/20',
    },
    {
      title: t('projects.art.title'),
      description: t('projects.art.desc'),
      tags: ['Mural', 'Triarama', t('tag.fineArt')],
      image: '🎨',
      color: 'from-purple-500/20 to-pink-500/20',
    },
  ];

  return (
    <section id="projects" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium mb-2 block">{t('projects.subtitle')}</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            {t('projects.title')}
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full shadow-glow" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 md:p-12 glass-strong rounded-[2.5rem] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.2)] border border-white/10 relative overflow-hidden"
          >
            {/* Background Accents */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -z-10"></div>

            <Accordion type="single" collapsible className="w-full space-y-6 relative z-10" defaultValue={t('projects.p5.title')}>
              {projects.map((project, index) => (
                <AccordionItem 
                  value={project.title} 
                  key={index} 
                  className="border border-white/10 bg-background/30 backdrop-blur-md rounded-2xl overflow-hidden shadow-sm data-[state=open]:shadow-[0_8px_32px_-8px_rgba(var(--primary),0.2)] data-[state=open]:border-primary/40 transition-all duration-300"
                >
                  <AccordionTrigger className="px-6 py-5 hover:no-underline hover:bg-white/5 transition-colors group">
                    <div className="flex items-center gap-4 text-left">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${project.color} border border-white/10 shadow-inner group-hover:scale-110 transition-transform duration-300`}>
                        <span className="text-2xl drop-shadow-md">{project.image}</span>
                      </div>
                      <span className="font-display text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80 group-hover:from-primary group-hover:to-primary/80 transition-all duration-300">
                        {project.title}
                      </span>
                    </div>
                  </AccordionTrigger>
                  
                  <AccordionContent className="px-6 pb-6 pt-2">
                    <div className="pl-16 space-y-4">
                      <p className="text-base text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 pt-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 text-xs rounded-full glass border border-white/20 text-foreground font-medium shadow-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
