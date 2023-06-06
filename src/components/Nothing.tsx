import { useRef, useEffect } from "react"
import { gsap } from "gsap/gsap-core"
import styles from "./Nothing.module.css"

const Nothing = () => {
  const nothing = useRef(null)
  let wdt = window.innerWidth
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
    } else if (wdt <= 768) {
      tl = gsap.to(nothing.current, {
        duration: 1,
        ease: "power3.inOut",
        y: "-50vh",
        width: "100vw",
        height: "100vh",
        zIndex: 30,
      })
    } else {
      tl = gsap.to(nothing.current, {
        duration: 1,
        ease: "power3.inOut",
        x: "-50vw",
        width: "100vw",
        height: "100vh",
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
