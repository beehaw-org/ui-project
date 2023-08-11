import UserIcon from '@components/common/UserIcon';
import classNames from 'classnames';
import Image from 'next/image';
import MarkdownIt from 'markdown-it';

import { apiClient } from '@app/apiClient';
import { compactNumberFormatter } from '@utils/compactNumberFormatter';

type Props = {
  className?: string;
};

const md = new MarkdownIt();

const Sidebar = async ({ className }: Props) => {
  const { site_view: siteView, admins } = await apiClient.getSite();

  const sidebarHtml = md.render(siteView.site.sidebar ?? '');
  return (
    <aside className={classNames(className)}>
      <article className='bg-zinc-900 rounded-lg p-4 mb-4 w-full'>
        <header>
          <h1 className='text-48 flex items-center gap-8 mb-8'>
            {siteView.site.icon && (
              <Image
                src={siteView.site.icon}
                width={100}
                height={100}
                alt='Instance logo'
              />
            )}
            {siteView.site.name}
          </h1>

          <ul className='flex gap-6 mb-6 text-24'>
            <li>
              {compactNumberFormatter.format(siteView.counts.users)} members
            </li>
            <li>
              {compactNumberFormatter.format(siteView.counts.posts)} posts
            </li>
            <li>
              {compactNumberFormatter.format(siteView.counts.comments)} Comments
            </li>
          </ul>
        </header>

        <article className='prose-sm dark:prose-invert'>
          <div dangerouslySetInnerHTML={{ __html: sidebarHtml }} />
        </article>
      </article>

      <article className='bg-zinc-900 rounded-lg p-4 w-full'>
        <h1 className='text-40'>Admins</h1>
        <ul>
          {admins.map((admin) => (
            <li key={admin.person.id}>
              <UserIcon layout={'min'} person={admin.person} />
            </li>
          ))}
        </ul>
      </article>
    </aside>
  );
};

export default Sidebar;
