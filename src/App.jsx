import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main"
 import "./globals.css";
export default function App() {

  const nome = "Guilherne";
  const sobreNome = "Pereira Marques";

  return(
    <div>
       
       <main>
<Header/>
<Main/>
<Footer/>

       </main>
    </div>  
  );
}