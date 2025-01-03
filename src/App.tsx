import {
  IconBrandInstagram,
  IconBrandSoundcloud,
  IconBrandSpotify,
  IconBrandTiktok,
  IconBrandVsco,
} from "@tabler/icons-react";
import { IconButton } from "./components/IconButton/IconButton";
import { VideoBackground } from "./components/VideoBackground/VideoBackground";

export function App() {
  return (
    <>
      <VideoBackground />
      <div className="content">
        <h1 className="title">AN</h1>
        <div className="links">
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
          <IconButton
            href="https://soundcloud.com/azolive"
            className="soundcloud"
            icon={IconBrandSoundcloud}
            title="Soundcloud"
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
