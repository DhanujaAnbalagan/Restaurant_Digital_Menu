import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import heroBanner from '@/assets/hero-banner.jpg';

const About = () => {
  const { t } = useLanguage();

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
              {t('About Us', 'எங்களைப் பற்றி')}
            </h1>
            <div className="text-5xl mb-4">🌿</div>
          </div>

          {/* Image */}
          <div className="mb-12 rounded-xl overflow-hidden shadow-food">
            <img
              src="https://img.restaurantguru.com/r5d4-OM-SHREE-SARAVANAS-hotel-design-2021-09.jpg"
              alt="Restaurant"
              className="w h-[1000px] object-cover"
            />
          </div>

          {/* Story */}
          <div className="space-y-6 text-lg text-foreground">
            <p>
              {t(
                'Welcome to Om Sri Saravanas Hotel, your destination for authentic South Indian vegetarian cuisine in Harur, Dharmapuri District. Established in 2012, we have been serving our community with pride and dedication.',
                'ஹரூர், தர்மபுரி மாவட்டத்தில் உண்மையான தென்னிந்திய சைவ உணவுக்கான உங்கள் இடமான ஓம் ஸ்ரீ சரவணாஸ் ஹோட்டலுக்கு வரவேற்கிறோம். 2012 இல் நிறுவப்பட்ட நாங்கள், எங்கள் சமூகத்திற்கு பெருமை மற்றும் அர்ப்பணிப்புடன் சேவை செய்து வருகிறோம்.'
              )}
            </p>

            <p>
              {t(
                'Established as a family-run restaurant, we take pride in serving traditional vegetarian dishes that remind you of home. Every meal is prepared with fresh ingredients and cooked with love, following time-tested recipes passed down through generations.',
                'குடும்பத்தால் நடத்தப்படும் உணவகமாக நிறுவப்பட்ட நாங்கள், வீட்டை நினைவூட்டும் பாரம்பரிய சைவ உணவுகளை வழங்குவதில் பெருமிதம் கொள்கிறோம். ஒவ்வொரு உணவும் புதிய பொருட்களால் தயாரிக்கப்பட்டு, தலைமுறைகளாக பின்பற்றப்படும் சமையல் முறைகளால் அன்புடன் சமைக்கப்படுகிறது.'
              )}
            </p>

            <p>
              {t(
                'From traditional breakfast items like idli and dosa to complete meals served with authentic taste, we offer a wide variety of dishes to satisfy your taste buds. Our menu features traditional South Indian favorites along with Chinese varieties and fresh juices.',
                'இட்லி மற்றும் தோசை போன்ற பாரம்பரிய காலை உணவு முதல் உண்மையான சுவையுடன் பரிமாறப்படும் முழுமையான சாப்பாடு வரை, உங்கள் சுவை மொட்டுகளை திருப்திப்படுத்த பல்வேறு வகையான உணவுகளை நாங்கள் வழங்குகிறோம். எங்கள் மெனுவில் பாரம்பரிய தென்னிந்திய பிடித்தவை மற்றும் சீன வகைகள் மற்றும் புதிய ஜூஸ்கள் உள்ளன.'
              )}
            </p>

            <p className="font-semibold text-primary">
              {t(
                'Visit us at Main Road, Harur, and experience the warmth of authentic South Indian hospitality.',
                'மெயின் ரோடு, ஹரூரில் எங்களை பார்வையிட்டு உண்மையான தென்னிந்திய விருந்தோம்பலின் அன்பை அனுபவியுங்கள்.'
              )}
            </p>
          </div>

          {/* Business Hours */}
          <div className="mt-12 p-8 bg-card rounded-xl shadow-food text-center">
            <h3 className="text-2xl font-bold mb-4 text-primary">
              {t('Business Hours', 'வணிக நேரம்')}
            </h3>
            <p className="text-xl font-semibold text-foreground">
              {t('Open Every Day: 6:00 AM – 10:30 PM', 'தினமும் திறந்திருக்கும்: காலை 6:00 - இரவு 10:30')}
            </p>
          </div>

          {/* Values */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              {
                icon: '🌱',
                title: t('Fresh Ingredients', 'புதிய பொருட்கள்'),
                desc: t('We use only the freshest ingredients', 'நாங்கள் புதிய பொருட்களை மட்டுமே பயன்படுத்துகிறோம்'),
              },
              {
                icon: '👨‍👩‍👧‍👦',
                title: t('Family Values', 'குடும்ப மதிப்புகள்'),
                desc: t('Serving with love and care', 'அன்பு மற்றும் அக்கறையுடன் பரிமாறுதல்'),
              },
              {
                icon: '⭐',
                title: t('Quality Service', 'தரமான சேவை'),
                desc: t('Your satisfaction is our priority', 'உங்கள் திருப்தியே எங்கள் முன்னுரிமை'),
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 rounded-lg bg-card shadow-food hover-lift"
              >
                <div className="text-4xl mb-3">{value.icon}</div>
                <h3 className="font-bold text-lg mb-2 text-primary">{value.title}</h3>
                <p className="text-muted-foreground">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
