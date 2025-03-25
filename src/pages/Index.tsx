
import { MessageSquare, BookOpen, PhoneCall } from "lucide-react";
import Hero from "@/components/Hero";
import ReportForm from "@/components/ReportForm";
import NewsCard from "@/components/NewsCard";
import FeatureCard from "@/components/FeatureCard";
import PageTransition from "@/components/PageTransition";

const Index = () => {
  const newsItems = [
    {
      category: "Breaking News",
      title: "Community Safety Alert",
      description: "Important update regarding recent incidents in the downtown area...",
      bgColor: "bg-red-100",
      textColor: "text-red-800",
    },
    {
      category: "Update",
      title: "Safety Tips",
      description: "Learn about the latest safety measures recommended by experts...",
      bgColor: "bg-green-100",
      textColor: "text-green-800",
    },
    {
      category: "Community",
      title: "Neighborhood Watch",
      description: "Join your local neighborhood watch program and make a difference...",
      bgColor: "bg-blue-100",
      textColor: "text-blue-800",
    },
  ];

  const featureItems = [
    {
      icon: <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center"><MessageSquare className="h-6 w-6 text-green-600" /></div>,
      title: "Community Forum",
      description: "Connect with community members and share safety tips.",
      buttonText: "Join Discussion",
      buttonLink: "/community",
      buttonColor: "bg-green-500 hover:bg-green-600 text-white",
    },
    {
      icon: <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center"><BookOpen className="h-6 w-6 text-purple-600" /></div>,
      title: "Safety Resources",
      description: "Access guides and resources for community safety.",
      buttonText: "Browse Resources",
      buttonLink: "/resources_safe",
      buttonColor: "bg-purple-500 hover:bg-purple-600 text-white",
    },
    {
      icon: <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center"><PhoneCall className="h-6 w-6 text-orange-600" /></div>,
      title: "Emergency Contacts",
      description: "Quick access to emergency services and hotlines.",
      buttonText: "View Contacts",
      buttonLink: "/emergencycontacts",
      buttonColor: "bg-orange-500 hover:bg-orange-600 text-white",
    },
  ];

  return (
    <PageTransition>
      <main>
        <Hero />
        
        <ReportForm />
        
        {/* Latest News Section */}
        <section className="bg-white py-16 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-gray-900">Latest News</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {newsItems.map((item, index) => (
                <NewsCard
                  key={index}
                  category={item.category}
                  title={item.title}
                  description={item.description}
                  bgColor={item.bgColor}
                  textColor={item.textColor}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="bg-gray-50 py-16 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-gray-900">Community Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featureItems.map((item, index) => (
                <FeatureCard
                  key={index}
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                  buttonText={item.buttonText}
                  buttonLink={item.buttonLink}
                  buttonColor={item.buttonColor}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
    </PageTransition>
  );
};

export default Index;
