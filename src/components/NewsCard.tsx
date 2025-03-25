
import { motion } from "framer-motion";

interface NewsCardProps {
  category: string;
  title: string;
  description: string;
  bgColor: string;
  textColor: string;
  index: number;
}

const NewsCard = ({ 
  category, 
  title, 
  description, 
  bgColor, 
  textColor,
  index
}: NewsCardProps) => {
  return (
    <motion.div
      className="rounded-2xl shadow-sm overflow-hidden bg-white h-full flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.1 * index }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <div className="p-6 flex flex-col h-full">
        <div 
          className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 ${bgColor} ${textColor}`}
        >
          {category}
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 text-sm flex-grow">{description}</p>
      </div>
    </motion.div>
  );
};

export default NewsCard;
