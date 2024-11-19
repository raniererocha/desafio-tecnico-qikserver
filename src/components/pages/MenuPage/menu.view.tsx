
import { SearchInput } from "../../ui/Menu/SearchInput"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "../../ui/avatar"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../../ui/accordion"
import { useMenuPageModel } from "./menu.model"
import { Menu } from "../../ui/Menu"
import { Modal } from "../../ui/Modal"


type MenuPageViewProps = ReturnType<typeof useMenuPageModel>
export function MenuPageView({
    handleSetSelectedTab, 
    menuInformations, 
    selectedTab, 
    storeInformations, 
    handleSelectItem,
    getItemPrice
}: MenuPageViewProps) {
    return (
        <div className="flex flex-col">
            <div>
            <Menu brandColor={storeInformations?.webSettings.navBackgroundColour}/>
            <img className="h-[150px] object-cover" src={storeInformations?.webSettings.bannerImage} />
            <SearchInput />
            </div>
            {storeInformations && menuInformations &&<div className="px-2">
            <Tabs defaultValue={menuInformations.sections[0].id.toString()} className="w-full">
                <TabsList className="space-x-4 h-fit bg-transparent">
                    {menuInformations.sections.map(section => (
                        <div className="flex flex-col text-center" key={section.id}>
                        <TabsTrigger style={{outlineColor: storeInformations.webSettings.primaryColour || "red"}} onClick={() => handleSetSelectedTab(section.id.toString())} value={section.id.toString()} className="w-fit p-0 rounded-full data-[state=active]:outline data-[state=active]:outline-2 data-[state=active]:outline-offset-2">
                            <Avatar className="size-20 ">
                                <AvatarImage className="object-cover" src={section.images[0].image} />
                                <AvatarFallback >{section.name}</AvatarFallback>
                            </Avatar>
                        </TabsTrigger>
                        <span data-state={selectedTab && selectedTab === section.id.toString() ? "active" : "inactive"} className="text-black data-[state=active]:border-b-2 border-black flex items-center justify-center w-full min-h-[62px] data-[state=active]:font-semibold" >{section.name}</span>
                    </div>
                    ))}
                </TabsList>
                {menuInformations.sections.map(section => (
                    <TabsContent key={section.id} className="" value={section.id.toString()} >
                        <Accordion type="single" collapsible defaultValue="item-01">
                          <AccordionItem value="item-01">
                            <AccordionTrigger>{section.name}</AccordionTrigger>
                            <AccordionContent className="flex flex-col space-y-2">
                                {
                                    section.items.map(item => (
                                            <article key={item.id} className="flex gap-4 w-full cursor-pointer hover:bg-zinc-200" onClick={() => handleSelectItem(item.id.toString())}>
                                                <div className="flex flex-col gap-1 w-full">
                                                    <h3 className="font-medium">{item.name}</h3>
                                                    {item.description && <p title={item.description || ""} className="font-light max-h-10 text-wrap">{item.description?.slice(0, 50).length > 0 ? item.description?.slice(0, 50) + "..." : ""  }</p>}
                                                    <p className="font-medium text-[#464646]">{getItemPrice(item)}</p>
                                                </div>
                                                <img className="h-20 object-cover rounded-md" src={item.images?.[0].image} />
                                            </article>
                                        )
                                    )
                                }
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                    </TabsContent>
                ))}
            </Tabs>
            </div>}
                <Modal/>
                <div className="flex justify-center w-full ">
                    <a href="#" className="underline font-bold text-[16px]" style={{color: storeInformations?.webSettings.primaryColour || "red"}}>View Allergy information</a>
                </div>
        </div>
    )
}