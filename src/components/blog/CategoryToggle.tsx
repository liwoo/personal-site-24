import { useState } from 'react';
import { Tabs, TabsList, TabsTrigger } from '~/components/ui/tabs';

type PostType = 'Server' | 'Client';

export function Categories() {
  const [postType, setPostType] = useState<PostType>('Server');

  const serverPosts = document.getElementById('server-posts');
  const clientPosts = document.getElementById('client-posts');
  const pagination = document.getElementById('pagination');

  const togglePosts = () => {
    if (serverPosts && clientPosts && pagination) {
      serverPosts.classList.toggle('hidden');
      clientPosts.classList.toggle('hidden');
      pagination.classList.toggle('hidden');
    }
  };

  const changeUrl = (category: string) => {
    const url = new URL(window.location.href);
    url.searchParams.set('c', category);
    window.history.pushState({}, '', url.toString());
    if (postType === 'Server') {
      setPostType('Client');
      togglePosts();
    }
  };

  const resetUrl = () => {
    const url = new URL(window.location.href);
    url.searchParams.delete('c');
    window.history.pushState({}, '', url.toString());
    if (postType === 'Client') {
      setPostType('Server');
      togglePosts();
    }
  };

  return (
    <Tabs defaultValue="all">
      <TabsList className="grid w-full bg-card rounded-xl text-muted grid-cols-4">
        <TabsTrigger onClick={() => resetUrl()} value="all">
          All
        </TabsTrigger>
        <TabsTrigger value="tech">
          <span hx-get="/blog/search?q=maui" hx-target="#server-posts" hx-trigger="click">Tech</span>
        </TabsTrigger>
        <TabsTrigger onClick={() => changeUrl('videos')} value="video">
          Videos
        </TabsTrigger>
        <TabsTrigger onClick={() => changeUrl('general')} value="general">
          General
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
}
