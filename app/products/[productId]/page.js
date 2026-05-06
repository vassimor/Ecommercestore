import Image from 'next/image';
import { shoes } from '../../../database/shoes';

export const metadata = {
  title: 'Product',
  description: 'This is the product page for a specific product.',
};


export  default async function ProductPage(props) {


const  params  = await  props.params;
  const shoe = shoes.find((shoe) => shoe.id === Number(params.productId));

  return (
   <div>

     <Image
       src={`/shoes/shoes${shoe.id}.jpg`}
       alt={shoe.name}
       width={500}
       height={500}
     />
      <h1>{shoe.name}</h1>






   </div>
  );
}
