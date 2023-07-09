import Logo1 from "../assets/images/blanco-02.jpg";

export default function Logo() {
    return (
        <div className='logo h-16 w-16'>
            <img className="rounded-full shadow-custom" src={Logo1} alt="Logo" />
        </div>
    );
};