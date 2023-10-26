export function Team() {
  return (
    <section>
      <div className="container">
        <h2 className="mb-9 flex max-w-xl flex-col">
          <span className="mb-5 uppercase text-primary">Our Team</span>
          <span className="text-[2.5rem] font-extrabold leading-[2.5rem] text-white xl:text-[3.5rem] xl:leading-[4rem]">
            Team of Designers and Developers
          </span>
        </h2>
        <ul className="mb-28 flex flex-col gap-7 xl:flex-row">
          {Array.from({ length: 4 }).map((member, index) => (
            <li key={index}>
              <div className="mb-6 h-[17rem] w-full rounded border border-tertiary-subtle xl:w-[17rem]"></div>
              <h3 className="mb-1 text-2xl font-bold text-white">
                Azah Anyeni
              </h3>
              <p className="text-white/[.64]">Designer</p>
            </li>
          ))}
        </ul>

        <div className="flex flex-col gap-x-32 gap-y-10 xl:flex-row xl:items-center">
          <div className="h-64 w-full overflow-hidden rounded-md bg-neutral-400 xl:h-[28rem]"></div>
          <div>
            <p className="mb-7 uppercase text-primary">Founder Words</p>
            <p className="mb-6 text-2xl font-bold text-white xl:text-[2.5rem] xl:leading-[3rem]">
              Digital agency is a business you hire to outsource your digital
              marketing efforts
            </p>
            <p className="mb-1 text-xl text-white">Ren Delan</p>
            <p className="text-sm text-white/[.64]">Founder</p>
          </div>
        </div>
      </div>
    </section>
  )
}
