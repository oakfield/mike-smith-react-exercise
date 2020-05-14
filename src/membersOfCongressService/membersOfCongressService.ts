const DEFAULT_API_HOST = 'http://localhost:3000/';

let getMembersOfCongress = async (house: string, state: string) => {
    let membersResponse = await fetch(`${process.env.REACT_APP_API_HOST || DEFAULT_API_HOST}${house}/${state}`);
    return (await membersResponse.json()).results;
};

export default getMembersOfCongress;