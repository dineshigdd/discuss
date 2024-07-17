'use client'

import {
    
    NavbarItem,    
    Button,
    Avatar,
    Popover,
    PopoverTrigger,
    PopoverContent
} from '@nextui-org/react';

import { useSession } from 'next-auth/react';
import * as actions from '@/actions'

export default function HeaderAuth(){
    const session = useSession();

    let authContent: React.ReactNode;

    /*After the user is authenticated, and if the user refresh the page , the page will show the 'sign in/sign up'
     buttons for a few seconds before it detects the authenticaion status. We can prevent this by setting authContent to null.*/

    if(  session.status === 'loading' ){
        authContent = null;
    }
    else if ( session.data?.user ){
        authContent = (
            <Popover placement="left">
                <PopoverTrigger>
                    <Avatar src={ session.data.user.image || "" }/>
                </PopoverTrigger>
                <PopoverContent>
                    <div className="p-4">
                        <form action={ actions.signOut }>
                            <Button type="submit">Sign out</Button>
                        </form>
                    </div>
                </PopoverContent>
            </Popover>
        )
    }else{
        authContent = <>
            <NavbarItem>
                <form action={ actions.signIn }>
                     <Button type="submit" color="secondary" variant="bordered">Sign In</Button>
                </form>
            </NavbarItem>
            <NavbarItem>
                <form action={ actions.signIn }>
                     <Button type="submit" color="primary" variant='flat'>Sign Up</Button>
                </form>
            </NavbarItem>
        </>
    }

    return authContent;
}