import { GetServerSideProps } from "next";
import Ending from "../../../../src/components/unit/ending/Ending";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { publicId } = context.params!;

  return {
    props: {
      publicId,
    },
  };
};

export default function EndingPage({ publicId }: { publicId: string }) {
  return <Ending publicId={publicId} />;
}
