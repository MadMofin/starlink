import type { Metadata } from "next";
import { SITE_DESCRIPTION, SITE_NAME, SITE_KEYWORDS } from "@/constants/site";

type SEOProps = {
  title: string;
  description?: string;
  keywords?: string[];
  image?: string;
};

export const createMetadata = ({
  title = SITE_NAME,
  description = SITE_DESCRIPTION,
  keywords = SITE_KEYWORDS,
  image = "/images/bosses/The Adversary.png",
}: SEOProps): Metadata => {
  const titleWithSiteName = title ? `${title} - ${SITE_NAME}` : SITE_NAME;

  return {
    title: titleWithSiteName,
    description,
    keywords,

    openGraph: {
      title,
      description,
      type: "website",
      images: [
        {
          url: image,
          width: 512,
          height: 512,
          alt: titleWithSiteName,
        },
      ],
    },

    twitter: {
      card: "summary",
      title,
      description,
    },
  };
};
