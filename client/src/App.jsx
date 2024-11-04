import "./App.css";
import SlideMenu from "./components/SlideMenu";
import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

const OverviewPage = lazy(() => import("./views/OverviewPage"));
const InventoryPage = lazy(() => import("./views/InventoryPage"));
const ReportView = lazy(() => import("./views/ReportView"));
const SettingPage = lazy(() => import("./views/SettingPage"));

const App = () => {
    const [isOpen, setIsOpen] = useState(false);

    const routes = [
        { link: "/overview", component: <OverviewPage /> },
        { link: "/inventory", component: <InventoryPage /> },
        { link: "/report", component: <ReportView /> },
        { link: "/setting", component: <SettingPage /> },
    ];

    return (
        <div className="flex h-screen bg-gray-100">
            <SlideMenu />

            <div className="flex-1">
                <div className="w-full border border-b-gray-300 flex justify-between p-4">
                    <h1>AppName</h1>
                    <div>
                        <span>Username</span>
                        <button className="border rounded-lg ml-2">Logout</button>
                    </div>
                </div>
                <div className="p-6">
                    <Suspense fallback={<p className="fixed top-0 left-0 w-full bg-green-500"> Loading...</p>}>
                        <Routes>
                            {routes.map((route, index) => (
                                <Route path={route.link} element={route.component} />
                            ))}
                        </Routes>
                    </Suspense>
                </div>
            </div>
        </div>
    );
};

export default App;
