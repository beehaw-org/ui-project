import Image from 'next/image';
import { Person } from 'lemmy-js-client';
import { getHostFromActorId } from '@utils/getHostFromActorId';

type Props = {
  layout: 'min' | 'full';
  person: Person;
};

const UserIcon = ({ layout, person }: Props) => {
  return (
    <div className='rounded-lg'>
      <a href=''>
        <div className='flex gap-4'>
          <span className='inline-block h-10 w-10 overflow-hidden rounded-full'>
            {person.avatar && (
              <Image
                src={person.avatar}
                alt='User avatar'
                width={100}
                height={100}
              />
            )}
          </span>
          <div>
            <p className='font-bold'>{person.display_name ?? person.name}</p>
            <p>
              {person.name}@{getHostFromActorId(person.actor_id)}
            </p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default UserIcon;
