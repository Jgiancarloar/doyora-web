import { BadgeCheck, BarChart3, CalendarDays, MessageSquare, Users, Wallet } from "lucide-react";

export default function OwnerSection() {
  return (
    <div className="max-w-7xl mx-auto px-10 py-20">
      <div>
        <span>
          Para propietarios
        </span>
        <h2>
          Gestiona tu academia, escuela o centro deportivo y hazlo crecer
        </h2>
        <p>
          Doyora es la plataforma todo en uno para administrar, organizar y hacer crecer tu negocio.
        </p>
        <div>
          <ul>
           <li>
  <div>
    <Users />
  </div>

  <div>
    <h3>Gestión de alumnos</h3>
    <p>
      Organiza tus alumnos, grupos y niveles en un solo lugar.
    </p>
  </div>
</li>

<li>
  <div>
    <Wallet />
  </div>

  <div>
    <h3>Reservas y pagos online</h3>
    <p>
      Recibe reservas y pagos de forma segura y automática.
    </p>
  </div>
</li>

<li>
  <div>
    <h3>
      <BadgeCheck />
    </h3>

    <p>
      Lleva el control de asistencias y seguimiento de tus clases.
    </p>
  </div>
</li>

<li>
  <div>
    <CalendarDays />
  </div>

  <div>
    <h3>Calendarios y horarios</h3>
    <p>
      Administra tus horarios y disponibilidad de manera fácil.
    </p>
  </div>
</li>

<li>
  <div>
    <BarChart3 />
  </div>

  <div>
    <h3>Reportes y estadísticas</h3>
    <p>
      Visualiza el crecimiento de tu academia con reportes en tiempo real.
    </p>
  </div>
</li>

<li>
  <div>
    <MessageSquare />
  </div>

  <div>
    <h3>Comunicación directa</h3>
    <p>
      Envía avisos y mensajes a tus alumnos de forma directa.
    </p>
  </div>
</li>
          </ul>
        </div>
      </div>
    </div>
  );
}