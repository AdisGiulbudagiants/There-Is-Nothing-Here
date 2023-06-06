import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import styles from "./There.module.css"

const There = () => {
  const there = useRef(null)
  let tl: any = null

  useEffect(() => {
    gsap.fromTo(
      there.current,
      { y: 1000, opacity: 0 },
      { duration: 2, opacity: 1, y: 0 }
    )
  }, [])

  function thereFun() {
    if (tl && !tl.reversed()) {
      tl.reverse()
    } else {
      tl = gsap.to(there.current, {
        duration: 1,
        ease: "power3.inOut",
        width: "100vw",
        zIndex: 20,
      })
    }
  }

  return (
    <>
      <div ref={there} onClick={thereFun} className={styles.there}>
        <h1>There</h1>
      </div>
    </>
  )
}

export default There
