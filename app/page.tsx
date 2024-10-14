import { ArrowRightOutlined } from "@ant-design/icons";
import { Button } from "antd";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-between bg-gradient-to-b from-green-800  to-white overflow-hidden">
      <article className="m-10">
        <h1 className="mt-24 text-5xl">Nutracker</h1>
        <p className="mt-5 text-2xl  font-mono border-r-4">
          Transforme sua alimentação com o Nutracker, organize sua dieta,
          acompanhe os valores nutricionais de cada alimento e monte seus planos
          alimentares conforme a sua semana!
        </p>
        <Link href="/dashboard">
          <Button
            className="mt-8"
            size="large"
            color="default"
            variant="solid"
            icon={<ArrowRightOutlined />}
            iconPosition="end"
          >
            Comece agora
          </Button>
        </Link>
      </article>

      <Image
        className="w-auto m-10 hover:scale-110 duration-500"
        src="/food-poster.png"
        height={400}
        width={400}
        alt="poster"
      />
    </div>
  );
}
