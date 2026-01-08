export default function Header() {
  return (
    <header
      className="
      bg-linear-to-b from-background/10 to-background/90
      text-foreground
      sticky 
      h-16
      top-0
      z-50
      backdrop-blur-xs
      backdrop-brightness-150
      backdrop-contrast-110
      backdrop-opacity-95
      "
    >
      <div className="flex items-center justify-center  w-full h-full m-0 p-0 shadow-[0_-10px_80px_rgba(100,100,100,0.1)]">
        <nav>
          <ul className="flex items-center gap-12 hover:cursor-pointer">
            <li>Inicio</li>
            <li>Proyectos</li>

            <li className="relative">
              <button
                className="relative
                  z-10
                  rounded-full
                  bg-transparent
                  p-1
                  px-2
                  text-secondary
                  transition-all
                  duration-300
                  border
                  border-secondary
                  hover:bg-secondary
                  hover:cursor-pointer
                  hover:shadow-[0_0_100px_currentColor]
                "
              >
                <span className="text-foreground">Contacto</span>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
