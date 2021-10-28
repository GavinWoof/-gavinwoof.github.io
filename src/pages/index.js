import * as React from "react"
import logo from '../images/logo-512.png'
import '../components/comingsoon.scss';


const IndexPage = () => {
return (
    <main className="bg-layout">
        <a href="https://twitter.com/gavinwoof"><img src={logo} width="100%" height="auto" alt="Gavin Woof Logo" /></a>
        <h1>Fun times soon 👀</h1>
    </main>
  )
}

export default IndexPage
