import { NextPage } from 'next';
import { Spinner } from '@twilio-paste/core/spinner';
import { useGetExamplesQuery } from '../store/rtkQuery/endpoints/examplesApi';
import { ExampleTable } from '../components/Home/ExampleTable';

const Home: NextPage = () => {
  const { data, error, isLoading } = useGetExamplesQuery();
  console.log('Data useGetExamplesQuery: ', data);

  if (isLoading) {
    return (
      <Spinner
        size="sizeIcon100"
        color="colorTextIconBusy"
        decorative={false}
        title="Loading"
      />
    );
  }

  if (error || !data) {
    return <div>Failed to fetch examples!</div>;
  }

  const examples = data;

  return <ExampleTable examples={examples} />;
};

export default Home;
