import React from 'react';
import { useRouter } from 'next/router';

const TheBlogPage = () => {
  const router = useRouter();
  console.log(router.query);

  return (
    <div>
      <h1>The Blog Page</h1>
    </div>
  );
};

export default TheBlogPage;
