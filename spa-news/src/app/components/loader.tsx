import Image from 'next/image';

export default function Loader() {
  return <Image src="/spinner.gif" width={150} height={150} alt="loading" className="inline-block" />;
}
