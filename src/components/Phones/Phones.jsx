import React from 'react';
import Phone from '../Phone/Phone';
import useGetPhones from '../../hook/useGetPhones';

const Phones = ({phones}) => {

    return (
        <div>
            <h1 className='text-2xl text-center'>All Categories Phones</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 gap-5'>
            {
                phones.map(phone => <Phone key={phone.id} phone={phone}></Phone>)
            }
            </div>
        </div>
    );
};

export default Phones;