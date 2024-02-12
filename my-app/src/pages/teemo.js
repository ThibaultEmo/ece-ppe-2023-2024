import Image from 'next/image';

const MyComponent = () => {
  const timestamp = new Date().getTime();

  return (
    <div>
      <h1>Image from API</h1>
      <Image src={`/api/teemo?timestamp=${timestamp}`} alt="Teemo" width={500} height={300} />
    </div>
  );
};

export default MyComponent;