import { useSelector } from 'react-redux';
import CreateUser from '../features/user/CreateUser';
import Button from './Button';

function Home() {
  const username = useSelector((state) => state.user.username);
  return (
    <div className="z-30 my-10 text-center sm:my-16">
      <h1 className="mb-8 text-center text-xl font-semibold text-amber-500 md:text-3xl">
        The best pizza.
        <br />
        Straight out of the oven, straight to you.
      </h1>

      {username === '' ? (
        <CreateUser />
      ) : (
        <Button to="/menu" type="primary">
          Continue ordering, {username}
        </Button>
      )}
    </div>
  );
}

export default Home;

// return (
//   <div class="relative flex h-screen items-center justify-center overflow-hidden">
//     <video
//       loop
//       muted
//       autoplay="autoplay"
//       class="absolute z-10 min-h-full w-auto min-w-full max-w-none"
//     >
//       <source src="http://localhost:5173/assets/Pizza.mp4" type="video/mp4" />
//       Your browser does not support the video tag.
//     </video>
//     <div className="z-30 my-10 text-center sm:my-16">
//       <h1 className="mb-8 text-center text-xl font-semibold text-amber-500 md:text-3xl">
//         The best pizza.
//         <br />
//         Straight out of the oven, straight to you.
//       </h1>
//       <CreateUser />
//     </div>
//   </div>
// );
