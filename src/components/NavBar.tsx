import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/walkthrough', label: 'Walkthrough' },
  { to: '/achievements', label: 'Achievements' },
  { to: '/bestiary', label: 'Bestiary' },
  { to: '/augments', label: 'Augments' },
]

export function NavBar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
      <nav className="mx-auto flex max-w-4xl items-center gap-6 px-4 py-4">
        <span className="font-semibold text-slate-900 dark:text-white">FFIV Achievement Guide</span>
        <div className="flex gap-4 text-sm">
          {links.map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                isActive
                  ? 'font-medium text-indigo-600 dark:text-indigo-400'
                  : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  )
}
