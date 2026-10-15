import "./style.css";

function App() {
  return (
    <div>
{/* Nav Bar */}
      <nav className="navbar">
        <h2 className="logo">MyPortfolio</h2>

        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

{/* 1. HOME SECTION */}
      <section id="home" className="home">
        <div className="home-content">
{/* NAME */}
          <h1>Hi, I'm Reiven Gabriel</h1>
          <p>I'm an IT student learning web development.</p>

{/* IMAGE */}
          <img
            src="/ako.jpg"
            alt="My Profile"
            className="profile-img"
          />
          <br />
          <a href="#projects" className="btn">
            View My Projects
          </a>
        </div>
      </section>

{/*PROJECTS SECTION */}
      <section id="projects" className="projects">
        <h2>My Projects</h2>
        <p>Here are some projects I have created.</p>

        <div className="project-container">
                                                
{/* 1 */}
          <div className="project-card">
            <h3>Dynamic Interface</h3>
            <p>Creates interactive and user-friendly interfaces that update content based on user actions and data.</p>           
          </div>

{/* 2 */}
          <div className="project-card">
            <h3>Backend</h3>
            <p>Handles the server-side logic, database, and functionality of a website or application.</p>            
          </div>

{/* 3 */}
          <div className="project-card">
            <h3>Responsive Design</h3>
            <p>Ensures the website adapts smoothly to different screen sizes, including mobile, tablet, and desktop.</p>
            
          </div>

        </div>
      </section>

{/* ABOUT SECTION */}
      <section id="about" className="about">
        <h2>About Me</h2>

{/* Decription */}
        <p>
          I am a Bachelor of Science in Information Technology (BSIT) student at Batangas State University 
          – The National Engineering University (BatStateU TNEU), Balayan Campus..
        </p>
        <h3>My Skills</h3>
        <p>HTML | CSS | JavaScript | React | Basic Programming</p>
      </section>

{/* CONTACT SECTION */}
      <section id="contact" className="contact">
        <h2>Contact Me</h2>
        <p>Feel free to contact me through the details below.</p>
        <p>Email: 24-19537@g.batstate-u.edu.ph</p>
        <p>Phone: 09123456789</p>
        <p>Location: City of Calaca, Batangas, Philippines</p>
        <a href="mailto:24-19537@g.batstate-u.edu.ph" className="btn">
          Send Me an Email
        </a>
      </section>
    </div>
  );
}

export default App;