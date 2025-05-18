import HomePlateLogo from '../components/HomePlateLogo'
import './BlogPage.css'
const BASE = import.meta.env.BASE_URL


export default function Blog1() {
  return (
    <div className="blog-wrapper">
      <a href="/" className="logo-homeplate blog-logo-link">
        <HomePlateLogo />
      </a>

      <main className="blog-content">
        <h1 className="blog-title">Hello World 2.0!</h1>
        <p className="blog-date">Published: May 17, 2025</p>

        <img
          src={`${BASE}icon.png`}
          alt="Blog banner"
          className="blog-header-image"
        />

        <article className="blog-article">
          <p>
            Hello internet! Welcome to my personal portfolio 2.0 made with <strong>React + Vite</strong>!
            If you've come from my <a href = "https://jeffreyl45.github.io/jefflu/">old webpage</a> then you
            probably know who I am, but in case you're new, my name is Jeffrey Lu and I just finished my third year of Computer
            Science at McMaster University. I'm currently taking a professional experience year working at Scotiabank as a Software Engineer 
            starting from May 2025. My main interests lie in Software Development and Machine Learning/AI.
            Outside of school, I enjoy playing sports such as Softball and Badminton while also engaging in personal fitness.
          </p>
          <p>
            On a more serious note, it's a little bittersweet to be saying goodbye to my old webpage which was one of my very first
            front end development projects. I first deployed this project back in December 2023 with an HTML, CSS and JS stack. I definitely
            learned a lot about those tools while building that webpage, but as it continued to grow bigger and bigger with all of the new projects
            I wanted to post on it along with more blogs, it became somewhat messy and difficult to maintain. This motivated me to launch a completely 
            new webpage that would be easier and cleaner to maintain and thus I decided to make it using <strong>React</strong> and <strong>Vite</strong>
            for its fast build times and limited configuration hassles. 
          </p>
          <p>
            Nonetheless, I hope you enjoy exploring my new website, learning more about me and checking in on what I've been working on!
          </p>
        </article>
      </main>
    </div>
  )
}
