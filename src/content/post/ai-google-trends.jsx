// components/GoogleTrends.jsx
import React, { useEffect } from 'react';

export default function GoogleTrends() {
  useEffect(() => {
    // Load the Google Trends script
    const script = document.createElement('script');
    script.src = 'https://ssl.gstatic.com/trends_nrtr/3898_RC01/embed_loader.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      // Once the script is loaded, render the trends widget
      if (window.trends) {
        window.trends.embed.renderExploreWidget(
          'TIMESERIES',
          {
            comparisonItem: [
              {
                keyword: 'artificial intelligence',
                geo: '',
                time: 'today 5-y',
              },
            ],
            category: 0,
            property: '',
          },
          {
            exploreQuery: 'date=today%205-y&q=artificial%20intelligence&hl=en',
            guestPath: 'https://trends.google.com:443/trends/embed/',
          }
        );
      }
    };

    // Cleanup function
    return () => {
      document.body.removeChild(script);
    };
  }, []); // Empty dependency array means this effect runs once on mount

  return <div id="trends-widget-container" className="w-full h-96" />;
}
