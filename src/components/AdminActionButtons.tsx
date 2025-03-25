
import {
  CheckCircle, 
  XCircle, 
  MessageSquare, 
  AlertOctagon
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface AdminActionButtonsProps {
  report: any;
  onApprove: (id: string) => void;
  onReject: (id: string) => void;
  onRequestInfo: (id: string) => void;
  onMarkCritical: (id: string) => void;
  variant?: "icon" | "default";
}

const AdminActionButtons = ({
  report,
  onApprove,
  onReject,
  onRequestInfo,
  onMarkCritical,
  variant = "icon"
}: AdminActionButtonsProps) => {
  if (!report) return null;
  
  // Stop event propagation to prevent opening the detail view when clicking buttons
  const handleClick = (e: React.MouseEvent, action: () => void) => {
    e.stopPropagation();
    action();
  };

  if (variant === "icon") {
    return (
      <div className="flex space-x-1" onClick={(e) => e.stopPropagation()}>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={(e) => handleClick(e, () => onApprove(report.id))}
              disabled={report.status === "Approved"}
            >
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span className="sr-only">Approve</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>Approve Report</TooltipContent>
        </Tooltip>
        
        <Tooltip>
          <TooltipTrigger asChild>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={(e) => handleClick(e, () => onReject(report.id))}
              disabled={report.status === "Rejected"}
            >
              <XCircle className="h-4 w-4 text-red-500" />
              <span className="sr-only">Reject</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>Reject Report</TooltipContent>
        </Tooltip>
        
        <Tooltip>
          <TooltipTrigger asChild>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={(e) => handleClick(e, () => onRequestInfo(report.id))}
              disabled={report.status === "Needs Info"}
            >
              <MessageSquare className="h-4 w-4 text-blue-500" />
              <span className="sr-only">Request Info</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>Request More Information</TooltipContent>
        </Tooltip>
        
        <Tooltip>
          <TooltipTrigger asChild>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={(e) => handleClick(e, () => onMarkCritical(report.id))}
              disabled={report.status === "Critical"}
            >
              <AlertOctagon className="h-4 w-4 text-orange-500" />
              <span className="sr-only">Mark Critical</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>Mark as Critical</TooltipContent>
        </Tooltip>
      </div>
    );
  }
  
  return (
    <div className="flex flex-wrap gap-2" onClick={(e) => e.stopPropagation()}>
      <Button 
        variant="outline" 
        size="sm" 
        className="text-green-600 border-green-200 hover:bg-green-50"
        onClick={(e) => handleClick(e, () => onApprove(report.id))}
        disabled={report.status === "Approved"}
      >
        <CheckCircle className="h-4 w-4 mr-1" />
        Approve
      </Button>
      
      <Button 
        variant="outline" 
        size="sm" 
        className="text-red-600 border-red-200 hover:bg-red-50"
        onClick={(e) => handleClick(e, () => onReject(report.id))}
        disabled={report.status === "Rejected"}
      >
        <XCircle className="h-4 w-4 mr-1" />
        Reject
      </Button>
      
      <Button 
        variant="outline" 
        size="sm" 
        className="text-blue-600 border-blue-200 hover:bg-blue-50"
        onClick={(e) => handleClick(e, () => onRequestInfo(report.id))}
        disabled={report.status === "Needs Info"}
      >
        <MessageSquare className="h-4 w-4 mr-1" />
        Request Info
      </Button>
      
      <Button 
        variant="outline" 
        size="sm" 
        className="text-orange-600 border-orange-200 hover:bg-orange-50"
        onClick={(e) => handleClick(e, () => onMarkCritical(report.id))}
        disabled={report.status === "Critical"}
      >
        <AlertOctagon className="h-4 w-4 mr-1" />
        Mark Critical
      </Button>
    </div>
  );
};

export default AdminActionButtons;