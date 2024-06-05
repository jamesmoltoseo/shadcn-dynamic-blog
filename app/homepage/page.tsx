import Link from "next/link";
import CardsFeatures from "@/components/cards-features";
import Banner from "@/components/hero-banner";
import HomeCarousel from "@/components/home-carousel";
import { bannerContent } from "../../data/home";
import NavSide from "@/components/nav-side";
import Dashboard from "@/components/dashboard";
interface CardData {
  title: string;
  value: string;
  description: string;
  image: string;
}

const Home: React.FC = () => {
  const { background, title, text, buttonText } = bannerContent[0];
  const cardsFeaturesData = [
    {
      id: "dashboard-01-chunk-0",
      title: "SPORTS",
      // icon: DollarSign,
      value: "$45,231.89",
      description: "+20.1% from last month",
      image: "/img/bgs/2.jpeg",
    },
    {
      id: "dashboard-01-chunk-1",
      title: "Subscribe",
      // icon: UserIcon, // Replace with appropriate icon
      value: "1,250",
      description: "+15% from last month",
      image: "/img/bgs/2.jpeg",
    },
    {
      id: "dashboard-01-chunk-2",
      title: "Active",
      // icon: UsersIcon, // Replace with appropriate icon
      value: "3,456",
      description: "+12.3% from last month",
      image: "/img/bgs/2.jpeg",
    },
    {
      id: "dashboard-01-chunk-2",
      title: "Users",
      // icon: UsersIcon, // Replace with appropriate icon
      value: "3,456",
      description: "+12.3% from last month",
      image: "/img/bgs/2.jpeg",
    },
  ];

  return (
    <div className="flex min-h-screen w-full flex-col bg-white dark:bg-background">
      <main className="bg-white dark:bg-background">
        <div className="min-h-screen w-full flex items-start justify-start">
          {/* <HomeCarousel /> */}
          <div className="w-[250px]">
            <Dashboard />
          </div><div className="w-full">
          <Banner
            bannerBg={background}
            title={title}
            text={text}
            buttonText={buttonText}
          /><CardsFeatures data={cardsFeaturesData} /></div>
          </div>
          
      </main>
    </div>
  );
};

export default Home;
