import Image from "next/image"

export default function FeaturedDevelopers() {
  const developers = [
    {
      name: "Lodha Group",
      logo: "https://logo.clearbit.com/lodhagroup.com",
    },
    {
      name: "Wadhwa Group",
      logo: "https://logo.clearbit.com/wadhwagroup.com",
    },
    {
      name: "Runwal Group",
      logo: "https://logo.clearbit.com/runwalgroup.in",
    },
    {
      name: "Godrej Properties",
      logo: "https://logo.clearbit.com/godrejproperties.com",
    },
    {
      name: "Hiranandani",
      logo: "https://logo.clearbit.com/hiranandani.com",
    },
    {
      name: "Rustomjee Group",
      logo: "https://logo.clearbit.com/rustomjee.com",
    },
    {
      name: "Kalpataru Group",
      logo: "https://logo.clearbit.com/kalpataru.com",
    },
    {
      name: "L&T Realty",
      logo: "https://logo.clearbit.com/lntrealty.com",
    },
    {
      name: "Adani Group",
      logo: "https://logo.clearbit.com/adani.com",
    },
    {
      name: "Raymond Realty",
      logo: "https://logo.clearbit.com/raymondrealty.com",
    },
  ]

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
      {developers.map((developer) => (
        <div key={developer.name} className="flex flex-col items-center">
          <div className="h-24 w-24 bg-white rounded-full shadow-sm border border-gray-100 flex items-center justify-center mb-3 p-2 relative">
            <Image
              src={developer.logo || "/placeholder.svg"}
              alt={developer.name}
              fill
              className="object-contain p-2"
            />
          </div>
          <span className="text-sm font-medium text-center text-gray-700">{developer.name}</span>
        </div>
      ))}
    </div>
  )
}
