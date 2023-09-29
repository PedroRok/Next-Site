export const fallbackLang = "br";
export const languages = [fallbackLang, "en"];

export const selectNextLang = (lang: string) => {
	const index = languages.indexOf(lang);
	const nextIndex = index === languages.length - 1 ? 0 : index + 1;
	return languages[nextIndex];
};
