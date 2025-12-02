import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import foodDosa from '@/assets/food-dosa.jpg';
import foodMeals from '@/assets/food-meals.jpg';
import foodIdli from '@/assets/food-idli.jpg';
import foodVada from '@/assets/food-vada.jpg';

const Home = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      {/* Hero Carousel Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <Carousel
          plugins={[
            Autoplay({
              delay: 4000,
            }),
          ]}
          className="w-full h-full"
        >
          <CarouselContent>
            {[
              { image: "https://media.easemytrip.com/media/Blog/India/636977607425696252/636977607425696252QYiiUU.jpg", title: t('Crispy Dosa', 'மொறுமொறுப்பான தோசை') },
              { image: "https://1.bp.blogspot.com/-troao0LtvPk/WBAcyWzKh5I/AAAAAAAABMQ/qU4U8BlbHS05gI01MYWBCc9UcquSY64OACLcB/s1600/Onam%2BSadhya.jpg", title: t('Full Meals', 'முழு சாப்பாடு') },
              { image:"https://www.shutterstock.com/image-photo/latte-americano-orange-juice-lime-600nw-2122885682.jpg" , title: t('Soft Idli', 'மென்மையான இட்லி') },
              { image: "https://aaswadcaterers.com/wp-content/uploads/2021/07/pure-veg-indian-catering-scaled.jpg", title: t('Hot Vada', 'சூடான வடை') },
              { image: "https://w0.peakpx.com/wallpaper/463/313/HD-wallpaper-norwood-norwood-ma-restaurant-menu-delivery-north-indian-food.jpg", title: t('Hot Vada', 'சூடான வடை') },
            ].map((item, index) => (
              <CarouselItem key={index}>
                <div className="relative h-[70vh]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/30" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="container mx-auto px-4 text-center md:text-left">
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="max-w-2xl"
                      >
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-primary">
                          {t('Welcome to Om Sri Saravanas Hotel', 'ஓம் ஸ்ரீ சரவணாஸ் ஹோட்டலுக்கு வரவேற்கிறோம்')}
                        </h1>
                        <p className="text-xl md:text-2xl mb-8 text-foreground">
                          {t('Authentic South Indian Vegetarian Cuisine', 'உண்மையான தென்னிந்திய சைவ உணவு')}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                          <Link to="/menu">
                            <Button size="lg" className="text-lg px-8 py-6 gradient-primary hover:opacity-90 transition-smooth shadow-lg">
                              {t('View Menu', 'மெனுவைப் பார்க்கவும்')} 🍽️
                            </Button>
                          </Link>
                          <a href="https://wa.me/919443052290?text=Hi,%20I%20want%20to%20order%20from%20Om%20Sri%20Saravanas%20Veg%20Restaurant!" target="_blank" rel="noopener noreferrer">
                            <Button size="lg" variant="secondary" className="text-lg px-8 py-6 shadow-lg">
                              {t('Order on WhatsApp', 'வாட்ஸ்அப்பில் ஆர்டர்')} 📱
                            </Button>
                          </a>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>
      </section>

      {/* Badges Section */}
      <section className="py-8 bg-muted">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { icon: '🌱', label: t('Pure Veg', '100% சைவம்') },
              { icon: '✨', label: t('Hygienic', 'சுகாதாரமான') },
              { icon: '👨‍👩‍👧‍👦', label: t('Family Restaurant', 'குடும்ப உணவகம்') },
              { icon: '❄️', label: t('A/C Hall', 'ஏ/சி ஹால்') },
            ].map((badge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-2 bg-card px-6 py-3 rounded-full shadow-md"
              >
                <span className="text-2xl">{badge.icon}</span>
                <span className="font-semibold text-foreground">{badge.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              {t('Why Choose Us?', 'ஏன் எங்களைத் தேர்வு செய்ய வேண்டும்?')}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '🌿',
                title: t('100% Vegetarian', '100% சைவம்'),
                desc: t('Pure vegetarian food', 'தூய சைவ உணவு'),
              },
              {
                icon: '👨‍🍳',
                title: t('Authentic Taste', 'உண்மையான சுவை'),
                desc: t('Traditional South Indian recipes', 'பாரம்பரிய தென்னிந்திய சமையல்'),
              },
              {
                icon: '💰',
                title: t('Affordable Prices', 'மலிவு விலை'),
                desc: t('Great value for money', 'பணத்திற்கு சிறந்த மதிப்பு'),
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 rounded-lg bg-card hover-lift shadow-food"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-primary">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t('Ready to Order?', 'ஆர்டர் செய்ய தயாரா?')}
            </h2>
            <p className="text-xl mb-8 opacity-90">
              {t('Check out our delicious menu and order via WhatsApp', 'எங்கள் சுவையான மெனுவைப் பார்த்து வாட்ஸ்அப் மூலம் ஆர்டர் செய்யுங்கள்')}
            </p>
            <Link to="/menu">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6 shadow-lg">
                {t('Explore Menu', 'மெனுவை ஆராயுங்கள்')} 🍽️
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
