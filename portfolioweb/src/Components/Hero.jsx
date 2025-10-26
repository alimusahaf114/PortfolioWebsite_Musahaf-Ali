import { Github, Linkedin, Mail, ChevronDown, Facebook, Twitter, Youtube, Instagram } from 'lucide-react';

export default function Hero({ scrollToSection }) {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-purple-500/30 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-pink-500/30 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
            Hi, I'm Musahaf Ali
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Full Stack Web Developer | Building Digital Experiences
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button 
              onClick={() => scrollToSection('projects')} 
              className="bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-full font-semibold transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50"
            >
              View My Work
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="border-2 border-purple-400 hover:bg-purple-400/10 px-8 py-3 rounded-full font-semibold transition-all transform hover:scale-105"
            >
              Contact Me
            </button>
          </div>
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/alimusahaf114" className="hover:text-purple-400 transition-colors transform hover:scale-110">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/musahaf-murtaza/" className="hover:text-purple-400 transition-colors transform hover:scale-110">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://web.facebook.com/profile.php?id=61555135808801" className="hover:text-purple-400 transition-colors transform hover:scale-110">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="https://x.com/musahafali118" className="hover:text-purple-400 transition-colors transform hover:scale-110">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="https://www.youtube.com/@musahafali_229" className="hover:text-purple-400 transition-colors transform hover:scale-110">
              <Youtube className="w-6 h-6" />
            </a>
            <a href="https://www.instagram.com/yesmusahaf_229/" className="hover:text-purple-400 transition-colors transform hover:scale-110">
              <Instagram className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
      
      <button 
        onClick={() => scrollToSection('about')} 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ChevronDown className="w-8 h-8 text-purple-400" />
      </button>
    </section>
  );
}