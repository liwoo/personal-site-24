import { useState, type FormEvent } from 'react';
import { GoogleReCaptchaProvider, useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { NEWSLETTER_RECAPTCHA_ACTION } from '~/utils/newsletter';

interface Props {
  /** Newsletter list category sent to /api/newsletter. */
  category?: string;
  title?: string;
  blurb?: string;
}

type Status = { type: 'success' | 'error'; text: string } | null;

function Form({ category = 'general', title = 'The newsletter', blurb = 'AI engineering notes from production. Every few weeks, no spam.' }: Props) {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<Status>(null);
  const { executeRecaptcha } = useGoogleReCaptcha();

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!executeRecaptcha) {
      setStatus({ type: 'error', text: 'Security check is still loading — try again in a second.' });
      return;
    }
    setLoading(true);
    setStatus(null);
    try {
      const token = await executeRecaptcha(NEWSLETTER_RECAPTCHA_ACTION);
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, category, token }),
      });
      const data = (await res.json().catch(() => ({}))) as { message?: string };
      if (res.ok) {
        setStatus({ type: 'success', text: 'You’re in — check your inbox to confirm.' });
        setEmail('');
      } else {
        setStatus({ type: 'error', text: data.message || 'Something went wrong. Please try again.' });
      }
    } catch {
      setStatus({ type: 'error', text: 'Couldn’t subscribe right now. Please try again later.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="glass glass-sheen rounded-xl px-5 py-5 sm:px-8 sm:py-6">
      <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-10">
        <div className="lg:flex-1 min-w-0">
          <p className="terminal-label">subscribe</p>
          <h2 className="mt-1 text-lg font-bold text-heading">{title}</h2>
          <p className="mt-1 text-xs text-muted">{blurb}</p>
        </div>
        <form onSubmit={onSubmit} className="lg:flex-1 flex flex-col gap-2" aria-label="Newsletter signup">
          <div className="flex gap-2">
            <label htmlFor={`nl-email-${category}`} className="sr-only">
              Email address
            </label>
            <input
              id={`nl-email-${category}`}
              type="email"
              required
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@domain.com"
              disabled={loading}
              className="flex-1 min-w-0 rounded-md border border-gray-400/50 dark:border-gray-500/40 bg-white/70 dark:bg-black/30 px-3 py-2 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none"
            />
            <button type="submit" className="btn-primary !px-4 sm:!px-6 rounded-md shrink-0" disabled={loading}>
              {loading ? '…' : 'Subscribe'}
            </button>
          </div>
          <p className="text-[0.65rem] text-muted" aria-live="polite">
            {status ? (
              <span className={status.type === 'success' ? 'text-green-700 dark:text-green-400' : 'text-red-600 dark:text-red-400'}>
                {status.text}
              </span>
            ) : (
              <>
                By subscribing you agree to the{' '}
                <a href="/privacy" className="underline underline-offset-2 hover:text-primary">
                  privacy policy
                </a>
                .
              </>
            )}
          </p>
        </form>
      </div>
    </div>
  );
}

export function NewsletterInline(props: Props) {
  const key = import.meta.env.PUBLIC_RECAPTCHA_KEY;
  if (!key) return <Form {...props} />;
  return (
    <GoogleReCaptchaProvider reCaptchaKey={key} useEnterprise scriptProps={{ async: true }}>
      <Form {...props} />
    </GoogleReCaptchaProvider>
  );
}
