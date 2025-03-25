
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { 
  AlertTriangle, 
  CheckCircle, 
  XCircle, 
  MessageSquare, 
  AlertOctagon,
  Search,
  Filter,
  MapPin,
  Clock,
  Lock,
  Unlock,
  Image as ImageIcon,
  FileText
} from "lucide-react";
import { motion } from "framer-motion";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogFooter,
  DialogClose
} from "@/components/ui/dialog";
import ReportDetails from "@/components/ReportDetails";
import ReportMap from "@/components/ReportMap";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import PageTransition from "@/components/PageTransition";
import { Badge } from "@/components/ui/badge";
import AdminActionButtons from "@/components/AdminActionButtons";

// Mock data for reports
const mockReports = [
  {
    id: "REP-001",
    description: "Suspicious individual loitering around elementary school",
    location: { lat: 37.7749, lng: -122.4194, address: "123 School Street, Downtown" },
    severityScore: 85,
    timestamp: "2023-07-15T14:30:00Z",
    images: ["report1_image1.jpg", "report1_image2.jpg"],
    status: "Pending",
    isAnonymous: true,
    reporterContactInfo: "anonymous@example.com",
    additionalDetails: "Wearing dark clothing and carrying a large backpack. Has been seen taking photos of the playground."
  },
  {
    id: "REP-002",
    description: "Broken streetlight creating dangerous conditions at night",
    location: { lat: 37.7833, lng: -122.4167, address: "456 Main Street, Northside" },
    severityScore: 45,
    timestamp: "2023-07-16T19:45:00Z",
    images: ["report2_image1.jpg"],
    status: "Approved",
    isAnonymous: false,
    reporterContactInfo: "john.doe@example.com",
    additionalDetails: "Streetlight has been flickering for weeks and now completely out. Area is very dark and several near-accidents have occurred."
  },
  {
    id: "REP-003",
    description: "Potential drug dealing activity in city park",
    location: { lat: 37.7694, lng: -122.4862, address: "789 Park Avenue, Westside" },
    severityScore: 78,
    timestamp: "2023-07-17T21:20:00Z",
    images: ["report3_image1.jpg", "report3_image2.jpg", "report3_image3.jpg"],
    status: "Critical",
    isAnonymous: true,
    reporterContactInfo: "anonymous123@example.com",
    additionalDetails: "Multiple individuals exchanging small packages for cash. Regular activity between 8-10pm. Same vehicles return each night."
  },
  {
    id: "REP-004",
    description: "Vandalism on community center building",
    location: { lat: 37.7831, lng: -122.4039, address: "101 Community Way, Eastside" },
    severityScore: 40,
    timestamp: "2023-07-18T08:15:00Z",
    images: ["report4_image1.jpg"],
    status: "Pending",
    isAnonymous: false,
    reporterContactInfo: "mary.smith@example.com",
    additionalDetails: "Graffiti appeared overnight on the north side of the building. Tags appear gang-related. Security camera may have footage."
  },
  {
    id: "REP-005",
    description: "Aggressive dog running loose in residential area",
    location: { lat: 37.7439, lng: -122.4225, address: "202 Residential Lane, Southside" },
    severityScore: 65,
    timestamp: "2023-07-19T16:55:00Z",
    images: [],
    status: "Needs Info",
    isAnonymous: false,
    reporterContactInfo: "robert.johnson@example.com",
    additionalDetails: "Large brown dog, possibly a pit bull mix, no collar seen. Has charged at pedestrians and other dog walkers. Last seen near the playground."
  }
];

// Status color mapping
const statusColors = {
  Pending: "bg-yellow-100 text-yellow-800",
  Approved: "bg-green-100 text-green-800",
  Rejected: "bg-red-100 text-red-800",
  "Needs Info": "bg-blue-100 text-blue-800",
  Critical: "bg-red-500 text-white"
};

const AdminDashboard = () => {
  const [reports, setReports] = useState(mockReports);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedReport, setSelectedReport] = useState<any>(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("all");
  const { toast } = useToast();

  // Filter reports based on search term and active tab
  const filteredReports = reports.filter(report => {
    const matchesSearch = report.description.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         report.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         report.location.address.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (activeTab === "all") return matchesSearch;
    if (activeTab === "pending") return matchesSearch && report.status === "Pending";
    if (activeTab === "approved") return matchesSearch && report.status === "Approved";
    if (activeTab === "rejected") return matchesSearch && report.status === "Rejected";
    if (activeTab === "needsInfo") return matchesSearch && report.status === "Needs Info";
    if (activeTab === "critical") return matchesSearch && report.status === "Critical";
    
    return matchesSearch;
  });

  // Handle report actions
  const handleApproveReport = (reportId: string) => {
    setReports(reports.map(report => 
      report.id === reportId 
        ? {...report, status: "Approved"} 
        : report
    ));
    toast({
      title: "Report Approved",
      description: `Report #${reportId} has been approved and sent to law enforcement.`,
      variant: "default",
    });
  };

  const handleRejectReport = (reportId: string) => {
    setReports(reports.map(report => 
      report.id === reportId 
        ? {...report, status: "Rejected"} 
        : report
    ));
    toast({
      title: "Report Rejected",
      description: `Report #${reportId} has been rejected and archived.`,
      variant: "destructive",
    });
  };

  const handleRequestInfo = (reportId: string) => {
    setReports(reports.map(report => 
      report.id === reportId 
        ? {...report, status: "Needs Info"} 
        : report
    ));
    toast({
      title: "More Information Requested",
      description: `A request for more information has been sent to the reporter of #${reportId}.`,
    });
  };

  const handleMarkCritical = (reportId: string) => {
    setReports(reports.map(report => 
      report.id === reportId 
        ? {...report, status: "Critical"} 
        : report
    ));
    toast({
      title: "Report Marked as Critical",
      description: `Report #${reportId} has been flagged as critical. Urgent alerts sent to nearby users.`,
      variant: "destructive",
    });
  };

  // View report details
  const viewReportDetails = (report: any) => {
    setSelectedReport(report);
    setIsDetailsOpen(true);
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-gray-50 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
              <p className="text-gray-600 mt-1">Manage and respond to community safety reports</p>
            </div>
          </div>

          {/* Dashboard Stats */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">Total Reports</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{reports.length}</div>
                <p className="text-xs text-gray-600 mt-1 flex items-center">
                  <Clock className="h-3 w-3 mr-1" />
                  <span>Last 30 days</span>
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">Pending Review</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {reports.filter(r => r.status === "Pending").length}
                </div>
                <p className="text-xs text-gray-600 mt-1 flex items-center">
                  <AlertTriangle className="h-3 w-3 mr-1 text-yellow-500" />
                  <span>Awaiting action</span>
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">Critical Incidents</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {reports.filter(r => r.status === "Critical").length}
                </div>
                <p className="text-xs text-gray-600 mt-1 flex items-center">
                  <AlertOctagon className="h-3 w-3 mr-1 text-red-500" />
                  <span>High priority</span>
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">Resolved</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {reports.filter(r => r.status === "Approved" || r.status === "Rejected").length}
                </div>
                <p className="text-xs text-gray-600 mt-1 flex items-center">
                  <CheckCircle className="h-3 w-3 mr-1 text-green-500" />
                  <span>Reviewed & processed</span>
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Search and Filters */}
          <div className="mb-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input 
                  placeholder="Search reports by ID, description, or location..." 
                  className="pl-10" 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Tabs 
                defaultValue="all" 
                value={activeTab} 
                onValueChange={setActiveTab}
                className="w-full md:w-auto"
              >
                <TabsList className="grid grid-cols-3 md:grid-cols-6 w-full md:w-auto">
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="pending">Pending</TabsTrigger>
                  <TabsTrigger value="approved">Approved</TabsTrigger>
                  <TabsTrigger value="rejected">Rejected</TabsTrigger>
                  <TabsTrigger value="needsInfo">Needs Info</TabsTrigger>
                  <TabsTrigger value="critical">Critical</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </div>

          {/* Reports Table */}
          <Card className="mb-8">
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Severity</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Timestamp</TableHead>
                    <TableHead>Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredReports.length > 0 ? (
                    filteredReports.map((report) => (
                      <TableRow key={report.id} className="cursor-pointer hover:bg-gray-50" onClick={() => viewReportDetails(report)}>
                        <TableCell className="font-medium">{report.id}</TableCell>
                        <TableCell className="max-w-xs truncate">
                          <div className="flex items-start gap-2">
                            <FileText className="h-4 w-4 mt-0.5 flex-shrink-0" />
                            <span className="truncate">{report.description}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4 text-gray-500" />
                            <span className="truncate max-w-[150px]">{report.location.address}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div 
                              className={`h-2.5 rounded-full ${
                                report.severityScore >= 80 ? 'bg-red-500' : 
                                report.severityScore >= 60 ? 'bg-orange-500' : 
                                report.severityScore >= 40 ? 'bg-yellow-500' : 'bg-green-500'
                              }`} 
                              style={{ width: `${report.severityScore}%` }}
                            ></div>
                          </div>
                          <span className="text-xs text-gray-500 mt-1 block">{report.severityScore}%</span>
                        </TableCell>
                        <TableCell>
                          <Badge className={statusColors[report.status as keyof typeof statusColors]}>
                            {report.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4 text-gray-500" />
                            <span>{new Date(report.timestamp).toLocaleString()}</span>
                          </div>
                          <div className="flex items-center mt-1 text-xs text-gray-500">
                            {report.isAnonymous ? (
                              <><Lock className="h-3 w-3 mr-1" /> Anonymous</>
                            ) : (
                              <><Unlock className="h-3 w-3 mr-1" /> Identifiable</>
                            )}
                          </div>
                        </TableCell>
                        <TableCell>
                          <AdminActionButtons
                            report={report}
                            onApprove={handleApproveReport}
                            onReject={handleRejectReport}
                            onRequestInfo={handleRequestInfo}
                            onMarkCritical={handleMarkCritical}
                          />
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={7} className="text-center py-6 text-gray-500">
                        No reports found matching your search criteria
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Report Details Dialog */}
          <Dialog open={isDetailsOpen} onOpenChange={setIsDetailsOpen}>
            <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>Report Details: {selectedReport?.id}</DialogTitle>
              </DialogHeader>
              
              {selectedReport && (
                <ReportDetails report={selectedReport} />
              )}
              
              <DialogFooter className="flex flex-col sm:flex-row gap-2 mt-6">
                <AdminActionButtons
                  report={selectedReport}
                  onApprove={handleApproveReport}
                  onReject={handleRejectReport}
                  onRequestInfo={handleRequestInfo} 
                  onMarkCritical={handleMarkCritical}
                  variant="default"
                />
                <DialogClose asChild>
                  <Button variant="outline">Close</Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </PageTransition>
  );
};

export default AdminDashboard;
