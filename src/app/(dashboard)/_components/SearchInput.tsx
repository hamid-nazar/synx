'use client';

import React, { ChangeEvent, useEffect, useState } from 'react';
import qs from 'query-string';
import {useDebounceValue } from 'usehooks-ts';
import { useRouter } from 'next/navigation';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

export function SearchInput() {

    const router = useRouter();

    const [value, setValue] = useState<string>('');

    const [debouncedValue] = useDebounceValue(value, 500);

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        setValue(e.target.value);
    }

    useEffect(function(){

        const url = qs.stringifyUrl({
            url: '/',
            query: {
              search: debouncedValue
            },
          }, { skipNull: true, skipEmptyString: true });
        

        router.push(url);

    }, [debouncedValue,router]);

  return (
    <div className='relative w-full'>
        <Search
        className='absolute top-1/2 left-3 text-muted-foreground transform -translate-y-1/2 w-4 h-4'
        />
        <Input 
        className='w-full max-w-[516px] pl-9'
        placeholder='Search boards'
        value={value}
        onChange={handleChange}
        />
    </div>
  )
}
