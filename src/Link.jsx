import { /* BUTTONS, */ EVENTS } from './consts'

//Esta función hará:
export function navigate(href) {
  //Cambia la url de la barra de direcciones
  window.history.pushState({}, '', href)
  //crear un evento personalizado para avisar de que hemos cambiado url
  const navigationEvent = new Event(EVENTS.PUSHSTATE)
  //enviar o despachar el evento
  window.dispatchEvent(navigationEvent)
}

export function Link({ target, to, ...props }) {
  const handleClick = event => {
    const isMainEvent = event.button /* === primary */ //primary click
    const isModifiedEvent =
      event.metaKey || event.altKey || event.ctrlkey || event.shiftKey
    const isManageableEvent = target === undefined || target === '_self'

    //si pasan estas cosas, utilizaremos navegación SPA
    if (isMainEvent && isManageableEvent && !isModifiedEvent) {
      event.preventDefault()
      navigate(to)
    }
  }

  return <a href={to} target={target} {...props} onClick={handleClick} />
}
