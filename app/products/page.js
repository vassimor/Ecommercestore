import Image from 'next/image';
import Link from 'next/link';
import { shoes } from '../../database/shoes';

export const metadata = {
  title: 'Home',
  description: 'This is the home page of our Next.js application.',
};



export default function ProductsPage() {
  return (
    <div>


      {shoes.map((shoe) => (
        <Link key={`shoe-${shoe.id}`} href={`/products/${shoe.id}`}>
          <h2>{shoe.name}</h2>
          <p>${shoe.price}</p>
          <Image
            src={`/shoes/shoes${shoe.id}.jpg`}
            alt={shoe.name}
            width={200}
            height={200}/>
        </Link>
      ))}
          </div>);


}
