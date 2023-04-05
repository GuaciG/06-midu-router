import { Link } from '../Link'

export default function HomePage() {
  return (
    <>
      <h1>Home</h1>
      <div>
        <img
          src='https://www.deque.com/wp-content/uploads/2019/04/A11y-in-agile-team-practices-700x300.png'
          alt='dibujo vectorial de un equipo de desarrolladores'
        />
        <p>
          Esta es una página de ejemplo para crear un React Router desde cero
        </p>
      </div>
      <Link to='/about'>Ir a Sobre nosotros</Link>
    </>
  )
}
