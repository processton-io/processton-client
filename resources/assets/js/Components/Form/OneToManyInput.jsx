import { forwardRef, useEffect, useRef } from 'react';

export default forwardRef(function OneToManyInput({ element }) {
    console.log(element)
    return (
        <div className='border rounded-sm'>
            {element.map}
        </div>
    );
});
