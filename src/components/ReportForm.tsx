
import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const ReportForm = () => {
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setFiles(prevFiles => [...prevFiles, ...newFiles]);
    }
  };

  const handleRemoveFile = (index: number) => {
    setFiles(prevFiles => prevFiles.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!description.trim()) {
      toast.error("Please describe the incident");
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("Report submitted successfully!");
      setDescription("");
      setLocation("");
      setFiles([]);
      setIsSubmitting(false);
    }, 1500);
  };

  const handleAddLocation = () => {
    // This would typically open a map or location picker
    // For this demo, we'll just set a sample location
    setLocation("123 Main St, Springfield, IL");
    toast.success("Location added successfully!");
  };

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.section
      className="bg-gray-50 py-16 px-4 sm:px-6"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-3xl mx-auto">
        <motion.div variants={itemVariants}>
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Report a Safety Concern</h2>
        </motion.div>
        
        <motion.div
          className="bg-white shadow-lg rounded-3xl overflow-hidden p-6 md:p-8"
          variants={itemVariants}
        >
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <Textarea
                placeholder="Describe the incident in detail..."
                className="min-h-[150px] text-base"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <Button
                type="button"
                variant="outline"
                className="flex items-center justify-center gap-2 h-12 border-blue-200 hover:bg-blue-50 text-blue-700"
                onClick={handleAddLocation}
              >
                <MapPin className="h-5 w-5" />
                {location ? "Change Location" : "Add Location"}
              </Button>
              
              <div className="relative">
                <input
                  type="file"
                  id="file-upload"
                  multiple
                  className="sr-only"
                  onChange={handleFileChange}
                />
                <label
                  htmlFor="file-upload"
                  className="flex items-center justify-center gap-2 h-12 border rounded-md border-gray-300 bg-gray-100 hover:bg-gray-200 text-gray-700 cursor-pointer transition-colors w-full"
                >
                  <Upload className="h-5 w-5" />
                  Upload Evidence
                </label>
              </div>
            </div>
            
            {/* Display selected location */}
            {location && (
              <motion.div 
                className="mb-4 p-3 bg-blue-50 rounded-md text-blue-800 text-sm flex items-start"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ duration: 0.3 }}
              >
                <MapPin className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                <span>{location}</span>
              </motion.div>
            )}
            
            {/* Display selected files */}
            {files.length > 0 && (
              <motion.div 
                className="mb-6"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-sm font-medium text-gray-700 mb-2">Uploaded files:</p>
                <ul className="space-y-2">
                  {files.map((file, index) => (
                    <li 
                      key={index} 
                      className="flex items-center justify-between p-2 bg-gray-50 rounded-md text-sm"
                    >
                      <span className="truncate max-w-[80%]">{file.name}</span>
                      <button
                        type="button"
                        onClick={() => handleRemoveFile(index)}
                        className="text-red-500 hover:text-red-700"
                      >
                        Remove
                      </button>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
            
            <Button
              type="submit"
              className="w-full bg-red-500 hover:bg-red-600 text-white h-12 text-base"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit Report"}
            </Button>
          </form>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ReportForm;
