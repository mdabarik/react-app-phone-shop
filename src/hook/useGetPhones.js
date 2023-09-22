import { useEffect, useState } from "react";

const useGetPhones = () => {
    const [phones, setPhones] = useState([]);
    useEffect(() => {
        fetch("/phones.json")
        .then(res => res.json())
        .then(data => setPhones(data));
    }, []);
    const handlePhones = (phones) => {
        setPhones(phones);
    }
    return [phones, handlePhones];
};

export default useGetPhones;