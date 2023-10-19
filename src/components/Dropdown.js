import { useState } from "react";

const Dropdown = ({items, selectedOption, setSelectedOption})=>{
    const[showItems, setShowItems] = useState(false);
    const[itemHovered, setItemHovered] = useState(selectedOption);
    //to handle mouse hover
    const handleHover =()=>{
        setShowItems(true)
    }
    //to handle mouse leave
    const handleLeave = ()=>{
        setShowItems(false);
    }
    //when a option is selected
    const handleSelectOption = (item)=>{
        setShowItems(false);
        setSelectedOption(item);
    }
    // To handle mouse hover on a list item
    const handleListItemHover = (item) => {
        setItemHovered(item);
    };
    return(
        <div className=" h-fit w-fit font-mono">
            <p className="mb-4 p-2 ">React Dropdown</p>
            <div 
                className="h-fit relative cursor-pointer "
                onMouseEnter={handleHover}
                onMouseLeave={handleLeave}
            >
                <div 
                    className=" flex justify-between p-2 border-black  shadow-lg rounded-md min-w-[300px] "
                   
                >
                    {selectedOption}
                    <p>▽</p>
                    
                </div>
                {/* the below div only appear when showItems is true */}
                {showItems && 
                    <div className="absolute   p-2 rounded-b-md min-w-[300px]">
                        <ul>
                            {items.map((item, index)=> (
                                <li 
                                    onClick={()=>handleSelectOption(item)} className={itemHovered === item ? "bg-[#e5e5e9] p-2": "p-2"}  key={index}
                                    onMouseEnter={()=>handleListItemHover(item)}
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                }
            </div>
        </div>
    )
}

export default Dropdown;