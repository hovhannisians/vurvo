import "../styles/globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vurvo - AI-Powered Mock Interviews",
  openGraph: {
    title: "Vurvo - AI-Powered Mock Interviews",
    description:
      "Vurvo is an AI-powered mock interview platform that helps you practice for your next job interview.",
    images: [
      {
        url: "/opengraph-image.jpg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vurvo - AI-Powered Mock Interviews",
    description:
      "Vurvo is an AI-powered mock interview platform that helps you practice for your next job interview.",
    images: ["/opengraph-image.jpg"],
    creator: "@alenfromrobi",
  },
  metadataBase: new URL("https://vurvo.robiai.com"),
  themeColor: "#FFF",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="scroll-smooth antialiased [font-feature-settings:'ss01']">
        {children}
      </body>
    </html>
  );
}
