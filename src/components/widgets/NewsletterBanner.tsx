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
      <div className="fixed top-0 left-0 right-0 z-40 bg-card shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center py-3 gap-4">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 hidden sm:block flex-shrink-0" />
              <p className="text-sm sm:text-base">
                <span className="font-semibold">Stay updated!</span>{' '}
                <span className="hidden sm:inline">Join my newsletter for the latest articles and insights.</span>
                <span className="sm:hidden">Get my latest articles & insights.</span>
              </p>
            </div>
            <button
              type="submit"
              onClick={handleOpenModal}
              className="btn btn-primary"
            >
              Signup
            </button>
          </div>
        </div>
      </div>
      {/* Spacer to prevent content from being hidden under fixed banner */}
      <div className="h-[52px] sm:h-[56px]" />

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
