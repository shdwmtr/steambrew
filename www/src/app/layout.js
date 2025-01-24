import { GeistSans } from 'geist/font/sans';
import Head from "next/head"

const description = "Apply themes/skins/customization the new version of the Steam® Client. Steam Client Homebrew is a community focused on extending Steam's base functionality. We've developed Millennium, commonly known as Millennium for Steam, that lets you add new features to your Steam Client."

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Millennium • Steam Homebrew.",
  description: description,
  url: "https://steambrew.app/",
  image: "/favicon.ico",
  imageAlt: "Millennium for Steam Logo",
  openGraph: {
    title: "The Steam Enhancement Project",
    description: description,
    url: "https://steambrew.app/",
    image: "/favicon.ico",
    imageAlt: "Millennium for Steam Logo",
    siteName: "Steam Homebrew"
  },
  twitter: {
    card: "summary",
    site: "Steam Homebrew | Millennium",
    title: "The Steam Enhancement Project",
    description: description,
    url: "https://steambrew.app/",
    image: "/favicon.ico",
    imageAlt: "Millennium for Steam Logo®"
  },
  siteName: "Steam Homebrew | Millennium",
  keywords: "Steam, Steam++, Better Steam, Steam Mod, Steam Themes, Steam Plugins, Steam Extensions, Steam Client Mod, Steam Hacks, Millennium, Millennium Steam, Millennium Steam Patcher, Steam Patcher, Millennium Patcher, Patcher, Millennium for Steam, Millennium Steam",
  author: "Steam++"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="48x48"></link>
      </Head>
      <body className={GeistSans.className}>{children}</body>
    </html>
  );
}
