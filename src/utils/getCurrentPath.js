const getCurrentPath = () => {
  return typeof window !== "undefined" ? window.location.pathname : ""
}

export default getCurrentPath
