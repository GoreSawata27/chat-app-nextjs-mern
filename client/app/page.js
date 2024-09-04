"use client";
import withAuth from "./hoc/withAuth";

function Home() {
  return <div>Homepage</div>;
}

export default withAuth(Home);
