import Link from 'next/link';
import DropdownAccount from './DropdownAccount';
import { IoIosHome } from 'react-icons/io';
import { RxExternalLink } from 'react-icons/rx';
import Logo from '../Logo';
import { SelectTheme } from './SelectTheme';
import { Button } from '@/components/ui/button';
import { GrAdd } from 'react-icons/gr';
import MobileSidebarMenu from './MobileSidebarMenu';

export const navItems = [
  { title: 'New Room', href: '/generate', icon: <GrAdd /> },
  { title: 'My Generated Rooms', href: '/history', icon: <IoIosHome /> },
  { title: 'Demo Apps', href: 'https://apps.builderkit.ai/' },
];

export default async function Navbar() {
  return (
    <div className='w-full'>
      <div className=' mx-auto flex justify-between items-center py-4'>
        <Logo />

        <div className='flex items-center gap-3'>
          <SelectTheme />

          <div className='hidden lg:flex items-center gap-3'>
            {navItems.map((item) => (
              <Link key={item.title} href={item.href} className='block'>
                <Button variant='secondary' className='gap-2 w-full justify-start'>
                  {item.icon}
                  {item.title}
                </Button>
              </Link>
            ))}

            <Link href='https://www.builderkit.ai/#pricing' target='_blank'>
              <Button className='gap-2 border border-destructive/10 bg-destructive/10 dark:bg-destructive/20 text-destructive shadow-none'>
                Get Builderkit.ai
                <RxExternalLink />
              </Button>
            </Link>

            <DropdownAccount />
          </div>

          {/* Specific to mobile view */}
          <MobileSidebarMenu />
        </div>
      </div>
    </div>
  );
}
