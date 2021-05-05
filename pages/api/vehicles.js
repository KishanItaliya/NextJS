const people = [
    {vehicle: 'car', ownerName: 'kishan', details: "some detail about Kishan's car"},
    {vehicle: 'bike', ownerName: 'kishan', details: "some detail about Kishan's bike"},
    {vehicle: 'bike', ownerName: 'raj', details: "some detail about Raj's bike"},
    {vehicle: 'airplane', ownerName: 'jenish', details: "some detail about Jenish's airplane"},
]

export default (req, res) => {
    console.log(req.query)
    if(req.query.ownerName !== undefined && req.query.vehicle!== undefined) {
        const filteredDataByName = people.filter((p) => p.ownerName.includes(req.query.ownerName))
        const filteredData = filteredDataByName.filter((p) => p.vehicle.includes(req.query.vehicle))
        return res.status(200).json(filteredData);
    }
    return res.status(200).json(people);
}