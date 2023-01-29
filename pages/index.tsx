import Link from 'next/link'
import Image from 'next/image'
export default function IndexPage() {
  return (
    <div>
      Hello World. <Link href="/about">About</Link>
      <Image src="/images/profile.jpg" alt='' width={200} height={200} />
    </div>
  )
}
