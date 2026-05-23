"use client";
import Logo from "./logo";
import { Menu,MoveRight, X } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";

export default function Navbar() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="max-w-7xl mx-auto">
      <nav className={`${isMenuOpen ? "border-b" : ""}  flex h-16 items-center justify-between px-10 relative z-50`}>
        <Logo />
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>
      <div className={`${isMenuOpen ? "absolute" : "hidden"} bg-white flex flex-col h-screen inset-0 pt-16 w-full`}>
        <div className="divide-y flex flex-col h-full px-10">
          <nav className="flex-1">
            <ul className="divide-y flex flex-col">
              <li className="py-5" onClick={() => setIsMenuOpen(false)}>
                <a href="#" className="flex items-center justify-between gap-2 font-bold">
                  Inicio <MoveRight size={24} strokeWidth={1.5} />
                </a>
              </li>
              <li className="py-5" onClick={() => setIsMenuOpen(false)}>
                <a href="#" className="flex items-center justify-between gap-2 font-bold">
                  Explorar clases <MoveRight size={24} strokeWidth={1.5} className="text-primary" />
                </a>
              </li>
              <li className="py-5" onClick={() => setIsMenuOpen(false)}>
                <a href="#" className="flex items-center justify-between gap-2 font-bold">
                  Propietarios <MoveRight size={24} strokeWidth={1.5} />
                </a>
              </li>
            </ul>
          </nav>
          <div className="flex flex-col gap-5 py-5">
            <Button className="rounded-md" size="lg">
              Iniciar sesión
            </Button>
            <Button className="rounded-md" size="lg" variant="outline">
              Registrarse
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}