import { useState } from "react"
import Back from "./Back"
import styles from "./Is.module.css"

const Is = () => {
  const [isClass, setIsClass] = useState(styles.is)
  const [button, setButton] = useState("hidden")

  function isFun() {
    if (isClass) {
      setIsClass(styles.animIs)
      setButton(styles.button)
    }
  }

  function back() {
    if (isClass === styles.animIs) {
      setIsClass(styles.is)
      setButton("hidden")
    }
  }
  return (
    <>
      <button onClick={back} className={button}>
        <Back />
      </button>
      <div onClick={isFun} id="is" className={isClass}>
        <h1>is</h1>
      </div>
    </>
  )
}

export default Is
