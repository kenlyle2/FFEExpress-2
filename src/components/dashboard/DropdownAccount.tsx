import React from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Image from 'next/image';
import { getUserDetails } from '@/utils/supabase/server';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import Link from 'next/link';
import { AiOutlineDollarCircle } from 'react-icons/ai';
import AccountSettings from './AccounSettings';
import ButtonSignout from './ButtonSignout';

const DropdownAccount = async () => {
  const user = await getUserDetails();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className='w-full'>
        <div className='h-10 lg:h-auto flex items-center gap-2 px-4 lg:px-0 rounded-md bg-secondary'>
          <Image
            src={user?.user_metadata?.avatar_url ?? '/avatar.png'}
            className='size-5 lg:size-8 rounded-full'
            width={20}
            height={20}
            alt='avatar'
          />
          <p className='block lg:hidden text-sm font-medium text-default'>{user?.user_metadata?.full_name}</p>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='rounded-lg m-2'>
        <div className='flex items-center gap-3 overflow-hidden px-2 py-1.5'>
          <Image
            src={user?.user_metadata?.avatar_url ?? '/avatar.png'}
            className='size-10 rounded-full'
            width={20}
            height={20}
            alt='avatar'
          />
          <div>
            <p className='font-semibold text-default'>{user?.user_metadata?.full_name}</p>
            <p className='text-default dark:text-white/90'>{user?.email}</p>
          </div>
        </div>
        <DropdownMenuSeparator />

        <AccountSettings user={user!} />
        <DropdownMenuSeparator />

        <a href='mailto:vatsal1811@gmail.com'>
          <DropdownMenuItem className='cursor-pointer text-default'>
            <AiOutlineQuestionCircle className='size-5 mr-2' />
            Support
          </DropdownMenuItem>
        </a>

        <DropdownMenuSeparator />
        <Link href='/pricing'>
          <DropdownMenuItem className='cursor-pointer text-default'>
            <AiOutlineDollarCircle className='size-5 mr-2' />
            Pricing
          </DropdownMenuItem>
          <DropdownMenuSeparator />
        </Link>

        <ButtonSignout />

        <div className='flex items-center m-2 mt-2.5 text-xs text-subtle'>
          <a href=''>
            <span className='border-b'> Privacy policy</span> ,
            <span className='border-b'> Terms & conditions</span>
          </a>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropdownAccount;
