import Container from "../components/container";
import MoreStories from "../components/more-stories";
import { getAllPosts } from "../lib/graphcms";
import Head from "next/head";
import { TITLE } from "../lib/constants";

export default function Blog({ posts }) {
  return (
    <>
      <Head>
        <title>{"Blog" + TITLE}</title>
      </Head>
      <Container>
        <MoreStories posts={posts} />
      </Container>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const posts = (await getAllPosts(preview)) || [];
  return {
    props: { posts, preview },
  };
}
