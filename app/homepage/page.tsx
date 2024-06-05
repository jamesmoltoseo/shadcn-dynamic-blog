import Link from "next/link";
import CardsFeatures from "@/components/cards-features";
import Banner from "@/components/hero-banner";
import { bannerContent, cardsFeaturesData } from "@/data/home";

interface CardData {
  title: string;
  icon: React.ElementType;
  value: string;
  description: string;
}
interface HomeProps {
  cardsFeaturesData: CardData[];
}

const Home: React.FC<HomeProps> = ({ cardsFeaturesData }) => {
  const { background, title, text, buttonText } = bannerContent[0];

  return (
    <div className="containerflex min-h-screen w-full flex-col dark bg-black">
      <main>
        <Banner
          bannerBg={background}
          title={title}
          text={text}
          buttonText={buttonText}
        />
        <div className="container flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
          <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
            <CardsFeatures data={cardsFeaturesData} />
          </div>
          <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3"></div>
        </div>
      </main>
    </div>
  );
};
export default Home;
