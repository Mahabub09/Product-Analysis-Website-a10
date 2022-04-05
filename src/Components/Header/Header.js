import React from 'react';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div className='flex items-center mt-3'>
            <h1 className='font-medium font-serif underline underline-offset-6'>PERFUME PARADISE</h1>
            <nav className='container flex items-center justify-center space-x-10 font-serif font-medium text-xl'>
                <CustomLink to='/'>Home</CustomLink>
                <CustomLink to='/reviews'>Reviews</CustomLink>
                <CustomLink to='/dashboard'>Dashboard</CustomLink>
                <CustomLink to='/blogs'>Blogs</CustomLink>
                <CustomLink to='/about'>About</CustomLink>

            </nav>

        </div>
    );
};

export default Header;