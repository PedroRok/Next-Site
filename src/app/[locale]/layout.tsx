import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import TWHelper from "@/components/TWHelper";
import clsx from "clsx";
import Footer from "@/components/Footer";
import { languages } from "@/i18n/settings";
import { notFound } from "next/navigation";
import { NextIntlClientProvider, AbstractIntlMessages, createTranslator } from "next-intl";
import Head from "next/head";


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
				<meta content="Pedro Rok Portfólio" property="og:title" />
				<meta content="Meu portfólio pessoal, onde mostro quem sou eu e alguns projetos que já fiz." property="og:description" />
				<meta content="https://pedrorok.com" property="og:url" />
				<meta content="https://media.discordapp.net/attachments/1071515485214089266/1167915837252976722/transparente.png" property="og:image" />
				<meta content="#00d2ff" data-react-helmet="true" name="theme-color" />
			</Head>
			<body
				className={clsx(
					"flex flex-col items-center min-h-screen background select-none",
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
