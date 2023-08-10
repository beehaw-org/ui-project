import { ArrowUpIcon, ArrowsPointingOutIcon, ArrowsPointingInIcon, BookmarkIcon, EllipsisHorizontalIcon } from '@heroicons/react/24/solid';
import { BookmarkIcon as OutlineBookmarkIcon } from '@heroicons/react/24/outline'
const PostCard = () => {

  return (
    <article className="mx-auto flex max-w-5xl flex-col gap-y-2 rounded-xl bg-zinc-900 px-5 py-5 text-gray-300">
      <section className="flex items-center">
        <span className="inline-block h-10 w-10 overflow-hidden rounded-full bg-gray-400"></span>
        <aside className="ml-3 flex flex-col">
          <div className="flex flex-row items-end gap-x-1">
            <h4 className="font-bold">CommunityName</h4>
            <p className="before:content-['('] after:content-[')'] empty:hidden">comm@instance.com</p>
          </div>
          <div className="flex flex-row items-end gap-x-1 text-gray-100">
            <p>Username</p>
            <p className="before:content-['('] after:content-[')'] empty:hidden">user@instance.com</p>
            <p>&#8226;</p>
            <p>5 hours ago</p>
          </div>
        </aside>
      </section>
      <header>
        <h1 className="mt-3 text-2xl font-bold">{"Post title is very long and big and tries to be a bit too overly descriptive but I'll allow it"}</h1>
      </header>
      <footer className="mt-5 flex flex-row">
        <div className="flex gap-x-3">
          <div className="inline-flex rounded-md shadow-sm">
            <button className="px-2 py-2 rounded-l-lg bg-zinc-700 dark:hover:bg-zinc-600">
              <ArrowUpIcon className="h-4 w-4" />
            </button>
            <span className="px-2 py-2 rounded-r-lg bg-zinc-700 ">420</span>
          </div>
          <button className="whitespace-nowrap rounded-md bg-zinc-700 px-3 dark:hover:bg-zinc-600">42 comments</button>

          <button className="px-3 rounded-md bg-zinc-700 dark:hover:bg-zinc-600">
            <ArrowsPointingOutIcon className="h-4 w-4" />
          </button>
        </div>
        <div className="ml-auto flex gap-x-3 pl-3">
          <button className="px-3 rounded-md bg-zinc-700 dark:hover:bg-zinc-600">
            <OutlineBookmarkIcon className="h-4 w-4" />
          </button>
          <button className="px-3 rounded-md bg-zinc-700 dark:hover:bg-zinc-600">
            <EllipsisHorizontalIcon className="h-4 w-4" />
          </button>
        </div>
      </footer>
    </article>
  )
}

export default PostCard
