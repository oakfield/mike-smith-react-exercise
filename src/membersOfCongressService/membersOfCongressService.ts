import { REPRESENTATIVES } from "../houseSelect/HouseSelect";

let getMembersOfCongress = async (house: string, state: string) => {
    let membersResponse = await fetch(`https://whoismyrepresentative.com/getall_${house === REPRESENTATIVES ? 'reps' : 'sens'}_bystate.php?state=${state}&output=json`);
    return (await membersResponse.json()).results;
};

export default getMembersOfCongress;