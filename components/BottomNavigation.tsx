import Image from 'next/image';

const BottomNavigation = () => {
  return (
    <div className="fixed bottom-0 inset-x-0 flex items-center justify-between p-4 shadow-lg shadow-black bg-white">
      <div className="flex flex-col items-center gap-y-2">
        <Image
          src="/assets/icons/user.svg"
          alt="Profile"
          width={24}
          height={24}
        />
        <div className="text-sm font-medium">پروفایل</div>
      </div>
      <div className="flex flex-col items-center gap-y-2">
        <Image
          src="/assets/icons/trophy.svg"
          alt="Leagues"
          width={24}
          height={24}
        />
        <div className="text-sm font-medium">لیگ‌ها</div>
      </div>
      <div className="flex flex-col items-center gap-y-2">
        <Image
          src="/assets/icons/whistle.svg"
          alt="Observer"
          width={24}
          height={24}
        />
        <div className="text-sm font-medium">فوتبان</div>
      </div>
      <div className="flex flex-col items-center gap-y-2">
        <Image
          src="/assets/icons/navigation.svg"
          alt="Exploration"
          width={24}
          height={24}
        />
        <div className="text-sm font-medium">اکتشاف</div>
      </div>
      <div className="flex flex-col items-center gap-y-2">
        <Image
          src="/assets/icons/football.svg"
          alt="Matches"
          width={24}
          height={24}
        />
        <div className="text-sm font-medium">مسابقات</div>
      </div>
    </div>
  );
};

export default BottomNavigation;
