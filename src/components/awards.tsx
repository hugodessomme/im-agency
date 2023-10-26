import Image from "next/image"

const awards = [
  {
    image: "/images/award-1.png",
    title: "SOFA",
    date: "25 Oct. 2021",
    competition: "Awwwards",
    competitionImage: "/images/award-1-competition.png",
  },
  {
    image: "/images/award-2.png",
    title: "KeyBoard",
    date: "19 Oct. 2021",
    competition: "CSS Design Awards",
    competitionImage: "/images/award-2-competition.png",
  },
  {
    image: "/images/award-3.png",
    title: "Work Media",
    date: "7 Oct. 2021",
    competition: "The FWA",
    competitionImage: "/images/award-3-competition.png",
  },
]

export function Awards() {
  return (
    <section className="mb-24 xl:mb-28">
      <div className="container">
        <h2 className="mb-9 flex flex-col items-center xl:mb-16">
          <span className="text-[2.5rem] font-extrabold leading-[3rem]">
            Our Awards
          </span>
        </h2>

        <ul className="divide-y divide-background-subtle border-y border-background-subtle">
          {awards.map((award) => (
            <li
              key={award.title}
              className="flex flex-col items-center justify-between gap-y-4 py-4 xl:flex-row"
            >
              <div className="flex flex-1 flex-col items-center justify-between xl:flex-row">
                <div className="flex flex-col items-center gap-6 xl:flex-row">
                  <Image src={award.image} alt="" width="120" height="80" />
                  <h3 className="text-xl leading-8">{award.title}</h3>
                </div>
                <p className="leading-8 text-foreground-subtle">{award.date}</p>
              </div>
              <div className="flex flex-1 flex-col items-center justify-end gap-x-6 xl:flex-row">
                {award.competition}
                <Image
                  src={award.competitionImage}
                  alt=""
                  width="48"
                  height="48"
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
