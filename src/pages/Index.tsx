import { useState, useEffect, lazy, Suspense } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import LoadingScreen from '@/components/LoadingScreen';

// Lazy load sections below the fold
const AboutSection = lazy(() => import('@/components/AboutSection'));
const SkillsSection = lazy(() => import('@/components/SkillsSection'));
const ProjectsSection = lazy(() => import('@/components/ProjectsSection'));
const ContactSection = lazy(() => import('@/components/ContactSection'));
const Footer = lazy(() => import('@/components/Footer'));

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Only brief flash to ensure styles are loaded, removing the long 2s artificial delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      return saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <LoadingScreen isLoading={isLoading} />
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      <HeroSection />
      <Suspense fallback={<div className="h-32 flex items-center justify-center">Loading...</div>}>
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
