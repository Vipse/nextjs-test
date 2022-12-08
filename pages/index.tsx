import { GetServerSideProps, NextPage } from "next";
import { getRunningQueriesThunk } from "../store/api/base";
import { getTestRequests, useGetTestRequestsQuery } from "../store/api/testRequests";
import { wrapper } from "../store/wrapper";

 const Home: NextPage = () => {
  const {data, isFetching} = useGetTestRequestsQuery({});

  console.log({data})
  return (
    <div>
      {isFetching ? 'loading...' : JSON.stringify(data)}
    </div>
  )
}

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async () => {

    store.dispatch(getTestRequests.initiate({}));

    await Promise.all(store.dispatch(getRunningQueriesThunk()));

    return {
      props: {}
    };
  });


export default Home;

