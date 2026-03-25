import { Mail } from 'lucide-react';
import { useState } from 'react';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import { NewsletterModal } from './NewsletterModal';

function NewsletterBannerContent() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-40 bg-card shadow-lg overflow-hidden">
        {/* Desktop */}
        <div className="hidden sm:flex items-center justify-center py-3 gap-4 container mx-auto px-4">
          <div className="flex items-center gap-3">
            <Mail className="w-5 h-5 flex-shrink-0" />
            <p className="text-sm sm:text-base">
              <span className="font-semibold">Ready to Level Up?</span>{' '}
              Join my Newsletter and become a better Engineer
            </p>
          </div>
          <button type="submit" onClick={handleOpenModal} className="btn btn-primary shrink-0">
            Signup
          </button>
        </div>
        {/* Mobile — marquee text with fixed CTA */}
        <div className="sm:hidden flex items-center h-10 relative">
          <div className="overflow-hidden flex-1 min-w-0">
            <div className="banner-marquee flex items-center gap-8 whitespace-nowrap text-xs uppercase tracking-widest px-3">
              <span><span className="font-bold text-primary">Ready to Level Up?</span> — Subscribe to my Newsletter and Become a better Engineer</span>
              <span><span className="font-bold text-primary">Ready to Level Up?</span> — Subscribe to my Newsletter and Become a better Engineer</span>
            </div>
          </div>
          <div className="shrink-0 pr-3 pl-2 bg-card relative z-10">
            <button type="submit" onClick={handleOpenModal} className="btn btn-primary text-xs py-1 px-3">
              Signup
            </button>
          </div>
        </div>
      </div>
      {/* Spacer to prevent content from being hidden under fixed banner */}
      <div className="h-10 sm:h-[56px]" />

      <NewsletterModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}

export function NewsletterBanner() {
  const recaptchaKey = import.meta.env.PUBLIC_RECAPTCHA_KEY;

  // If no reCAPTCHA key, still render the banner but log a warning
  if (!recaptchaKey) {
    console.warn('PUBLIC_RECAPTCHA_KEY is not set. Newsletter banner will not have reCAPTCHA protection.');
    return <NewsletterBannerContent />;
  }

  return (
    <GoogleReCaptchaProvider
      scriptProps={{
        async: true,
      }}
      useEnterprise={true}
      reCaptchaKey={recaptchaKey}
    >
      <NewsletterBannerContent />
    </GoogleReCaptchaProvider>
  );
}
