import { Button } from "../ui/button";

export default function Hero() {
    return (
        <div className="max-w-7xl mx-auto px-10 py-20">
            <div className="flex flex-col">
                <span>
                    Miles de clases. Un solo lugar.
                </span>
                <h1 className="">
                    Tu próxima pasión podría estar a una clase de distancia.
                </h1>
                <p>
                    Descubre lugares donde aprender, entrenar y crecer junto a personas que comparten tus mismos intereses.
                </p>
                <Button className="cursor-pointer">
                    Explorar clases
                </Button>
            </div>
        </div>
    );
}