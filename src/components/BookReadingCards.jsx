import React, { useState } from "react";
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
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        contact: "",
        bookType: "Rent", // Default to "Rent"
        price: "",
        location: "",
    });
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
        bgGradient: "from-[#347161] to-[#3a7b6d]",
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

    // Handle form data changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const response = await fetch("/api/users/contact", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({
            formType: "listBook",
            ...formData,
            }),
        });

        if (response.ok) {
            alert("Form submitted successfully. An email has been sent to the admin.");
            setIsModalOpen(false);
            setFormData({
            name: "",
            contact: "",
            bookType: "Rent",
            price: "",
            location: "",
            });
        } else {
            alert("Failed to submit the form. Please try again.");
        }
        } catch (error) {
        console.error("Error submitting form:", error);
        alert("An error occurred. Please try again later.");
        }
    };

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
                    {card.title === "List Books and Earn" ? (
                        <button
                        onClick={() => setIsModalOpen(true)}
                        className="px-4 py-2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded text-white text-sm font-medium transition-all duration-200"
                        >
                        Learn More
                        </button>
                    ) : (
                        <button className="px-4 py-2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded text-white text-sm font-medium transition-all duration-200">
                        Learn More
                        </button>
                    )}
                    </div>
                </div>
                </div>
            </div>
            ))}
        </div>
        {/* Modal */}
        {isModalOpen && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
                <h3 className="text-xl font-bold mb-4">List Your Book</h3>
                <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                    Name
                    </label>
                    <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-lg p-2"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="contact" className="block text-gray-700 font-medium mb-2">
                    Contact Number
                    </label>
                    <input
                    type="text"
                    id="contact"
                    name="contact"
                    value={formData.contact}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-lg p-2"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="bookType" className="block text-gray-700 font-medium mb-2">
                    Book Type
                    </label>
                    <select
                    id="bookType"
                    name="bookType"
                    value={formData.bookType}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg p-2"
                    >
                    <option value="Rent">Rent</option>
                    <option value="Sell">Sell</option>
                    </select>
                </div>

                {formData.bookType === "Sell" && (
                    <div className="mb-4">
                    <label htmlFor="price" className="block text-gray-700 font-medium mb-2">
                        Price
                    </label>
                    <input
                        type="text"
                        id="price"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-lg p-2"
                    />
                    </div>
                )}

                <div className="mb-4">
                    <label htmlFor="location" className="block text-gray-700 font-medium mb-2">
                    Nearest Location
                    </label>
                    <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-lg p-2"
                    />
                </div>

                <div className="flex justify-end">
                    <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="px-4 py-2 bg-gray-200 rounded-lg mr-2"
                    >
                    Cancel
                    </button>
                    <button
                    type="submit"
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg"
                    >
                    Submit
                    </button>
                </div>
                </form>
            </div>
            </div>
        )}
        </div>
    );
};

export default BookReadingCards;
