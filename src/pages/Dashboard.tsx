
import { useState } from "react";
import { motion } from "framer-motion";
import { 
  CalendarDays, 
  MapPin, 
  AlertTriangle, 
  Clock, 
  Users, 
  Shield, 
  TrendingUp,
  Filter
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  AreaChart, 
  Area, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from "recharts";
import PageTransition from "@/components/PageTransition";

const Dashboard = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  
  // Sample data for charts
  const areaData = [
    { name: "Jan", incidents: 40 },
    { name: "Feb", incidents: 35 },
    { name: "Mar", incidents: 45 },
    { name: "Apr", incidents: 30 },
    { name: "May", incidents: 25 },
    { name: "Jun", incidents: 20 },
    { name: "Jul", incidents: 15 },
    { name: "Aug", incidents: 25 },
    { name: "Sep", incidents: 30 },
    { name: "Oct", incidents: 40 },
    { name: "Nov", incidents: 35 },
    { name: "Dec", incidents: 30 },
  ];
  
  const barData = [
    { name: "Downtown", incidents: 45 },
    { name: "Westside", incidents: 30 },
    { name: "Northside", incidents: 25 },
    { name: "Eastside", incidents: 35 },
    { name: "Southside", incidents: 40 },
  ];
  
  const pieData = [
    { name: "Suspicious Activity", value: 40, color: "#3B82F6" },
    { name: "Theft", value: 25, color: "#10B981" },
    { name: "Vandalism", value: 15, color: "#F97316" },
    { name: "Noise Complaint", value: 20, color: "#8B5CF6" },
  ];
  
  const recentReports = [
    {
      id: 1,
      title: "Suspicious activity near park",
      location: "Central Park, Main Entrance",
      time: "2 hours ago",
      status: "Under Review"
    },
    {
      id: 2,
      title: "Broken streetlight",
      location: "Oak Street & 5th Avenue",
      time: "5 hours ago",
      status: "Assigned"
    },
    {
      id: 3,
      title: "Noise complaint",
      location: "Riverdale Apartments, Block C",
      time: "8 hours ago",
      status: "Resolved"
    },
    {
      id: 4,
      title: "Vandalism at community center",
      location: "Downtown Community Center",
      time: "1 day ago",
      status: "In Progress"
    },
  ];
  
  const statsCards = [
    { 
      title: "Total Reports", 
      value: "2,547", 
      change: "+12.5%", 
      icon: <AlertTriangle className="h-6 w-6 text-blue-600" />,
      description: "Reports this month"
    },
    { 
      title: "Active Cases", 
      value: "385", 
      change: "-3.2%", 
      icon: <Clock className="h-6 w-6 text-green-600" />,
      description: "From last month"
    },
    { 
      title: "Community Members", 
      value: "12,831", 
      change: "+5.1%", 
      icon: <Users className="h-6 w-6 text-purple-600" />,
      description: "Active participants"
    },
    { 
      title: "Resolved Issues", 
      value: "1,926", 
      change: "+18.3%", 
      icon: <Shield className="h-6 w-6 text-orange-600" />,
      description: "Success rate: 75.6%"
    },
  ];
  
  const filters = [
    { id: "all", label: "All Reports" },
    { id: "recent", label: "Recent" },
    { id: "pending", label: "Pending" },
    { id: "resolved", label: "Resolved" },
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
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Safety Dashboard</h1>
              <p className="text-gray-600 mt-1">Monitor, analyze, and respond to community safety data</p>
            </div>
            <div className="mt-4 md:mt-0 flex items-center space-x-2">
              <Button variant="outline" className="flex items-center gap-2">
                <CalendarDays className="h-4 w-4" />
                <span>Last 30 Days</span>
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>All Areas</span>
              </Button>
            </div>
          </div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {statsCards.map((stat, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium text-gray-500">{stat.title}</CardTitle>
                    {stat.icon}
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <p className="text-xs text-gray-600 mt-1 flex items-center">
                      <TrendingUp className="h-3 w-3 mr-1 text-green-500" />
                      <span className="text-green-600 font-medium">{stat.change}</span>
                      <span className="ml-1">{stat.description}</span>
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="lg:col-span-2" variants={itemVariants}>
              <Card>
                <CardHeader>
                  <CardTitle>Incident Trends</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart
                        data={areaData}
                        margin={{
                          top: 10,
                          right: 30,
                          left: 0,
                          bottom: 0,
                        }}
                      >
                        <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                        <XAxis dataKey="name" tickLine={false} axisLine={false} />
                        <YAxis tickLine={false} axisLine={false} />
                        <Tooltip />
                        <Area
                          type="monotone"
                          dataKey="incidents"
                          stroke="#3B82F6"
                          fill="url(#colorIncidents)"
                          strokeWidth={2}
                        />
                        <defs>
                          <linearGradient id="colorIncidents" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.2} />
                            <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
                          </linearGradient>
                        </defs>
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <Card>
                <CardHeader>
                  <CardTitle>Incident Types</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={pieData}
                          cx="50%"
                          cy="50%"
                          innerRadius={70}
                          outerRadius={90}
                          paddingAngle={5}
                          dataKey="value"
                        >
                          {pieData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mt-2">
                    {pieData.map((item, index) => (
                      <div key={index} className="flex items-center">
                        <div
                          className="w-3 h-3 rounded-full mr-2"
                          style={{ backgroundColor: item.color }}
                        ></div>
                        <span className="text-xs">{item.name}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle>Recent Reports</CardTitle>
                    <div className="flex items-center bg-gray-100 rounded-lg p-1">
                      {filters.map((filter) => (
                        <button
                          key={filter.id}
                          className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${
                            activeFilter === filter.id
                              ? "bg-white text-blue-600 shadow-sm"
                              : "text-gray-600 hover:text-gray-900"
                          }`}
                          onClick={() => setActiveFilter(filter.id)}
                        >
                          {filter.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentReports.map((report) => (
                      <div
                        key={report.id}
                        className="flex items-start p-3 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <div className="bg-blue-100 p-2 rounded-lg mr-3">
                          <AlertTriangle className="h-5 w-5 text-blue-600" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900 truncate">
                            {report.title}
                          </p>
                          <div className="flex items-center mt-1">
                            <MapPin className="h-3 w-3 text-gray-500 mr-1" />
                            <p className="text-xs text-gray-500 truncate">
                              {report.location}
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                            {report.status}
                          </div>
                          <p className="text-xs text-gray-500 mt-1">{report.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-4">
                    <Button variant="outline" className="w-full">View All Reports</Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle>Incidents by Location</CardTitle>
                  <Button variant="ghost" size="sm" className="h-8 gap-1">
                    <Filter className="h-4 w-4" />
                    <span className="text-xs">Filter</span>
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        layout="vertical"
                        data={barData}
                        margin={{
                          top: 5,
                          right: 30,
                          left: 20,
                          bottom: 5,
                        }}
                      >
                        <CartesianGrid strokeDasharray="3 3" opacity={0.2} horizontal={false} />
                        <XAxis type="number" tickLine={false} axisLine={false} />
                        <YAxis dataKey="name" type="category" tickLine={false} axisLine={false} />
                        <Tooltip />
                        <Bar dataKey="incidents" fill="#3B82F6" radius={[0, 4, 4, 0]} barSize={20} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Dashboard;
