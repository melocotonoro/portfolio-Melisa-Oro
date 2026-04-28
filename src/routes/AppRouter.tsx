import { HashRouter, Route, Routes } from "react-router-dom";
import Layout from "../layout/Layout";
import {
  AboutMe,
  TechnicalSkills,
  Studies,
  Works,
  SoftSkills,
  Certifications,
  Contact,
} from "@/pages";

const AppRouter = () => {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<AboutMe />} />
          <Route path="/habilidades_tecnicas" element={<TechnicalSkills />} />
          <Route path="/estudios" element={<Studies />} />
          <Route path="/trabajos" element={<Works />} />
          <Route path="/habilidades_blandas" element={<SoftSkills />} />
          <Route path="/certificados" element={<Certifications />} />
          <Route path="/contacto" element={<Contact />} />
        </Route>
      </Routes>
      </HashRouter>
  );
};
export default AppRouter;
