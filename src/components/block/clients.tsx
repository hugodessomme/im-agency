import Image from "next/image"

export function Clients() {
  return (
    <section className="mb-12 xl:mb-[4.5rem]">
      <div className="container">
        <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 xl:flex-nowrap xl:justify-between">
          <li>
            <Image
              src="/images/logo-digitalside.png"
              alt="Digitalside"
              width="147"
              height="42"
              quality={100}
            />
          </li>
          <li>
            <Image
              src="/images/logo-vortex.png"
              alt="Vortex"
              width="108"
              height="32"
              quality={100}
            />
          </li>
          <li>
            <Image
              src="/images/logo-travel-explorer.png"
              alt="Travel Explorer"
              width="119"
              height="47"
              quality={100}
            />
          </li>
          <li>
            <Image
              src="/images/logo-fuzion.png"
              alt="Fuzion"
              width="86"
              height="21"
              quality={100}
            />
          </li>
          <li>
            <Image
              src="/images/logo-mediafury.png"
              alt="MediaFury"
              width="126"
              height="24"
            />
          </li>
        </ul>
      </div>
    </section>
  )
}
