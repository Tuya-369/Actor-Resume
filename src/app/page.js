const actors = [
  {
    id: 1,
    name: "HishigSuren",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1400&q=85",
    bio: "I am HishigSuren, an actor who finds life in stories. I love movies, different characters and the emotions they bring. Every role is a new journey.",
    roles: ["Actor", "Storyteller", "Dreamer"],
    films: [
      [
        "Interstellar",
        "2014",
        "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=600&q=80",
        "https://www.youtube.com/watch?v=zSWdZVtXT7E",
      ],
      [
        "Inception",
        "2010",
        "https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?auto=format&fit=crop&w=600&q=80",
        "https://www.youtube.com/watch?v=YoHD9XEInc0",
      ],
      [
        "Fight Club",
        "1999",
        "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=600&q=80",
        "https://www.youtube.com/watch?v=qtRKdVHc-cE",
      ],
      [
        "Dune",
        "2021",
        "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=600&q=80",
        "https://www.youtube.com/watch?v=n9xhJrPXop4",
      ],
      [
        "The Dark Knight",
        "2008",
        "https://images.unsplash.com/photo-1519608487953-e999c86e7454?auto=format&fit=crop&w=600&q=80",
        "https://www.youtube.com/watch?v=EXeTwQWrcwY",
      ],
    ],
  },
  {
    id: 2,
    name: "Naran",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1400&q=85",
    bio: "Naran makes every character feel close to the heart. He believes the quietest moments can tell the biggest stories.",
    roles: ["Actor", "Explorer", "Creator"],
    films: [
      [
        "Arrival",
        "2016",
        "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?auto=format&fit=crop&w=600&q=80",
        "https://www.youtube.com/watch?v=tFMo3UJ4B4g",
      ],
      [
        "Blade Runner 2049",
        "2017",
        "https://images.unsplash.com/photo-1519608487953-e999c86e7454?auto=format&fit=crop&w=600&q=80",
        "https://www.youtube.com/watch?v=gCcx85zbxz4",
      ],
      [
        "The Martian",
        "2015",
        "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?auto=format&fit=crop&w=600&q=80",
        "https://www.youtube.com/watch?v=ej3ioOneTy8",
      ],
    ],
  },
  {
    id: 3,
    name: "Selenge",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1400&q=85",
    bio: "Selenge is drawn to bold women, strange worlds, and stories that stay with you long after the credits roll.",
    roles: ["Actor", "Artist", "Voice"],
    films: [
      [
        "Black Swan",
        "2010",
        "https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?auto=format&fit=crop&w=600&q=80",
        "https://www.youtube.com/watch?v=5jaI1XOB-bs",
      ],
      [
        "La La Land",
        "2016",
        "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=600&q=80",
        "https://www.youtube.com/watch?v=0pdqf4P9MB8",
      ],
      [
        "Gravity",
        "2013",
        "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
        "https://www.youtube.com/watch?v=OiTiKOy59o4",
      ],
    ],
  },
  {
    id: 4,
    name: "Temuulen",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1400&q=85",
    bio: "Temuulen chases characters with a pulse: imperfect, brave and impossible to forget. Cinema is where he feels most awake.",
    roles: ["Actor", "Performer", "Nomad"],
    films: [
      [
        "Whiplash",
        "2014",
        "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=600&q=80",
        "https://www.youtube.com/watch?v=7d_jQycdQGo",
      ],
      [
        "Drive",
        "2011",
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=600&q=80",
        "https://www.youtube.com/watch?v=KBiOF3y1W0Y",
      ],
      [
        "Parasite",
        "2019",
        "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=600&q=80",
        "https://www.youtube.com/watch?v=5xH0HfJHsaY",
      ],
    ],
  },
  {
    id: 5,
    name: "Anu",
    image:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=1400&q=85",
    bio: "Anu brings warmth and edge to every frame. She is happiest when a role asks her to become someone completely unexpected.",
    roles: ["Actor", "Muse", "Writer"],
    films: [
      [
        "Her",
        "2013",
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=600&q=80",
        "https://www.youtube.com/watch?v=WzV6mXIOVl4",
      ],
      [
        "Amelie",
        "2001",
        "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80",
        "https://www.youtube.com/watch?v=HUECWi5pX7o",
      ],
      [
        "Portrait of a Lady",
        "2019",
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
        "https://www.youtube.com/watch?v=R-fQPTwma9o",
      ],
    ],
  },
  {
    id: 6,
    name: "Munkh",
    image:
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&w=1400&q=85",
    bio: "Munkh finds truth in the details: a glance, a held breath, a room after everyone has left. That is where his work begins.",
    roles: ["Actor", "Observer", "Maker"],
    films: [
      [
        "The Revenant",
        "2015",
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80",
        "https://www.youtube.com/watch?v=LoebZZ8K5N0",
      ],
      [
        "Oppenheimer",
        "2023",
        "https://images.unsplash.com/photo-1533130061792-64b345e4a833?auto=format&fit=crop&w=600&q=80",
        "https://www.youtube.com/watch?v=uYPbbksJxIg",
      ],
      [
        "Tenet",
        "2020",
        "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80",
        "https://www.youtube.com/watch?v=L3pk_TBkihU",
      ],
    ],
  },
  {
    id: 7,
    name: "Oyun",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1400&q=85",
    bio: "Oyun loves stories with movement, music and a little danger. She approaches each new set with curiosity and an open heart.",
    roles: ["Actor", "Dancer", "Spark"],
    films: [
      [
        "Everything Everywhere",
        "2022",
        "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?auto=format&fit=crop&w=600&q=80",
        "https://www.youtube.com/watch?v=wxN1T1uxQ2g",
      ],
      [
        "Barbie",
        "2023",
        "https://images.unsplash.com/photo-1519235106638-30cc49b5dbc5?auto=format&fit=crop&w=600&q=80",
        "https://www.youtube.com/watch?v=pBk4NYhWNMM",
      ],
      [
        "Past Lives",
        "2023",
        "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=600&q=80",
        "https://www.youtube.com/watch?v=kA244xewjcI",
      ],
    ],
  },
  {
    id: 8,
    name: "Bilegt",
    image:
      "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=1400&q=85",
    bio: "Bilegt works from instinct and always looks for the human story underneath the spectacle. He considers every project a conversation.",
    roles: ["Actor", "Builder", "Traveller"],
    films: [
      [
        "Top Gun: Maverick",
        "2022",
        "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80",
        "https://www.youtube.com/watch?v=qSqVVswa420",
      ],
      [
        "Ford v Ferrari",
        "2019",
        "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=600&q=80",
        "https://www.youtube.com/watch?v=I3h9Z89U9ZA",
      ],
      [
        "The Batman",
        "2022",
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=600&q=80",
        "https://www.youtube.com/watch?v=mqqft2x_Aa4",
      ],
    ],
  },
  {
    id: 9,
    name: "Tsolmon",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1400&q=85",
    bio: "Tsolmon makes room for characters who are complicated, funny and fiercely alive. She loves a script that surprises her.",
    roles: ["Actor", "Reader", "Believer"],
    films: [
      [
        "Little Women",
        "2019",
        "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=600&q=80",
        "https://www.youtube.com/watch?v=AST2-4db4ic",
      ],
      [
        "The Queen's Gambit",
        "2020",
        "https://images.unsplash.com/photo-1586165368502-1bad197a6461?auto=format&fit=crop&w=600&q=80",
        "https://www.youtube.com/watch?v=CDrieqwSdgI",
      ],
      [
        "Nomadland",
        "2020",
        "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=600&q=80",
        "https://www.youtube.com/watch?v=6sxCFZ8_d84",
      ],
    ],
  },
  {
    id: 10,
    name: "Erdene",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1400&q=85",
    bio: "Erdene is an actor guided by wonder. He is interested in the questions a film leaves behind, long after its final image fades.",
    roles: ["Actor", "Seeker", "Visionary"],
    films: [
      [
        "The Grand Budapest Hotel",
        "2014",
        "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=600&q=80",
        "https://www.youtube.com/watch?v=1Fg5iWmQjwk",
      ],
      [
        "The Green Knight",
        "2021",
        "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=600&q=80",
        "https://www.youtube.com/watch?v=sS6ksY8xWCY",
      ],
      [
        "Moonlight",
        "2016",
        "https://images.unsplash.com/photo-1519608487953-e999c86e7454?auto=format&fit=crop&w=600&q=80",
        "https://www.youtube.com/watch?v=9NJj12tJzqc",
      ],
    ],
  },
];

export async function Portfolio({ searchParams }) {
  const params = await searchParams;
  const actorId = Number(params?.id) || 1;
  const actor = actors.find((item) => item.id === actorId) ?? actors[0];

  return (
    <main className="portfolio-shell">
      <section className="portfolio-frame">
        <header
          className="hero"
          style={{ backgroundImage: `url(${actor.image})` }}
        >
          <div className="hero-shade" />
          <div className="hero-copy">
            <span className="eyebrow">Actor</span>
            <h1>{actor.name}</h1>
            <span className="hero-rule" />
            <p>
              Movies are not just a dream for me,
              <br />
              they&apos;re a part of who I am.
            </p>
            <nav className="socials" aria-label="Social profiles">
              <a href="#contact" aria-label="Instagram">
                ◎
              </a>
              <a href="#contact" aria-label="X">
                𝕏
              </a>
              <a href="#contact" aria-label="YouTube">
                ▶
              </a>
              <a href="#contact" aria-label="Website">
                ↗
              </a>
            </nav>
          </div>
        </header>
        <section className="about" id="contact">
          <div
            className="portrait"
            style={{ backgroundImage: `url(${actor.image})` }}
          />
          <div className="about-copy">
            <span className="eyebrow">About me</span>
            <h2>A little bit about me</h2>
            <p>{actor.bio}</p>
            <div className="roles">
              <i />
              {actor.roles.map((role) => (
                <span key={role}>{role}</span>
              ))}
            </div>
          </div>
        </section>
        <section className="filmography">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Filmography</span>
              <h2>My Movies</h2>
            </div>
            <span className="view-all">View All&nbsp; →</span>
          </div>
          <div className="movies">
            {actor.films.map(([title, year, image, trailer]) => (
              <article className="movie" key={title}>
                <div
                  className="movie-art"
                  style={{ backgroundImage: `url(${image})` }}
                />
                <div className="movie-info">
                  <h3>{title}</h3>
                  <span>{year}</span>
                  <a href={trailer} target="_blank" rel="noreferrer">
                    <b>▶</b> Watch Trailer
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>
        <footer>“&nbsp;&nbsp; Good movies, better days &nbsp;&nbsp;”</footer>
      </section>
    </main>
  );
}

export default function Home({ searchParams }) {
  return <Portfolio searchParams={searchParams} />;
}
