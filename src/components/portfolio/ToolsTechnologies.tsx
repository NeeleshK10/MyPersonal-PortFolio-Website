import {
  FaJava, FaReact, FaDocker, FaGithub, FaGitlab, FaHtml5, FaCss3Alt,
} from "react-icons/fa";
import {
  SiJavascript, SiMysql, SiMongodb, SiSpringboot, SiTailwindcss, SiIntellijidea, SiC, SiPython,
} from "react-icons/si";

const tools = [
  { name: "Java", icon: <FaJava className="text-red-500" /> },
  { name: "C", icon: <SiC className="text-blue-400" /> },
  { name: "Python", icon: <SiPython className="text-yellow-400" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-300" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  { name: "Docker", icon: <FaDocker className="text-blue-400" /> },
  { name: "GitHub", icon: <FaGithub className="text-black dark:text-white" /> },
  { name: "GitLab", icon: <FaGitlab className="text-orange-500" /> },
  { name: "Spring Boot", icon: <SiSpringboot className="text-green-600" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "IntelliJ IDEA", icon: <SiIntellijidea className="text-pink-500 dark:text-white" /> },
];

const ToolsTechnologies = () => (
  <section className="w-full px-0 py-6 sm:py-10">
    <div className="w-full">
      <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-10">
        Tools & Technologies
      </h2>
      <div className="w-full bg-card border border-border rounded-3xl p-5 sm:p-8 md:p-10 shadow-lg">
        <div className="grid grid-cols-3 xs:grid-cols-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-5 sm:gap-7 md:gap-8 place-items-center">
          {tools.map(t => (
            <div
              key={t.name}
              className="flex flex-col items-center justify-center text-center transition-transform duration-300 hover:scale-110"
            >
              <div className="text-3xl sm:text-4xl md:text-5xl mb-2 sm:mb-3">{t.icon}</div>
              <p className="text-xs sm:text-sm md:text-base font-medium">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ToolsTechnologies;
