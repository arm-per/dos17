import { ReactElement, useState } from "react";
import styles from './styles.module.css';

const Navigation = (): ReactElement => {
    
    const [active, setActive] = useState<number>(1);

    const activeHandler = (item: number): void => {
        setActive(item)
    }

    const item1: ReactElement = <h1>Soy el item 1</h1>;
    const item2: ReactElement = <h1>Soy el item 2</h1>
    const item3: ReactElement = <h1>Soy el item 3</h1>


    interface dictionary {
        [x: number]: ReactElement;
    }


    const elementsIndex: dictionary = {
        1: item1,
        2: item2,
        3: item3
    }

    

    // Here we need to generate the buttons automatically when children are provided
    // I need to think a strategy to set the name of the buttons with the less possible effort to implement
    return (
        <div>
        <nav className={styles.container}>
            <button className={`${styles.button} ${active === 1 && styles.active}`} onClick={()=> activeHandler(1)}>
                Item 1
            </button>
            <button className={`${styles.button} ${active === 2 && styles.active}`} onClick={()=> activeHandler(2)}>
                Item 2
            </button>
            <button className={`${styles.button} ${active === 3 && styles.active}`} onClick={()=> activeHandler(3)}>
                Item 3
            </button>
        </nav>
            {
                elementsIndex[active]
            }
        </div>
    )
}

export {
    Navigation
}