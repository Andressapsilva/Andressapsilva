<div align="center">

<img src="assets/banner/banner.webp" alt="ANDRESSA — Software Engineering" width="100%">

# Hi, I'm Andressa  👋

**Software Engineering student · Full-Stack Developer**

![TypeScript](https://img.shields.io/badge/-TypeScript-7c3aed?style=flat-square&logo=typescript&logoColor=white)
![Python](https://img.shields.io/badge/-Python-60a5fa?style=flat-square&logo=python&logoColor=white)
![React](https://img.shields.io/badge/-React-a78bfa?style=flat-square&logo=react&logoColor=white)

</div>

---

## 💜 About Me

I'm a Software Engineering student with professional experience in **Full-Stack development**, building **web systems, internal tools and process automation**.

- 🌐 Web development
- 🤖 Artificial intelligence
- ⚙️ Automation
- 🎮 Game development

## 🛠️ Tech Stack

**Languages**<br>
![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Python](https://img.shields.io/badge/-Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![SQL](https://img.shields.io/badge/-SQL-4B3F72?style=for-the-badge&logo=databricks&logoColor=white)

**Frontend**<br>
![React](https://img.shields.io/badge/-React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![HTML5](https://img.shields.io/badge/-HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/-CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/-Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)

**Backend**<br>
![Node.js](https://img.shields.io/badge/-Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![FastAPI](https://img.shields.io/badge/-FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white)

**Database**<br>
![PostgreSQL](https://img.shields.io/badge/-PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)
![Supabase](https://img.shields.io/badge/-Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)

**Tools**<br>
![Git](https://img.shields.io/badge/-Git-F05032?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/-GitHub-181717?style=for-the-badge&logo=github&logoColor=white)
![Docker](https://img.shields.io/badge/-Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![n8n](https://img.shields.io/badge/-n8n-EA4B71?style=for-the-badge&logo=n8n&logoColor=white)
![VS Code](https://img.shields.io/badge/-VS_Code-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white)

## 🚀 Featured Projects

<!-- Replace each YOUR-... URL with the real repository link. -->
<table>
  <tr>
    <td width="33%" valign="top">
      <a href="https://github.com/Andressapsilva/YOUR-STREAMPULSE-REPO"><b>StreamPulse</b></a><br>
      <sub>Pub/Sub streaming notification system built with React and TypeScript.</sub>
    </td>
    <td width="33%" valign="top">
      <a href="https://github.com/Andressapsilva/YOUR-DOCHUB-REPO"><b>DocHub</b></a><br>
      <sub>Document processing tools built with Python and FastAPI.</sub>
    </td>
    <td width="33%" valign="top">
      <a href="https://github.com/Andressapsilva/YOUR-GEEKSTORE-REPO"><b>Geek Store</b></a><br>
      <sub>Python desktop application using CustomTkinter and OOP.</sub>
    </td>
  </tr>
</table>

## 📊 GitHub Stats

<div align="center">

<img height="170" alt="GitHub stats" src="https://github-readme-stats.vercel.app/api?username=Andressapsilva&show_icons=true&theme=radical&hide_border=true&bg_color=0b0816" />
<img height="170" alt="Top languages" src="https://github-readme-stats.vercel.app/api/top-langs/?username=Andressapsilva&layout=compact&theme=radical&hide_border=true&bg_color=0b0816" />

</div>

## 🔗 Links

<!-- Edit the URLs below: only keep the links you want to show. -->
[![GitHub](https://img.shields.io/badge/-GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Andressapsilva)
[![LinkedIn](https://img.shields.io/badge/-LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/YOUR-LINKEDIN)
[![Email](https://img.shields.io/badge/-Email-7c3aed?style=for-the-badge&logo=gmail&logoColor=white)](mailto:YOUR-EMAIL)
[![Portfolio](https://img.shields.io/badge/-Portfolio-60a5fa?style=for-the-badge&logo=googlechrome&logoColor=white)](https://YOUR-PORTFOLIO-URL)

---

## 🎬 Animated Banner

```
assets/
└── banner/
    ├── index.html      # standalone page (1200×300)
    ├── banner.css
    ├── banner.js       # pseudo-3D rotating icosahedron (Canvas, no dependencies)
    ├── banner.webp     # exported animation used above (160 frames, 20 fps, 8 s loop)
    └── preview.png     # static screenshot
scripts/export-frames.mjs
```

**Run / preview:** open `assets/banner/index.html` in a browser, or serve it:

```bash
python3 -m http.server 8000   # then open http://localhost:8000/assets/banner/
```

**Export as WebP / GIF:** the animation is deterministic and loops every 8 s. Use `?t=SECONDS` to view a single frame.

```bash
npm i --no-save playwright && npx playwright install chromium
node scripts/export-frames.mjs 20          # PNG frames -> assets/banner/frames/

ffmpeg -framerate 20 -i assets/banner/frames/frame-%04d.png -loop 0 -c:v libwebp -lossless 0 -q:v 75 assets/banner/banner.webp
ffmpeg -framerate 20 -i assets/banner/frames/frame-%04d.png -vf "split[a][b];[a]palettegen[p];[b][p]paletteuse" -loop 0 assets/banner/banner.gif
```
