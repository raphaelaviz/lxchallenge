import { useRouter } from 'next/navigation';


export default function GoBackButton() {

  const router = useRouter();
  
  return (
    <button
          className="bg-pink-300 hover:bg-gray-800 text-white hover:text-white text-lg w-12 h-12 flex items-center justify-center rounded-full transition-colors duration-200" 
          type="button" 
          onClick={() => router.back()}
        >
          ←
        </button>
  );
}