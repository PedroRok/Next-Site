import GithubIcon from "@/assets/githubIcon";
import InstagramIcon from "@/assets/social/instagramIcon";
import SiteIcon from "@/assets/siteIcon";
import TwitterIcon from "@/assets/social/twitterIcon";
import YoutubeIcon from "@/assets/social/youtubeIcon";
import DiscordIcon from "@/assets/social/discordIcon";
import TwitchIcon from "@/assets/social/twitchIcon";
import FacebookIcon from "@/assets/social/facebookIcon";
import TiktokIcon from "@/assets/social/tiktokIcon";

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
		case "facebook":
			return <FacebookIcon />;
		case "tiktok":
			return <TiktokIcon />;
	}
}
