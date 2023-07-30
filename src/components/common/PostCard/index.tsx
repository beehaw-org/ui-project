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
        <h1 className="mt-3 text-2xl font-bold">Post title is very long and big and tries to be a bit too overly descriptive but I'll allow it</h1>
      </header>
      <footer className="mt-5 flex flex-row">
        <div className="flex gap-x-3">
          <button className="flex h-10 items-center rounded-md bg-zinc-800 px-3 font-bold">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-4 w-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18" />
            </svg>
            <p className="ml-2">420</p>
          </button>
          <button className="h-10 whitespace-nowrap rounded-md bg-zinc-800 px-3 font-bold">42 comments</button>

          <button className="hidden h-10 rounded-md bg-zinc-800 px-3 font-bold md:block">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-6 w-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 9V4.5M9 9H4.5M9 9L3.75 3.75M9 5.25M15 15h4.5M15 15v4.5m0-4.5l5.25 5.25" />
            </svg>
          </button>
        </div>
        <div className="ml-auto flex gap-x-3 pl-3">
          <button className="h-10 rounded-md bg-zinc-800 px-3 font-bold">Save</button>
          <button className="h-10 rounded-md bg-zinc-800 px-3 font-bold">More</button>
        </div>
      </footer>
    </article>
  )
}

export default PostCard
