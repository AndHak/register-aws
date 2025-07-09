import RegisterComponent from "../components/registerComponents/RegisterComponent";
import "../styles/grain.css"; // Asegúrate de importar esto

function Register() {
  return (
    <main className="flex h-screen items-center justify-center bg-[#313131] bg-cover bg-center">
      <RegisterComponent />
    </main>
  );
}

export default Register;
