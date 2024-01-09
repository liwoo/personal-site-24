import { useEffect, useState } from 'react';
import type { Post } from '~/types';
import { ListItem } from './ListItem';

type ClientPostType = 'Search' | 'Category';

export function SearchBlog() {
  const [query, setQuery] = useState<string | undefined>();
  const [postType, setPostType] = useState<ClientPostType>('Search');
  const [searchResult, setSearchResult] = useState<Array<Post>>([]);
  const [searchResultCount, setSearchResultCount] = useState<number | undefined>();

  useEffect(() => {
    setInterval(() => {
      const urlParams = new URLSearchParams(window.location.search);
      const urlQuery = urlParams.get('q');
      if (urlQuery !== null && urlQuery !== query) {
        setPostType('Search');
        setQuery(urlQuery);
      }

      const urlCategory = urlParams.get('c');
      if (urlCategory !== null && urlCategory !== query) {
        setPostType('Category');
        setQuery(urlCategory);
      }
    }, 1000);
  }, []);

  useEffect(() => {
    if (query !== undefined) {
      const fetchPosts = async () => {
        const body = JSON.stringify({ query, postType });
        await fetch('/api/search.json', {
          method: 'POST',
          body,
        })
          .then((res) => res.json())
          .then((data: { posts: Array<Post>; total: number }) => {
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
      <h1 className="font-semibold text-muted text-lg my-8">
        {postType === 'Category' && `Latest from: ${query?.toLocaleUpperCase()}`}

        {postType === 'Search' && (
          <>
            Search Results for <span className="text-default italic">"{query}"</span> ({searchResult.length}
            {searchResultCount !== undefined && ` of ${searchResultCount}`})
          </>
        )}
      </h1>
      {searchResult.length === 0 && (
        // TODO: Style this better
        <div className="flex flex-col justify-center items-center my-8 gap-y-2">
          <p className="text-6xl">📭</p>
          <p className="text-lg text-muted">No results found.</p>
        </div>
      )}
      <ul>
        {searchResult.map((post) => (
          <li key={post.slug}>
            <ListItem post={post} />
          </li>
        ))}
      </ul>
    </div>
  );
}
