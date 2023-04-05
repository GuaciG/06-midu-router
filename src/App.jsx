import { Suspense, lazy } from 'react'
// lazy function allows us to import the components dynamically
// so it doesn't render them until it need them
import './App.css'
// import estatico
//import HomePage from './pages/Home'
//import AboutPage from './pages/About'
import Page404 from './pages/404'
import SearchPage from './pages/Search'

import { Router } from './Router'
import Route from './Route'

//import dinámico
const LazyHomePage = lazy(() => import('./pages/Home'))
const LazyAboutPage = lazy(() => import('./pages/About'))

const appRoutes = [
  {
    path: '/:lang/about',
    Component: LazyAboutPage
  },
  {
    path: '/:lang/',
    Component: LazyHomePage
  },
  {
    path: '/search/:query',
    Component: SearchPage
  }
]

function App() {
  return (
    <main>
      <Suspense fallback={null}>
        <Router routes={appRoutes} defaultComponent={Page404}>
          <Route path='/' Component={LazyHomePage} />
          <Route path='/about' Component={LazyAboutPage} />
        </Router>
      </Suspense>
      {
        //Render without Router
        /* 
          {currentPath === '/' && <HomePage />}
          {currentPath === '/about' && <AboutPage />} 
        */
      }
    </main>
  )
}

export default App
