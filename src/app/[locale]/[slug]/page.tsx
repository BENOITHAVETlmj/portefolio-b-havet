import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

type tParamsSlug = Promise<{ locale: string; slug: string }>;
export default async function ProjectDetailsPage(props: {
  params: tParamsSlug;
}) {
  const { slug, locale } = await props.params;
  const t = await getTranslations({ locale, namespace: "Projects" });
  setRequestLocale(locale);
  if (!t.has(`${slug}.id`)) {
    notFound();
  }

  return <></>;
}
