function RegisterComponent() {
  return (
    <section className="relative flex flex-col p-8 rounded-xl shadow-xl max-w-md w-full mx-auto my-10 backdrop-blur-md bg-white/10 overflow-hidden">
      {/* Capa granulada */}
      <div className="absolute inset-0 pointer-events-none opacity-10 mix-blend-overlay animate-noise z-0" />

      {/* Contenido encima */}
      <div className="relative z-10 flex-col flex">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">Registro</h2>

        {/* Correo */}
        <label htmlFor="email" className="text-white text-sm font-medium mb-1">
          Correo Electrónico
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="tu.correo@example.com"
          className="text-lg text-white placeholder-white/40 border border-white/30 h-12 rounded-lg bg-white/20 mb-4 p-2 pl-4 outline-none focus:border-white focus:ring-1 focus:ring-white/50 transition duration-200"
        />

        {/* Nombre */}
        <label htmlFor="nombre" className="text-white text-sm font-medium mb-1">
          Nombre Completo
        </label>
        <input
          type="text"
          name="nombre"
          id="nombre"
          placeholder="Tu nombre"
          className="text-lg text-white placeholder-white/40 border border-white/30 h-12 rounded-lg bg-white/20 mb-4 p-2 pl-4 outline-none focus:border-white focus:ring-1 focus:ring-white/50 transition duration-200"
        />

        {/* Botón */}
        <button
          type="submit"
          className="bg-white/90 text-black font-bold py-3 px-6 rounded-lg text-lg hover:bg-white outline-none transition duration-200 w-full mt-4 border-none cursor-pointer shadow-lg"
        >
          Registrarse
        </button>
      </div>
    </section>
  );
}

export default RegisterComponent;
