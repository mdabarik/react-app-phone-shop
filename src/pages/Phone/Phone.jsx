import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import PhoneCard from "./PhoneCard";

const Phone = () => {
    // react hook
    const [phone, setPhone] = useState();
    const params = useParams();
    const phones = useLoaderData();

    useEffect(() => {
        const findPhone = phones?.find(phone => params.id == phone.id);
        setPhone(findPhone);
    }, [params.id, phones]);


    return (
        <div>
            {phone && <PhoneCard phone={phone}></PhoneCard>}
        </div>
    );
};

export default Phone;