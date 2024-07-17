import style from './Header.module.css'
import Logo from '../../assets/Logo.svg'
export default function Header () {
  return (
    <div className={style.header}>
      <img
        src={Logo}
        alt='Logo'
      />
      <h1>
        Zimg
      </h1>
    </div>
  )
}
