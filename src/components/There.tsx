import { useState } from "react"
import Back from "./Back"
import styles from "./There.module.css"

const There = () => {
  const [thereClass, setThereClass] = useState(styles.there)
  const [button, setButton] = useState("hidden")

  function thereFun() {
    if (thereClass) {
      setThereClass(styles.animThere)
      setButton(styles.button)
    }
  }

  function back() {
    if (thereClass === styles.animThere) {
      setThereClass(styles.there)
      setButton("hidden")
    }
  }

  return (
    <>
      <button onClick={back} className={button}>
        <Back />
      </button>
      <div onClick={thereFun} className={thereClass}>
        <h1>There</h1>
      </div>
    </>
  )
}

export default There
