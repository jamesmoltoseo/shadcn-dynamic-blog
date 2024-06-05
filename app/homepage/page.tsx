import Link from "next/link";
import CardsFeatures from "@/components/cards-features";
import Banner from "@/components/hero-banner";
import { bannerContent } from "@/data/home";

interface CardData {
  title: string;
  icon: React.ElementType;
  value: string;
  description: string;
}

interface HomeProps {
  cardsFeaturesData: CardData[];
}

const Home: React.FC<HomeProps> = ({  }) => {
  const { background, title, text, buttonText } = bannerContent[0];
  const cardsFeaturesData = [
    {
      id: "dashboard-01-chunk-0",
      title: "Total Revenue",
      // icon: DollarSign,
      value: "$45,231.89",
      description: "+20.1% from last month",
    },
    {
      id: "dashboard-01-chunk-1",
      title: "New Subscribers",
      // icon: UserIcon, // Replace with appropriate icon
      value: "1,250",
      description: "+15% from last month",
    },
    {
      id: "dashboard-01-chunk-2",
      title: "Active Users",
      // icon: UsersIcon, // Replace with appropriate icon
      value: "3,456",
      description: "+12.3% from last month",
    },
  ];
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
            {/* Displaying title of the first card for testing */}
            {cardsFeaturesData[0].title}
            <CardsFeatures data={cardsFeaturesData} />
          </div>
          <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3"></div>
        </div>
      </main>
    </div>
  );
};

export default Home;
