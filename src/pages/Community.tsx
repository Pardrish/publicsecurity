
import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Search, 
  Users, 
  MessageSquare, 
  Calendar,
  ThumbsUp, 
  User,
  MapPin
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import PageTransition from "@/components/PageTransition";

const Community = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const discussionTopics = [
    {
      id: 1,
      title: "Neighborhood Watch Program - Volunteers Needed",
      author: "Sarah Johnson",
      authorAvatar: "",
      date: "2 days ago",
      replies: 28,
      likes: 42,
      category: "Neighborhood Watch",
      excerpt: "We're looking for volunteers to join our neighborhood watch program. Training will be provided...",
    },
    {
      id: 2,
      title: "New street lights installed on Oak Avenue",
      author: "Reyansh Verma",
      authorAvatar: "",
      date: "3 days ago",
      replies: 15,
      likes: 23,
      category: "Infrastructure",
      excerpt: "The city has completed installation of new LED street lights along Oak Avenue, improving visibility and safety...",
    },
    {
      id: 3,
      title: "Safety concerns at Central Park after dark",
      author: "Neha Gupta",
      authorAvatar: "",
      date: "5 days ago",
      replies: 32,
      likes: 18,
      category: "Public Safety",
      excerpt: "Several residents have reported suspicious activity at Central Park after sunset. I'd like to discuss possible solutions...",
    },
    {
      id: 4,
      title: "Community cleanup event this weekend",
      author: "David Wilson",
      authorAvatar: "",
      date: "1 week ago",
      replies: 42,
      likes: 56,
      category: "Events",
      excerpt: "Join us for our monthly community cleanup event this Saturday from 9 AM to 12 PM. Meeting point will be at...",
    },
  ];
  
  const upcomingEvents = [
    {
      id: 1,
      title: "Community Safety Workshop",
      date: "May 15, 2023",
      time: "6:00 PM - 8:00 PM",
      location: "Community Center, Wakad",
      attendees: 45,
    },
    {
      id: 2,
      title: "Neighborhood Watch Training",
      date: "May 22, 2023",
      time: "10:00 AM - 12:00 PM",
      location: "Public Library, Conference Room B",
      attendees: 28,
    },
    {
      id: 3,
      title: "Emergency Preparedness Seminar",
      date: "June 5, 2023",
      time: "7:00 PM - 9:00 PM",
      location: "Fire Station #3, Training Room",
      attendees: 36,
    },
  ];
  
  const categories = [
    { name: "All Topics", count: 145 },
    { name: "Neighborhood Watch", count: 42 },
    { name: "Public Safety", count: 38 },
    { name: "Infrastructure", count: 27 },
    { name: "Events", count: 24 },
    { name: "Announcements", count: 14 },
  ];
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-gray-50 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Community Forum</h1>
              <p className="text-gray-600 mt-1">Connect with neighbors and discuss safety concerns</p>
            </div>
            <div className="mt-4 md:mt-0">
              <Button className="bg-blue-600 hover:bg-blue-700">Start a Discussion</Button>
            </div>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-3/4">
              <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <Input
                    placeholder="Search discussions..."
                    className="pl-10"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
              
              <Tabs defaultValue="discussions" className="mb-6">
                <TabsList className="w-full bg-white rounded-xl shadow-sm p-1 h-auto">
                  <TabsTrigger value="discussions" className="flex-1 py-2 data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Discussions
                  </TabsTrigger>
                  <TabsTrigger value="events" className="flex-1 py-2 data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700">
                    <Calendar className="h-4 w-4 mr-2" />
                    Upcoming Events
                  </TabsTrigger>
                  <TabsTrigger value="members" className="flex-1 py-2 data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700">
                    <Users className="h-4 w-4 mr-2" />
                    Active Members
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="discussions">
                  <motion.div
                    className="space-y-4"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    {discussionTopics.map((topic) => (
                      <motion.div
                        key={topic.id}
                        className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow"
                        variants={itemVariants}
                      >
                        <div className="p-6">
                          <div className="flex items-start">
                            <Avatar className="h-10 w-10 mr-4">
                              <AvatarImage src={topic.authorAvatar} alt={topic.author} />
                              <AvatarFallback className="bg-blue-100 text-blue-700">
                                {topic.author.charAt(0)}
                              </AvatarFallback>
                            </Avatar>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between mb-1">
                                <Badge variant="outline" className="text-xs bg-blue-50 text-blue-700 border-blue-200">
                                  {topic.category}
                                </Badge>
                                <span className="text-sm text-gray-500">{topic.date}</span>
                              </div>
                              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                {topic.title}
                              </h3>
                              <p className="text-gray-600 text-sm mb-4">
                                {topic.excerpt}
                              </p>
                              <div className="flex items-center text-sm text-gray-500">
                                <User className="h-4 w-4 mr-1" />
                                <span className="mr-4">{topic.author}</span>
                                <div className="flex items-center mr-4">
                                  <MessageSquare className="h-4 w-4 mr-1" />
                                  <span>{topic.replies} replies</span>
                                </div>
                                <div className="flex items-center">
                                  <ThumbsUp className="h-4 w-4 mr-1" />
                                  <span>{topic.likes} likes</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                  
                  <div className="mt-6 flex justify-center">
                    <Button variant="outline">Load More</Button>
                  </div>
                </TabsContent>
                
                <TabsContent value="events">
                  <motion.div
                    className="space-y-4"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    {upcomingEvents.map((event) => (
                      <motion.div
                        key={event.id}
                        className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow"
                        variants={itemVariants}
                      >
                        <div className="p-6">
                          <div className="flex flex-col md:flex-row md:items-center">
                            <div className="md:w-1/4 mb-4 md:mb-0">
                              <div className="bg-blue-50 text-blue-700 px-4 py-3 rounded-lg text-center">
                                <div className="text-sm font-medium">{event.date.split(",")[0]}</div>
                                <div className="text-2xl font-bold">{event.date.split(" ")[1]}</div>
                              </div>
                            </div>
                            <div className="md:w-3/4 md:pl-6">
                              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                {event.title}
                              </h3>
                              <div className="space-y-2 text-sm text-gray-600">
                                <div className="flex items-center">
                                  <Calendar className="h-4 w-4 mr-2 text-gray-400" />
                                  <span>{event.time}</span>
                                </div>
                                <div className="flex items-center">
                                  <MapPin className="h-4 w-4 mr-2 text-gray-400" />
                                  <span>{event.location}</span>
                                </div>
                                <div className="flex items-center">
                                  <Users className="h-4 w-4 mr-2 text-gray-400" />
                                  <span>{event.attendees} attendees</span>
                                </div>
                              </div>
                              <div className="mt-4">
                                <Button size="sm" variant="outline">RSVP</Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </TabsContent>
                
                <TabsContent value="members">
                  <div className="bg-white rounded-xl shadow-sm p-6">
                    <p className="text-center text-gray-600 py-8">
                      This feature is coming soon! Stay tuned for updates.
                    </p>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
            
            <div className="lg:w-1/4">
              <motion.div
                className="bg-white rounded-xl shadow-sm p-6 mb-6"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="font-medium text-gray-900 mb-4">Categories</h3>
                <ul className="space-y-2">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <button className="w-full flex items-center justify-between px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                        <span className="text-sm text-gray-700">{category.name}</span>
                        <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                          {category.count}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </motion.div>
              
              <motion.div
                className="bg-white rounded-xl shadow-sm p-6"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h3 className="font-medium text-gray-900 mb-4">Community Guidelines</h3>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Be respectful and considerate of others</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Stay on topic and contribute constructively</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Do not share personal identifiable information</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Report suspicious or harmful content</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Follow all local laws and regulations</span>
                  </li>
                </ul>
                <div className="mt-4">
                  <Button variant="link" className="px-0 text-blue-600">
                    Read Full Guidelines
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Community;
