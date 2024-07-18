'use client';

import { Input } from "@nextui-org/react";
import { useSearchParams } from "next/navigation";
import * as actions from '@/actions';

export default function SearchInput(){
    const  searchParams = useSearchParams()
    
    /*defaultValue should have a string or undefined, 
    but searchParams return a string or null. 
    Thus , you need to add " || '' " */

    return ( <form action={ actions.search  }>
               <Input name="term" defaultValue={ searchParams.get('term') || '' } />
          </form>
    )
}