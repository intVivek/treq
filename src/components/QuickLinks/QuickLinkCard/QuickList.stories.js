import React from 'react';
import QuickCard from './QuickLinkCard';
import { ReactComponent as CreditCardIcon } from "../../assets/icons/CreditCardIcon.svg";

export default {
    title: "components/QuickCard",
    component: QuickCard
}

export const Default = () =>{
    return (
        <QuickCard name={'Treq'} icon={<CreditCardIcon/>} color={'blue'}/>
    )
}