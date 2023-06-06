import { useRef, useEffect } from "react"
import { gsap } from "gsap/gsap-core"
import styles from "./Nothing.module.css"

const Nothing = () => {
  const nothing = useRef(null)
  let tl: any = null

  useEffect(() => {
    gsap.fromTo(
      nothing.current,
      { y: 1000, opacity: 0 },
      { duration: 2, opacity: 1, y: 0, delay: 0.5 }
    )
  }, [])

  function nothingFun() {
    if (tl && !tl.reversed()) {
      tl.reverse()
    } else {
      tl = gsap.to(nothing.current, {
        duration: 1,
        ease: "power3.inOut",
        x: "-50vw",
        width: "100vw",
        zIndex: 30,
      })
    }
  }

  return (
    <>
      <div ref={nothing} onClick={nothingFun} className={styles.nothing}>
        <h1>nothing</h1>
      </div>
    </>
  )
}

export default Nothing
