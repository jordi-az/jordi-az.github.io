'use client';

import { useEffect, useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)',
    ).matches;
    const storedPreference = localStorage.getItem('dark-mode');
    if (storedPreference !== null) {
      setDarkMode(storedPreference === 'true');
    } else {
      setDarkMode(prefersDark);
    }
    setIsMounted(true);

    const handleMediaQueryChange = (e) => {
      setDarkMode(e.matches);
    };

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  useEffect(() => {
    if (isMounted) {
      if (darkMode) {
        document.body.classList.add('dark-mode');
        document.body.classList.remove('light-mode');
      } else {
        document.body.classList.add('light-mode');
        document.body.classList.remove('dark-mode');
      }
      localStorage.setItem('dark-mode', darkMode.toString());
    }
  }, [darkMode, isMounted]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  if (!isMounted) return null; // Renderiza null hasta que esté montado

  return (
    <>
      <header className="flex justify-center items-center mx-auto sticky bottom-0 md:top-0 w-full md:w-[720px] py-5 z-50">
        <nav className="hidden md:flex gap-1 bg-gray-900/50 backdrop-blur-md px-4 py-0.5 rounded-full text-xl items-center">
          <Link
            href="/#sobre-mi"
            className="py-0.5 px-4 rounded-full transition duration-300 ease-in-out hover:text-sky-300"
          >
            Sobre mí
          </Link>
          <Link
            href="/#proyectos"
            className="py-0.5 px-4 rounded-full transition duration-300 ease-in-out hover:text-sky-300"
          >
            Proyectos
          </Link>
          <Link
            href="/#social"
            className="py-0.5 px-4 rounded-full transition duration-300 ease-in-out hover:text-sky-300"
          >
            Social
          </Link>
          <Link
            href="/#contacto"
            className="py-0.5 px-4 rounded-full transition duration-300 ease-in-out hover:text-sky-300"
          >
            Contacto
          </Link>
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full transition duration-300 ease-in-out hover:text-sky-300"
          >
            {darkMode ? <FaMoon size={20} /> : <FaSun size={20} />}
          </button>
        </nav>
      </header>

      <main class="relative px-4">
        <section
          id="sobre-mi"
          class="w-full md:w-[720px] container mx-auto pt-4 pb-20"
        >
          <article class="mt-8 mb-8">
            <Image
              src="/IMG_0368.jpeg"
              alt="Jordi Aguilera"
              width={124}
              height={124}
              className="rounded-full img-profile img-profile:hover mb-8"
            />
            <h2 className="flex gap-2 items-center text-4xl md:text-5xl font-extrabold mb-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-10 md:size-12"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M7 8l-4 4l4 4"></path>
                <path d="M17 8l4 4l-4 4"></path>
                <path d="M14 4l-4 16"></path>
              </svg>
              <span>Jordi Aguilera</span>
            </h2>
            <p className="text-2xl text-balance text-gray-300/90">
              No soy un robot,{' '}
              <span className="text-sky-300">
                soy un desarrollador Front-End
              </span>{' '}
              apasionado por el
              <span className="text-yellow-300">
                diseño web y la programación
              </span>
              .
            </p>
          </article>
        </section>
        <section class="w-full md:w-[720px] container mx-auto pt-4 pb-32">
          <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
            <Image
              className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
              src="/next.svg"
              alt="Next.js Logo"
              width={180}
              height={37}
              priority
            />
          </div>

          <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
            <Link
              href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className={`mb-3 text-2xl font-semibold`}>
                Docs{' '}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                Find in-depth information about Next.js features and API.
              </p>
            </Link>

            <Link
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className={`mb-3 text-2xl font-semibold`}>
                Learn{' '}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                Learn about Next.js in an interactive course with&nbsp;quizzes!
              </p>
            </Link>

            <Link
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className={`mb-3 text-2xl font-semibold`}>
                Templates{' '}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                Explore starter templates for Next.js.
              </p>
            </Link>

            <Link
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className={`mb-3 text-2xl font-semibold`}>
                Deploy{' '}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                Instantly deploy your Next.js site to a shareable URL with
                Vercel.
              </p>
            </Link>
          </div>
        </section>

        <section
          id="proyectos"
          class="w-full md:w-[720px] container mx-auto py-8"
        >
          <h2 class="flex gap-2 items-center text-4xl md:text-5xl font-extrabold mb-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="size-10 md:size-12"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path
                d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z"
                stroke-width="0"
                fill="currentColor"
              ></path>
            </svg>
            <span>Proyectos</span>
          </h2>
        </section>
      </main>

      <footer
        id="contacto"
        class="md:w-[720px] container mx-auto pb-8 px-4 z-20 md:px-0"
      >
        <div class="mb-8">
          <h2 class="flex gap-2 items-center text-4xl md:text-5xl font-extrabold mb-8">
            {' '}
            <svg
              class="size-10 md:size-12"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path
                d="M22 7.535v9.465a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-9.465l9.445 6.297l.116 .066a1 1 0 0 0 .878 0l.116 -.066l9.445 -6.297z"
                stroke-width="0"
                fill="currentColor"
              ></path>
              <path
                d="M19 4c1.08 0 2.027 .57 2.555 1.427l-9.555 6.37l-9.555 -6.37a2.999 2.999 0 0 1 2.354 -1.42l.201 -.007h14z"
                stroke-width="0"
                fill="currentColor"
              ></path>
            </svg>
            <span>Contacto</span>{' '}
          </h2>
          <div class="flex items-center space-x-4">
            <span class="text-2xl font-mono bg-gray-200 text-black border-2 border-slate-700 rounded-xl px-4 py-2 shadow-lg w-full ">
              jordi_duck_0@outlook.com
            </span>
            <Link
              href="mailto:jordi_duck_0@outlook.com"
              class="relative px-0 py-0 group rounded-lg grid place-content-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M4.698 4.034l16.302 7.966l-16.302 7.966a.503 .503 0 0 1 -.546 -.124a.555 .555 0 0 1 -.12 -.568l2.468 -7.274l-2.468 -7.274a.555 .555 0 0 1 .12 -.568a.503 .503 0 0 1 .546 -.124z"></path>
                <path d="M6.5 12h14.5"></path>
              </svg>
              <span class="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-12 px-4 py-2 rounded-xl bg-white text-black w-32 transition-opacity duration-200 ease-out opacity-0 group-hover:opacity-100 text-center">
                Enviar email
              </span>
            </Link>
            <button
              id="button-copy-email"
              class="relative px-0 py-0 group rounded-lg grid place-content-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M7 7m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z"></path>
                <path d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1"></path>
              </svg>
              <span
                id="tooltip-email"
                class="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-12 px-4 py-2 rounded-xl bg-white text-black w-32 transition-opacity duration-200 ease-out opacity-0 group-hover:opacity-100 text-center"
              >
                Copiar email
              </span>
            </button>
          </div>
        </div>
        <div>
          <h2 class="flex gap-2 items-center text-4xl md:text-5xl font-extrabold mb-8">
            {' '}
            <svg
              xxmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="none"
              fill="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M24,11c0-1.568-.752-3.04-2-3.979v-.021c0-1.897-1.327-3.489-3.102-3.898-.409-1.774-2.002-3.102-3.898-3.102-1.194,0-2.267,.526-3,1.357-.733-.832-1.806-1.357-3-1.357-1.896,0-3.489,1.327-3.898,3.102-1.774,.409-3.102,2.001-3.102,3.898v.021c-1.248,.939-2,2.41-2,3.979,0,.886,.235,1.737,.686,2.5-.45,.763-.686,1.614-.686,2.5,0,1.686,.858,3.244,2.267,4.166,.719,2.278,2.812,3.834,5.233,3.834,1.858,0,3.504-.926,4.5-2.342,.996,1.415,2.642,2.342,4.5,2.342,2.422,0,4.515-1.556,5.233-3.834,1.408-.922,2.267-2.48,2.267-4.166,0-.886-.235-1.737-.686-2.5,.45-.763,.686-1.614,.686-2.5ZM7.5,22c-1.634,0-3.033-1.115-3.401-2.712-.065-.281-.248-.52-.502-.656-.985-.528-1.597-1.536-1.597-2.631,0-.675,.234-1.322,.679-1.872,.296-.367,.296-.89,0-1.257-.444-.549-.679-1.196-.679-1.872,0-1.07,.591-2.067,1.543-2.603,.37-.208,.568-.627,.494-1.045-.02-.115-.037-.231-.037-.352,0-1.103,.897-2,2-2,.553,0,1-.448,1-1,0-1.103,.897-2,2-2s2,.897,2,2v4h-2.268c-.346-.598-.992-1-1.732-1-1.105,0-2,.895-2,2s.895,2,2,2c.74,0,1.386-.402,1.732-1h2.268v5h-2.268c-.346-.598-.992-1-1.732-1-1.105,0-2,.895-2,2s.895,2,2,2c.74,0,1.386-.402,1.732-1h2.268v1.5c0,1.93-1.57,3.5-3.5,3.5Zm13.821-7.872c.444,.549,.679,1.196,.679,1.872,0,1.096-.611,2.104-1.597,2.631-.254,.136-.437,.375-.502,.656-.368,1.597-1.768,2.712-3.401,2.712-1.93,0-3.5-1.57-3.5-3.5v-4.5h2c1.654,0,3-1.346,3-3v-.268c.598-.346,1-.992,1-1.732,0-1.105-.895-2-2-2s-2,.895-2,2c0,.74,.402,1.386,1,1.732v.268c0,.551-.448,1-1,1h-2V4c0-1.103,.897-2,2-2s2,.897,2,2c0,.552,.447,1,1,1,1.103,0,2,.897,2,2,0,.121-.018,.237-.037,.352-.074,.418,.124,.837,.494,1.045,.952,.535,1.543,1.533,1.543,2.603,0,.675-.234,1.322-.679,1.872-.296,.367-.296,.89,0,1.257Z" />
            </svg>
            <span>Discord</span>{' '}
          </h2>
          <div class="grid grid-cols-8 flex-wrap md:flex-nowrap items-center gap-3"></div>
        </div>
      </footer>
    </>
  );
}
