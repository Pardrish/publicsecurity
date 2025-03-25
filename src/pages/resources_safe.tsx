import { BookOpen, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import PageTransition from "@/components/PageTransition";

const resources = [
  { name: "Riot Safety Guidelines", link: "#", bgColor: "bg-red-100", textColor: "text-red-800" },
  { name: "Road Safety Manual", link: "#", bgColor: "bg-yellow-100", textColor: "text-yellow-800" },
  { name: "First Aid Manual", link: "#", bgColor: "bg-green-100", textColor: "text-green-800" },
  { name: "Fire Safety Guide", link: "#", bgColor: "bg-orange-100", textColor: "text-orange-800" },
  { name: "Disaster Preparedness", link: "#", bgColor: "bg-blue-100", textColor: "text-blue-800" },
];

const SafetyResources = () => {
  const [search, setSearch] = useState("");

  const filteredResources = resources.filter(resource =>
    resource.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <PageTransition>
      <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Safety Resources</h1>
        
        <div className="relative mb-6">
          <Search className="absolute left-3 top-3 h-5 w-5 text-gray-500" />
          <Input
            type="text"
            placeholder="Search resources..."
            className="pl-10"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {filteredResources.map((resource, index) => (
            <Card key={index} className={resource.bgColor}>
              <CardHeader>
                <CardTitle className={resource.textColor}>{resource.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex justify-between">
                <a href={resource.link} className="text-blue-600 hover:underline">
                  <BookOpen className="h-5 w-5 inline-block" /> View Guide
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </PageTransition>
  );
};

export default SafetyResources;
