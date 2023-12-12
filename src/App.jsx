import { Website } from "./pages/Website"
import { Suspense } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Layout } from "./components/Layout"
import Login from "./pages/Login"
import Tracking from "./pages/Tracking"
import { AuthProvider } from "./context/AuthProvider"
import Dashboard from "./pages/Dashboard"
import axios from "axios"
import { QueryClient, QueryClientProvider, } from '@tanstack/react-query'
import ShippingDetails from "./pages/ShippingDetails"
import Contact from "./pages/Contact"
import Service from "./pages/Service"
import About from "./pages/About"
import EditTracking from "./pages/EditTracking"
import CreateShipping from "./pages/CreateShipping"
import ScrollToTop from "./components/ScrollToTop"

function App() {

  const queryClient = new QueryClient()
  axios.defaults.baseURL = 'http://localhost:4000'

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>

          <BrowserRouter>
            <ScrollToTop />
            <Suspense fallback={<div>Loading.... </div>}>
              <Routes>
                <Route element={<Layout />}>
                  <Route path="/" element={<Website />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/service" element={<Service />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/create" element={<CreateShipping />} />
                  <Route path="/tracking" element={<Tracking />} />
                  <Route path="/shipment/:trackingNumber/edit" element={<EditTracking />} />
                  <Route path="/shipment/:trackingNumber" element={<ShippingDetails />} />
                </Route>
              </Routes>
            </Suspense>
          </BrowserRouter>

        </AuthProvider>
      </QueryClientProvider>
    </>
  )
}

export default App
