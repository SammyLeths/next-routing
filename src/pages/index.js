import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <h1>Hello Next World!</h1>
      <ul>
        <li>
          <Link href='/portfolio'>Portfolio</Link>
        </li>
        <li>
          <Link href='/clients'>Clients</Link>
        </li>
      </ul>
    </main>
  );
}
