
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  FileText, 
  MapPin, 
  Image as ImageIcon, 
  Info, 
  Lock, 
  Unlock, 
  Clock,
  AlertTriangle
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ReportMap from "./ReportMap";

interface ReportDetailsProps {
  report: {
    id: string;
    description: string;
    location: {
      lat: number;
      lng: number;
      address: string;
    };
    severityScore: number;
    timestamp: string;
    images: string[];
    status: string;
    isAnonymous: boolean;
    reporterContactInfo: string;
    additionalDetails: string;
  };
}

const ReportDetails = ({ report }: ReportDetailsProps) => {
  return (
    <Tabs defaultValue="details" className="w-full">
      <TabsList className="mb-4">
        <TabsTrigger value="details">Details</TabsTrigger>
        <TabsTrigger value="location">Location</TabsTrigger>
        <TabsTrigger value="images">Images</TabsTrigger>
      </TabsList>
      
      <TabsContent value="details">
        <div className="space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <Card className="flex-1">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 flex items-center gap-2">
                      <FileText className="h-4 w-4" /> Description
                    </h3>
                    <p className="mt-1">{report.description}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 flex items-center gap-2">
                      <Info className="h-4 w-4" /> Additional Details
                    </h3>
                    <p className="mt-1">{report.additionalDetails}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="flex-1">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 flex items-center gap-2">
                      <AlertTriangle className="h-4 w-4" /> Severity Score
                    </h3>
                    <div className="mt-2">
                      <div className="w-full bg-gray-200 rounded-full h-4">
                        <div 
                          className={`h-4 rounded-full ${
                            report.severityScore >= 80 ? 'bg-red-500' : 
                            report.severityScore >= 60 ? 'bg-orange-500' : 
                            report.severityScore >= 40 ? 'bg-yellow-500' : 'bg-green-500'
                          }`} 
                          style={{ width: `${report.severityScore}%` }}
                        ></div>
                      </div>
                      <div className="flex justify-between mt-1">
                        <span className="text-sm">Low</span>
                        <span className="text-sm font-bold">{report.severityScore}%</span>
                        <span className="text-sm">High</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 flex items-center gap-2">
                      <Clock className="h-4 w-4" /> Timestamp
                    </h3>
                    <p className="mt-1">{new Date(report.timestamp).toLocaleString()}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Status</h3>
                    <div className="mt-1">
                      <Badge 
                        className={
                          report.status === "Pending" ? "bg-yellow-100 text-yellow-800" :
                          report.status === "Approved" ? "bg-green-100 text-green-800" :
                          report.status === "Rejected" ? "bg-red-100 text-red-800" :
                          report.status === "Needs Info" ? "bg-blue-100 text-blue-800" :
                          "bg-red-500 text-white"
                        }
                      >
                        {report.status}
                      </Badge>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Reporter Information</h3>
                    <div className="mt-1 flex items-center gap-2">
                      {report.isAnonymous ? (
                        <><Lock className="h-4 w-4" /> Anonymous Report</>
                      ) : (
                        <><Unlock className="h-4 w-4" /> {report.reporterContactInfo}</>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </TabsContent>
      
      <TabsContent value="location">
        <Card>
          <CardContent className="pt-6">
            <h3 className="text-sm font-medium text-gray-500 flex items-center gap-2 mb-3">
              <MapPin className="h-4 w-4" /> {report.location.address}
            </h3>
            <div className="h-[400px] rounded-md overflow-hidden">
              <ReportMap location={report.location} />
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      
      <TabsContent value="images">
        <Card>
          <CardContent className="pt-6">
            <h3 className="text-sm font-medium text-gray-500 flex items-center gap-2 mb-3">
              <ImageIcon className="h-4 w-4" /> Attached Images ({report.images.length})
            </h3>
            
            {report.images.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {report.images.map((image, index) => (
                  <div key={index} className="border rounded-md overflow-hidden">
                    <img 
                      src={`/images/${image}`} 
                      alt={`Report evidence ${index + 1}`} 
                      className="w-full h-48 object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "/placeholder.svg";
                      }}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-gray-500">
                No images attached to this report
              </div>
            )}
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default ReportDetails;
