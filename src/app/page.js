const profile = {
  name: "Б.Хишигсүрэн",
  title: "Эвлүүлэгч, Өнгө шүүлт",
  image: "/1.jpg",
  portrait: "/2.jpg",
  bio: "Кино урлагийн хэмнэл, өнгө шүүлт, дүрслэлийн мэдрэмжээр дамжуулан түүхийг амилуулагч Пост-продакшн мэргэжилтэн (Video Editor / Colorist). Уран сайхны болон бүрэн хэмжээний кино, олон ангит бүтээл, веб драмын эвлүүлэг, өнгө шүүлт, visual эффектийн чиглэлээр дагнан ажилладаг.",
  roles: ["Эвлүүлэгч", "Өнгө шүүлт", "CGI"],
  details: [
    ["И-мэйл", "hishgee.maze@gmail.com", "mailto:hishgee.maze@gmail.com"],
    ["Утас", "8540 9982", "tel:+97685409982"],
    ["Төрсөн огноо", "1999.09.07"],
  ],
  films: [
    [
      "Эрдэнэсийн өв",
      "2018",
      "Туслах CG",
      "https://www.youtube.com/watch?v=CfnXQq8wVWE",
      "/film/1.png",
    ],
    [
      "Однажды UB",
      "2018",
      "Making movie",
      "https://www.youtube.com/watch?v=XRTcRWhGIOo",
      "/film/2.png",
    ],
    [
      "Үүрдийн хайр",
      "2021",
      "Эвлүүлэгч",
      "https://www.youtube.com/watch?v=6Y47fM3F9u8",
      "/film/3.png",
    ],
    [
      "Тэнгэр газрын зааг",
      "2021",
      "Эвлүүлэгч, CGI",
      "https://www.youtube.com/watch?v=IvDmWdA2zBk",
      "/film/4.png",
    ],
    [
      "Хуульч",
      "2023",
      "Эвлүүлэгч",
      "https://www.youtube.com/watch?v=QZd92jxUBT8",
      "/film/5.png",
    ],
    [
      "Аллагын зураглал",
      "2023",
      "Эвлүүлэгч, өнгө шүүлт",
      "https://www.youtube.com/watch?v=Ujl9euQRbUU",
      "/film/6.png",
    ],
    [
      "Гарц",
      "2024",
      "Эвлүүлэгч",
      "https://www.youtube.com/watch?v=BAW3yBWS7dQ",
      "/film/7.png",
    ],
    [
      "Алтан хүргэн",
      "2024",
      "Эвлүүлэгч",
      "https://www.facebook.com/reel/762390802071692",
      "/film/8.png",
    ],
    [
      "Агил",
      "2024",
      "Эвлүүлэгч, CG",
      "https://www.youtube.com/watch?v=yu2xqNMHcz0",
      "/film/9.png",
    ],
    [
      "Золиос",
      "2024",
      "Эвлүүлэгч, CG, өнгө шүүлт",
      "https://www.youtube.com/watch?v=Wv50KKgANCs",
      "/film/10.png",
    ],
    [
      "Болзооны сургууль",
      "2024",
      "Web drama 11 анги - эвлүүлэгч, өнгө шүүлт, CGI",
      "https://www.youtube.com/watch?v=Wwz8p6DYpp4",
      "/film/11.png",
    ],
    [
      "Мөнгөний үнэр",
      "2025",
      "Эвлүүлэгч, өнгө шүүлт",
      "https://www.youtube.com/watch?v=_SkwOFT4avs",
      "/film/12.png",
    ],
    [
      "Хундага дүүрэн хов",
      "2025",
      "Эвлүүлэгч, өнгө шүүлт",
      "https://www.youtube.com/watch?v=0Elkzl3ZPCI",
      "/film/13.png",
    ],
    [
      "Багийн сургууль",
      "2025",
      "Эвлүүлэгч, өнгө шүүлт",
      "https://www.youtube.com/watch?v=3TPqgT-sm3U",
      "/film/14.png",
    ],
    [
      "Хөх толбот хүмүүс 2",
      "2025",
      "Эвлүүлэгч, өнгө шүүлт",
      "https://www.youtube.com/watch?v=gfHkozhcl3A",
      "/film/15.png",
    ],
    [
      "Анарын өнгөтэй үүл",
      "2025",
      "Эвлүүлэгч, өнгө шүүлт",
      "https://www.youtube.com/watch?v=jUdvaovDs8E",
      "/film/16.png",
    ],
    [
      "Дурсамж сургууль",
      "2026",
      "Web drama 16 анги - эвлүүлэгч, өнгө шүүлт",
      "https://www.youtube.com/watch?v=dzIyEXIludw",
      "/film/17.png",
    ],
    [
      "Манай байр Америк",
      "2026",
      "Эвлүүлэгч, өнгө шүүлт",
      "https://www.youtube.com/watch?v=JhHohTji1gQ",
      "/film/18.png",
    ],
    [
      "Биднийг зүсэлсэн гүнж",
      "2026",
      "Эвлүүлэгч, өнгө шүүлт",
      "https://www.youtube.com/watch?v=bCnwnmIaVcE",
      "/film/19.png",
    ],
    [
      "Галзуу шөнө",
      "2026",
      "Эвлүүлэгч, өнгө шүүлт",
      "https://www.facebook.com/reel/1639775311106408",
      "/film/20.png",
    ],
  ],
};

function ProfilePortfolio() {
  const filmsByYear = profile.films.reduce((groups, film) => {
    const year = film[1];
    groups[year] = [...(groups[year] ?? []), film];
    return groups;
  }, {});

  return (
    <main className="portfolio-shell">
      <section className="portfolio-frame">
        <header className="site-header">
          <span className="site-name">{profile.name}</span>
          <nav className="site-nav" aria-label="Үндсэн цэс">
            <a href="#about">Миний тухай</a>
            <a href="#projects">Бүтээлүүд</a>
            <a href="#experience">Туршлага</a>
            <a href="#contact">Холбоо барих</a>
          </nav>
        </header>

        <section className="about" id="about">
          <div
            className="portrait"
            style={{ backgroundImage: `url(${profile.portrait})` }}
          />
          <div className="about-copy">
            <span className="eyebrow">Миний тухай</span>
            <h2>{profile.title}</h2>
            <p>{profile.bio}</p>
            <div className="roles">
              <i />
              {profile.roles.map((role) => (
                <span key={role}>{role}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="filmography" id="projects">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Filmography</span>
              <h2>Бүтээлүүд</h2>
            </div>
            <span className="view-all">
              {profile.films.length} бүтээл / 2018-2026
            </span>
          </div>
          {Object.entries(filmsByYear).map(([year, films]) => (
            <section className="year-group" key={year}>
              <h3 className="year-label">{year}</h3>
              <div className="movies">
                {films.map(([title, , role, trailer, poster]) => (
                  <article className="movie" key={title}>
                    <div
                      className="movie-art"
                      style={{ backgroundImage: `url(${poster})` }}
                    ></div>
                    <div className="movie-info">
                      <h3>{title}</h3>
                      <span>{role}</span>
                      <a href={trailer} target="_blank" rel="noreferrer">
                        <b>▶</b> Trailer үзэх
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </section>

        <section
          className="filmography experience"
          id="experience"
          aria-label="Ажлын туршлага"
        >
          <div className="section-kicker">
            <span className="eyebrow">Experience</span>
            <span>01</span>
          </div>
          <a
            className="experience-entry"
            href="https://www.facebook.com/Relymongolia"
            target="_blank"
            rel="noreferrer"
          >
            <span>2021-2023</span>
            <strong>Rely Marketing Agency</strong>
            <em>Зураглаач, эвлүүлэгч</em>
            <b aria-hidden="true">↗</b>
          </a>
        </section>

        <section className="contact-section" id="contact">
          <div>
            <span className="eyebrow">Contact</span>
            <h2>Холбоо барих</h2>
          </div>
          <dl className="contact-details">
            {profile.details.map(([label, value, href]) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{href ? <a href={href}>{value}</a> : value}</dd>
              </div>
            ))}
          </dl>
        </section>
        <footer>Кино бүр өөрийн хэмнэлтэй</footer>
      </section>
    </main>
  );
}

export function Portfolio() {
  return <ProfilePortfolio />;
}

export default function Home() {
  return <ProfilePortfolio />;
}
