
// interface handelOpenMenu {
//   isMenuOpen: Boolean
//   setIsMenuOpen: React.Dispatch<React.SetStateAction<Boolean>>
// }

// const handelOpenMenu: React.FC<handelOpenMenu> = ({ isMenuOpen, setIsMenuOpen }) => {
//   const menu = document.getElementById('menu') as HTMLElement | null

//   if (!isMenuOpen) {
//     // if closed, remove hidden
//     menu?.classList.remove('hidden')
//     setIsMenuOpen(!isMenuOpen)
//     setTimeout(() =>{
//       // with the timeout remove opacity and rotate
//       menu?.classList.remove('opacity-0', '-rotate-90')
//     }, 100)
//   } else {
//     // if opened, add opacity and rotate
//     menu?.classList.add('opacity-0', '-rotate-90')
//     setIsMenuOpen(!isMenuOpen)
//     setTimeout(() => {
//       // with the timeout add hidden
//       menu?.classList.add('hidden')
//     }, 100)
//   }
// } 


const handleTheme = ():void => {
  const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon') as HTMLElement | null
  const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon') as HTMLElement | null

  // Change the icons inside the button based on previous settings
  if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    themeToggleLightIcon?.classList.remove('hidden');
  } else {
    themeToggleDarkIcon?.classList.remove('hidden');
  }

  const themeToggleBtn = document.getElementById('theme-toggle') as HTMLElement | null

  themeToggleBtn?.addEventListener('click', function() {

  // toggle icons inside button
  themeToggleDarkIcon?.classList.toggle('hidden');
  themeToggleLightIcon?.classList.toggle('hidden');

  // if set via local storage previously
  if (localStorage.getItem('color-theme')) {
    if (localStorage.getItem('color-theme') === 'light') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('color-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('color-theme', 'light');
    }

  // if NOT set via local storage previously
  } else {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('color-theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('color-theme', 'dark');
    }
  }
    
});

}

export {
  // handelOpenMenu, 
  handleTheme
}