import { useLanguage } from '@/contexts/LanguageContext';
import { FaPhone, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <span className="text-2xl">🌿</span>
              {t('Saravanas Veg Restaurant', 'சரவணாஸ் வெஜ் ரெஸ்டாரன்ட்')}
            </h3>
            <p className="opacity-90">
              {t(
                'Authentic South Indian vegetarian cuisine in the heart of Harur.',
                'ஹரூரின் மையத்தில் உண்மையான தென்னிந்திய சைவ உணவு.'
              )}
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t('Contact Us', 'தொடர்பு')}</h3>
            <div className="space-y-3 opacity-90">
              <div className="flex items-start gap-2">
                <FaMapMarkerAlt className="mt-1 flex-shrink-0" />
                <span>Main Road, Harur, Dharmapuri District, Tamil Nadu - 636903</span>
              </div>
              <div className="flex items-center gap-2">
                <FaPhone />
                <a href="tel:+919443052290" className="hover:underline">
                  +91 94430 52290
                </a>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t('Business Hours', 'வணிக நேரம்')}</h3>
            <div className="space-y-2 opacity-90">
              <div className="flex items-start gap-2">
                <FaClock className="mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">{t('Open Every Day', 'தினமும் திறந்திருக்கும்')}</p>
                  <p>6:00 AM - 10:30 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center opacity-75">
          <p>© 2024 Saravanas Veg Restaurant. {t('All rights reserved.', 'அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
