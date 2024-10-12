'use client';

import React from 'react';
import { Session } from 'next-auth';
import { logout } from '@/app/actions/logout';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { Button } from "@/components/ui/button"; // Предположим, что Button уже реализован в проекте

interface UserMenuProps {
  session: Session | null;
}

export const UserMenu = ({
  session,
}: UserMenuProps) => {
  if (!session) return null;
  const LogOut = () => {
    logout();
  }

  return (
    <div className='hidden md:block'>
      <Popover>
        <PopoverTrigger>
          <Avatar>
            <AvatarImage src={session.user?.image || "https://github.com/shadcn.png"} alt={session.user?.name || "@user"} />
            <AvatarFallback>
              {session.user?.name?.charAt(0).toUpperCase() || "?"}
            </AvatarFallback>
          </Avatar>
        </PopoverTrigger>

        <PopoverContent>
          <div className="flex flex-col items-start">
            <p>{session.user?.name}</p>
            <p>{session.user?.email}</p>
            
            <Button
              className="mt-2"
              onClick={LogOut} // Вызываем signOut напрямую
            >
              Sign Out
            </Button>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};
