import { useState } from "react";
import jsPDF from "jspdf";

import imageUrl from "../assets/Logo.png";

import FormRecord from "./FormRecord";

const ToolBar = () => {
    const [showModalRecord, setShowModalRecord] = useState(false);
    const [showModalXenon, setShowModalXenon] = useState(false);
    const [showModalWeekly, setShowModalWeekly] = useState(false);

    const [formData, setFormData] = useState({});

    const generatePDF = (formData) => {
        const {
            serviceDate,
            startTime,
            endTime,
            typeOfWork,
            site,
            screenNo,
            personInCharge,
            equipmentIssue,
            serialNo,
            issueDetails,
            solution,
            result,
        } = formData;

        const doc = new jsPDF("landscape");

        doc.line(10, 10, 290, 10);
        doc.line(10, 10, 10, 200);
        doc.line(290, 10, 290, 200);
        doc.line(10, 200, 290, 200);

        const part1 = 52;
        const part2 = 80;
        const part3 = 110;
        const part4 = 128;
        const part5 = 150;
        const part6 = 185;
        const headerspacing = 8;
        const lineheight = 6;

        // Title Section

        doc.setFont("helvetica", "bold");
        if (imageUrl) {
            doc.addImage(imageUrl, "JPEG", 20, 15, 60, 10); // Thêm hình ảnh tại vị trí (20, 50) với kích thước 180x100
        }
        // doc.text("LOTTE CINEMA", 20, 20);
        doc.setFontSize(12);
        doc.text("INNOVATION DEPARTMENT", 280, 20, { align: "right" });
        doc.setFont("helvetica", "normal");
        doc.text("Maintenance Team", 280, 26, { align: "right" });

        // Separator Line
        doc.setLineWidth(0.5);
        doc.line(10, 34, 290, 34);
        doc.setFontSize(20);
        doc.setTextColor(91, 155, 213);
        doc.setFont("helvetica", "bold");
        doc.text("Emergency Call Support Record", 135, 42, { align: "center" });
        doc.setTextColor(0, 0, 0);
        doc.line(10, 45, 290, 45);

        // Service Information
        doc.setFontSize(12);
        doc.setFont("helvetica", "normal");
        const serviceInfo = [
            { label: "Service Date:", value: serviceDate },
            { label: "Start time:", value: startTime },
            { label: "End time:", value: endTime },
            { label: "Type of Work:", value: typeOfWork },
        ];
        serviceInfo.forEach((item, index) => {
            doc.text(item.label, 20, part1 + index * 6);
            doc.text(item.value, 60, part1 + index * 6);
        });

        // Site Information
        doc.setFont("helvetica", "bold");
        doc.text("Site Information", 20, part2);
        doc.line(10, part2 - 5, 290, part2 - 5);
        doc.line(10, part2 + 2, 290, part2 + 2);
        doc.setFont("helvetica", "normal");
        doc.text("Site:", 20, part2 + headerspacing);
        doc.text(site, 60, part2 + headerspacing);
        doc.text("Screen No:", 280, part2 + headerspacing, { align: "right" });
        doc.setFontSize(32);
        doc.setFont("helvetica", "bold");
        doc.setTextColor(91, 155, 213);
        doc.text(screenNo, 280, part2 + headerspacing + 12, { align: "right" });
        doc.setTextColor(0, 0, 0);

        // Person in Charge
        doc.setFontSize(12);
        doc.setFont("helvetica", "normal");
        doc.text("Person in Charge:", 20, part2 + headerspacing + lineheight);
        doc.text(personInCharge, 60, part2 + headerspacing + lineheight);

        // Equipment Issue
        doc.setFont("helvetica", "bold");
        doc.text("Equipment Issue", 20, part3);
        doc.line(10, part3 - 5, 290, part3 - 5);
        doc.line(10, part3 + 2, 290, part3 + 2);
        doc.setFont("helvetica", "normal");
        doc.text("Server:", 20, part3 + headerspacing);
        doc.text(equipmentIssue, 60, part3 + headerspacing);

        doc.text("Serial No.:", 120, part3 + headerspacing);
        doc.setTextColor(91, 155, 213);
        doc.text(serialNo, 150, part3 + headerspacing);
        doc.setTextColor(0, 0, 0);

        // Result
        doc.setFont("helvetica", "bold");
        doc.text("Result", 20, part4);
        doc.line(10, part4 - 5, 290, part4 - 5);
        doc.line(10, part4 + 2, 290, part4 + 2);
        doc.setFont("helvetica", "normal");
        doc.text(result ? "Issue fixed" : "Not fixed", 20, part4 + headerspacing);

        // Problem and Solution
        doc.setFont("helvetica", "bold");
        doc.text("Problem", 20, part5);
        doc.line(10, part5 - 5, 290, part5 - 5);
        doc.line(10, part5 + 2, 290, part5 + 2);
        doc.setFont("helvetica", "normal");
        doc.setTextColor(91, 155, 213);
        doc.text(issueDetails, 20, part5 + 8, { maxWidth: 120 });
        doc.setTextColor(0, 0, 0);

        doc.setFont("helvetica", "bold");
        doc.setFillColor(128);
        doc.text("Solution/Recommend", 135, part5);
        doc.setFont("helvetica", "normal");
        doc.setTextColor(91, 155, 213);

        doc.text(solution, 135, part5 + 8, { maxWidth: 120 });
        doc.setTextColor(0, 0, 0);

        doc.line(128, part5 - 5, 128, part6 - 5);
        // Problem and Solution
        doc.setFont("helvetica", "bold");
        doc.text("Remarks", 20, part6);
        doc.line(10, part6 - 5, 290, part6 - 5);
        doc.line(10, part6 + 2, 290, part6 + 2);
        doc.setFont("helvetica", "normal");
        doc.setTextColor(91, 155, 213);
        doc.text(issueDetails, 20, part6 + 8, { maxWidth: 120 });
        doc.setTextColor(0, 0, 0);

        // Save PDF
        doc.save("Service_Report.pdf");
    };

    // const formData = {
    //     serviceDate: "14/06/2024",
    //     startTime: "17:00",
    //     endTime: "18:30",
    //     typeOfWork: "Online",
    //     site: "Bien Hoa",
    //     screenNo: "5",
    //     personInCharge: "John Doe",
    //     equipmentIssue: "SX3000",
    //     serialNo: "320619",
    //     supplier: "Golden Duck",
    //     issueDetails: "Server cannot work: SSD boot is broken.",
    //     solution: "Removed SSD, use temp USB to boot. \nRecommend replace SSD.",
    //     result: true,
    // };

    // generatePDF(formData);

    return (
        <>
            <div className="mt-2">
                <button
                    className="m-2 ml-0 border border-cyan-950 py-2 px-6 rounded-md hover:bg-blue-400"
                    onClick={() => setShowModalRecord(true)}
                >
                    Create Records
                </button>
                <button
                    className="m-2 border border-cyan-950 py-2 px-6 rounded-md hover:bg-blue-400"
                    onClick={() => setShowModalXenon(true)}
                >
                    Create Monthly Xenon Report
                </button>
                <button
                    className="m-2 border border-cyan-950 py-2 px-6 rounded-md hover:bg-blue-400"
                    onClick={() => setShowModalWeekly(true)}
                >
                    Create weekly reports
                </button>
            </div>
            {showModalRecord && (
                <>
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none transition">
                        <div className="relative sm:top-1/4  md:top-10 lg:top-10 w-auto my-6 mx-auto max-w-6xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                                    <h3 className="text-3xl font-semibold"> Create Records</h3>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModalRecord(false)}
                                    >
                                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                            ×
                                        </span>
                                    </button>
                                </div>
                                {/*body*/}
                                <FormRecord />
                                {/*footer*/}
                                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                    <button
                                        className="text-red-400 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModalRecord(false)}
                                    >
                                        Close
                                    </button>
                                    <button
                                        className="bg-cyan-500 text-white hover:bg-cyan-700 font-bold uppercase text-sm px-6 py-3 rounded-xl shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => {
                                            setShowModalRecord(false);
                                            generatePDF(formData);
                                        }}
                                    >
                                        Create
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            )}
            {showModalXenon && (
                <>
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none transition">
                        <div className="relative sm:top-1/4  md:top-10 lg:top-10 w-auto my-6 mx-auto max-w-6xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                                    <h3 className="text-3xl font-semibold"> Create Xenon Lamp Report</h3>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModalXenon(false)}
                                    >
                                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                            ×
                                        </span>
                                    </button>
                                </div>
                                {/*body*/}
                                <FormRecord />
                                {/*footer*/}
                                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                    <button
                                        className="text-red-400 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModalXenon(false)}
                                    >
                                        Close
                                    </button>
                                    <button
                                        className="bg-cyan-500 text-white hover:bg-cyan-700 font-bold uppercase text-sm px-6 py-3 rounded-xl shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => {
                                            setShowModalXenon(false);
                                            generatePDF(formData);
                                        }}
                                    >
                                        Create
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            )}
            {showModalWeekly && (
                <>
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none transition">
                        <div className="relative sm:top-1/4  md:top-10 lg:top-10 w-auto my-6 mx-auto max-w-6xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                                    <h3 className="text-3xl font-semibold"> Create Weekly report</h3>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModalWeekly(false)}
                                    >
                                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                            ×
                                        </span>
                                    </button>
                                </div>
                                {/*body*/}
                                <FormRecord />
                                {/*footer*/}
                                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                    <button
                                        className="text-red-400 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModalWeekly(false)}
                                    >
                                        Close
                                    </button>
                                    <button
                                        className="bg-cyan-500 text-white hover:bg-cyan-700 font-bold uppercase text-sm px-6 py-3 rounded-xl shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => {
                                            setShowModalWeekly(false);
                                            generatePDF(formData);
                                        }}
                                    >
                                        Create
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            )}
        </>
    );
};

export default ToolBar;
