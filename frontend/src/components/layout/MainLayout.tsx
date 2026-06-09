import Navbar from "./Navbar"

export default function MainLayout({children}:any) {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar/>
      <div className="p-4">{children}</div>
    </div>
  )
}