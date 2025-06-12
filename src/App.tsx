import {
  IconBrandInstagram,
  IconBrandSoundcloud,
  IconBrandSpotify,
  IconBrandYoutube,
  IconBrandTiktok,
} from "@tabler/icons-react";
import { IconButton } from "./components/IconButton/IconButton";
import bg from "./assets/omt-bg.webp";
import "./css/Background.css";

export function App() {
  return (
    <>
      <img src={bg} className="background-container" />
      <div className="content">
        <h1 className="title">AN</h1>
        <div className="links">
          <IconButton
            href="https://www.instagram.com/anvthan/"
            className="instagram"
            icon={IconBrandInstagram}
            title="Instagram"
          />
          <IconButton
            href="https://tiktok.com/@highlowmixup/"
            className="tiktok"
            icon={IconBrandTiktok}
            title="TikTok"
          />
          <IconButton
            href="https://soundcloud.com/azolive"
            className="soundcloud"
            icon={IconBrandSoundcloud}
            title="Soundcloud"
          />
          <IconButton
            href="https://www.youtube.com/@azo_live"
            className="youtube"
            icon={IconBrandYoutube}
            title="YouTube"
          />
          <IconButton
            href="https://open.spotify.com/artist/67ITj9a4jErZJow5mLNl3a"
            className="spotify"
            icon={IconBrandSpotify}
            title="Spotify"
          />
        </div>
      </div>
    </>
  );
}
