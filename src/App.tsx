import "./App.css";
import { IconBrandInstagram, IconBrandSoundcloud, IconBrandSpotify, IconBrandVsco } from "@tabler/icons-react";
import { ThemeToggleButton } from "./components/ThemeToggleButton";

function App() {
  return (
    <div className="content">
      <nav>
        <ThemeToggleButton />
      </nav>
      <main>
        <h1 className="title">AN</h1>
      </main>
      <footer>
        <div className="links">
          <a
            href="https://open.spotify.com/artist/67ITj9a4jErZJow5mLNl3a?si=xVTfix32Rru9CqT_KqgsRg"
            target="_blank"
            rel="noreferrer"
            title="Spotify"
            className="link"
          >
            <IconBrandSpotify size="48px" />
          </a>
          <a
            href="https://on.soundcloud.com/FA1sGCWxi84Ra5Uh9"
            target="_blank"
            rel="noreferrer"
            title="Soundcloud"
            className="link"
          >
            <IconBrandSoundcloud size="48px" />
          </a>
          <a
            href="https://www.instagram.com/anvthan/"
            target="_blank"
            rel="noreferrer"
            title="Instagram"
            className="link"
          >
            <IconBrandInstagram size="48px" />
          </a>
          <a href="https://vsco.co/anvthan/" target="_blank" rel="noreferrer" title="VSCO" className="link">
            <IconBrandVsco size="48px" />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
