import {memo} from 'react';


function Post({ index }) {
    let startTime = performance.now();
    while (performance.now() - startTime < 1) {
      // Artificial delay
    }
  
    return <li className='item'>Post {index + 1}</li>;
  }
  
const Tab2 = memo(function Tab2() {
    let items = [];
    for (let i = 0; i < 500; i++) {
      items.push(<Post key={i} index={i} />);
    }
    return <ul className='items'>{items}</ul>;
  });
  

  
  export default Tab2;
  