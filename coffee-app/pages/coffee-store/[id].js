import { useRouter } from 'next/router';
import { Link } from 'next/link';

const CoffeeStore = () => {
  console.log('here');
  const router = useRouter();
  return (
    <div>
      Coffee Store Page {router.query.id}
      <Link href='/'>
        <a>Back to Home</a>
      </Link>
    </div>
  );
};

export default CoffeeStore;
