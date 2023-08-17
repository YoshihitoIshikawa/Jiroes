import React from "react";

async function getStaticProps() {
  const res = await fetch('http://backend:3000/posts');

  return res.json();
}

const Home = async () => {
  const posts = await getStaticProps();
  return (
    <div>
      <h2>
        POSTの一覧
      </h2>
      {posts.map((post) =>
        <ul>
          <li key={post.id}>
          {post.id}. {post.title}
          </li>
        </ul>
      )}
    </div>
  )
}

export default Home;
