// these can definitely be static:
// https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes#generating-static-params

const Page = ({ params }: { params: { slug: string } }) => {
  return <h1>this is a community page for: {params.slug}</h1>;
};

export default Page;
