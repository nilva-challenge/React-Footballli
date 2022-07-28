const Information: React.FC = () => {
    return (
        <div className="text-center select-none">
            <h1 className="text-blue-400 font-bold text-2xl mb-5">
                React Footballi Challenge
            </h1>
            <div className="flex items-center flex-wrap justify-center gap-5 mb-20">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/768px-Typescript_logo_2020.svg.png?20210506173343"
                    alt="TypeScript"
                    className="w-12 h-12 object-contain"
                    title="TypeScript"
                />
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/768px-React-icon.svg.png?20220125121207"
                    alt="React"
                    className="w-12 h-12 object-contain"
                    title="React"
                />
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/900px-Tailwind_CSS_Logo.svg.png?20211001194333"
                    alt="TailwindCSS"
                    className="w-12 h-12 object-contain"
                    title="TailwindCSS"
                />
                <img
                    src="https://seeklogo.com/images/R/react-query-logo-1340EA4CE9-seeklogo.com.png"
                    alt="React Query"
                    className="w-12 h-12 object-contain"
                    title="React Query"
                />
                <img
                    src="https://user-images.githubusercontent.com/8939680/57233882-20344080-6fe5-11e9-9086-d20a955bed59.png"
                    alt="Axios"
                    className="w-12 h-12 object-contain"
                    title="Axios"
                />
                <img
                    src="/images/router.webp"
                    alt="React Router"
                    className="w-12 h-12 object-contain"
                    title="React Router"
                />
                <img
                    src="https://cdn.worldvectorlogo.com/logos/vitejs.svg"
                    alt="Vite"
                    className="w-12 h-12 object-contain"
                    title="Vite"
                />
            </div>
            <div className="flex items-baseline justify-between flex-wrap gap-20">
                <div className="flex flex-col items-center gap-8">
                    <span className="flex justify-center items-center text-lg p-7 w-6 h-6 rounded-full bg-slate-800 text-white">
                        1
                    </span>
                    <div className="flex flex-col items-center gap-2">
                        <span className="text-base font-bold">Press</span>{' '}
                        <div>
                            <kbd className="kbd">ctrl</kbd>+
                            <kbd className="kbd">shift</kbd>+
                            <kbd className="kbd">i</kbd>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-8">
                    <span className="flex justify-center items-center text-lg p-7 w-6 h-6 rounded-full bg-slate-800 text-white">
                        2
                    </span>
                    <div className="flex flex-col items-center gap-2">
                        <span className="text-base font-bold">
                            Toggle Device Toolbar
                        </span>{' '}
                        <div>
                            <img
                                className="w-72 h-72 object-contain"
                                src="/images/2.webp"
                                alt="Step 2"
                            />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-8">
                    <span className="flex justify-center items-center text-lg p-7 w-6 h-6 rounded-full bg-slate-800 text-white">
                        3
                    </span>
                    <div className="flex flex-col items-center gap-2">
                        <span className="text-base font-bold">
                            Select A Phone Dimension
                        </span>{' '}
                        <div>
                            <img
                                className="w-72 h-72 object-contain"
                                src="/images/3.webp"
                                alt="Step 3"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Information
