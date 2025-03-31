import React from "react";
import {
    BookOpen,
    DollarSign,
    Users,
    Crown,
    UserPlus,
    List,
    UserCog,
} from "lucide-react";

const BookReadingCards = () => {
    const cardData = [
        {
        title: "Earn by Reading",
        description:
            "Get rewarded financially for your reading habits and progress.",
        icon: <DollarSign className="h-6 w-6" />,
        bgGradient: "from-blue-900 to-blue-700",
        },
        {
        title: "Memberships",
        description:
            "Various subscription tiers with exclusive benefits and rewards.",
        icon: <Crown className="h-6 w-6" />,
        bgGradient: "from-purple-900 to-purple-700",
        },
        {
        title: "Century Book Readers Club",
        description: "Elite group for dedicated readers with premium perks.",
        icon: <BookOpen className="h-6 w-6" />,
        bgGradient: "from-amber-900 to-amber-700",
        },
        {
        title: "Add Readers to Earn Money",
        description:
            "Referral program to bring new readers and increase your rewards.",
        icon: <UserPlus className="h-6 w-6" />,
bgGradient: "",
        },
        {
        title: "List Books and Earn",
        description:
            "Yearly, half-yearly, and monthly earnings based on reading lists.",
        icon: <List className="h-6 w-6" />,
        bgGradient: "from-[#a2405d] to-[#c54061]",
        },
        {
        title: "Book Readers Program and Sessions",
        description:
            "Organized reading events and community discussion sessions.",
        icon: <Users className="h-6 w-6" />,
        bgGradient: "from-cyan-900 to-cyan-700",
        },
        {
        title: "Staff Hiring",
        description:
            "Join our team to help manage and grow the reading community.",
        icon: <UserCog className="h-6 w-6" />,
        bgGradient: "from-indigo-900 to-indigo-700",
        },
    ];

    return (
        <div className="w-full p-8 bg-gray-50">
        <h2 className="text-3xl font-serif font-bold mb-8 text-center text-gray-800">
            Book Reads Platform
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cardData.map((card, index) => (
            <div key={index} className="group">
                <div className="relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 h-full transform group-hover:-translate-y-1 group-hover:shadow-xl">
                <div
                    className={`absolute inset-0 bg-gradient-to-br ${card.bgGradient} opacity-90`}
                ></div>

                {/* Glass effect overlay */}
                <div className="absolute inset-0 bg-white opacity-10"></div>

                <div className="relative p-6 h-full flex flex-col items-center text-center">
                    <div className="flex flex-col items-center mb-4">
                    <div className="p-3 bg-white bg-opacity-20 rounded-full mb-3">
                        {React.cloneElement(card.icon, {
                        className: `${card.icon.props.className} text-white`,
                        })}
                    </div>
                    <h3 className="text-xl font-serif font-medium text-white">
                        {card.title}
                    </h3>
                    </div>

                    <p className="text-white text-opacity-90 font-light mb-4">
                    {card.description}
                    </p>

                    <div className="mt-auto">
                    <button className="px-4 py-2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded text-white text-sm font-medium transition-all duration-200">
                        Learn More
                    </button>
                    </div>
                </div>
                </div>
            </div>
            ))}
        </div>
        </div>
    );
};

export default BookReadingCards;
