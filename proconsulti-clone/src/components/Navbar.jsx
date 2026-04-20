function Navbar() {
  return (
    <nav className="w-full sticky top-0 z-50 bg-white bg-opacity-90 shadow-md">
      <div className="max-w-7xl my-auto flex justify-start items-center p-4">
        <h1 className="pl-20 h-12 w-85 pr-20"><img src="proconsulti-logo.webp" alt="ProConsulti Logo" /></h1>

        <ul className="flex gap-10 text-blue-900 font-medium">
          <li>Capabilities</li>
          <li>Tech & AI</li>
          <li>Insights</li>
          <li>About Us</li>
          <li>Team</li>
          <li>Clients</li>
          <li>Contact</li>
        </ul>
      </div>
    </nav>
  )
}
export default Navbar