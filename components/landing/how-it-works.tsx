import { Button } from "../ui/button";
import { Calendar, ChartNoAxesColumn, Search, User } from "lucide-react";

export default function HowItWorks() {
  return (
    <div className="max-w-7xl mx-auto px-10 py-20">
      <div>
        <span>
          Así de fácil
        </span>
        <h2>
          ¿Cómo funciona Doyora?
        </h2>
        <p>
          Encontrar y reservar tu próxima clase toma menos de 2 minutos.
        </p>
        <Button>
          Comenzar
        </Button>
      </div>
      <div>
        <ul>
          <li>
            <div>
              01
            </div>
            <div>
              <h3>
                Explora clases
              </h3>
              <p>
                Busca entre miles de academias y disciplinas cerca de ti.
                Filtra por ubicación, horario, nivel y más.
              </p>
            </div>
            <div>
              <Search />
            </div>
          </li>
          <li>
            <div>
              02
            </div>
            <div>
              <h3>
                Elige y reserva
              </h3>
              <p>
                Selecciona la clase que más te guste y reserva al instante.
                Sin llamadas, sin papeleos.
              </p>
            </div>
            <div>
              <Calendar />
            </div>
          </li>
          <li>
            <div>
              03
            </div>
            <div>
              <h3>
                Asiste y disfruta
              </h3>
              <p>
                Acude a tus clases y vive una gran experiencia.
                ¡Es hora de aprender y divertirte!
              </p>
            </div>
            <div>
              <User />
            </div>
          </li>
          <li>
            <div>
              04
            </div>
            <div>
              <h3>
                Sigue tu progreso
              </h3>
              <p>
                Gestiona tus reservas, pagos y asistencias desde tu perfil.
                Todo organizado en un solo lugar.
              </p>
            </div>
            <div>
              <ChartNoAxesColumn />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}