import React from 'react';
import MenuPage from '../../components/MenuPage';
import { getMetadata } from '../../lib/seo';

export const metadata = getMetadata({
  title: "Specialty Coffee & Pastry Menu",
  description: "Browse the specialty craft espresso, V60 pour-overs, organic loose-leaf teas, and freshly baked sourdough cardamom buns at The Reading Room Café.",
  path: "/menu"
});

export default function MenuRoute() {
  return <MenuPage />;
}
