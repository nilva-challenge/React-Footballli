import {Tab} from "@headlessui/react";
import {League} from "@/types/LeagueType";
import {formatDateDistance, getLeaguesWithFixturesOnSameDay} from "@/constant/utils";
import LeagueItem from "@/ui/components/LeagueItem";

const mockApiData: League[] = [{
    "fixtures": [
        {
            "home": {
                "logo": "https://sport-cdn.zarebin.ir/sport-files-prod/media/team/logo/226.png",
                "id": 226,
                "api_id": 33,
                "name": "منچستریونایتد",
                "is_favorite": null
            },
            "away": {
                "logo": "https://sport-cdn.zarebin.ir/sport-files-prod/media/team/logo/Group_3200.png",
                "id": 228,
                "api_id": 35,
                "name": "بورنموث",
                "is_favorite": null
            },
            "id": "f64a967d-7402-42d3-8c22-0a8a225a0084",
            "api_id": "868134",
            "status": "FT",
            "elapsed": 90,
            "start_time": "2023-01-03T23:30:00",
            "home_goals": 3,
            "away_goals": 0,
            "home_penalty_goals": null,
            "away_penalty_goals": null,
            "live_url": "",
            "archive_url": ""
        },
        {
            "home": {
                "logo": "https://sport-cdn.zarebin.ir/sport-files-prod/media/team/logo/233.png",
                "id": 233,
                "api_id": 42,
                "name": "آرسنال",
                "is_favorite": null
            },
            "away": {
                "logo": "https://sport-cdn.zarebin.ir/sport-files-prod/media/team/logo/Group_3206.png",
                "id": 227,
                "api_id": 34,
                "name": "نیوکاسل",
                "is_favorite": null
            },
            "id": "30e794f1-34a9-4ca6-9728-d015230a21b6",
            "api_id": "868126",
            "status": "FT",
            "elapsed": 90,
            "start_time": "2023-01-05T23:15:00",
            "home_goals": 0,
            "away_goals": 0,
            "home_penalty_goals": null,
            "away_penalty_goals": null,
            "live_url": "",
            "archive_url": ""
        },
        {
            "home": {
                "logo": "https://sport-cdn.zarebin.ir/sport-files-prod/media/team/logo/45.png",
                "id": 234,
                "api_id": 45,
                "name": "اورتون",
                "is_favorite": null
            },
            "away": {
                "logo": "https://sport-cdn.zarebin.ir/sport-files-prod/media/team/logo/Group_3198.png",
                "id": 240,
                "api_id": 51,
                "name": "برایتون",
                "is_favorite": null
            },
            "id": "a56b617b-3de5-49bd-814c-7f479caf9373",
            "api_id": "868131",
            "status": "FT",
            "elapsed": 90,
            "start_time": "2023-01-03T23:15:00",
            "home_goals": 1,
            "away_goals": 4,
            "home_penalty_goals": null,
            "away_penalty_goals": null,
            "live_url": "",
            "archive_url": ""
        },
        {
            "home": {
                "logo": "https://sport-cdn.zarebin.ir/sport-files-prod/media/team/logo/Group_3211.png",
                "id": 235,
                "api_id": 46,
                "name": "لسترسیتی",
                "is_favorite": null
            },
            "away": {
                "logo": "https://sport-cdn.zarebin.ir/sport-files-prod/media/team/logo/Group_3194.png",
                "id": 229,
                "api_id": 36,
                "name": "فولام",
                "is_favorite": null
            },
            "id": "3f85a69a-e384-40f7-ab52-a0a82a7d6f96",
            "api_id": "868133",
            "status": "FT",
            "elapsed": 90,
            "start_time": "2023-01-03T23:15:00",
            "home_goals": 0,
            "away_goals": 1,
            "home_penalty_goals": null,
            "away_penalty_goals": null,
            "live_url": "",
            "archive_url": ""
        }],
    "logo": "https://sport-cdn.zarebin.ir/sport-files-prod/media/league/logo/Group_3363.png",
    "id": "6",
    "api_id": "39",
    "name": "لیگ برتر انگلیس",
    "season": "2022"
}, {
    "fixtures": [{
        "home": {
            "logo": "https://sport-cdn.zarebin.ir/sport-files-prod/media/team/logo/9384.png",
            "id": 7018,
            "api_id": 9384,
            "name": "کاسرنو",
            "is_favorite": null
        },
        "away": {
            "logo": "https://sport-cdn.zarebin.ir/sport-files-prod/media/team/logo/47.png",
            "id": 47,
            "api_id": 541,
            "name": "رئال مادرید",
            "is_favorite": null
        },
        "id": "5ad9bd2f-7b19-4fa9-aff2-d0157f353e44",
        "api_id": "982776",
        "status": "FT",
        "elapsed": 90,
        "start_time": "2023-01-03T23:30:00",
        "home_goals": 0,
        "away_goals": 1,
        "home_penalty_goals": null,
        "away_penalty_goals": null,
        "live_url": "",
        "archive_url": ""
    }, {
        "home": {
            "logo": "https://sport-cdn.zarebin.ir/sport-files-prod/media/team/logo/Group_3262.png",
            "id": 46,
            "api_id": 540,
            "name": "اسپانیول",
            "is_favorite": null
        },
        "away": {
            "logo": "https://sport-cdn.zarebin.ir/sport-files-prod/media/team/logo/Group_3264.png",
            "id": 45,
            "api_id": 538,
            "name": "سلتاویگو",
            "is_favorite": null
        },
        "id": "d1ea103b-9316-421e-bbdd-6c9cc9431aaf",
        "api_id": "982775",
        "status": "AET",
        "elapsed": 120,
        "start_time": "2023-01-03T21:30:00",
        "home_goals": 2,
        "away_goals": 1,
        "home_penalty_goals": null,
        "away_penalty_goals": null,
        "live_url": "",
        "archive_url": ""
    }, {
        "home": {
            "logo": "https://sport-cdn.zarebin.ir/sport-files-prod/media/team/logo/5262.png",
            "id": 1297,
            "api_id": 5262,
            "name": "کارتگنا",
            "is_favorite": null
        },
        "away": {
            "logo": "https://sport-cdn.zarebin.ir/sport-files-prod/media/team/logo/533.png",
            "id": 43,
            "api_id": 533,
            "name": "ویارئال",
            "is_favorite": null
        },
        "id": "3ce7fc82-ee40-4df4-ac5a-c001439d8972",
        "api_id": "982774",
        "status": "FT",
        "elapsed": 90,
        "start_time": "2023-01-03T21:30:00",
        "home_goals": 1,
        "away_goals": 5,
        "home_penalty_goals": null,
        "away_penalty_goals": null,
        "live_url": "",
        "archive_url": ""
    }, {
        "home": {
            "logo": "https://sport-cdn.zarebin.ir/sport-files-prod/media/team/logo/9393.png",
            "id": 5262,
            "api_id": 9393,
            "name": "لانوسیا",
            "is_favorite": null
        },
        "away": {
            "logo": "https://sport-cdn.zarebin.ir/sport-files-prod/media/team/logo/Group_3257.png",
            "id": 42,
            "api_id": 532,
            "name": "والنسیا",
            "is_favorite": null
        },
        "id": "281fbf71-5575-4409-9f46-75ceb9cf200c",
        "api_id": "982773",
        "status": "FT",
        "elapsed": 90,
        "start_time": "2023-01-03T21:30:00",
        "home_goals": 0,
        "away_goals": 3,
        "home_penalty_goals": null,
        "away_penalty_goals": null,
        "live_url": "",
        "archive_url": ""
    }, {
        "home": {
            "logo": "https://sport-cdn.zarebin.ir/sport-files-prod/media/team/logo/539.png",
            "id": 4232,
            "api_id": 539,
            "name": "لوانته",
            "is_favorite": null
        },
        "away": {
            "logo": "https://sport-cdn.zarebin.ir/sport-files-prod/media/team/logo/Group_3261.png",
            "id": 49,
            "api_id": 546,
            "name": "ختافه",
            "is_favorite": null
        },
        "id": "8986266e-5d06-4dbb-9487-f72fc5c8e445",
        "api_id": "982778",
        "status": "FT",
        "elapsed": 90,
        "start_time": "2023-01-03T23:30:00",
        "home_goals": 3,
        "away_goals": 2,
        "home_penalty_goals": null,
        "away_penalty_goals": null,
        "live_url": "",
        "archive_url": ""
    }, {
        "home": {
            "logo": "https://sport-cdn.zarebin.ir/sport-files-prod/media/team/logo/731.png",
            "id": 2421,
            "api_id": 731,
            "name": "خیخون",
            "is_favorite": null
        },
        "away": {
            "logo": "https://sport-cdn.zarebin.ir/sport-files-prod/media/team/logo/Group_3253.png",
            "id": 56,
            "api_id": 728,
            "name": "رایو وایکانو",
            "is_favorite": null
        },
        "id": "ef73bebd-47fc-4fa4-ae69-15414ccc4cc5",
        "api_id": "982779",
        "status": "FT",
        "elapsed": 90,
        "start_time": "2023-01-03T23:30:00",
        "home_goals": 2,
        "away_goals": 0,
        "home_penalty_goals": null,
        "away_penalty_goals": null,
        "live_url": "",
        "archive_url": ""
    }, {
        "home": {
            "logo": "https://sport-cdn.zarebin.ir/sport-files-prod/media/team/logo/10139.png",
            "id": 4110,
            "api_id": 10139,
            "name": "کوئتا",
            "is_favorite": null
        },
        "away": {
            "logo": "https://sport-cdn.zarebin.ir/sport-files-prod/media/team/logo/Group_3263.png",
            "id": 57,
            "api_id": 797,
            "name": "الچه",
            "is_favorite": null
        },
        "id": "164b571a-6070-4752-86c9-ab3f49081b46",
        "api_id": "982777",
        "status": "FT",
        "elapsed": 90,
        "start_time": "2023-01-03T23:30:00",
        "home_goals": 1,
        "away_goals": 0,
        "home_penalty_goals": null,
        "away_penalty_goals": null,
        "live_url": "",
        "archive_url": ""
    }],
    "logo": "https://sport-cdn.zarebin.ir/sport-files-prod/media/league/logo/CopadelRey.png",
    "id": "385",
    "api_id": "143",
    "name": "جام حذفی اسپانیا",
    "season": "2022"
}]

const MatchesView: React.FC = () => {

    const data: Map<string, League[]> = getLeaguesWithFixturesOnSameDay(mockApiData)

    return (
        <>
            <Tab.Group>
                <div className="grid grid-cols-5">
                    {Array.from(data.keys()).map((item, index) => (
                        <Tab key={index}>
                            {({selected}) => (
                                <button
                                    className={`${
                                        selected
                                            ? 'bg-blue-500 text-white'
                                            : 'bg-gray-200 text-gray-800'
                                    } p-2 rounded-md mt-4`}>
                                    {formatDateDistance(item)}
                                </button>
                            )}
                        </Tab>
                    ))}
                </div>
                <Tab.Panels>
                    {Array.from(data.values()).map((leagues, index) => (
                        <Tab.Panel key={index}>
                            <div className="p-4 bg-white border mt-4 rounded-md">
                                {
                                    leagues.map((league, index) => {
                                        return (
                                            <LeagueItem key={`league-${index}`} leagueName={league.name}
                                                        fixtureList={league.fixtures}/>
                                        )
                                    })
                                }
                            </div>
                        </Tab.Panel>
                    ))}
                </Tab.Panels>
            </Tab.Group>
        </>
    );
};

export default MatchesView;