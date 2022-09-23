import { GetServerSideProps } from "next";

const SomePage = (props: any) => <div>{JSON.stringify(props)}</div>;

export const getServerSideProps: GetServerSideProps = (context) => {
    throw new Error("OOPS");
}

export default SomePage
