import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="flex flex-row p-4 gap-2 w-full h-30 place-items-center items-center justify-center bg-transparent border-t-4 border-dashed border-purple-700 dark:border-orange-600">
      <Link className="flex flex-row space-x-2 content-center items-center place-items-center" href={'/contacts'}>
        <Image
          src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/112-gmail_email_mail-512.png"
          width={32}
          height={32}
          alt="Email icon" />
        <p>Feel free to contact us</p>
      </Link>
    </footer>
  )
}