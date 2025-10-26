import { Code } from "lucide-react";

export default function About() {
  const badges = [
  "Full Stack Web Development",
  "MERN Stack (MongoDB, Express.js, React.js, Node.js)",
  "Front-End Development (React.js, HTML, CSS, JavaScript)",
  "Backend Development (Node.js, Express.js)",
  "Database Management (MongoDB, MySQL)",
  "RESTful APIs & Authentication",
  "Git & GitHub",
  "UI/UX Design Principles",
  "Teaching & IT Training",
  "Content Creation (YouTube, TikTok)",
  "AI & Automation (Beginner)",
  "Project Management & Team Collaboration"
];
;

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I’m a dedicated Full Stack Web Developer and IT Trainer with over
              4 years of experience in developing modern, user-friendly web
              applications and teaching technology to students and
              professionals.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              I specialize in the MERN stack (MongoDB, Express.js, React.js,
              Node.js) and focus on building practical, problem-solving projects
              that deliver real value — from business automation tools to
              AI-integrated solutions.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Alongside development, I create educational tech content on
              YouTube, TikTok, and other platforms, helping learners easily
              understand programming, web development, and computer
              fundamentals.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              I’m passionate about exploring AI, automation, and emerging
              technologies, and aim to inspire others to grow and innovate in
              the digital world.
            </p>
            <div className="flex flex-wrap gap-3">
              {badges.map((item) => (
                <span
                  key={item}
                  className="px-4 py-2 bg-purple-500/20 border border-purple-400/30 rounded-full text-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-400/30 flex items-center justify-center">
              <Code className="w-32 h-32 text-purple-400 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
