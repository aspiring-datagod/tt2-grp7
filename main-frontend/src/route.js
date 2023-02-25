import { Routes, Route } from "react-router-dom"
import PageTemplate from "./components/page-template"
import AccountManagementPage from "./pages/account-management-page/account-management-page"
import AuthPage from "./pages/auth-page/auth-page"
import { ExtraPage } from "./pages/extra-page/extra-page"
import HomePage from "./pages/home-page/home-page"

export const AppRoute = () => {
    return <Routes>
        <Route path="/" element={<AuthPage />} />


        <Route path="home" element={<PageTemplate component={<HomePage />} />} />
        <Route path="account-management" element={<PageTemplate component={<AccountManagementPage />} />} />
        <Route path="extra-page" element={<PageTemplate component={<ExtraPage />} />} />
    </Routes>
}