function Footer() {
    return <footer className="page-footer brown lighten-1">
    <div className="footer-copyright">
      <div className="container">
      © {new Date().getFullYear()} Элитный ресторан
      <a className="grey-text text-lighten-4 right" href="#!">GitHub</a>
      </div>
    </div>
  </footer>
}

export { Footer };