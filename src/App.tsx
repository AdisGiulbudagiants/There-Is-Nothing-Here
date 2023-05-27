import { useState } from "react"
import There from "./components/There"
import Is from "./components/Is"
import Nothing from "./components/Nothing"
import "./App.css"

function App() {
  const [thereClass, setThereClass] = useState("there")
  const [isClass, setIsClass] = useState("is")
  const [nothingClass, setNothingClass] = useState("nothing")
  const [hereClass, setHereClass] = useState("here")

  function thereFun() {
    if (thereClass) {
      setThereClass("anim-there")
    }
  }

  function isFun() {
    if (isClass) {
      setIsClass("anim-is")
      setThereClass("hidden")
    }
  }

  function nothingFun() {
    if (nothingClass) {
      setNothingClass("anim-nothing")
      setThereClass("hidden")
      setIsClass("hidden")
    }
  }

  function hereFun() {
    if (hereClass) {
      setHereClass("anim-here")
      setThereClass("hidden")
      setIsClass("hidden")
      setNothingClass("hidden")
    }
  }

  function back() {
    if (isClass === "anim-is") {
      setIsClass("is")
      setThereClass("there")
    }
    if (thereClass === "anim-there") {
      setThereClass("there")
    }
    if (nothingClass === "anim-nothing") {
      setNothingClass("nothing")
      setThereClass("there")
      setIsClass("is")
    }
    if (hereClass === "anim-here") {
      setHereClass("here")
      setNothingClass("nothing")
      setThereClass("there")
      setIsClass("is")
    }
  }
  return (
    <div className="App">
      <div className="wrapper">
        <There />
        <Is />
        <Nothing />
        {/* <div onClick={thereFun} id="there" className={thereClass}></div>
        <div onClick={isFun} id="is" className={isClass}></div>
        <div onClick={nothingFun} id="nothing" className={nothingClass}></div>
        <div onClick={hereFun} id="here" className={hereClass}></div> */}
      </div>
    </div>
  )
}

export default App
