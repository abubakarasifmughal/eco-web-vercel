import { GetServerSideProps } from "next";

type ReturnType = {
  title: string;
  content: unknown;
};

export const getServerSideProps = (async () => {
  const response = await fetch("http://127.0.0.1:4000/api/user");
  const data = await response.json();
  console.log("data");
  console.log("data");
  console.log(data);
  console.log("data");

  return { props: data };
}) satisfies GetServerSideProps<ReturnType>;

export default function Home(props: ReturnType) {
  return <div>{JSON.stringify(props)}</div>;
}
