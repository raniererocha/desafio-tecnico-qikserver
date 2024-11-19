import { SearchIcon } from "../../../Icons/SearchIcon"

export const SearchInput = () => {
    return (
        <div className="flex p-4">
                <div className="ring-1 ring-gray-300 w-full rounded-md flex items-center focus-within:ring-2 focus-within:ring-[#4F372F]">
                    <span className="pl-2"><SearchIcon /></span>
                    <input type="text" className="focus:outline-none w-full p-2 rounded-md" placeholder="Search menu items"/>
                </div>
            </div>
    )
}