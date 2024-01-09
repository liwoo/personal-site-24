import { twMerge } from "tailwind-merge";
import type { Post } from "~/types";
import { getFormattedDate } from "~/utils/utils";

interface ListItemProps {
    post: Post;
    extended?: boolean;
}

export function ListItem({ post, extended = false }: ListItemProps) {
    return (
        <div
        className={twMerge(
          extended ? 'flex-col md:flex-row gap-x-4' : 'flex-col',
          'flex gap-y-2 rounded-xl transition-all ease-in delay-25 hover:dark:bg-[#1e1e1e] hover:bg-[#e0e0e0] p-4'
        )}
      >
        <div className="w-1/2">
          <time dateTime={String(post.publishDate)} className="inline-block text-muted">{getFormattedDate(post.publishDate)}</time
          >
          <div className="flex my-2">
            <div className="flex-1 border-t border-default"></div>
            <div className="flex-1 border-t border-muted"></div>
          </div>
          {
            extended && (
              <p className="text-muted text-sm">
                ⏰
                {/* <Icon nameName="tabler:clock" class="w-4 h-4 inline-block -mt-0.5 text-secondary" /> */}
                {post.readingTime} Minute Read
              </p>
            )
          }
        </div>
        <div className="flex flex-col gap-y-2 w-full">
          <h3 className="text-xl">{post.title}</h3>
          <p className="text-muted leading-6 line-clamp-2">{post.excerpt}</p>
          <a className="btn-link" href={post.slug}>Read More</a>
        </div>
        {
          extended && (
            <div className="hidden md:block w-2/5">
              {post.image && (
                <a href={getPermalink(post.permalink, 'post')}>
                  {/* <Image
                    src={post.image}
                    class="w-full md:h-full rounded shadow-lg bg-gray-400 dark:bg-slate-700"
                    widths={[400, 900]}
                    width={400}
                    sizes="(max-width: 900px) 400px, 900px"
                    alt={post.title}
                    aspectRatio="16:9"
                    layout="cover"
                    loading="lazy"
                    decoding="async"
                  /> */}
                </a>
              )}
            </div>
          )
        }
      </div>
    )
}