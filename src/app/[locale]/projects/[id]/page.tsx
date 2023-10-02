"use client";
import { useTranslations } from "next-intl";

export default function Page(props: { params: { id: string } }) {

	const t = useTranslations();

	return <div className="text-white">{props.params.id}<br/>{t("title")}</div>;
}
