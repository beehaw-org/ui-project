import Image from 'next/image';

type Props = {
  src?: string;
  alt?: string;
  dimension?: number;
}

const Avatar = ({ src, alt, dimension }: Props) => {
  dimension = dimension || 10

  return !src
     ? <span className={`inline-block h-${dimension} w-${dimension} overflow-hidden rounded-full bg-gray-400` }/>
     : <span className={`inline-block h-${dimension} w-${dimension} overflow-hidden rounded-full`}>
       <Image
         src={ src }
         alt={ alt || '' }
         width={100}
         height={100}
       />
     </span>
}

export default Avatar;
