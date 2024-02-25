import { twMerge } from 'tailwind-merge';
import type { Post } from '~/types';
import { getPermalink } from '~/utils/permalinks';
import { getFormattedDate } from '~/utils/utils';

interface ListItemProps {
  post: Post;
  extended?: boolean;
}

const getFormattedDateClient = (date: Date) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

export function ListItem({ post, extended = false }: ListItemProps) {
  const window = globalThis.window;
  return (
    <div
      className={twMerge(
        extended ? 'flex-col md:flex-row gap-x-4 lg:h-52' : 'flex-col',
        'group flex gap-y-2 rounded-xl transition-all ease-in delay-25 hover:dark:bg-[#1e1e1e] hover:bg-[#e0e0e0] p-4'
      )}
    >
      <div className="w-full md:w-1/2 flex md:flex-col justify-between md:justify-start items-center md:items-start">
        <div className={"w-1/2 md:w-full"}>
          <time dateTime={String(post.publishDate)} className="inline-block text-muted">
            {window ? getFormattedDateClient(post.publishDate) : getFormattedDate(post.publishDate)}
          </time>
          <div className="flex my-2">
            <div className="flex-1 border-t border-default"></div>
            <div className="flex-1 border-t border-muted"></div>
          </div>
        </div>

        <div>
          {extended && (
            <p className="text-muted text-sm">
              {`⏰ `}
              {/* <Icon nameName="tabler:clock" class="w-4 h-4 inline-block -mt-0.5 text-secondary" /> */}
              {post.readingTime} Minute Read
            </p>
          )}
          <div className='my-4 hidden md:block'>
            {extended && post.category && (
              <a href={`/category/${post.category}`}
                 className="text-sm text-primary hover:text-default hover:bg-page my-2 bg-card p-2 rounded-lg">{post.category?.toLocaleUpperCase()}</a>
            )}
          </div>
        </div>


      </div>

      <div className='my-1 block md:hidden'>
        {extended && post.category && (
          <a href={`/category/${post.category}`}
             className="text-sm text-primary hover:text-default hover:bg-page my-2 bg-card p-2 rounded-lg">{post.category?.toLocaleUpperCase()}</a>
        )}
      </div>

      <div className="flex flex-col gap-y-2 w-full">
        <a href={getPermalink(post.permalink, 'post')} data-astro-prefetch>
          <h3 className="text-xl">{post.title}</h3>
        </a>
        <p className="text-muted leading-6 line-clamp-2">{post.excerpt}</p>
        <a className="btn-link" href={post.slug}>
          Read More
        </a>
      </div>
      {extended && (
        <div className="hidden md:block w-2/5 relative">
          {post.image && (
            <a href={getPermalink(post.permalink, 'post')} data-astro-prefetch>
              <img
                src={post.image}
                className="w-full absolute md:h-full rounded shadow-primary bg-gray-400 dark:bg-slate-700 object-center object-cover"
                alt={post.title}
                width={400}
                loading="lazy"
              />
              <div
                className="bg-card group-hover:bg-primary transition-all ease-in-out duration-300 w-full h-32 -mt-2 ml-2 rounded-lg"/>
            </a>
          )}
        </div>
      )}
    </div>
  );
}
