import { UserProfile  } from "@clerk/nextjs";
import Nav from "@/app/components/Nav";

export default function UserProfilePage(){
    return(
        <>
            <Nav />
            <div className="flex justify-center items-center py-8">
                <UserProfile path="/user-profile" />
            </div>
        </>
    )
}