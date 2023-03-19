import Link from "next/link"
import styles from "../styles/Layout.module.css"
import "../styles/globals.css"

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head>
        <title>Crackl</title>
      </head>
      <body>
        <header>
          <h1 className={styles.header}>
            <Link href="/">Crackl</Link>
          </h1>
        </header>

        <main>{children}</main>
      </body>
    </html>
  )
}

export default Layout
