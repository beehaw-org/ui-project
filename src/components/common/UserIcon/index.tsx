import Image from 'next/image';

type Props = {
  layout: 'min' | 'full';
};

const UserIcon = ({ layout }: Props) => {
  return (
    <div className='rounded-lg'>
      <a href=''>
        <div className='flex gap-4'>
          <Image src='' alt='user icon' />
          <div>
            <p className='font-bold font-serif'>Lionir</p>
            <p>lionir@beehaw.org</p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default UserIcon;
