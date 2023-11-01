import GithubIcon from "@/assets/githubIcon";
import InstagramIcon from "@/assets/instagramIcon";
import SiteIcon from "@/assets/siteIcon";
import TwitterIcon from "@/assets/twitterIcon";
import YoutubeIcon from "@/assets/youtubeIcon";
import DiscordIcon from "@/assets/discordIcon";
import TwitchIcon from "@/assets/twitchIcon";

export function getSocialMedia(key: string, animated?: boolean) {
	switch (key) {
		case "twitter":
			return <TwitterIcon />;
		case "instagram":
			return <InstagramIcon />;
		case "youtube":
			return <YoutubeIcon />;
		case "site":
			return <SiteIcon />;
		case "github":
			return <GithubIcon strokeWidth={2.2} animated={animated} />;
		case "discord":
			return <DiscordIcon animated={animated} />;
		case "twitch":
			return <TwitchIcon />;
	}
}
