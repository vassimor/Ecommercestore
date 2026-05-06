import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <nav className="flex gap-14 p-4 ">
        <Link href="/products">Products</Link>
        <Link href="/cart">Cart</Link>
        <Link href="/checkout">Checkout</Link>
        <Link href="/thankyou">Thank You</Link>
      </nav>
    </header>
  );
}
