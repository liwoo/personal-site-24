import { useEffect, useState } from 'react';
import type { Post } from '~/types';
import { ListItem } from './ListItem';

export function SearchBlog() {
  const [query, setQuery] = useState<string | undefined>();
  const [searchResult, setSearchResult] = useState<Array<Post>>([]);
  const [searchResultCount, setSearchResultCount] = useState<number | undefined>();

  useEffect(() => {
    setInterval(() => {
      const urlParams = new URLSearchParams(window.location.search);
      const urlQuery = urlParams.get('q');
      if (urlQuery !== null && urlQuery !== query) setQuery(urlQuery);
    }, 1000);
  }, []);

  useEffect(() => {
    if (query !== undefined) {
      const fetchPosts = async () => {
        const body = JSON.stringify({ query });
        await fetch('/api/search', {
          method: 'POST',
          body,
        })
          .then((res) => res.json())
          .then((data: { posts: Array<Post>, total: number }) => {
            setSearchResult(data.posts);
            setSearchResultCount(data.total);
          })
          .catch((err) => {
            console.error(err);
          });
      };

      fetchPosts();
    }
  }, [query]);

  return (
    <div>
      <h1 className='font-semibold text-muted text-lg my-8'>
        Search Results for <span className='text-default italic'>"{query}"</span> ({searchResult.length}{searchResultCount !== undefined && ` of ${searchResultCount}`})
      </h1>
      <ul>
        {searchResult.map((post) => (
          <li key={post.slug}><ListItem post={post} /></li>
        ))}
      </ul>
    </div>
  );
}
