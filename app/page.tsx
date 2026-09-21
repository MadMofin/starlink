import Home from "@/content/home/home.mdx";
import { SITE_NAME } from "@/constants/site";
import { createMetadata } from "@/components/seo/createMetadata";

export const metadata = createMetadata({
  title: `Bienvenido a ${SITE_NAME}`,
});

export default function HomePage() {
  return <Home />;
}
