import {
  IconBrandInstagram,
  IconBrandSoundcloud,
  IconBrandSpotify,
  IconBrandTiktok,
  IconBrandVsco,
} from "@tabler/icons-react";
import { IconButton } from "./components/IconButton/IconButton";

function App() {
  return (
    <div className="content">
      <main>
        <h1 className="title logo">AN</h1>
      </main>
      <footer>
        <div className="links">
          <IconButton
            href="https://open.spotify.com/artist/67ITj9a4jErZJow5mLNl3a"
            className="spotify"
            icon={IconBrandSpotify}
            title="Spotify"
          />
          <IconButton
            href="https://soundcloud.com/azolive"
            className="soundcloud"
            icon={IconBrandSoundcloud}
            title="Soundcloud"
          />
          <IconButton
            href="https://www.instagram.com/anvthan/"
            className="instagram"
            icon={IconBrandInstagram}
            title="Instagram"
          />
          <IconButton href="https://vsco.co/anvthan/" className="vsco" icon={IconBrandVsco} title="VSCO" />
          <IconButton
            href="https://tiktok.com/@highlowmixup/"
            className="tiktok"
            icon={IconBrandTiktok}
            title="TikTok"
          />
        </div>
      </footer>
    </div>
  );
}

export default App;
