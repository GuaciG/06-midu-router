import { Link } from '../Link'

const i18n = {
  es: {
    title: 'Sobre nosotros',
    description: 'Hola! Estamos creando un clon de React Router',
    button: 'Ir a la home'
  },
  en: {
    title: 'About us',
    description: 'Hi! We are creating a clone of React Router',
    button: 'Go to Home'
  }
}

const useI18n = lang => {
  return i18n[lang] || i18n.en
}

export default function AboutPage({ routeParams }) {
  const i18n = useI18n(routeParams.lang ?? 'es')
  return (
    <>
      <h1>{i18n.title}</h1>
      <div>
        <img
          src='https://sisgain.com/hire-images/dedicated_team.png'
          alt='Dibujo vectorial de un equipo trabajando'
        />
        <p>{i18n.description}</p>
      </div>
      <Link to='/'>{i18n.button}</Link>
    </>
  )
}
