// maybe we should use static params for user profiles:
// https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes#generating-static-params

const Page = ({ params }: { params: { slug: string } }) => {
  return <h1>this is your profile page, {params.slug}</h1>;
};

export default Page;
