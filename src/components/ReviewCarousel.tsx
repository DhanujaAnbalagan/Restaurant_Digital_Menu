import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

const reviews = [
  {
    name: 'Rajesh Kumar',
    nameTamil: 'ராஜேஷ் குமார்',
    review: 'Best vegetarian food in Harur! The meals are authentic and delicious.',
    reviewTamil: 'ஹரூரில் சிறந்த சைவ உணவு! உணவு மிகவும் சுவையானது.',
    rating: 5,
  },
  {
    name: 'Priya Devi',
    nameTamil: 'பிரியா தேவி',
    review: 'Their dosa is amazing! Family-friendly place with great service.',
    reviewTamil: 'அவர்களின் தோசை அருமை! குடும்ப நட்பு இடம்.',
    rating: 5,
  },
  {
    name: 'Murugan S',
    nameTamil: 'முருகன் எஸ்',
    review: 'Affordable prices, generous portions. Highly recommended!',
    reviewTamil: 'மலிவு விலை, நல்ல அளவு. மிகவும் பரிந்துரைக்கப்படுகிறது!',
    rating: 5,
  },
];

const ReviewCarousel = () => {
  const { language, t } = useLanguage();

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            {t('What Our Customers Say', 'எங்கள் வாடிக்கையாளர்கள் கூறுவது')}
          </h2>
          <p className="text-muted-foreground">
            {t('Hear from our happy customers', 'மகிழ்ச்சியான வாடிக்கையாளர்களிடமிருந்து')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 h-full hover-lift bg-card">
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i} className="text-accent text-xl">★</span>
                  ))}
                </div>
                <p className="text-foreground mb-4 italic">
                  "{language === 'en' ? review.review : review.reviewTamil}"
                </p>
                <p className="font-semibold text-primary">
                  - {language === 'en' ? review.name : review.nameTamil}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewCarousel;
