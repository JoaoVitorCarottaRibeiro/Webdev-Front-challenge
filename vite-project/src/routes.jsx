import { BrowserRouter, Route, Routes} from "react-router-dom";
import LP from "./assets/Components/LP/Lp";
import AoVivo from "./assets/Components/Pages/Ao Vivo/Aovivo";
import Apostas from "./assets/Components/Pages/Apostas/Apostas";
import Impactos from "./assets/Components/Pages/Impactos/Impacto";
import FormulaE from "./assets/Components/Pages/Formula E/Formulae";

function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LP />}></Route>
                <Route path="/aovivo" element={<AoVivo />}></Route>
                <Route path="/apostas" element={<Apostas />}></Route>
                <Route path="/impactos" element={<Impactos />}></Route>
                <Route path="/formulae" element={<FormulaE />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes