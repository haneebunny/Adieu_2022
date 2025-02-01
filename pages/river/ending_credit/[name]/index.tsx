import { GetServerSideProps } from "next";
import Ending from "../../../../src/components/unit/ending/Ending";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { name } = context.params!;

  return {
    props: {
      name,
    },
  };
};

export default function EndingPage({ name }: { name: string }) {
  return <Ending name={name} />;
}
