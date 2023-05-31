import { useState } from "react"
import Back from "./Back"
import styles from "./Here.module.css"

const Here = () => {
  const [hereClass, setHereClass] = useState(styles.here)
  const [button, setButton] = useState("hidden")

  function hereFun() {
    if (hereClass) {
      setHereClass(styles.animHere)
      setButton(styles.button)
    }
  }

  function back() {
    if (hereClass === styles.animHere) {
      setHereClass(styles.here)
      setButton("hidden")
    }
  }
  return (
    <>
      <button onClick={back} className={button}>
        <Back />
      </button>
      <div onClick={hereFun} id="here" className={hereClass}>
        <h1>here</h1>
      </div>
    </>
  )
}

export default Here
