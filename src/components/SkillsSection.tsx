import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';


function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="space-y-2"
    >
      <div className="flex justify-between items-center">
        <span className="font-medium">{name}</span>
        <span className="text-sm text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2 bg-muted/30 rounded-full overflow-hidden border border-white/5 relative">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: delay + 0.2, ease: 'easeOut' }}
          className="h-full rounded-full bg-gradient-to-r from-primary to-accent shadow-[0_0_10px_rgba(var(--primary),0.8)] relative"
        >
           <div className="absolute top-0 right-0 bottom-0 w-10 bg-gradient-to-l from-white/30 to-transparent blur-[2px]"></div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function SkillsSection() {
  const { t } = useLanguage();
  
  const skills = {
    academic: [
      { name: t('skills.law'), level: 90 },
      { name: t('skills.religion'), level: 85 },
      { name: t('skills.publicSpeaking'), level: 88 },
      { name: 'Penulisan Ilmiah', level: 80 },
      { name: 'Riset', level: 85 },
    ],
    athletic: [
      { name: t('skills.basketball'), level: 95 },
      { name: t('skills.stamina'), level: 90 },
      { name: 'Kerjasama Tim', level: 92 },
      { name: 'Strategi Lapangan', level: 85 },
      { name: 'Disiplin Latihan', level: 98 },
    ],
    softskills: [
      { name: t('skills.leadership'), level: 90 },
      { name: 'Manajemen Waktu', level: 88 },
      { name: 'Problem Solving', level: 85 },
      { name: 'Integritas', level: 95 },
      { name: 'Tanggung Jawab', level: 95 },
    ],
  };

  return (
    <section id="skills" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium mb-2 block">{t('skills.subtitle')}</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            {t('skills.title')}
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full shadow-glow" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Akademik - Span 2 Columns (Hero Card) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 lg:col-span-2 p-8 glass-strong rounded-3xl shadow-[0_8px_32px_-8px_rgba(0,0,0,0.15)] hover:shadow-[0_8px_32px_-8px_rgba(var(--primary),0.3)] border border-white/10 hover:border-primary/30 transition-all duration-300 group relative overflow-hidden flex flex-col justify-between"
          >
            <div className="absolute top-0 right-[-10%] w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10 group-hover:bg-primary/20 transition-colors"></div>
            
            <div className="flex flex-col md:flex-row gap-8 items-start relative z-10 w-full">
              <div className="flex-shrink-0 space-y-4 md:w-1/3">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 group-hover:scale-110 transition-transform duration-300 border border-primary/20 shadow-inner flex items-center justify-center">
                  <span className="text-4xl drop-shadow-md">📚</span>
                </div>
                <h3 className="font-display text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-foreground to-foreground/70">{t('skills.academic')}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{t('skills.academicDesc')}</p>
              </div>
              
              <div className="flex-grow space-y-5 w-full md:pl-6 md:border-l border-white/10">
                {skills.academic.map((skill, index) => (
                  <SkillBar key={skill.name} {...skill} delay={index * 0.1} />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Olahraga - Standard Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="col-span-1 p-8 glass-strong rounded-3xl shadow-[0_8px_32px_-8px_rgba(0,0,0,0.15)] hover:shadow-[0_8px_32px_-8px_rgba(var(--accent),0.3)] border border-white/10 hover:border-accent/30 transition-all duration-300 group relative overflow-hidden flex flex-col"
          >
            <div className="absolute top-[-10%] right-[-10%] w-48 h-48 bg-accent/10 rounded-full blur-3xl -z-10 group-hover:bg-accent/20 transition-colors"></div>
            
            <div className="flex items-center gap-4 mb-8 relative z-10">
              <div className="p-3 w-14 h-14 flex items-center justify-center rounded-2xl bg-accent/10 group-hover:scale-110 transition-transform duration-300 border border-accent/20 shadow-inner">
                <span className="text-2xl drop-shadow-sm">⛹️‍♂️</span>
              </div>
              <h3 className="font-display text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80">{t('skills.athletic')}</h3>
            </div>
            <div className="space-y-5 relative z-10 mt-auto">
              {skills.athletic.map((skill, index) => (
                <SkillBar key={skill.name} {...skill} delay={index * 0.1} />
              ))}
            </div>
          </motion.div>

          {/* Soft Skills - Span 2 Columns on LG to break grid symmetry further */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-1 lg:col-span-3 lg:w-2/3 lg:mx-auto p-8 glass-strong rounded-[2.5rem] shadow-[0_8px_32px_-8px_rgba(0,0,0,0.15)] hover:shadow-[0_8px_32px_-8px_rgba(var(--secondary),0.3)] border border-white/10 hover:border-secondary/30 transition-all duration-300 group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-secondary/5 to-transparent pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-full h-32 bg-secondary/10 rounded-full blur-3xl -z-10 group-hover:bg-secondary/20 transition-colors"></div>
            
            <div className="flex items-center justify-center gap-4 mb-8 relative z-10 text-center">
              <div className="p-3 w-14 h-14 flex items-center justify-center rounded-2xl bg-secondary/10 group-hover:scale-110 transition-transform duration-300 border border-secondary/20 shadow-inner">
                <span className="text-2xl drop-shadow-sm">🌟</span>
              </div>
              <h3 className="font-display text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80">{t('skills.softSkills')}</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-5 relative z-10">
              {skills.softskills.map((skill, index) => (
                <SkillBar key={skill.name} {...skill} delay={index * 0.1} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
