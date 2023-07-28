const Page = ({ params }: { params: { id: string } }) => {
  return <h1>this is a post with id: {params.id}</h1>;
};

export default Page;
