import React, {useState} from 'react';
function BiglistsComponent({handleClick}) {
    const list = [1,2,3,4,5];
    return (
        <div>
            big list
            <ul>
                {list.map((item, idx )=> (
                  <li key={`item ${idx} `} onClick={() => handleClick(item)}>item {item}</li>  
                )
                )}

            </ul>
        </div>
    );
}

export default React.memo(BiglistsComponent);