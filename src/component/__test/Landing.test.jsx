import {render,screen} from '@testing-library/react';
import Landing from  '../Landing';

test('Landing',()=>{
    render(<Landing/>,
   
    )
    const element=screen.getByTestId("custom-element");
})






    
