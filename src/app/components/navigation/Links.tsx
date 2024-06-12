import { useState, useEffect } from 'react';
import {
  SunIcon,
  MoonIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from '@radix-ui/react-icons';

const Links = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  useEffect(() => {
    //localStorage.setItem('theme', 'light');

    const selectedTheme = localStorage.getItem('theme');
    //console.log(selectedTheme);

    if (selectedTheme) {
      const themedClasses = ['dark', 'light'];
      document.body.classList.remove(...themedClasses);
      document.body.classList.add(selectedTheme);
      console.log('selectedTheme', selectedTheme);
    } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
      document.body.classList.add('light');
    } else {
      document.body.classList.add('dark');
    }
  }, [darkTheme]);

  const switchTheme = () => {
    setDarkTheme((value) => !value);
    if (darkTheme) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <div className='border-0 border-blue-500 flex 2xl:mr-56 md:mr-6'>
      <button className='hover:bg-slate-700 rounded-md px-2 text-white'>
        <GitHubLogoIcon />
      </button>
      <button className='hover:bg-slate-700 rounded-md px-2 text-white'>
        <LinkedInLogoIcon />
      </button>
      <button
        className='hover:bg-slate-700 rounded-md px-2 text-white'
        onClick={switchTheme}
      >
        {darkTheme && <MoonIcon className='text-black' />}
        {!darkTheme && <SunIcon />}
      </button>
    </div>
  );
};

export default Links;
