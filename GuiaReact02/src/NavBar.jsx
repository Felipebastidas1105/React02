import { Component } from 'react'


export default class NavBar extends Component {
  render() {
    const pages = ['Home', 'About', 'Contact','Wiki','Comments','St','Stats']
    const navLinks = pages.map(page => {
        return (
            <a key={page} href={'/' + page}>
                {page}
            </a>
        )
    })
    return (
      <nav className='navBar'>{navLinks}</nav>
    )
  }
}
