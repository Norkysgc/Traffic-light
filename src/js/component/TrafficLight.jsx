import React, {useState, useEffect} from 'react';

const TrafficLight = () =>{
    const [color, setColor] = useState(null);
    const [redSel, setRedSel] = useState('');
    const [yellowSel, setYellowSel] = useState('');
    const [greenSel, setGreenSel] = useState('');
    const [cambio, setCambio] = useState(false);
    const [purp, setPurp] = useState(false);
    const [purpSel, setPurpSel] = useState('');

    console.log('color',color);
    useEffect(() => {
        if(cambio === true){
            // setRedSel('');
            // setYellowSel('');
            // setGreenSel('');
            let interval = setInterval(() =>{
                switch (color) {
                    case 'red':
                        setColor('yellow')
                        // setRedSel('yellow');
                        break;
                    case 'yellow':
                        setColor('green')
                        // setRedSel('green');
                        break;
                    case 'green':
                        setColor('red')
                        // setRedSel('red');
                        break;
                    default:
                        setColor('red')
                        break;
                }

                setRedSel('');
                setYellowSel('');
                setGreenSel('');
                if(color === 'red')
                    setRedSel('selected');
                if(color === 'yellow')
                    setYellowSel('selected');
                if(color === 'green')
                    setGreenSel('selected');

                console.log("interval-color", color);
                console.log("interval-RedSel", redSel);
                console.log("interval-yellowSel", yellowSel);
                console.log("interval-greenSel", greenSel);
    
            }, 1000)
            return() => clearInterval(interval);
          
        }
        else{
            setRedSel('');
            setYellowSel('');
            setGreenSel('');
            setPurpSel('');
            if(color == 'red')
                setRedSel('selected');
            if(color == 'yellow')
                setYellowSel('selected');
            if(color == 'green')
                setGreenSel('selected');
            if(color === 'purp')
                setPurpSel('selected');
        }

    }, [color, cambio]);


    return(
        <div>
            <div id='trafficTop'></div>
            <div id='container' style={{ height: purp ? "230px" : "178px" }}>
                <div className= {`red light ${redSel}`} onClick={() => setColor('red') }></div>
                <div className= {`yellow light ${yellowSel}`} onClick={() => setColor('yellow')}></div>
                <div className= {`green light ${greenSel}`} onClick={() => setColor('green')}></div>
                <div className= {`purp light ${purpSel}`}  style={{ display: purp ? "block" : "none" }} onClick={() => setColor('purp')}></div>
            </div>
            <div className='botones'>
                <button className= {`button btn-start ${ (cambio || purp) && 'inhabilitado'} `} disabled = {cambio || purp} onClick={() => setCambio(true)}>Presionar</button>
                <button className= {`button btn-stop  ${!cambio && 'inhabilitado'} `} disabled = {!cambio} onClick={() => setCambio(false)}>Parar</button>
                <button className= {`button btn-purpura ${cambio && 'inhabilitado'} `} disabled = {cambio} onClick={() => setPurp(!purp)}>Purpura</button>
            </div>
        </div>
    );
}

export default TrafficLight;