import React, { useEffect } from 'react';

export default function Tweet() {
  useEffect(() => {
    const script = document.createElement('script');

    script.src = 'https://platform.twitter.com/widgets.js';
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <div className="tweets dark">
        <blockquote className="twitter-tweet" data-theme="dark">
          <p lang="en" dir="ltr">
            Hi 👋 I&#39;m Jeremiah. I&#39;m Mobile and{' '}
            <a href="https://twitter.com/hashtag/AI?src=hash&ref_src=twsrc%5Etfw">#AI</a> 🪄 Lead at{' '}
            <a href="https://twitter.com/IremboGov?ref_src=twsrc%5Etfw">@IremboGov</a> by ☀️ and create{' '}
            <a href="https://t.co/sZ4UrAssGl">https://t.co/sZ4UrAssGl</a> by 🌙 <br />
            <br />I love to{' '}
            <a href="https://twitter.com/hashtag/buildinpublic?src=hash&ref_src=twsrc%5Etfw">#buildinpublic</a> and
            share my failers and occasional wins on <a href="https://t.co/nAroIneVbE">https://t.co/nAroIneVbE</a>. Let’s
            <a href="https://twitter.com/hashtag/connect?src=hash&ref_src=twsrc%5Etfw">#connect</a> if interested in{' '}
            <a href="https://twitter.com/hashtag/softwareengineering?src=hash&ref_src=twsrc%5Etfw">
              #softwareengineering
            </a>
            <a href="https://twitter.com/hashtag/blockchain?src=hash&ref_src=twsrc%5Etfw">#blockchain</a>
            <a href="https://twitter.com/hashtag/startups?src=hash&ref_src=twsrc%5Etfw">#startups</a>
          </p>
          &mdash; Chienda (@liwucodes){' '}
          <a href="https://twitter.com/liwucodes/status/1746224748067987458?ref_src=twsrc%5Etfw">January 13, 2024</a>
        </blockquote>
      </div>
      <div className="tweets hidden light">
        <blockquote className="twitter-tweet" data-theme="light">
          <p lang="en" dir="ltr">
            Hi 👋 I&#39;m Jeremiah. I&#39;m Mobile and{' '}
            <a href="https://twitter.com/hashtag/AI?src=hash&ref_src=twsrc%5Etfw">#AI</a> 🪄 Lead at{' '}
            <a href="https://twitter.com/IremboGov?ref_src=twsrc%5Etfw">@IremboGov</a> by ☀️ and create{' '}
            <a href="https://t.co/sZ4UrAssGl">https://t.co/sZ4UrAssGl</a> by 🌙 <br />
            <br />I love to{' '}
            <a href="https://twitter.com/hashtag/buildinpublic?src=hash&ref_src=twsrc%5Etfw">#buildinpublic</a> and
            share my failers and occasional wins on <a href="https://t.co/nAroIneVbE">https://t.co/nAroIneVbE</a>. Let’s
            <a href="https://twitter.com/hashtag/connect?src=hash&ref_src=twsrc%5Etfw">#connect</a> if interested in{' '}
            <a href="https://twitter.com/hashtag/softwareengineering?src=hash&ref_src=twsrc%5Etfw">
              #softwareengineering
            </a>
            <a href="https://twitter.com/hashtag/blockchain?src=hash&ref_src=twsrc%5Etfw">#blockchain</a>
            <a href="https://twitter.com/hashtag/startups?src=hash&ref_src=twsrc%5Etfw">#startups</a>
          </p>
          &mdash; Chienda (@liwucodes){' '}
          <a href="https://twitter.com/liwucodes/status/1746224748067987458?ref_src=twsrc%5Etfw">January 13, 2024</a>
        </blockquote>
      </div>
    </>
  );
}
