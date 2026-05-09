import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

function Home() {
  return (
    <div className='flex flex-col items-center justify-center py-20 text-center'>
      <h1
      className='text-5xl font-bold'
      >
        E-commerce Project
      </h1>

      <p className='mt-6 max-w-2xl text-slate-500'>Checkout our latest electronics for the React Project</p>

      <Link to="/products">
        <Button className="mt-8">Shop Now</Button>
        </Link>
      
    </div>
  )
}

export default Home
