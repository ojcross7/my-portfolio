
import { Outfit, Ovo} from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],weight: ["400", "500", "600", "700"]
});

const ovo = Ovo({
  subsets: ["latin"],weight: ["400"]
});

export const Metadata = {
  title: "Portfolio-Greatworks",
  description: "Elegant design and innovation define my work, seamlessly blending structure with adaptability. Each project is crafted with precision, ensuring smooth transitions and harmonious integration with evolving goals. My approach combines strength with flexibility, building dynamic solutions that rise to meet new challenges.",
};

export default function RootLayout({children}){

  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.className} ${ovo.className} antialiased leadiding-8
        overflow-x-hidden dark:bg-darkTheme dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
