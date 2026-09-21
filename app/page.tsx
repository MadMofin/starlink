import { SITE_NAME } from "@/constants/site";
import { createMetadata } from "@/components/seo/createMetadata";
import { Home } from "@/content/home/home";

export const metadata = createMetadata({
  title: `Bienvenido a ${SITE_NAME}`,
});

export default function HomePage() {
  return <Home />;
}
