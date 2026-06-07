import React from 'react';
import GalleryPage from '../../components/GalleryPage';
import { getMetadata } from '../../lib/seo';

export const metadata = getMetadata({
  title: "Visual Gallery & Atmosphere",
  description: "Browse the visual tour of The Reading Room Café. Highlighting floor-to-ceiling bookshelves, quiet workstations, leather study armchairs, and specialty coffee brews.",
  path: "/gallery"
});

export default function GalleryRoute() {
  return <GalleryPage />;
}
