// import { NextResponse } from "next/server";
// import acceptLanguage from "accept-language";

// export function middleware(req: NextRequest) {
// 	let language: string;
// 	if (req.cookies.has(""))
// }
import createMiddleware from "next-intl/middleware";
import { languages, fallbackLang } from "./i18n/settings";

export default createMiddleware({
	// A list of all locales that are supported
	locales: languages,

	// If this locale is matched, pathnames work without a prefix (e.g. `/about`)
	defaultLocale: fallbackLang
});

export const config = {
	// Skip all paths that should not be internationalized. This example skips
	// certain folders and all pathnames with a dot (e.g. favicon.ico)
	matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"]
};
