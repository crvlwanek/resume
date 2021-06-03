import * as React from "react"

interface NameBlockProps {
  name: string
  title: string
}

const styles = {
  box: {
    color: "white",
    fontFamily: '"Montserrat", sans-serif',
  },
  name: {
    fontSize: "1.8rem",
    padding: "5px",
  },
  title: {
    fontSize: "1.1rem",
    fontWeight: 100,
  },
}

export const NameBlock: React.FC<NameBlockProps> = ({ name, title }) => {
  return (
    <div style={styles.box}>
      <h1 style={styles.name}>{name}</h1>
      <h2 style={styles.title}>{title}</h2>
    </div>
  )
}
