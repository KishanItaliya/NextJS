import { useRouter } from "next/router"

export default function Person({ownersList}) {
    const router = useRouter();
    // console.log(router.query);
    // localhost:3000/car/kishan?query1=abc&query2=xyz then it's return ["abc","xyz"]
    if(!ownersList[0]) {
        return <div>loading...</div>
    }

    return (
        <div>
             <h1>{router.query.person}'s {router.query.vehicle}</h1>
             <pre>{ownersList[0]?.details}</pre>
        </div>
    )
}

Person.getInitialProps = async (context) => {
    if(!context.query) {
        return {
            ownersList: []
        }
    }
    const query = context.query;
    // console.log("Hello",query.person)
    const response = await fetch("http://localhost:3000/api/vehicles?ownerName="+query.person+"&vehicle="+query.vehicle);
    const ownersList = await response.json();
    return {
        ownersList: ownersList
    }
}
