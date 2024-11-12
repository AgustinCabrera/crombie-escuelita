import Image from "next/image";
export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-4xl font-bold">Welcome to Nike ecommerce</h1>
        <div className="photos">
          <Image src="/medias.jpeg" alt="medias" width={100} height={100}></Image>
          <Image src="/remera.jpg" alt="medias" width={100} height={100}></Image>
          <Image src="/shorts.jpeg" alt="medias" width={100} height={100}></Image>
          <Image src="/zapatilla.jpg" alt="medias" width={100} height={100}></Image>
        
        </div>
        
        
      </main>
    </div>
  );
}
