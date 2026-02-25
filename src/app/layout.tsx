import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Steve Creative",
  description: "Digital Agency - Web Development & Marketing",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
