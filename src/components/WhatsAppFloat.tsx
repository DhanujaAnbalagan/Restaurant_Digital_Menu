import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const WhatsAppFloat = () => {
  const handleClick = () => {
    window.open('https://wa.me/919443052290?text=Hi%2C%20I%20would%20like%20to%20order%20from%20Saravanas%20Hotel', '_blank');
  };

  return (
    <motion.button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BD5A] text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Contact via WhatsApp"
    >
      <FaWhatsapp size={32} />
    </motion.button>
  );
};

export default WhatsAppFloat;
