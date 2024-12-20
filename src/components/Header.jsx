import chefLogo from '../assets/chef-logo.jpg'

export default function Header() {
  return (
    <header>
      <img src={chefLogo} alt='Chef logo' />
      <h1>Chef Claude</h1>
    </header>
  )
}