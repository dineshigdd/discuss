'use client'

import { useSession } from "next-auth/react"

export default function Profile(){
    const session = useSession();

    if( session.data?.user ){
        return <div>
            From Client user is signed in
            { JSON.stringify( session.data.user )}
        </div>
    }

    return <div>From Client: user is NOT signed in</div>
}