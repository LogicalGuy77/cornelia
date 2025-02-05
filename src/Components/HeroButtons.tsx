import { useNavigate } from 'react-router-dom';

function HeroButtons() {
    const navigate = useNavigate();

    return (
        <div className="flex font-semibold gap-8 justify-center pt-5">
            <button
                onClick={() => navigate('/')}
                className="text-black hover:text-blue-800 bg-transparent px-4 cursor-pointer"
            >
                Home
            </button>
            <button
                onClick={() => navigate('/about')}
                className="text-black hover:text-blue-800 bg-transparent px-4 cursor-pointer"
            >
                About Us
            </button>
            <button
                onClick={() => navigate('/blogs')}
                className="text-black hover:text-blue-800 bg-transparent px-4 cursor-pointer">
                Blogs
            </button>
            <button
                onClick={() => navigate('/sign-up')}
                className="text-black hover:text-blue-800 bg-transparent px-4 cursor-pointer">
                Sign Up
            </button>
        </div>
    )
}

export default HeroButtons