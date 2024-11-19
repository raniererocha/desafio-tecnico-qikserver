import { useCallback, useEffect, useState } from "react";
import { MenuInterface, MenuItem, VenueResponse } from "./menu.schema";
import { HttpFetchContract } from "../../../infra/http/contracts";
import { useDispatch, useSelector } from "react-redux";
import { setMenu, setVenue, VenueStateInterface } from "../../../store/venue/slice";
import { RootState } from "../../../store/rootReducer";
import {  openModal } from "../../../store/modal/slice";

interface useMenuPageModelProps {
    httpClient: HttpFetchContract
}
export function useMenuPageModel({httpClient}: useMenuPageModelProps) {
    
    const [selectedTab, setSelectedTab] = useState<string|undefined>(undefined)
    const dispatch = useDispatch()
    const {venue: storeInformations, menu: menuInformations} = useSelector<RootState, VenueStateInterface>((state) => state.venue)
    
    

    useEffect(() => {
        const venue = "/challenge/venue/9"
        const menu = "/challenge/menu"

        httpClient.exec<VenueResponse>(venue)
            .then(response => {
                dispatch(setVenue(response))
            })

        httpClient.exec<MenuInterface>(menu)
            .then(response => {
               
                dispatch(setMenu(response))
                setSelectedTab(response.sections[0].id.toString())
            })
    }, [])

    const handleSetSelectedTab = useCallback((id: string) => {
        setSelectedTab(id)
    }, [setSelectedTab])

    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(price)
    }
    const getItemPrice = (item: MenuItem) => {
        if (item.price === 0) {
            const arrayPrices: number[]= []
            item.modifiers?.forEach(modifier => {
                modifier.items.forEach(item => {
                    arrayPrices.push(item.price)
                })
            })
            return formatPrice(arrayPrices.sort((a, b) => a - b)[0])
        }
        return formatPrice(item.price)
    }

    const handleSelectItem = useCallback((id: string) => {
        const item = menuInformations?.sections.find(section => section.id.toString() === selectedTab)?.items.find(item => item.id.toString() === id)
        dispatch(openModal({data: item ?? null, isOpen: true}))
        console.log(item)
    }, [menuInformations, selectedTab])

    return {
        storeInformations,
        menuInformations,
        selectedTab,
        handleSetSelectedTab,
        handleSelectItem,
        getItemPrice
    }
}