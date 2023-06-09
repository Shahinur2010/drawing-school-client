import { useNavigate, useRouteError } from "react-router-dom";
import useTitle from "../Hooks/useTitle";
import img from '../assets/images/lottie.png'

const ErrorElement = () => {

  const error = useRouteError();
  const navigate = useNavigate();
  console.error(error);
  useTitle('ErrorElement')

  const handleGoBack = () => {
    navigate('/');
  }
  return (
    <div className='flex flex-col text-center justify-center items-center text-3xl font-semibold m-8'>
      <img className="w-2/5 animate-pulse" src={img} />
      <h1 className='text-6xl'>404</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <button onClick={handleGoBack} className='my-6 px-2 py-1 font-normal text-sm rounded-md bg-blue-200'>Back to home</button>
    </div>

  );
};

export default ErrorElement;