import Link from 'next/link'
import { LindaSalonIconWhite } from 'components/icons/tes'

const Logo = () => (
  <Link href="/" prefetch>
    <a className="logo-link">
      <LindaSalonIconWhite />
    </a>
  </Link>
)

export default Logo