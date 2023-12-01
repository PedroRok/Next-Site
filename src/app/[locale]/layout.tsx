import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import { Inter } from "next/font/google";
import clsx from "clsx";
import Footer from "@/components/Footer";
import { languages } from "@/i18n/settings";
import { notFound } from "next/navigation";
import { NextIntlClientProvider, AbstractIntlMessages, createTranslator } from "next-intl";
import Head from "next/head";
import PlausibleProvider from "next-plausible";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
// 	title: "Rok's Portfolio",
// 	description: "A portfolio made by Rok"
// };

type Props = {
	children: React.ReactNode;
	params: {
		locale: string;
	};
};

export async function generateMetadata({params} : Props) {
	let messages : any;

	try {
		messages = (await import(`@/i18n/${params.locale}.json`)).default
	} catch (error) {
		messages = (await import(`@/i18n/br.json`)).default
	}

	const t = createTranslator({ locale: params.locale, messages });
	// const t = {
		// title: "Rok's Portfolio",
		// description: "A portfolio made by Rok"
	// };

	return {
		title: t("title"),
		description: t("description")
	};
}

export async function generateStaticParams() {
	return languages.map((it) => ({ locale: it }));
}

export default async function RootLayout({ children, params }: Props) {
	let messages: AbstractIntlMessages | undefined;

	try {
		messages = (await import(`@/i18n/${params.locale}.json`)).default;
	} catch (error) {
		notFound();
	}
	

	return (
		<html lang={params.locale}>
			<Head>
				<link rel="shortcut icon" href="/icon.ico" />
				<meta name="darkreader-lock"/>
				<PlausibleProvider
					domain="https://pedrorok.com"
					customDomain="https://analytics.lucasmellof.com"
					selfHosted
					trackOutboundLinks
				/>
			</Head>
			<body
				className={clsx(
					"flex flex-col items-center min-h-screen background select-none bg-black",
					inter.className
				)}
			>
				<NextIntlClientProvider 
				locale={params.locale} 
				messages={messages}>
					<Navbar />
					{/*<TWHelper />*/}
					{children}
					<Footer />
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
