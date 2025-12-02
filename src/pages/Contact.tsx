import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { FaPhone, FaMapMarkerAlt, FaClock, FaWhatsapp } from 'react-icons/fa';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const { t } = useLanguage();

  const handleWhatsApp = () => {
    window.open('https://wa.me/919443052290?text=Hi%2C%20I%20would%20like%20to%20order%20from%20Saravanas%20Hotel', '_blank');
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
              {t('Contact Us', 'எங்களை தொடர்பு கொள்ளுங்கள்')}
            </h1>
            <p className="text-lg text-muted-foreground">
              {t('We\'d love to hear from you', 'உங்களிடமிருந்து கேட்க விரும்புகிறோம்')}
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {/* Location */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-card p-6 rounded-lg shadow-food hover-lift"
            >
              <div className="flex items-start gap-4">
                <div className="text-primary text-3xl">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-primary">
                    {t('Location', 'இடம்')}
                  </h3>
                  <p className="text-foreground">
                    Om Sri Saravanas Hotel<br />
                    Main Road, Harur<br />
                    Dharmapuri District<br />
                    Tamil Nadu - 636903
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Phone */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-card p-6 rounded-lg shadow-food hover-lift"
            >
              <div className="flex items-start gap-4">
                <div className="text-primary text-3xl">
                  <FaPhone />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-primary">
                    {t('Phone', 'தொலைபேசி')}
                  </h3>
                  <a
                    href="tel:+919443052290"
                    className="text-foreground hover:text-primary transition-smooth text-lg"
                  >
                    +91 94430 52290<br></br>
                    +91 8610635010
                  </a>
                  <p className="text-sm text-muted-foreground mt-2">
                    {t('Call us for reservations', 'முன்பதிவுகளுக்கு எங்களை அழைக்கவும்')}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Hours */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-card p-6 rounded-lg shadow-food hover-lift"
            >
              <div className="flex items-start gap-4">
                <div className="text-primary text-3xl">
                  <FaClock />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-primary">
                    {t('Business Hours', 'வணிக நேரம்')}
                  </h3>
                  <div className="space-y-1 text-foreground">
                    <p className="font-semibold text-lg">{t('Open Every Day', 'தினமும் திறந்திருக்கும்')}</p>
                    <p className="text-xl">6:00 AM - 10:30 PM</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* WhatsApp */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-card p-6 rounded-lg shadow-food hover-lift"
            >
              <div className="flex items-start gap-4">
                <div className="text-[#25D366] text-3xl">
                  <FaWhatsapp />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-primary">
                    {t('WhatsApp Order', 'வாட்ஸ்அப் ஆர்டர்')}
                  </h3>
                  <p className="text-foreground mb-3">
                    {t('Order directly via WhatsApp', 'வாட்ஸ்அப் மூலம் நேரடியாக ஆர்டர் செய்யுங்கள்')}
                  </p>
                  <Button
                    onClick={handleWhatsApp}
                    className="bg-[#25D366] hover:bg-[#20BD5A] text-white gap-2"
                  >
                    <FaWhatsapp size={20} />
                    {t('Chat with us', 'எங்களுடன் அரட்டை')}
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Google Maps */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="rounded-lg overflow-hidden shadow-food"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3907.8!2d78.473187!3d12.0590552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bac657f9bb9201b%3A0x83fae982a5608a21!2sSARAVANAS!5e0!3m2!1sen!2sin!4v1701500000000!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Om Sri Saravanas Hotel Location"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
