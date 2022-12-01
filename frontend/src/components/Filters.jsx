import { useState } from 'react';
import { SlArrowDown, SlArrowUp } from 'react-icons/sl';

const Filters = ({ data }) => {
    const { title, items, menuOpen } = data;

    const [active, setActive] = useState(menuOpen);
    const [inputValue, setInputValue] = useState('');

    console.log(inputValue)

    return (
        <div className='pb-4 pr-4'>
            <div
                className='text-[#979797] text-lg p-2 w-full flex justify-between items-center border-t border-[#979797]'
                onClick={() => setActive(!active)}
            >
                {title}
                {active ? (
                    <SlArrowDown className='text-[#979797] font-medium text-xl' />
                ) : (
                    <SlArrowUp className='text-[#979797] text-xl font-medium' />
                )}
            </div>
            <div className={`${active && 'hidden'}`}>
                <form>
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className='flex items-center gap-2 mb-2'
                        >
                            <input
                                onChange={e => setInputValue(e.target.value)}
                                type='radio'
                                name={title}
                                id={item}
                                value={item}
                                className='h-4 w-4 border-[#979797]'
                                
                            />
                            <label
                                htmlFor={item}
                                className=' text-[#979797] text-lg'
                            >
                                {item}
                            </label>
                        </div>
                    ))}
                </form>
            </div>
        </div>
    );
};

export default Filters;
