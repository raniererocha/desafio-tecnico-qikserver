import HttpFetch from "../../../infra/http/fetch";
import { useMenuPageModel } from "./menu.model";
import { MenuPageView } from "./menu.view";


export default function MenuPage() {
    const methods = useMenuPageModel({httpClient: new HttpFetch()})
    
    return <MenuPageView {...methods}/>
}