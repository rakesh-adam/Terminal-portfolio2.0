export const getCommandOutput = (command, args) => {
  switch (command) {
    case 'help':
      return `
        <div class="space-y-1 mt-2 text-[#00ff00]">
          <p><span class="text-[#ff00ff] italic font-bold w-24 inline-block">about</span> - Learn more about me</p>
          <p><span class="text-[#ff00ff] italic font-bold w-24 inline-block">education</span> - View my academic background</p>
          <p><span class="text-[#ff00ff] italic font-bold w-24 inline-block">skills</span> - Display my technical skills</p>
          <p><span class="text-[#ff00ff] italic font-bold w-24 inline-block">projects</span> - View my recent work</p>
          <p><span class="text-[#ff00ff] italic font-bold w-24 inline-block">social</span> - Get my contact info & profiles</p>
          <p><span class="text-[#ff00ff] italic font-bold w-24 inline-block">download</span> - Download my CV/Resume</p>
          <p><span class="text-[#ff00ff] italic font-bold w-24 inline-block">clear</span> - Clear the terminal screen</p>
        </div>
      `;
    case 'about':
      return `
        <div class="mt-2 text-[#00ff00]">
          <p>Hi, I'm <span class="text-cyan-400 font-bold uppercase tracking-wider">Rakesh Matta</span>.</p>
          <p class="mt-2 text-gray-300 italic">"To obtain a Software Developer role where I can leverage my skills in Python, front-end, and back-end development to build efficient applications and support the company’s technological growth."</p>
          <p class="mt-4 text-cyan-400 font-bold uppercase underline">Experience</p>
          <p class="mt-1 ml-2 text-sm"><span class="text-yellow-400">Java Full Stack Web Development Intern</span> - Talentshine</p>
        </div>
      `;
    case 'education':
      return `
        <div class="mt-2 text-[#00ff00] space-y-5">
          <div>
            <h3 class="text-cyan-400 font-bold uppercase tracking-wider border-b border-cyan-400/30 pb-1 mb-2">Bachelor of Technology (B.Tech)</h3>
            <p class="text-yellow-400 font-bold">Bonam Venkata Chalamayya Engineering College</p>
            <p class="text-gray-300">Computer Science and Engineering (Odalarevu)</p>
            <p class="text-[#ff00ff] mt-1">Timeline: 2023 - 2027 <span class="text-white mx-2">|</span> CGPA: <span class="text-white font-bold">8.08/10</span></p>
          </div>
          <div>
            <h3 class="text-cyan-400 font-bold uppercase tracking-wider border-b border-cyan-400/30 pb-1 mb-2">Intermediate</h3>
            <p class="text-yellow-400 font-bold">Srividya Junior College, Narsipatnam</p>
            <p class="text-gray-300">Maths, Physics, Chemistry</p>
            <p class="text-[#ff00ff] mt-1">Timeline: 2021 - 2023 <span class="text-white mx-2">|</span> Percentage: <span class="text-white font-bold">92.2%</span></p>
          </div>
          <div>
            <h3 class="text-cyan-400 font-bold uppercase tracking-wider border-b border-cyan-400/30 pb-1 mb-2">Secondary School Certificate (SSC)</h3>
            <p class="text-yellow-400 font-bold">Pentapati Suryarao Memorial Z.P.H School, Kothakota</p>
            <p class="text-[#ff00ff] mt-1">Timeline: 2020 - 2021 <span class="text-white mx-2">|</span> Grade Points: <span class="text-white font-bold">10.0</span></p>
          </div>
        </div>
      `;
    case 'skills':
      return `
        <div class="mt-2 space-y-2 text-[#00ff00]">
          <p><span class="text-yellow-400 font-bold w-28 inline-block">Technologies:</span> HTML5, CSS, Java Script, DSA</p>
          <p><span class="text-yellow-400 font-bold w-28 inline-block">Languages:</span> Python, C, Java</p>
          <p><span class="text-yellow-400 font-bold w-28 inline-block">Frameworks:</span> Bootstrap</p>
          <p><span class="text-yellow-400 font-bold w-28 inline-block">Database:</span> MySQL</p>
          <p><span class="text-yellow-400 font-bold w-28 inline-block">Tools:</span> Git, Github, VS Code</p>
          <p><span class="text-yellow-400 font-bold w-28 inline-block">Soft Skills:</span> Creative Thinking, Problem Solving</p>
        </div>
      `;
    case 'projects':
      return `
        <div class="mt-2 space-y-4 text-[#00ff00]">
          <div>
            <p class="text-cyan-400 font-bold">1. Terminal Portfolio</p>
            <p class="text-sm">A command-line interface styled personal website built with React.</p>
            <p class="text-sm mt-1">Link: <a href="https://github.com/rakesh-adam/Terminal-portfolio" target="_blank" class="text-blue-400 underline hover:text-blue-300">https://github.com/rakesh-adam/Terminal-portfolio</a></p>
          </div>
          <div>
            <p class="text-cyan-400 font-bold">2. 3D Portfolio</p>
            <p class="text-sm">An immersive interactive 3D portfolio experience showcasing my skills using modern web technologies.</p>
            <p class="text-sm mt-1">Link: <a href="https://rakesh-adam.github.io/3D-portfolio/" target="_blank" class="text-blue-400 underline hover:text-blue-300">https://rakesh-adam.github.io/3D-portfolio/</a></p>
          </div>
        </div>
      `;
    case 'social':
      return `
        <div class="mt-2 space-y-1 text-[#00ff00]">
          <p><span class="text-yellow-400 font-bold w-24 inline-block">Email:</span> <a href="mailto:rakeshmatta110305@gmail.com" class="text-blue-400 underline hover:text-blue-300">rakeshmatta110305@gmail.com</a></p>
          <p><span class="text-yellow-400 font-bold w-24 inline-block">Contact:</span> +91 9177820572</p>
          <br/>
          <p><span class="text-yellow-400 font-bold w-24 inline-block">GitHub:</span> <a href="https://github.com/rakesh-adam" target="_blank" class="text-blue-400 underline hover:text-blue-300">github.com/rakesh-adam</a></p>
          <p><span class="text-yellow-400 font-bold w-24 inline-block">LinkedIn:</span> <a href="https://www.linkedin.com/in/rakesh-matta-722b11330/" target="_blank" class="text-blue-400 underline hover:text-blue-300">linkedin.com/in/rakesh-matta-722b11330/</a></p>
        </div>
      `;
    default:
      return `
        <div class="text-red-500 mt-2">
          Command not found: <span class="text-white">${command}</span>. Type <span class="text-[#ff00ff] italic">help</span> for a list of available commands.
        </div>
      `;
  }
};