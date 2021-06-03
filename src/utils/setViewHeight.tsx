export const setViewHeight = () => {
  if (typeof window !== "undefined") {
    let vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty("--vh", `${vh}px`)
  }
}
