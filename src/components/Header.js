export default () => {
    const navigation = [
        {
            href: "javascript:void(0)",
            name: "Overview"
        },
        // Add other items if necessary
    ];

    return (
        <div className="max-w-screen-xl mx-auto px-4 pt-4 md:px-8">
            <div className="max-w-lg">
                <h3 className="text-gray-800 text-2xl font-bold">
                    Showfolio
                </h3>
                
                <ul className="w-full border-b flex items-center gap-x-3 overflow-x-auto">
                    {
                        navigation.map((item, idx) => (
                            // Dynamically apply the active class based on your logic
                            <li key={idx} className={`py-2 border-b-2 ${idx === 0 ? "border-indigo-600 text-indigo-600" : "border-white text-gray-500"}`}>
                                <a
                                    href={item.href}
                                    className="py-2.5 px-4 rounded-lg duration-150 text-sm hover:text-indigo-600 hover:bg-gray-50 active:bg-gray-100 font-medium"
                                >
                                    {item.name}
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
}
