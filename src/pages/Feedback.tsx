import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Star } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Feedback = () => {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [selectedEmoji, setSelectedEmoji] = useState('');
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const { t } = useLanguage();
  const { toast } = useToast();

  const emojis = [
    { emoji: '😋', label: t('Loved It', 'மிகவும் பிடித்தது'), value: 'loved' },
    { emoji: '🙂', label: t('Good', 'நல்லது'), value: 'good' },
    { emoji: '😐', label: t('Okay', 'சரி'), value: 'okay' },
    { emoji: '🙁', label: t('Not Good', 'நல்லதல்ல'), value: 'not-good' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!rating || !selectedEmoji || !name || !comment) {
      toast({
        title: t('Please fill all fields', 'அனைத்து புலங்களையும் நிரப்பவும்'),
        variant: 'destructive',
      });
      return;
    }

    // Save to localStorage (in production, this would go to a database)
    const feedback = {
      id: Date.now(),
      name,
      rating,
      emoji: selectedEmoji,
      comment,
      date: new Date().toISOString(),
    };

    const existingFeedback = localStorage.getItem('feedback');
    const feedbackList = existingFeedback ? JSON.parse(existingFeedback) : [];
    feedbackList.push(feedback);
    localStorage.setItem('feedback', JSON.stringify(feedbackList));

    // Show success message
    toast({
      title: t('Thank You!', 'நன்றி!'),
      description: t('Your feedback has been submitted successfully', 'உங்கள் கருத்து வெற்றிகரமாக சமர்ப்பிக்கப்பட்டது'),
    });

    // Reset form
    setRating(0);
    setSelectedEmoji('');
    setName('');
    setComment('');
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
            {t('We Value Your Feedback', 'உங்கள் கருத்தை நாங்கள் மதிக்கிறோம்')}
          </h1>
          <p className="text-lg text-muted-foreground">
            {t('Help us serve you better', 'எங்களுக்கு உதவுங்கள்')}
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          onSubmit={handleSubmit}
          className="bg-card p-8 rounded-xl shadow-food space-y-6"
        >
          {/* Star Rating */}
          <div className="text-center">
            <Label className="text-lg font-semibold mb-3 block">
              {t('Rate Your Experience', 'உங்கள் அனுபவத்தை மதிப்பிடுங்கள்')}
            </Label>
            <div className="flex justify-center gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHoveredRating(star)}
                  onMouseLeave={() => setHoveredRating(0)}
                  className="transition-transform hover:scale-110"
                >
                  <Star
                    size={40}
                    className={
                      star <= (hoveredRating || rating)
                        ? 'fill-accent text-accent'
                        : 'text-muted-foreground'
                    }
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Emoji Reactions */}
          <div className="text-center">
            <Label className="text-lg font-semibold mb-3 block">
              {t('How was your meal?', 'உங்கள் உணவு எப்படி இருந்தது?')}
            </Label>
            <div className="flex justify-center gap-4">
              {emojis.map((item) => (
                <button
                  key={item.value}
                  type="button"
                  onClick={() => setSelectedEmoji(item.value)}
                  className={`flex flex-col items-center p-4 rounded-lg transition-all ${
                    selectedEmoji === item.value
                      ? 'bg-primary/10 ring-2 ring-primary scale-110'
                      : 'hover:bg-muted'
                  }`}
                >
                  <span className="text-4xl mb-2">{item.emoji}</span>
                  <span className="text-xs font-medium">{item.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Name Input */}
          <div>
            <Label htmlFor="name" className="text-base font-semibold">
              {t('Your Name', 'உங்கள் பெயர்')}
            </Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={t('Enter your name', 'உங்கள் பெயரை உள்ளிடவும்')}
              className="mt-2"
            />
          </div>

          {/* Comment Box */}
          <div>
            <Label htmlFor="comment" className="text-base font-semibold">
              {t('Your Comments', 'உங்கள் கருத்துகள்')}
            </Label>
            <Textarea
              id="comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder={t('Tell us about your experience...', 'உங்கள் அனுபவத்தைப் பற்றி சொல்லுங்கள்...')}
              className="mt-2 min-h-[120px]"
            />
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            size="lg"
            className="w-full gradient-primary text-lg"
          >
            {t('Submit Feedback', 'கருத்தைச் சமர்ப்பிக்கவும்')} ✨
          </Button>
        </motion.form>
      </div>
    </div>
  );
};

export default Feedback;
