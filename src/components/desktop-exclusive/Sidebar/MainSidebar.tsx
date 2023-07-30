import UserIcon from '@components/common/UserIcon';
import classNames from 'classnames';
import Image from 'next/image';

import logo from 'public/images/logo-mock.bmp';

type Props = {
  className?: string;
};

const Sidebar = ({ className }: Props) => {
  return (
    <aside className={classNames('font-serif font-bold', className)}>
      <article className='bg-zinc-900 rounded-lg p-4 mb-4 w-full'>
        <header>
          <h1 className='text-48 flex items-center gap-8 mb-8'>
            <Image src={logo} alt='cowbee logo' />
            Beehaw
          </h1>

          <ul className='flex gap-6 mb-6 text-24'>
            <li>12.6K members</li>
            <li>12K posts</li>
            <li>98K Comments</li>
          </ul>
        </header>

        <article>
          <p className='mb-4'>
            Aspiring to be(e) a safe, friendly and diverse place.
          </p>
          <p className='mb-4'>Be(e) nice.</p>
          <p className='mb-4'>
            Our instance is 100% user-funded - help us keep it running by donating
          </p>
          <p className='mb-4'>
            We currently have a Mastodon account you can follow for major updates:
            @beehaw at hachyderm.io. You can also join our community Discord or
            Matrix servers. You can also view our status page.
          </p>
          <p className='mb-4'>
            Our most up to date FAQ can be found here. Downvotes are disabled on
            this instance.
          </p>
          <p className='mb-4'>
            We&apos;re a collective of individuals upset with the way social media
            has been traditionally governed. A severe lack of moderation has led
            to major platforms like Facebook to turn into political machinery
            focused on disinformation campaigns as a way to make profit off of
            users. Websites with ineffective moderation allow hate speech to
            proliferate and contribute to the erosion of minority rights and safe
            spaces. Our goal with Beehaw is to demonstrate and promote a healthier
            environment.
          </p>
          <p className='mb-4'>Our philosophy:</p>
          <ul className='mb-4 pl-2 flex flex-col gap-2'>
            <li>What is Beehaw?</li>
            <li>The spirit of the rules</li>
            <li>Beehaw is a Community and more on our Docs Website</li>
          </ul>
          <p className='mb-4'>
            Operating our server costs money. If you donate, you should know that
            100% of the costs will go towards server time, licensing costs, and
            artwork. In the future if we need to hire developers or other labor,
            it would be sourced through the Open Collective Foundation, and it
            would be transparent to the community before any changes were made.
          </p>
          <p className='mb-4'>
            As a news aggregator and a social media outlet, with a focus on being
            a safe and accepting space, we strive to create a positive social
            impact. We will, also, help to connect underprivileged and minority
            individuals with education and civic participation by promoting a
            healthier online experience.
          </p>
          <p className='mb-4'>
            Our community icons were made by Aaron Schneider under the
            CC-BY-NC-SA-4.0 license.
          </p>
        </article>
      </article>

      <article className='bg-zinc-900 rounded-lg p-4 w-full'>
        <h1 className='text-40'>Admins</h1>
        <ul>
          <li>
            <UserIcon layout='min' />
          </li>
          <li>
            <UserIcon layout='min' />
          </li>
          <li>
            <UserIcon layout='min' />
          </li>
          <li>
            <UserIcon layout='min' />
          </li>
        </ul>
      </article>
    </aside>
  );
};

export default Sidebar;
