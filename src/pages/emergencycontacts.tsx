import { PhoneCall, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import PageTransition from "@/components/PageTransition";

const contacts = [
  { name: "National Helpline", number: "112", bgColor: "bg-red-100", textColor: "text-red-800" },
  { name: "Cyber Crime", number: "1930", bgColor: "bg-blue-100", textColor: "text-blue-800" },
  { name: "Ambulance", number: "102", bgColor: "bg-green-100", textColor: "text-green-800" },
  { name: "Women Helpline", number: "1091", bgColor: "bg-purple-100", textColor: "text-purple-800" },
  { name: "Child Helpline", number: "1098", bgColor: "bg-orange-100", textColor: "text-orange-800" },
  {name: "Police", number: "100", bgColor: "bg-yellow-100", textColor: "text-yellow-800"},
  {name: "Disaster Management", number: "108", bgColor: "bg-blue-100", textColor: "text-blue-800"},
  {name: " Indian Railway Security Helpline", number: "1322", bgColor: "bg-green-100", textColor: "text-green-800"},
  { name: "Fire Department", number: "101", bgColor: "bg-purple-100", textColor: "text-purple-800" },
  {name: "Road Accident", number: "1073", bgColor: "bg-yellow-100", textColor: "text-yellow-800"}
];

const EmergencyContacts = () => {
  const [search, setSearch] = useState("");

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <PageTransition>
      <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Emergency Contacts</h1>
        
        <div className="relative mb-6">
          <Search className="absolute left-3 top-3 h-5 w-5 text-gray-500" />
          <Input
            type="text"
            placeholder="Search contacts..."
            className="pl-10"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {filteredContacts.map((contact, index) => (
            <Card key={index} className={contact.bgColor}>
              <CardHeader>
                <CardTitle className={contact.textColor}>{contact.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex items-center justify-between">
                <span className="text-lg font-semibold">{contact.number}</span>
                <a href={`tel:${contact.number}`} className="text-blue-600 hover:underline">
                  <PhoneCall className="h-5 w-5 inline-block" /> Call
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </PageTransition>
  );
};

export default EmergencyContacts;
