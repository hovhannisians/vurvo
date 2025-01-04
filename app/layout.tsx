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
        url: "https://demo.useVurvo.com/opengraph-image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vurvo - AI-Powered Mock Interviews",
    description:
      "Vurvo is an AI-powered mock interview platform that helps you practice for your next job interview.",
    images: ["https://demo.useVurvo.com/opengraph-image"],
    creator: "@tmeyer_me",
  },
  metadataBase: new URL("https://demo.useVurvo.com"),
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
