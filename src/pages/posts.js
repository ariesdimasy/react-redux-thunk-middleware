import React, { useState, useEffect } from "react";

import Header from "../layouts/layout1/Header";
import Nav from "../layouts/layout1/Nav";

// 23fdf4998d8147fe8c299feaf14613f1

// functional component
function Posts() {
  // detructive
  const [posts, setPosts] = useState([]); // set awal nilai state dari posts adalah []

  const buttonClickChangePosts = () => {
    setPosts([
      {
        title: "foo",
        desc: "bar",
      },
      {
        title: "test",
        desc: "lorem ipsum",
      },
    ]);
  };

  // semacam life cycle pada functional component , componentDidMount
  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/everything?q=bitcoin&apiKey=23fdf4998d8147fe8c299feaf14613f1",
      {
        method: "GET",
      }
    )
      .then((res) => {
        setPosts(res);
        console.log("NEWS => ", res);
      })
      .catch((err) => {
        console.log("err => ", err);
      });
  }, []);

  return (
    <div>
      <Header title="Posts"></Header>
      <Nav></Nav>
      <div>{JSON.stringify(posts)}</div>
      <button onClick={() => buttonClickChangePosts()}> change posts </button>
    </div>
  );
}

export default Posts;
