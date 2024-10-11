import { Button } from "antd";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-between bg-gradient-to-b from-white to-green-800">
      <article className="m-10 text-gray-600 text-wrap display-inline">
        <h1 className="mt-24 text-5xl">Nutracker</h1>
        <p className="mt-5 text-2xl tracking-wider font-mono border-r-4">
          Transforme sua alimentação com o Nutracker, organize sua dieta,
          permitindo que você acompanhe os valores nutricionais de cada
          alimento.
        </p>
        <Button className="mt-8" color="default" variant="solid" size="large">
          Get Started
        </Button>
      </article>

      <Image
        className="w-auto m-10"
        src="/food-poster.png"
        height={400}
        width={400}
        alt="poster"
      />
    </div>
  );
}
