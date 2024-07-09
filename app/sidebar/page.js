export default function Navigation() {
  const navlinks = [
    {
      index: 1,
      name: 'Dashboard',
      href: '#',
    },
    {
      index: 2,
      name: 'Project Management',
      href: '../section/project',
    },
    {
      index: 3,
      name: 'Incident Management',
      href: '../section/incident',
    },
    {
      index: 4,
      name: 'Material Management',
      href: '../section/material',
    },
    {
      index: 5,
      name: 'Site Management',
      href: '../section/site',
    },
    {
      index: 6,
      name: 'User Management',
      href: '../section/user',
    },
  ]

  return (
    <aside className='w-[300px] h-full fixed border flex flex-col justify-start py-10 gap-5 items-start bg-gray-700 text-white '>
      <div className=' flex flex-col w-full h-1/2 justify-around'>
        {navlinks.map(({ index, name, href }) => {
          return (
            <a
              key={index}
              href={href}
              className='flex items-center mx-3 px-3 h-[50px] hover:bg-gray-500'
            >
              {name}
            </a>
          )
        })}
      </div>
    </aside>
  )
}
