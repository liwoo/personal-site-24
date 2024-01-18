import React from 'react'
import { TwitterTweetEmbed } from 'react-twitter-embed';

interface Props {
    tweetId: string;
}

export default function Tweet({ tweetId }: Props) {
  return (
    <div className="container-article my-8 border-t border-muted py-8">
  <TwitterTweetEmbed 
    placeholder={"Loading Tweet"}
    options={{theme: 'dark'}}
    tweetId={tweetId} />
</div>
  )
}
