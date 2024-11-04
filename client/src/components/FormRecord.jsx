import { useState } from "react";

const FormRecord = ({ formData, setFormData }) => {
    const technician = [
        {
            name: "A",
        },
        {
            name: "B",
        },
    ];

    const [selectedSite, setSelectedSite] = useState({});

    const sites = [
        {
            name: "A",
            room: [
                {
                    number: 1,
                    devices: {
                        projector: {
                            name: "",
                            serail: "",
                        },
                        server: {
                            name: "",
                            serial: "",
                            storage: {
                                name: "",
                                capacity: "",
                                used: "",
                            },
                        },
                    },
                },
                {
                    number: 1,
                    devices: {
                        projector: {
                            name: "",
                            serail: "",
                        },
                        server: {
                            name: "",
                            serial: "",
                            storage: {
                                name: "",
                                capacity: "",
                                used: "",
                            },
                        },
                    },
                },
            ],
        },
    ];

    return (
        <div className="relative p-6 bg-white rounded-lg shadow-lg max-w-4xl mx-auto ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col">
                    <label htmlFor="name" className="text-gray-700 font-semibold mb-1">
                        Technician
                    </label>
                    <select
                        id="typeofwork"
                        className="w-full border border-gray-300 rounded-md p-2 focus:border-blue-500 focus:outline-none"
                    >
                        {technician.map((item, index) => (
                            <option key={index} value={item.name}>
                                {item.name}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="flex flex-col">
                    <label htmlFor="typeofwork" className="text-gray-700 font-semibold mb-1">
                        Type of work
                    </label>
                    <select
                        id="typeofwork"
                        className="w-full border border-gray-300 rounded-md p-2 focus:border-blue-500 focus:outline-none"
                    >
                        <option value="">Online</option>
                        <option value="">On-site</option>
                    </select>
                </div>

                <div className="flex flex-col">
                    <label htmlFor="site" className="text-gray-700 font-semibold mb-1">
                        Site
                    </label>
                    <select
                        id="site"
                        className="w-full border border-gray-300 rounded-md p-2 focus:border-blue-500 focus:outline-none"
                        onSelect={setSelectedSite}
                    >
                        {sites.map((item, index) => (
                            <option key={index} value={item}>
                                {item.name}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="flex flex-col">
                    <label htmlFor="room" className="text-gray-700 font-semibold mb-1">
                        Room
                    </label>
                    <select
                        id="room"
                        className="w-full border border-gray-300 rounded-md p-2 focus:border-blue-500 focus:outline-none"
                    >
                        <option value="">1</option>
                        <option value="">2</option>
                    </select>
                </div>

                <div className="flex flex-col">
                    <label htmlFor="from" className="text-gray-700 font-semibold mb-1">
                        From
                    </label>
                    <input
                        type="date"
                        id="from"
                        className="w-full border border-gray-300 rounded-md p-2 focus:border-blue-500 focus:outline-none"
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="to" className="text-gray-700 font-semibold mb-1">
                        To
                    </label>
                    <input
                        type="date"
                        id="to"
                        className="w-full border border-gray-300 rounded-md p-2 focus:border-blue-500 focus:outline-none"
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="flex flex-col">
                    <label htmlFor="equipment" className="text-gray-700 font-semibold mb-1">
                        Equipment Issue
                    </label>
                    <select
                        id="equipment"
                        className="w-full border border-gray-300 rounded-md p-2 focus:border-blue-500 focus:outline-none"
                    >
                        <option value="">Projector</option>
                        <option value="">Server</option>
                    </select>
                </div>

                <div className="flex flex-col">
                    <label htmlFor="serial" className="text-gray-700 font-semibold mb-1">
                        Serial No.
                    </label>
                    <input
                        type="text"
                        id="serial"
                        className="w-full border border-gray-300 rounded-md p-2 focus:border-blue-500 focus:outline-none"
                    />
                </div>
            </div>

            <div className="mt-6">
                <label htmlFor="issue" className="text-gray-700 font-semibold mb-1">
                    Issue
                </label>
                <textarea
                    id="issue"
                    className="w-full border border-gray-300 rounded-md p-2 focus:border-blue-500 focus:outline-none resize-none"
                    rows="4"
                ></textarea>
            </div>

            <div className="mt-4">
                <label htmlFor="solution" className="text-gray-700 font-semibold mb-1">
                    Solution/Recommend
                </label>
                <textarea
                    id="solution"
                    className="w-full border border-gray-300 rounded-md p-2 focus:border-blue-500 focus:outline-none resize-none"
                    rows="4"
                ></textarea>
            </div>

            <div className="flex justify-end items-center mt-4">
                <label htmlFor="result" className="text-gray-700 font-semibold mr-3">
                    Fixed
                </label>
                <input
                    type="checkbox"
                    id="result"
                    className=" size-6 border border-gray-300 rounded focus:border-blue-500 focus:outline-none"
                />
            </div>
        </div>
    );
};

export default FormRecord;
