export function Navbar() {
  return (
    <>
      <section className="flex justify-between">
        <div>Logo</div>
        <div className="flex gap-4">
          <span>About</span>
          <span>Home</span>
          <span>Jobs</span>
        </div>
        <div>Logout</div>
      </section>
    </>
  )
}
