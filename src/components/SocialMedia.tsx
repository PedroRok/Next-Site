import InstagramIcon from "@/assets/instagramIcon";
import SiteIcon from "@/assets/siteIcon";
import TwitterIcon from "@/assets/twitterIcon";
import YoutubeIcon from "@/assets/youtubeIcon";

export function getSocialMedia(key: string) {
    switch (key) {
        case "twitter":
            return <TwitterIcon/>
        case "instagram":
            return <InstagramIcon/>
        case "youtube":
            return <YoutubeIcon/>
        case "site":
            return <SiteIcon/>
            
    }
}
