/**
 * Centralized SEO helper to generate page metadata in Next.js App Router.
 * This ensures clean, uniform SEO and social tags across all pages.
 */
export function getMetadata({ title, description, path = "", ogImage = "/assets/images/hero_interior.jpg" } = {}) {
  const baseTitle = "The Reading Room Café";
  const subtitle = "A Conceptual Redesign of a Local Independent Café";
  const defaultDesc = "A cozy, literary-inspired modern café designed for remote workers, book lovers, and creative professionals. Offering specialty coffee, quiet workspaces, and weekend book clubs.";
  
  // Under local system evaluation, we set a mock production domain for metadataBase configuration.
  const baseUrl = "https://reading-room-cafe-redesign.vercel.app";
  const fullTitle = title ? `${title} | ${baseTitle}` : `${baseTitle} — ${subtitle}`;
  const fullDesc = description || defaultDesc;
  const canonicalUrl = `${baseUrl}${path}`;

  return {
    title: fullTitle,
    description: fullDesc,
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: fullTitle,
      description: fullDesc,
      url: canonicalUrl,
      siteName: baseTitle,
      locale: "en_US",
      type: "website",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: "Cozy atmosphere of The Reading Room Café with floor-to-ceiling bookshelves",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: fullDesc,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    icons: {
      icon: "/favicon.ico",
      apple: "/apple-icon.png",
    },
  };
}
