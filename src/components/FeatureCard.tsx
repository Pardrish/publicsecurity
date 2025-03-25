
import { ReactNode } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  buttonColor: string;
  index: number;
}

const FeatureCard = ({
  icon,
  title,
  description,
  buttonText,
  buttonLink,
  buttonColor,
  index,
}: FeatureCardProps) => {
  return (
    <motion.div
      className="bg-white rounded-2xl shadow-sm p-6 flex flex-col h-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.15 * index }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <div className="mb-5">{icon}</div>
      <h3 className="text-xl font-bold mb-3 text-gray-900">{title}</h3>
      <p className="text-gray-600 text-sm mb-6 flex-grow">{description}</p>
      <Button 
        className={`${buttonColor} w-full`} 
        asChild
      >
        <a href={buttonLink}>{buttonText}</a>
      </Button>
    </motion.div>
  );
};

export default FeatureCard;
