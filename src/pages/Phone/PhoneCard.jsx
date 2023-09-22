import swal from 'sweetalert';

const PhoneCard = ({phone}) => {

    const handleAddToFavorite = () => {
        const phones = [];
        const favoriteItems = JSON.parse(localStorage.getItem('favorite'));
        if (!favoriteItems) { // does not exist favorite
            phones.push(phone);
            localStorage.setItem('favorite', JSON.stringify(phones));
            swal("Good job!", "Added Successfully", "success");

        } else {
            const isExist = favoriteItems.find(p => p.id === phone.id);
            if (isExist) {
                console.log('sorry already exist');
                swal("Sorry!", "Already Exist", "error");
            } else {
                phones.push(...favoriteItems);
                phones.push(phone);
                localStorage.setItem('favorite', JSON.stringify(phones));
                swal("Good job!", "Added Successfully", "success");
            }
        }
    }

    return (
        <div>
            <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                    <img
                        src={phone.image}
                        alt="image"
                        className="h-full w-full object-cover"
                    />
                </div>
                <div className="p-6">
                    <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
                        {phone.brand_name}
                    </h6>
                    <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        Lyft launching cross-platform service this week
                    </h4>
                    <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                        Like so many organizations these days, Autodesk is a company in
                        transition. It was until recently a traditional boxed software company
                        selling licenses. Yet its own business model disruption is only part of
                        the story
                    </p>
                    <a className="inline-block" href="#">
                        <button
                            onClick={handleAddToFavorite}
                            className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                        >
                            Add To Favorite
                            
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default PhoneCard;