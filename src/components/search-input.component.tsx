import { useState } from 'react'
import { BiSearchAlt2 } from 'react-icons/bi'

const SearchInput: React.FC = () => {
    const [search, setSearch] = useState<string>('')
    return (
        <div className="p-4 py-0 w-full relative">
            {!search && (
                <BiSearchAlt2
                    size="1.5rem"
                    className="opacity-30 absolute top-3 left-7"
                />
            )}
            <input
                onChange={e => setSearch(e.target.value)}
                type="text"
                placeholder={`\t\tSearch`}
                className="input input-bordered w-full max-w-xs"
            />
        </div>
    )
}

export default SearchInput
