import React from 'react';
import { useRouter } from 'next/router';

const BlogPostDetailPage = () => {
  const router = useRouter();
  console.log(router.query);

  return (
    <div>
      <h1>The Blog Post Detail Page</h1>
    </div>
  );
};

export default BlogPostDetailPage;
