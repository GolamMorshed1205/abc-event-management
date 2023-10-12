
const Contact = () => {
    return (
        <div>
            <div className="flex flex-col w-full">
                <h1 className="w-full h-[40vh] flex justify-center items-center text-6xl font-bold bg-black text-white mb-8">Contact Us</h1>
                <div className="grid h-20 card bg-base-300 rounded-box place-items-center text-2xl font-semibold text-blue-600">Address : Dhaka , Bangladesh</div>
                <div className="divider"></div>
                <div className="grid h-20 card bg-base-300 rounded-box place-items-center text-2xl font-semibold text-blue-600">Contact : +8801000000000</div>
                <div className="divider"></div>
                <div className="grid h-20 card bg-base-300 rounded-box place-items-center text-2xl font-semibold text-blue-600">E-mail : ABC.live@gmail.com</div>
                <div className="divider"></div>
                <div className="grid h-20 card bg-base-300 rounded-box place-items-center text-2xl font-semibold text-blue-600">Opening Weekly : Wednesday - Monday</div>
                <div className="divider"></div>
                <div className="grid h-20 card bg-base-300 rounded-box place-items-center text-2xl font-semibold text-blue-600">Opening Hour : 10:00 AM - 6:00 PM</div>
            </div>
        </div>
    );
};

export default Contact;