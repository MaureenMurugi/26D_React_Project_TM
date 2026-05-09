import Navbar from "@/components/Navbar"
import { Outlet } from "react-router-dom"


function MainLayout() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <main className="container mx-auto px-4 py-6"></main>
      <Outlet />
    </div>
  )
}

export default MainLayout
