import { useState, useEffect } from "react";
import Link from "next/link"

export default function List ({ownersList}) {
    // const [owners, setOwners] = useState([]);

    // useEffect(() => {
    //     async function loadData() {
    //         const response = await fetch("http://localhost:3000/api/vehicles");
    //         const ownersList = await response.json();
    //         setOwners(ownersList);
    //     }
    //     loadData();
    // }, [])

    // console.log(owners);

    return (
        <div>
            {
                ownersList.map((e, index) => {
                    return (
                        <div key={index}>
                            <Link  as={`/${e.vehicle}/${e.ownerName}`} href="/[vehicle]/[person]">
                                <a>Navigate to {e.ownerName}'s {e.vehicle}<br /></a>
                            </Link>
                        </div>
                    
                    )
                })
            }
        </div>
    )
}

List.getInitialProps = async () => {
    const response = await fetch("http://localhost:3000/api/vehicles");
    const ownersList = await response.json();
    return {
        ownersList: ownersList
    }
}
