import Headers from "../Ui/Headers";
import Footer from "../Ui/Footer";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <>
    <Headers />
    <Outlet /> {/* This is where your page content will go */}
    <Footer />
    </>
  )
}

export default AppLayout