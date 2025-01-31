'use client';
import Image from 'next/image';
import * as React from 'react';
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  useUser
} from '@clerk/nextjs';
import Link from 'next/link';

import { ThemeToggle } from '@/components/custom/theme-toggle';

import { NavigationRisk } from './navigationrisk';

export function Header() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between max-w-full h-16 px-4 shrink-0 bg-white">
      <div className="relative flex  size-13 items-center  justify-center rounded-full">
        {/* <button className="text-sky-500 font-semibold  p-1 flex items-center space-x-2 ">
          <div className="relative flex  size-13 items-center  justify-center rounded-full">
            <div className="flex items-center justify-center  rounded-full bg-gradient-to-t from-indigo-400 via-cyan-400 to-sky-500 shadow-lg p-0.5">
              <Image
                className="mx-auto bg-white  justify-center rounded-full p-1.5"
                src="/assets/logo-4.png"
                alt="logo"
                width={50}
                height={50}
              />
            </div>
          </div>
        </button> */}
      </div>

      <NavigationRisk />
      <div className="flex items-center justify-end space-x-2">
        <div className="flex items-center text-sky-500 text-lg ">
          <React.Suspense fallback={<div className="flex-1 overflow-auto" />}>
            <UserButton />
          </React.Suspense>
        </div>
        {/* <ThemeToggle /> */}
      </div>
    </header>
  );
}

// import * as React from 'react';
// import Link from 'next/link';

// import { cn } from '@/lib/utils';
// import { auth } from '@/auth';
// import { Button, buttonVariants } from '@/components/ui/button';
// import { CheckCircleIcon, XMarkIcon } from '@heroicons/react/24/outline';
// import { NavigationRisk } from './navigationrisk';
// import {
//   IconGitHub,
//   IconNextChat,
//   IconSeparator,
//   IconVercel
// } from '@/components/ui/icons';
// import Image from 'next/image';
// import { UserMenu } from '@/components/user-menu';
// import { SidebarMobile } from './sidebar-mobile';
// import { SidebarToggle } from './sidebar-toggle';
// import { ChatHistory } from './chat-history';
// import { ThemeToggle } from './theme-toggle';

// function classNames(...classes: string[]) {
//   return classes.filter(Boolean).join(' ');
// }

// const navigation = [
//   { name: 'Risk Analysis', to: '/risk/analysis' },
//   { name: 'Inventory', to: '/inventory' }
// ];

// async function UserOrLogin() {
//   const session = (await auth()) as Session;
//   return (
//     <>
//       {session?.user ? (
//         <>
//           <SidebarMobile>
//             <ChatHistory userId={session.user.id} />
//           </SidebarMobile>
//           <SidebarToggle />
//         </>
//       ) : (
//         <Link href="/new" rel="nofollow">
//           <IconNextChat className="size-6 mr-2 dark:hidden" inverted />
//           <IconNextChat className="hidden size-6 mr-2 dark:block" />
//         </Link>
//       )}
//       <div className="flex items-center">
//         <IconSeparator className="size-6 text-muted-foreground/50" />
//         {session?.user ? (
//           <UserMenu user={session.user} />
//         ) : (
//           <Button variant="link" asChild className="-ml-2">
//             <Link href="/login">Login</Link>
//           </Button>
//         )}
//       </div>
//     </>
//   );
// }

// export function Header() {
//   return (
//     <header className="sticky top-0 z-50 flex items-center justify-between max-w-full h-16 px-4 border-b shrink-0 bg-white">
//       <div className="flex items-center text-sky-500 text-lg ">
//         <React.Suspense fallback={<div className="flex-1 overflow-auto" />}>
//           <UserOrLogin />
//         </React.Suspense>
//       </div>
//       <NavigationRisk />
//       <div className="flex items-center justify-end space-x-2">
//         <ThemeToggle />
//         <button className="text-sky-500 font-semibold  p-1 flex items-center space-x-2 ">
//           <div className="relative flex  size-13 items-center  justify-center rounded-full">
//             <div className="flex items-center justify-center  rounded-full bg-gradient-to-t from-indigo-400 via-cyan-400 to-sky-500 shadow-lg p-0.5">
//               <Image
//                 className="mx-auto bg-white  justify-center rounded-full p-1.5"
//                 src="/assets/logo-4.png"
//                 alt="logo"
//                 width={50}
//                 height={50}
//               />
//             </div>
//           </div>
//         </button>
//       </div>
//     </header>
//   );
// }

// 'use client'
// import { CheckCircleIcon, XMarkIcon } from '@heroicons/react/24/outline'
// import Image from 'next/image'
// import Link from 'next/link'
// import { usePathname } from 'next/navigation'
// import * as React from 'react'

// import { Button, buttonVariants } from '@/components/ui/button'
// import {
//   IconGitHub,
//   IconNextChat,
//   IconSeparator,
//   IconVercel
// } from '@/components/ui/icons'
// import { UserMenu } from '@/components/user-menu'
// import { cn } from '@/lib/utils'

// import { ChatHistory } from './chat-history'
// import { NavigationRisk } from './navigationrisk'
// import { SidebarMobile } from './sidebar-mobile'
// import { SidebarToggle } from './sidebar-toggle'
// import { ThemeToggle } from './theme-toggle'

// import { auth } from '@/auth'
// import { Session } from '@/lib/types'

// function classNames(...classes: string[]) {
//   return classes.filter(Boolean).join(' ')
// }

// const navigation = [
//   { name: 'Risk Analysis', to: '/risk/analysis' },
//   { name: 'Inventory', to: '/inventory' },
// ]

// async function UserOrLogin() {
//   const session = (await auth()) as Session
//   return (
//     <>
//       {session?.user ? (
//         <>
//           <SidebarMobile>
//             <ChatHistory userId={session.user.id} />
//           </SidebarMobile>
//           <SidebarToggle />
//         </>
//       ) : (
//         <Link href="/new" rel="nofollow">
//           <IconNextChat className="size-6 mr-2 dark:hidden" inverted />
//           <IconNextChat className="hidden size-6 mr-2 dark:block" />
//         </Link>
//       )}
//       <div className="flex items-center">
//         <IconSeparator className="size-6 text-muted-foreground/50" />
//         {session?.user ? (
//           <UserMenu user={session.user} />
//         ) : (
//           <Button variant="link" asChild className="-ml-2">
//             <Link href="/login">Login</Link>
//           </Button>
//         )}
//       </div>
//     </>
//   )
// }

// export function Header() {

//   return (
//     <header className="sticky top-0 z-50 flex items-center justify-between max-w-full h-16 px-4 border-b shrink-0 bg-white">
//       <div className="flex items-center text-sky-500 text-lg ">
//         <React.Suspense fallback={<div className="flex-1 overflow-auto" />}>
//           <UserOrLogin />
//         </React.Suspense>
//       </div>
//       <NavigationRisk />
//       <div className="flex items-center justify-end space-x-2">
//         <ThemeToggle />
//         <button className="text-sky-500 font-semibold  p-1 flex items-center space-x-2 ">
//           <div className="relative flex  size-13 items-center  justify-center rounded-full">
//             <div className="flex items-center justify-center  rounded-full bg-gradient-to-t from-indigo-400 via-cyan-400 to-sky-500 shadow-lg p-0.5">
//               <Image
//                 className="mx-auto bg-white  justify-center rounded-full p-1.5"
//                 src="/assets/logo-4.png"
//                 alt="logo"
//                 width={50}
//                 height={50}
//               />
//             </div>
//           </div>
//         </button>
//       </div>
//     </header>
//   );
// }
