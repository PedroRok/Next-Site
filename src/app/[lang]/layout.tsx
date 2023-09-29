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

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
// 	title: "Rok's Portfolio",
// 	description: "A portfolio made by Rok"
// };

type Props = {
	children: React.ReactNode;
	params: {
		lang: string;
	};
};

export async function generateMetadata({params} : Props) {
	let lang = params.lang || "en";
	console.log({lang, params});
	const messages = (await import(`../../i18n/${lang}.json`)).default;

	const t = createTranslator({ locale: lang, messages });
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
	console.log(params);
	let messages: AbstractIntlMessages | undefined;

	try {
		messages = (await import(`../../i18n/${params.lang}.json`)).default;
	} catch (error) {
		notFound();
	}


	return (
		<html lang={params.lang}>
			<body
				className={clsx(
					"flex flex-col items-center min-h-screen background select-none",
					inter.className
				)}
			>
				<NextIntlClientProvider locale={params.lang} messages={messages}>
					<Navbar />
					<TWHelper />
					{children}
					<Footer />
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
