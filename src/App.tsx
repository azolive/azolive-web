import "./App.css";
import { IconBrandInstagram, IconBrandSoundcloud, IconBrandSpotify, IconBrandVsco } from "@tabler/icons-react";
// import { ThemeToggleButton } from "./components/ThemeToggleButton";

function App() {
  return (
    <div className="content">
      {/* <nav>
        <ThemeToggleButton />
      </nav> */}
      <main>
        <h1 className="title">AN</h1>
      </main>
      <footer>
        <div className="links">
          <a
            href="https://open.spotify.com/artist/67ITj9a4jErZJow5mLNl3a"
            target="_blank"
            rel="noreferrer"
            title="Spotify"
          >
            <IconBrandSpotify className="iconButton spotify" size="48px" />
          </a>
          <a href="https://soundcloud.com/azolive" target="_blank" rel="noreferrer" title="Soundcloud">
            <IconBrandSoundcloud className="iconButton soundcloud" size="48px" />
          </a>
          <a href="https://www.instagram.com/anvthan/" target="_blank" rel="noreferrer" title="Instagram">
            <IconBrandInstagram className="iconButton instagram" size="48px" />
          </a>
          <a href="https://vsco.co/anvthan/" target="_blank" rel="noreferrer" title="VSCO" className="iconButton">
            <IconBrandVsco size="48px" />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
