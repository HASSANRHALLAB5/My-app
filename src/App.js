import "./App.css";
import Landing from "./component/Landing";
import Navbar from "./component/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Navbar />
                <Routes>
                    <Route path="/:category" element={<Landing />} />
                    <Route
                        path="*"
                        element={
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    height: "100vh",
                                    width: "100vw",
                                    backgroundImage: "url(//stage.whgstage.com/scontent/images/games/BS21BURNBJ.jpg)",
                                    backgroundSize: "cover",
                                    backgroundRepeat: "no-repeat",
                                    opacity: "0.7",
                                    position: "fixed",
                                    zIndex: "-1",
                                }}>
                                <h1>404</h1>
                            </div>
                        }
                    />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
