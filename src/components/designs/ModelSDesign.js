import styled from 'styled-components'
import Fade  from 'react-reveal/Fade';
import { useEffect, useState } from 'react';
import Logo from '../Logo';



const ModelSDesign = () => {
    useEffect(() => {        
        console.log('im here')
      },[]);
    const [widget, setWidget ] = useState(null)
    return (
        <Wrap>
        <Logo />
        <WidgetNav>
        <WidgetTitle>Model S</WidgetTitle>
        <DeliveryTime>Est. Devilvery: June</DeliveryTime>
        <WidgetPriceTab>
            <WidgetPrice>Purchase Price</WidgetPrice>
            <WidgetSavings>Potential Savings*</WidgetSavings>
        </WidgetPriceTab>
        </WidgetNav>
        </Wrap>
    )
}

export default ModelSDesign


const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    width: 100vw;
    height: 100vh;
`

const WidgetNav = styled.div`
    display: flex;
    align-content: center;
    flex-direction: column;
    position: fixed;
    top: 0;
    right: 0;
    width: 300px;
    padding: 20px;
`

const WidgetTitle = styled.div`
    padding-top: 15vh;
    color: #393c41;
`

const DeliveryTime = styled.div`
    padding-top: 2vh;
    color: #393c41;
`

const WidgetPriceTab = styled.div`
    display: flex;
    align-content: center;
    flex-direction: row;
    justify-content: space-between;
 
`

const WidgetPrice = styled.div`
    padding-top: 2vh;
    color: #393c41;
`

const WidgetSavings = styled.div`
    padding-top: 2vh;
    color: #393c41;
`