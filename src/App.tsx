// Router Imports
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

//Pages
import Root from "./scenes/layout/root";
import Home from "./scenes/home";
import HowtoInstall from "./scenes/howtoinstall";
import FAQ from "./scenes/faq";
import TC from "./scenes/footer/termsandconditions"
import PP from "./scenes/footer/privacy"

// Background
// import bg from "@/assets/logo.png";

// Routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="/" element={<Home />}></Route>
      <Route path="HowtoInstall" element={<HowtoInstall />}></Route>
      <Route path="faq" element={<FAQ />}></Route>
      <Route path="termsandconditions" element={<TC />}></Route>
      <Route path="PrivacyPolicy" element={<PP />}></Route>
    </Route>,
  ),
);

function App() {
  return (
    <div className="overflow-y-hidden bg-black app">
      <RouterProvider router={router} />

      {/* <img
        src={bg}
        alt="CTF"
        className="absolute inset-0 max-w-full max-h-full m-auto opacity-15"
      />  */}
    </div>
  );
}

export default App;
