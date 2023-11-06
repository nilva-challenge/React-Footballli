import HomeLayout from "@/ui/views/layouts/HomeLayout";

const HomeView: React.FC<{ tab: string }> = ({tab}) => {

    return (
        <HomeLayout>
            <div className="flex flex-col min-h-screen bg-red-500">
                {tab}
            </div>
        </HomeLayout>
    );
};

export default HomeView;