import { useState } from "react"
import styles from "./Nothing.module.css"

const Nothing = () => {
  const [nothingClass, setNothingClass] = useState(styles.nothing)
  const [button, setButton] = useState("hidden")

  function nothingFun() {
    if (nothingClass) {
      setNothingClass(styles.animNothing)
      setButton(styles.button)
    }
  }

  function back() {
    if (nothingClass === styles.animNothing) {
      setNothingClass(styles.nothing)
      setButton("hidden")
    }
  }
  return (
    <>
      <button onClick={back} className={button}>
        Back
      </button>
      <div onClick={nothingFun} id="nothing" className={nothingClass}></div>
    </>
  )
}

export default Nothing
