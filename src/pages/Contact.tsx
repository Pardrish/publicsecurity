
import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Phone, Mail, MapPin, AlertCircle, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import PageTransition from "@/components/PageTransition";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields");
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate sending the message
    setTimeout(() => {
      toast.success("Your message has been sent successfully!");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Phone className="h-5 w-5 text-blue-600" />,
      title: "Phone",
      details: "+91 1234567890",
      description: "Monday-Friday from 8am to 5pm",
    },
    {
      icon: <Mail className="h-5 w-5 text-blue-600" />,
      title: "Email",
      details: "contact@safetynet.org",
      description: "We'll respond within 24 hours",
    },
    {
      icon: <MapPin className="h-5 w-5 text-blue-600" />,
      title: "Address",
      details: "Office 2, Street 10",
      description: "Loni-Kalbhor,Pune",
    },
  ];

  const faqs = [
    {
      question: "What information should I include in my message?",
      answer: "Please include your name, contact information, and a detailed description of your inquiry or concern. If you're reporting a safety issue, provide the location, date, time, and any other relevant details."
    },
    {
      question: "How quickly will I receive a response?",
      answer: "For general inquiries, we aim to respond within 24 hours during business days. For urgent safety concerns, please call our emergency hotline for immediate assistance."
    },
    {
      question: "Is my information kept confidential?",
      answer: "Yes, all information submitted through this form is confidential and will only be used to address your specific inquiry or concern."
    },
    {
      question: "Can I attach files to my message?",
      answer: "Currently, our contact form doesn't support file attachments. If you need to share documents or images, please mention this in your message and we'll provide alternative methods."
    }
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Have questions about SafetyNet or need to report a safety concern? 
              Our team is here to help and respond to your inquiries.
            </p>
          </motion.div>

          {/* Emergency Contact Banner */}
          <motion.div
            className="bg-red-50 border-l-4 border-red-500 p-4 mb-16 rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="flex">
              <div className="flex-shrink-0">
                <AlertCircle className="h-5 w-5 text-red-500" />
              </div>
              <div className="ml-3">
                <h3 className="text-lg font-medium text-red-800">Emergency Contact</h3>
                <div className="mt-2 text-red-700">
                  <p>For immediate assistance in emergency situations, please call our 24/7 hotline:</p>
                  <p className="font-bold mt-1">+91 9082736425</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="mx-auto bg-blue-50 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-blue-700 font-medium mb-1">{item.details}</p>
                <p className="text-gray-500 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Location Map */}
          <motion.div
            className="mb-16 rounded-xl overflow-hidden shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-blue-50 p-4 border-b border-blue-100">
              <h2 className="text-lg font-semibold text-gray-900 flex items-center">
                <MapPin className="h-5 w-5 text-blue-600 mr-2" />
                Our Location
              </h2>
            </div>
            <div className="h-[300px] bg-gray-200 relative">
              <div className="absolute inset-0 flex items-center justify-center flex-col p-4 text-center">
                <MapPin className="h-8 w-8 text-blue-600 mb-2" />
                <p className="text-gray-700">Interactive map would be displayed here</p>
                <p className="text-sm text-gray-500 mt-2">123 Safety Street, Secureville, CA 12345</p>
              </div>
            </div>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-blue-700 text-white p-8 rounded-xl"
            >
              <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
              <p className="mb-6">
                We value your feedback and concerns. Fill out the form, and our team 
                will get back to you as soon as possible.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-600 p-2 rounded-full">
                    <Phone className="h-4 w-4" />
                  </div>
                  <span>24/7 Emergency Hotline: +91 9802764532</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-600 p-2 rounded-full">
                    <Mail className="h-4 w-4" />
                  </div>
                  <span>emergency@safetynet.org</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-xl shadow-sm"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h2>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name*
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email*
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your email"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What is this regarding?"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message*
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message here..."
                    className="min-h-[150px]"
                  />
                </div>
                <Button 
                  type="submit"
                  className="w-full py-6 bg-blue-700 hover:bg-blue-800"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </motion.div>
          </div>

          {/* FAQ Section */}
          <motion.div
            className="mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <HelpCircle className="h-6 w-6 text-blue-600 mr-2" />
              Frequently Asked Questions
            </h2>
            
            <Accordion type="single" collapsible className="bg-white rounded-xl shadow-sm overflow-hidden">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`faq-${index}`}>
                  <AccordionTrigger className="px-6 py-4 hover:bg-blue-50 hover:no-underline">
                    <span className="text-left font-medium">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 py-4 text-gray-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Contact;
